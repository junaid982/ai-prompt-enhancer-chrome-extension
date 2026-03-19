// detector.js

// -------------------------------
// Get the active editor element
// -------------------------------

function getEditor() {

  // ChatGPT ProseMirror editor
  let el = document.querySelector("div.ProseMirror")
  if (el) return el

  const selectors = [
    'textarea',
    'div[contenteditable="true"]'
  ]

  for (const s of selectors) {

    const elements = document.querySelectorAll(s)

    for (const e of elements) {

      // skip our own panel textarea
      if (e.id !== "enhancedOutput")
        return e

    }

  }

  return null

}


// -------------------------------
// Read current prompt text
// -------------------------------

function readPrompt() {

  const editor = getEditor()

  if (!editor) return ""

  if (editor.tagName === "TEXTAREA")
    return editor.value

  return editor.innerText || ""

}


// -------------------------------
// Replace editor content with text
//
// BUG FIX: plain Event("input") is ignored by React / Vue / Svelte
// controlled components. ChatGPT, Claude and Gemini all use framework-
// controlled editors — they read from their own virtual state, not the
// raw DOM. Updating innerHTML and firing a plain Event updates the DOM
// but the framework re-renders from stale state on the next keystroke,
// silently overwriting what we wrote.
//
// Fix strategy:
//   TEXTAREA  → use the React internal native value setter, then fire
//               a real InputEvent so React picks up the change.
//   CONTENTEDITABLE → use document.execCommand("insertText") which
//               generates a genuine browser input event that every
//               framework (including ProseMirror) treats as real user
//               input. Falls back to manual innerHTML + InputEvent.
// -------------------------------

function replacePrompt(text) {

  const editor = getEditor()

  if (!editor) return

  editor.focus()


  // ── TEXTAREA editors ─────────────────────────────────────

  if (editor.tagName === "TEXTAREA") {

    // Use React's internal native value setter so React registers
    // the change in its own synthetic event system
    try {

      const nativeSetter = Object.getOwnPropertyDescriptor(
        window.HTMLTextAreaElement.prototype,
        "value"
      ).set

      nativeSetter.call(editor, text)

    } catch (e) {

      // fallback for non-React textareas
      editor.value = text

    }

    editor.dispatchEvent(new InputEvent("input", { bubbles: true }))

    // move cursor to end
    editor.selectionStart = editor.value.length
    editor.selectionEnd   = editor.value.length

    return

  }


  // ── CONTENTEDITABLE editors (ChatGPT, Claude, Gemini) ────
  //
  // execCommand("selectAll") + execCommand("insertText") generates
  // real browser input events that ProseMirror and React pick up as
  // genuine user input — no framework state mismatch.

  try {

    // Select everything currently in the editor
    document.execCommand("selectAll", false, null)

    // Replace selection with our enhanced text.
    // This fires a real InputEvent that the framework handles.
    const inserted = document.execCommand("insertText", false, text)

    if (inserted) {

      // execCommand succeeded — cursor is now at end of inserted text.
      // Trigger one more input event for frameworks that need it.
      editor.dispatchEvent(new InputEvent("input", { bubbles: true }))

      return

    }

  } catch (e) {

    // execCommand not available on this platform — fall through

  }


  // ── Fallback: manual innerHTML rebuild ───────────────────
  // Used when execCommand is unavailable (some sandboxed iframes).

  editor.innerHTML = ""

  const lines = text.split("\n")

  lines.forEach(line => {

    const p = document.createElement("p")

    if (line.trim() === "") {
      p.appendChild(document.createElement("br"))
    } else {
      p.textContent = line
    }

    editor.appendChild(p)

  })

  editor.dispatchEvent(
    new InputEvent("input", {
      bubbles:   true,
      inputType: "insertText",
      data:      text
    })
  )

  // Restore cursor to end of user content section
  placeCursorInContentSection(editor)

}


// -------------------------------
// Place cursor at end of the user's
// content section inside the template.
// Used by the innerHTML fallback path.
// -------------------------------

function placeCursorInContentSection(editor) {

  const startMarkers = ["Task:", "Question:", "Problem:", "Topic:"]
  const endMarkers   = ["Provide:", "Include:", "Requirements:", "Return"]

  const paragraphs = Array.from(editor.querySelectorAll("p"))

  let inContent    = false
  let lastContentP = null

  for (const p of paragraphs) {

    const text = p.textContent.trim()

    if (startMarkers.some(m => text.startsWith(m))) {
      inContent = true
      continue
    }

    if (endMarkers.some(m => text.startsWith(m))) {
      inContent = false
      continue
    }

    if (inContent && text !== "") {
      lastContentP = p
    }

  }

  const target = lastContentP
    || paragraphs.filter(p => p.textContent.trim() !== "").pop()

  if (!target) return

  try {

    const range = document.createRange()
    const sel   = window.getSelection()

    range.selectNodeContents(target)
    range.collapse(false)   // collapse to END

    sel.removeAllRanges()
    sel.addRange(range)

  } catch (e) {
    // Selection API unavailable — ignore silently
  }

}
