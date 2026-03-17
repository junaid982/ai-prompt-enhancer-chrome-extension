// -------------------------------
// Normalize Prompt
// -------------------------------

function normalizePrompt(prompt){

if(!prompt) return ""

return prompt.trim()

}



// -------------------------------
// Detect Intent
// -------------------------------

function detectIntent(prompt){

const text=prompt.toLowerCase()



// debugging
if(text.includes("error") || text.includes("bug") || text.includes("fix"))
return "debug"


// architecture
if(text.includes("architecture") || text.includes("design"))
return "architecture"


// coding
if(
text.includes("code") ||
text.includes("script") ||
text.includes("function") ||
text.includes("implement") ||
text.includes("create") ||
text.includes("build")
)
return "coding"


// database queries
if(
text.includes("sql") ||
text.includes("query") ||
text.includes("database") ||
text.includes("table")
)
return "database"


// explanation
if(
text.includes("explain") ||
text.includes("what is") ||
text.includes("how does")
)
return "explanation"


// writing tasks
if(
text.includes("write a mail") ||
text.includes("write email") ||
text.includes("email") ||
text.includes("message") ||
text.includes("letter")
)
return "writing"


// comparison
if(
text.includes("vs") ||
text.includes("compare") ||
text.includes("difference") ||
text.includes("faster than")
)
return "comparison"



return "general"

}



// -------------------------------
// Detect Programming Language
// -------------------------------

function detectLanguage(prompt){

const t=prompt.toLowerCase()

if(t.includes("django") || t.includes("python"))
return "python"

if(t.includes("node") || t.includes("javascript") || t.includes("js"))
return "javascript"

if(t.includes("golang") || t.includes(" go "))
return "go"

if(t.includes("sql") || t.includes("mysql") || t.includes("postgres"))
return "sql"

return ""

}



// -------------------------------
// Prompt Builders
// -------------------------------

function buildExplanation(prompt){

return `Explain clearly.

Topic:
${prompt}

Include:

• Simple explanation
• Key concepts
• Real-world examples
• Best practices`

}



function buildCoding(prompt,language){

return `You are a senior software engineer.

Task:
${prompt}

Requirements:

• Provide working ${language || ""} code
• Include inline comments
• Explain the logic
• Mention best practices

Return the code first, then explanation.`

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



function buildDatabase(prompt){

return `You are a database expert.

Task:
${prompt}

Provide:

• Correct SQL query
• Explanation of the query
• Performance considerations
• Indexing recommendations`

}



function buildWriting(prompt){

return `You are a professional communication assistant.

Task:
${prompt}

Provide:

• A clear and professional message
• Proper structure
• Polite tone
• Ready-to-send format`

}



function buildComparison(prompt){

return `Compare the following.

Question:
${prompt}

Provide:

• Clear comparison
• Key differences
• Advantages and disadvantages
• Real-world use cases`

}



function buildGeneral(prompt){

return `Answer the following question clearly.

Question:
${prompt}

Provide:

• Clear explanation
• Example if applicable
• Practical suggestions`

}



// -------------------------------
// Main Enhancer
// -------------------------------

function enhancePrompt(prompt){

prompt=normalizePrompt(prompt)

if(!prompt) return ""

const intent=detectIntent(prompt)
const lang=detectLanguage(prompt)



if(intent==="coding")
return buildCoding(prompt,lang)

if(intent==="debug")
return buildDebug(prompt)

if(intent==="architecture")
return buildArchitecture(prompt)

if(intent==="database")
return buildDatabase(prompt)

if(intent==="explanation")
return buildExplanation(prompt)

if(intent==="writing")
return buildWriting(prompt)

if(intent==="comparison")
return buildComparison(prompt)

return buildGeneral(prompt)

}