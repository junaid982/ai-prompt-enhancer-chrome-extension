console.log("Prompt IDE Loaded")

createPanel()

let lastPrompt = ""
let applyLocked = false


setInterval(()=>{

const prompt = readPrompt()

if(!prompt) return

// detect real user edit and unlock
if(prompt !== lastPrompt){

// if prompt no longer equals enhanced output then unlock
const enhanced = document.getElementById("enhancedOutput")?.value || ""

if(prompt.trim() !== enhanced.trim()){
applyLocked = false
}

}

if(prompt === lastPrompt) return

lastPrompt = prompt

updatePanel(prompt)

},600)



document.addEventListener("click",(e)=>{

if(e.target.id === "applyBtn"){

handleApply()

}

})



function handleApply(){

const currentPrompt = readPrompt()

if(!currentPrompt || currentPrompt.trim()===""){

showToast("Input box is empty")
return

}

if(applyLocked){

showToast("Enhanced prompt applied")
return

}

const enhanced =
document.getElementById("enhancedOutput").value

if(!enhanced || enhanced.trim()===""){
showToast("Enhanced prompt is empty")
return
}

replacePrompt(enhanced)

// lock immediately after first apply
applyLocked = true

}




