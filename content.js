console.log("Prompt IDE Loaded")

createPanel()

let lastPrompt = ""

setInterval(()=>{

const prompt = readPrompt()

if(!prompt) return

if(prompt === lastPrompt) return

lastPrompt = prompt

updatePanel(prompt)

},600)

document.addEventListener("click",(e)=>{

if(e.target.id === "applyBtn"){

const enhanced =
document.getElementById("enhancedOutput").value

replacePrompt(enhanced)

}

})