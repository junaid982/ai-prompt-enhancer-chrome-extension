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
// BUG FIX: after rebuilding the DOM, restore cursor to the end
// of the user's content section so typing continues naturally.
// -------------------------------

function replacePrompt(text) {

  const editor = getEditor()

  if (!editor) return

  editor.focus()


  // ── TEXTAREA editors ─────────────────────────────────────────

  if (editor.tagName === "TEXTAREA") {

    editor.value = text

    editor.dispatchEvent(
      new Event("input", { bubbles: true })
    )

    // place cursor at end
    editor.selectionStart = editor.value.length
    editor.selectionEnd   = editor.value.length

    return

  }


  // ── CONTENTEDITABLE editors (ChatGPT, Gemini, Claude) ────────

  editor.innerHTML = ""

  const lines = text.split("\n")

  lines.forEach(line => {

    const p = document.createElement("p")

    if (line.trim() === "") {

      const br = document.createElement("br")
      p.appendChild(br)

    } else {

      p.textContent = line

    }

    editor.appendChild(p)

  })


  // trigger framework reactivity
  editor.dispatchEvent(
    new Event("input", { bubbles: true })
  )


  // ── CURSOR FIX ───────────────────────────────────────────────
  // Place cursor at the end of the user's content section
  // (the text between Task:/Question: and Provide:/Include:)
  // so the user can keep typing without the cursor jumping away.

  placeCursorInContentSection(editor)

}


// -------------------------------
// Place cursor at end of the user's
// content section inside the template.
//
// Walks <p> elements looking for the block
// between a start marker and an end marker.
// Falls back to the last non-empty paragraph.
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

  // fall back to last paragraph
  const target = lastContentP
    || paragraphs.filter(p => p.textContent.trim() !== "").pop()

  if (!target) return

  try {

    const range = document.createRange()
    const sel   = window.getSelection()

    range.selectNodeContents(target)
    range.collapse(false)       // collapse to END of node

    sel.removeAllRanges()
    sel.addRange(range)

  } catch (e) {
    // silently ignore — selection API can fail on some sites
  }

}
