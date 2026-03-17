function getEditor(){

// ChatGPT editor
let el = document.querySelector("div.ProseMirror")

if(el) return el

// fallback editors
const selectors = [
'textarea',
'div[contenteditable="true"]'
]

for(const s of selectors){

const elements = document.querySelectorAll(s)

for(const e of elements){

if(e.id !== "enhancedOutput")
return e

}

}

return null
}

function readPrompt(){

const editor = getEditor()

if(!editor) return ""

if(editor.tagName === "TEXTAREA")
return editor.value

return editor.textContent || ""

}

function replacePrompt(text){

const editor = getEditor()

if(!editor) return

editor.focus()

if(editor.tagName === "TEXTAREA"){

editor.value = text
editor.dispatchEvent(new Event("input",{bubbles:true}))
return

}

editor.innerHTML = ""
editor.appendChild(document.createTextNode(text))

editor.dispatchEvent(new Event("input",{bubbles:true}))

}