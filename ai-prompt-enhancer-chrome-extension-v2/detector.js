function getEditor(){

let el=document.querySelector("div.ProseMirror")

if(el) return el

const selectors=[
'textarea',
'div[contenteditable="true"]'
]

for(const s of selectors){

const elements=document.querySelectorAll(s)

for(const e of elements){

if(e.id!=="enhancedOutput")
return e

}

}

return null

}



function readPrompt(){

const editor=getEditor()

if(!editor) return ""

if(editor.tagName==="TEXTAREA")
return editor.value

return editor.innerText || ""

}



function replacePrompt(text){

const editor=getEditor()

if(!editor) return

editor.focus()



// TEXTAREA editors
if(editor.tagName==="TEXTAREA"){

editor.value=text
editor.dispatchEvent(new Event("input",{bubbles:true}))
return

}



// CONTENTEDITABLE editors (ChatGPT / Claude / Gemini)

const selection=window.getSelection()

const range=document.createRange()

range.selectNodeContents(editor)
range.deleteContents()

const textNode=document.createTextNode(text)

editor.appendChild(textNode)

range.selectNodeContents(editor)
range.collapse(false)

selection.removeAllRanges()
selection.addRange(range)

editor.dispatchEvent(new Event("input",{bubbles:true}))

}
















