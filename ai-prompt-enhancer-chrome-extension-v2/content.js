console.log("Prompt IDE Loaded")

createPanel()

let lastPrompt=""

setInterval(()=>{

const prompt=readPrompt()

if(prompt===lastPrompt) return

lastPrompt=prompt

updatePanel(prompt)

toggleApplyButton(prompt)

},700)



function toggleApplyButton(prompt){

const btn=document.getElementById("applyBtn")

if(!btn) return

if(!prompt || prompt.trim()===""){

btn.disabled=true

}else{

btn.disabled=false

}

}



document.addEventListener("click",(e)=>{

if(e.target.id==="applyBtn"){

const prompt=readPrompt()

if(!prompt || prompt.trim()===""){

showToast("Input prompt is empty")

return

}

const enhanced=document.getElementById("enhancedOutput").value

replacePrompt(enhanced)

clearPromptIDE()

}

})