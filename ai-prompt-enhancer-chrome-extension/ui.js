function createPanel(){

if(document.getElementById("promptIDE")) return

const panel = document.createElement("div")
panel.id = "promptIDE"

panel.innerHTML = `
<div id="header">Prompt IDE by Junaid</div>

<textarea id="enhancedOutput"></textarea>

<button id="applyBtn">Apply Enhanced Prompt</button>
`

document.body.appendChild(panel)

makeMovable(panel)

}

function updatePanel(prompt){

const enhanced = enhancePrompt(prompt)

const output = document.getElementById("enhancedOutput")

if(output && output.value !== enhanced){
output.value = enhanced
}

}

function makeMovable(panel){

let pos1=0,pos2=0,pos3=0,pos4=0

const header = document.getElementById("header")

header.onmousedown = startDrag

function startDrag(e){

e.preventDefault()

pos3 = e.clientX
pos4 = e.clientY

document.onmouseup = stopDrag
document.onmousemove = drag

}

function drag(e){

pos1 = pos3 - e.clientX
pos2 = pos4 - e.clientY

pos3 = e.clientX
pos4 = e.clientY

panel.style.top = (panel.offsetTop - pos2) + "px"
panel.style.left = (panel.offsetLeft - pos1) + "px"

}

function stopDrag(){

document.onmouseup = null
document.onmousemove = null

}

}