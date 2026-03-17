let collapsed=false

function createPanel(){

if(document.getElementById("promptIDE")) return

const panel=document.createElement("div")
panel.id="promptIDE"

panel.style.top="120px"
panel.style.left="calc(100vw - 380px)"

panel.innerHTML=`

<div id="header">

<span>Prompt IDE By Junaid</span>
<span id="toggleBtn" title="Collapse Panel">▼</span>

</div>

<div id="panelBody">

<textarea id="enhancedOutput"></textarea>

<button id="applyBtn">Apply Enhanced Prompt</button>

</div>

`

document.body.appendChild(panel)

createToast()

enableDrag(panel)

document.getElementById("toggleBtn").onclick=togglePanel

}



function createToast(){

if(document.getElementById("globalToast")) return

const toast=document.createElement("div")

toast.id="globalToast"

document.body.appendChild(toast)

}



function clearPromptIDE(){

const textarea=document.getElementById("enhancedOutput")

if(textarea) textarea.value=""

}



function showToast(message){

const toast=document.getElementById("globalToast")

toast.textContent=message

toast.classList.add("show")

setTimeout(()=>{

toast.classList.remove("show")

},2500)

}



function togglePanel(){

const panel=document.getElementById("promptIDE")
const body=document.getElementById("panelBody")
const toggle=document.getElementById("toggleBtn")

collapsed=!collapsed

if(collapsed){

body.style.display="none"
panel.classList.add("collapsed")

toggle.textContent="▶"
toggle.title="Expand Panel"

}else{

body.style.display="block"
panel.classList.remove("collapsed")

toggle.textContent="▼"
toggle.title="Collapse Panel"

}

}



function updatePanel(prompt){

const enhanced=enhancePrompt(prompt)

const output=document.getElementById("enhancedOutput")

if(output && output.value!==enhanced){

output.value=enhanced

}

}



function enableDrag(panel){

const header=panel.querySelector("#header")

let startX,startY,initialX,initialY

header.addEventListener("pointerdown",(e)=>{

header.style.cursor="grabbing"

startX=e.clientX
startY=e.clientY

initialX=panel.offsetLeft
initialY=panel.offsetTop

document.addEventListener("pointermove",move)
document.addEventListener("pointerup",stop)

})

function move(e){

panel.style.left=initialX+(e.clientX-startX)+"px"
panel.style.top=initialY+(e.clientY-startY)+"px"

}

function stop(){

header.style.cursor="grab"

document.removeEventListener("pointermove",move)
document.removeEventListener("pointerup",stop)

}

}