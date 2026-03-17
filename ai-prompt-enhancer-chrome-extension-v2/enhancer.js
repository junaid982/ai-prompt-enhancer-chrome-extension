function normalizePrompt(prompt){

if(!prompt) return ""

return prompt.trim()

}



function detectIntent(prompt){

const text=prompt.toLowerCase()

if(text.includes("error")||text.includes("bug")||text.includes("fix"))
return "debug"

if(text.includes("architecture"))
return "architecture"

if(text.includes("write")||text.includes("create"))
return "coding"

if(text.includes("explain")||text.includes("what is"))
return "explanation"

return "general"

}



function detectLanguage(prompt){

const t=prompt.toLowerCase()

if(t.includes("django")||t.includes("python"))
return "python"

if(t.includes("node")||t.includes("javascript"))
return "javascript"

if(t.includes("golang")||t.includes(" go "))
return "go"

return ""

}



function buildExplanation(prompt){

return `Explain clearly.

Topic:
${prompt}

Include:

• Simple explanation
• Examples
• Best practices`

}



function buildCoding(prompt,language){

return `You are a senior software engineer.

Task:
${prompt}

Requirements:

• Provide working ${language} code
• Use clean architecture
• Include inline comments
• Follow production best practices

Return the final code first, then explanation.`

}



function buildDebug(prompt){

return `You are an expert debugging engineer.

Problem:
${prompt}

Provide:

• Root cause
• Corrected code
• Explanation
• Prevention tips`

}



function buildArchitecture(prompt){

return `You are a senior system architect.

Question:
${prompt}

Provide:

• System architecture
• Component breakdown
• Data flow
• Scalability considerations`

}



function enhancePrompt(prompt){

prompt=normalizePrompt(prompt)

if(!prompt) return ""

const intent=detectIntent(prompt)
const lang=detectLanguage(prompt)

if(intent==="coding") return buildCoding(prompt,lang)

if(intent==="debug") return buildDebug(prompt)

if(intent==="architecture") return buildArchitecture(prompt)

if(intent==="explanation") return buildExplanation(prompt)

return prompt

}