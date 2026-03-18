// content.js

console.log("Prompt IDE Loaded")

createPanel()

let lastPrompt    = ""
let lastRawPrompt = ""
let typingTimer   = null

const TYPING_DELAY = 1200


// -------------------------------
// Main polling loop (every 400ms)
// -------------------------------

setInterval(() => {

  const prompt = readPrompt()

  if (!prompt) return


  // ── AUTO ENHANCE MODE ─────────────────────────────────────

  if (isAutoEnhance()) {

    // Extract the core user question from whatever is in the editor.
    // If already enhanced → extract from inside the template section.
    // If plain text       → use as-is.

    const rawPrompt = isAlreadyEnhanced(prompt)
      ? extractCoreContent(prompt)
      : prompt

    if (!rawPrompt) return

    // nothing actually changed — skip
    if (rawPrompt === lastRawPrompt) return

    // something changed — record and schedule re-enhance
    lastRawPrompt = rawPrompt

    setStatus("detecting", "Detecting intent…")

    clearTimeout(typingTimer)

    typingTimer = setTimeout(() => {

      // re-read at fire time — user may still be typing
      const current = readPrompt()
      if (!current) return

      const currentRaw = isAlreadyEnhanced(current)
        ? extractCoreContent(current)
        : current

      if (!currentRaw) return

      // build fresh enhanced prompt from the raw question
      const enhanced = enhancePrompt(currentRaw)

      if (!enhanced) return

      // write to editor (cursor will be repositioned by detector.js)
      replacePrompt(enhanced)

      // keep both trackers in sync so interval doesn't re-fire
      lastPrompt    = enhanced
      lastRawPrompt = currentRaw

      // mirror result in panel textarea
      const output = document.getElementById("enhancedOutput")
      if (output) output.value = enhanced

      setStatus("enhanced", "Auto-enhanced ✓")

    }, TYPING_DELAY)

    return

  }


  // ── MANUAL MODE ───────────────────────────────────────────

  if (prompt === lastPrompt) return

  lastPrompt = prompt

  // update panel preview
  updatePanel(prompt)

  setStatus("unchanged", "Preview updated")

}, 400)


// -------------------------------
// Apply button click
// -------------------------------

document.addEventListener("click", (e) => {

  if (e.target.id === "applyBtn") {
    handleApply()
  }

})


// -------------------------------
// Keyboard shortcut Ctrl+Shift+Enter
// -------------------------------

document.addEventListener("keydown", (e) => {

  if (e.ctrlKey && e.shiftKey && e.key === "Enter") {
    handleApply()
  }

})


// -------------------------------
// Apply enhanced prompt to editor
// -------------------------------

function handleApply() {

  const currentPrompt = readPrompt()

  if (!currentPrompt || currentPrompt.trim() === "") {
    showToast("Input box is empty")
    return
  }

  const enhanced = document.getElementById("enhancedOutput").value

  if (!enhanced || enhanced.trim() === "") {
    showToast("Enhanced prompt is empty")
    return
  }

  replacePrompt(enhanced)

  // keep trackers in sync so interval doesn't re-process
  lastPrompt    = enhanced
  lastRawPrompt = extractCoreContent(enhanced) || enhanced

  setStatus("enhanced", "Applied ✓")

  showToast("Enhanced prompt applied ✓")

}
