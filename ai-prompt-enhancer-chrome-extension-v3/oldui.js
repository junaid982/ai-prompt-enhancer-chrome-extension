// ui.js

let collapsed    = false
let autoEnhance  = false
let mode         = "developer"


// -------------------------------
// Create the floating panel
// -------------------------------

function createPanel() {

  if (document.getElementById("promptIDE")) return

  const panel = document.createElement("div")
  panel.id = "promptIDE"

  panel.style.top  = "100px"
  panel.style.left = "calc(100vw - 390px)"

  panel.innerHTML = `

    <div id="ideHeader">
      <div id="ideTitle">
        <span id="ideLogo">⚡</span>
        <span id="ideName">PROMPT IDE</span>
      </div>
      <div id="ideControls">
        <span id="toggleBtn" title="Minimize">─</span>
      </div>
    </div>

    <div id="panelBody">

      <div id="modeRow">
        <span class="modeLabel">MODE</span>
        <div id="modeTabs">
          <button class="modeTab active" data-mode="developer">DEV</button>
          <button class="modeTab" data-mode="explanation">EXPLAIN</button>
          <button class="modeTab" data-mode="general">GENERAL</button>
          <button class="modeTab" data-mode="minimal">MINIMAL</button>
        </div>
      </div>

      <div id="autoRow">
        <div id="autoLabel">
          <span id="autoIcon">◉</span>
          <span>AUTO ENHANCE</span>
        </div>
        <label id="toggleSwitch">
          <input type="checkbox" id="autoEnhanceToggle">
          <span id="toggleTrack">
            <span id="toggleThumb"></span>
          </span>
        </label>
      </div>

      <div id="outputWrapper">
        <div id="outputHeader">
          <span id="outputLabel">ENHANCED OUTPUT</span>
          <span id="copyBtn" title="Copy to clipboard">⎘</span>
        </div>
        <textarea id="enhancedOutput" placeholder="Start typing in the AI chat to see the enhanced prompt..."></textarea>
      </div>

      <div id="statusBar">
        <span id="statusDot"></span>
        <span id="statusText">Ready</span>
      </div>

      <button id="applyBtn">
        <span id="applyIcon">↑</span>
        <span>APPLY ENHANCED PROMPT</span>
        <span id="applyShortcut">Ctrl⇧↵</span>
      </button>

    </div>

  `

  document.body.appendChild(panel)

  createToast()

  enableDrag(panel)

  restoreSettings()

  // ── Header toggle ──────────────────────────────────────────

  document.getElementById("toggleBtn").onclick = togglePanel


  // ── Mode tabs ──────────────────────────────────────────────

  document.querySelectorAll(".modeTab").forEach(btn => {

    btn.addEventListener("click", () => {

      document.querySelectorAll(".modeTab").forEach(b => b.classList.remove("active"))
      btn.classList.add("active")

      mode = btn.dataset.mode

      chrome.storage.local.set({ mode })

      showToast("Mode: " + btn.textContent)

    })

  })


  // ── Auto enhance toggle ────────────────────────────────────

  document.getElementById("autoEnhanceToggle").addEventListener("change", (e) => {

    autoEnhance = e.target.checked

    chrome.storage.local.set({ autoEnhance })

    const icon = document.getElementById("autoIcon")

    if (autoEnhance) {
      icon.style.color = "#4ade80"
      icon.style.textShadow = "0 0 8px #4ade80"
      showToast("Auto Enhance ON")
    } else {
      icon.style.color = "#475569"
      icon.style.textShadow = "none"
      showToast("Auto Enhance OFF")
      const output = document.getElementById("enhancedOutput")
      if (output) output.value = ""
      setStatus("ready", "Ready")
    }

  })


  // ── Copy button ────────────────────────────────────────────

  document.getElementById("copyBtn").addEventListener("click", () => {

    const output = document.getElementById("enhancedOutput")

    if (!output || !output.value.trim()) {
      showToast("Nothing to copy")
      return
    }

    navigator.clipboard.writeText(output.value).then(() => {
      showToast("Copied to clipboard ✓")
    })

  })


  // ── Collapsed click → apply ────────────────────────────────

  panel.addEventListener("click", (e) => {

    if (!collapsed) return
    if (e.target.id === "toggleBtn") return

    handleApply()

  })

}


