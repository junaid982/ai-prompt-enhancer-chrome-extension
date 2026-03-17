// function enhancePrompt(prompt){

// if(!prompt) return ""

// if(prompt.startsWith("Act as an expert AI assistant"))
// return prompt

// return `Act as an expert AI assistant.

// User question:
// ${prompt}

// Provide:

// • clear explanation
// • step-by-step breakdown
// • real examples
// • best practices

// `
// }









// ===============================
// Prompt Enhancer Engine
// ===============================



function normalizePrompt(prompt){

if(!prompt) return ""

return prompt
.trim()
.replace(/\s+/g," ")

}



// ===============================
// Detect Programming Languages
// ===============================

function detectLanguage(prompt){

const text = prompt.toLowerCase()

const languages = [

"python","javascript","typescript","node",
"java","golang","go","rust","c++","c#","c",
"php","ruby","scala","kotlin","swift","dart",
"julia","r","matlab","bash","powershell"

]

for(const lang of languages){

if(text.includes(lang))
return lang

}

return null

}



// ===============================
// Detect Frameworks
// ===============================

function detectFramework(prompt){

const text = prompt.toLowerCase()

const frameworks = [

"react","next.js","vue","angular","svelte",
"nuxt","remix",

"django","fastapi","flask","spring boot",
"express","laravel","asp.net"

]

for(const f of frameworks){

if(text.includes(f))
return f

}

return null

}



// ===============================
// Detect Databases
// ===============================

function detectDatabase(prompt){

const text = prompt.toLowerCase()

const dbs = [

"mysql","postgresql","postgres",
"mongodb","redis","sqlite",
"mariadb","cassandra","dynamodb",
"neo4j","clickhouse","elasticsearch"

]

for(const db of dbs){

if(text.includes(db))
return db

}

return null

}



// ===============================
// Detect AI / LLM / RAG Tech
// ===============================

function detectAI(prompt){

const text = prompt.toLowerCase()

const ai = [

"llm","rag","langchain","llamaindex",
"embeddings","vector database",
"chroma","pinecone","weaviate",
"milvus","qdrant","faiss",

"openai","huggingface","transformers",
"ollama","vllm","tensorrt-llm",

"local llm","ai model","machine learning"

]

for(const a of ai){

if(text.includes(a))
return a

}

return null

}



// ===============================
// Detect Prompt Type
// ===============================

function detectPromptType(prompt){

const text = prompt.toLowerCase()

if(text.includes("code") || text.includes("function") || text.includes("implementation"))
return "coding"

if(text.includes("error") || text.includes("bug") || text.includes("debug"))
return "debugging"

if(text.includes("compare") || text.includes("vs") || text.includes("difference"))
return "comparison"

if(text.includes("how to") || text.includes("build") || text.includes("create"))
return "tutorial"

if(text.includes("architecture") || text.includes("system design"))
return "architecture"

if(text.includes("research") || text.includes("analysis") || text.includes("deep dive"))
return "research"

if(text.includes("summarize") || text.includes("summary"))
return "summary"

if(text.includes("ideas") || text.includes("brainstorm"))
return "brainstorm"

return "explanation"

}



// ===============================
// Dynamic Instructions
// ===============================

function getDynamicInstructions(type,prompt){

const language = detectLanguage(prompt)
const framework = detectFramework(prompt)
const database = detectDatabase(prompt)
const ai = detectAI(prompt)



const templates = {

coding:[
`Provide complete working ${language || ""} code`,
`Explain the code logic`,
`Include inline comments`,
`Provide optimized implementation`,
`Explain time and space complexity`,
`Mention production best practices`
],

debugging:[
`Identify the root cause of the issue`,
`Explain why the error occurs`,
`Provide corrected code`,
`Suggest debugging techniques`,
`Explain how to prevent similar bugs`
],

comparison:[
`Provide a clear comparison`,
`Explain advantages and disadvantages`,
`Include a comparison table`,
`Discuss performance differences`,
`Provide real-world use cases`
],

tutorial:[
`Provide a step-by-step guide`,
`Explain prerequisites`,
`Provide practical examples`,
`Highlight common mistakes`,
`Explain production best practices`
],

architecture:[
`Explain the system architecture`,
`Describe major components`,
`Explain data flow`,
`Discuss scalability considerations`,
`Provide real-world architecture examples`
],

research:[
`Provide a deep technical explanation`,
`Explain core concepts`,
`Discuss advantages and limitations`,
`Explain performance considerations`,
`Provide engineering use cases`,
`Suggest implementation strategies`
],

summary:[
`Provide a concise summary`,
`Highlight key concepts`,
`List important takeaways`
],

brainstorm:[
`Provide multiple creative ideas`,
`Explain each idea`,
`Discuss advantages`,
`Suggest possible implementations`
],

explanation:[
`Provide a clear explanation`,
`Explain key concepts`,
`Provide real-world examples`,
`Mention best practices`
]

}



let instructions = templates[type] || templates["explanation"]



// add developer context

if(language){

instructions.push(`Explain best practices when using ${language}`)

}

if(framework){

instructions.push(`Explain architecture patterns using ${framework}`)

}

if(database){

instructions.push(`Explain database design and optimization for ${database}`)

}

if(ai){

instructions.push(`Explain how ${ai} works internally`)
instructions.push(`Explain production use cases of ${ai}`)
instructions.push(`Discuss challenges when implementing ${ai}`)
instructions.push(`Explain best architecture patterns using ${ai}`)

}



return instructions

}



// ===============================
// Expand Short Prompts
// ===============================

function expandShortPrompt(prompt){

if(prompt.split(" ").length > 2)
return prompt

const expansions = {

rag:"Explain Retrieval Augmented Generation (RAG) architecture and workflow",

llm:"Explain Large Language Models and their architecture",

docker:"Explain Docker containerization",

kubernetes:"Explain Kubernetes orchestration architecture",

react:"Explain React architecture and lifecycle",

mysql:"Explain MySQL database architecture and query optimization"

}

const lower = prompt.toLowerCase()

if(expansions[lower])
return expansions[lower]

return prompt

}



// ===============================
// Build Prompt
// ===============================

function buildPrompt(prompt,instructions){

let formattedInstructions = instructions
.map(i => `• ${i}`)
.join("\n")

return `Act as an expert AI assistant.

User question:
${prompt}

Provide:

${formattedInstructions}
`

}



// ===============================
// Main Enhancer
// ===============================

function enhancePrompt(prompt){

prompt = normalizePrompt(prompt)

if(!prompt) return ""

if(prompt.startsWith("Act as an expert AI assistant"))
return prompt

prompt = expandShortPrompt(prompt)

const type = detectPromptType(prompt)

const instructions = getDynamicInstructions(type,prompt)

return buildPrompt(prompt,instructions)

}