// -------------------------------
// Restore settings from storage
// -------------------------------

function restoreSettings() {

  chrome.storage.local.get(["autoEnhance", "mode"], (result) => {

    if (result.autoEnhance !== undefined) {

      autoEnhance = result.autoEnhance

      const toggle = document.getElementById("autoEnhanceToggle")
      if (toggle) toggle.checked = autoEnhance

      const icon = document.getElementById("autoIcon")
      if (icon && autoEnhance) {
        icon.style.color      = "#4ade80"
        icon.style.textShadow = "0 0 8px #4ade80"
      }

    }

    if (result.mode) {

      mode = result.mode

      document.querySelectorAll(".modeTab").forEach(btn => {
        btn.classList.toggle("active", btn.dataset.mode === mode)
      })

    }

  })

}


// -------------------------------
// Getters used by other modules
// -------------------------------

function getEnhanceMode() {
  return mode
}

function isAutoEnhance() {
  return autoEnhance
}


// -------------------------------
// Status bar
// States: "ready" | "detecting" | "enhanced" | "unchanged"
// -------------------------------

function setStatus(state, text) {

  const dot  = document.getElementById("statusDot")
  const label = document.getElementById("statusText")

  if (!dot || !label) return

  label.textContent = text || ""

  // remove all state classes
  dot.className = ""

  dot.classList.add("dot-" + state)

}


// -------------------------------
// Toast notification
// -------------------------------

function createToast() {

  if (document.getElementById("globalToast")) return

  const toast = document.createElement("div")
  toast.id = "globalToast"

  document.body.appendChild(toast)

}

function showToast(message) {

  const toast = document.getElementById("globalToast")

  toast.textContent = message
  toast.classList.add("show")

  setTimeout(() => {
    toast.classList.remove("show")
  }, 2500)

}


// -------------------------------
// Toggle panel collapse
// -------------------------------

function togglePanel() {

  const panel  = document.getElementById("promptIDE")
  const body   = document.getElementById("panelBody")
  const toggle = document.getElementById("toggleBtn")

  collapsed = !collapsed

  if (collapsed) {

    body.style.display  = "none"
    panel.classList.add("collapsed")
    toggle.textContent  = "□"
    toggle.title        = "Expand"

  } else {

    body.style.display  = "block"
    panel.classList.remove("collapsed")
    toggle.textContent  = "─"
    toggle.title        = "Minimize"

  }

}


// -------------------------------
// Update the panel textarea
// -------------------------------

function updatePanel(prompt) {

  const enhanced = enhancePrompt(prompt)
  const output   = document.getElementById("enhancedOutput")

  if (output && output.value !== enhanced) {
    output.value = enhanced
  }

}


// -------------------------------
// Draggable panel
// -------------------------------

function enableDrag(panel) {

  const header = panel.querySelector("#ideHeader")

  let startX, startY, initialX, initialY

  header.addEventListener("pointerdown", (e) => {

    // don't drag if clicking controls
    if (e.target.id === "toggleBtn") return

    header.style.cursor = "grabbing"

    startX   = e.clientX
    startY   = e.clientY
    initialX = panel.offsetLeft
    initialY = panel.offsetTop

    document.addEventListener("pointermove", move)
    document.addEventListener("pointerup",   stop)

  })

  function move(e) {

    panel.style.left = initialX + (e.clientX - startX) + "px"
    panel.style.top  = initialY + (e.clientY - startY) + "px"

  }

  function stop() {

    header.style.cursor = "grab"

    document.removeEventListener("pointermove", move)
    document.removeEventListener("pointerup",   stop)

  }

}
