# AI Prompt Enhancer Chrome Extension 🚀

AI Prompt Enhancer is a developer-focused Chrome extension that automatically **enhances prompts while typing** in AI chat platforms such as **ChatGPT, Claude, Gemini, and Perplexity**.

The extension converts **simple prompts into structured, professional prompts**, helping developers, researchers, and AI engineers receive **better and more accurate responses from AI models**.

It works **completely locally**, requires **no login**, **no API keys**, and **no external services**.

---

# ✨ Key Features

## Dynamic Prompt Enhancement

The extension automatically detects the type of prompt and enhances it with structured instructions.

### Example

**User Prompt**


explain mysql

**Enhanced Prompt**


Act as an expert AI assistant.

User question:
Explain MySQL database architecture and query optimization

Provide:

• clear explanation
• key concepts
• real-world examples
• best practices
• explain how mysql works internally
• when to use mysql in production systems
• common challenges when implementing mysql
• best architecture patterns using mysql



---

# 🧠 Context-Aware Prompt Detection

The enhancer automatically detects different prompt types such as:

- Coding prompts
- Debugging questions
- Tutorials and guides
- System architecture questions
- Technology comparisons
- Technical research
- Brainstorming prompts
- Technical explanations

---

# 🛠 Developer Technology Awareness

The extension recognizes many modern development technologies.

## Programming Languages

- Python
- JavaScript
- TypeScript
- Go
- Rust
- Java
- Kotlin
- Swift
- C / C++ / C#
- PHP
- Ruby
- Scala
- Julia
- Bash

## Frontend Frameworks

- React
- Next.js
- Vue
- Angular
- Svelte

## Backend Frameworks

- Django
- FastAPI
- Flask
- Express
- Spring Boot
- Laravel
- ASP.NET

## Databases

- MySQL
- PostgreSQL
- MongoDB
- Redis
- Cassandra
- DynamoDB
- SQLite
- Neo4j
- ClickHouse
- Elasticsearch

## AI / LLM / RAG Technologies

- LLM
- RAG
- LangChain
- LlamaIndex
- Embeddings
- Vector Databases
- Chroma
- Pinecone
- Weaviate
- Milvus
- Qdrant
- FAISS
- Ollama
- HuggingFace
- Transformers
- vLLM

---

# 🤖 Supported AI Platforms

The extension works with the following AI platforms:

- ChatGPT
- Claude
- Gemini
- Perplexity

---

# 📁 Project Structure

ai-prompt-enhancer-chrome-extension
│
├── manifest.json
├── detector.js
├── enhancer.js
├── ui.js
├── content.js
└── style.css



### manifest.json
Defines the Chrome extension configuration and permissions.

### detector.js
Detects the input editor of the AI platform.

### enhancer.js
Core prompt intelligence engine that analyzes prompts and generates enhanced prompts.

### ui.js
Creates and manages the floating prompt enhancer interface.

### content.js
Main controller that connects the detector, enhancer, and UI components.

### style.css
Styles for the extension interface.

---

# 📋 Prerequisites

Before installing the extension, ensure you have:

- Google Chrome or any Chromium-based browser
- Developer Mode enabled in Chrome Extensions

No API keys or external services are required.

---

# ⚙️ Installation Guide

## Step 1 — Clone the Repository

Clone the repository using Git:

```bash
git clone https://github.com/your-username/ai-prompt-enhancer-chrome-extension.git


Or download the repository as a ZIP file and extract it.

Step 2 — Open Chrome Extensions

Open the Chrome extensions page:

chrome://extensions/

Enable Developer Mode in the top-right corner.


Step 3 — Load the Extension

Click:
Load unpacked

Select the folder:

ai-prompt-enhancer-chrome-extension


ai-prompt-enhancer-chrome-extension


Step 4 — Open an AI Platform

Navigate to any supported AI platform:

https://chatgpt.com

https://claude.ai

https://gemini.google.com

https://perplexity.ai



🚀 How to Use

1 - Open a supported AI chat platform.

2 - Start typing a prompt in the chat input field.

3 - The extension automatically generates an enhanced version of your prompt in the floating panel.

4 - Click Apply Enhanced Prompt.

5 - The improved prompt replaces your original prompt.


💡 Practical Examples


AI Engineering

Prompt:

build rag system python

*   Enhanced prompt will include:

*   architecture explanation

*   implementation strategy

*   scalability considerations

*   production challenges


Backend Development

Prompt:

create fastapi authentication api


Enhanced prompt will request:

working code

security considerations

best practices



Database Optimization

Prompt:


optimize mysql queries


Enhanced prompt will include:

*   query optimization techniques

*   indexing strategies

*   performance considerations



⚠️ Common Mistakes
Not Enabling Developer Mode

The extension cannot be loaded unless Developer Mode is enabled.

Selecting the Wrong Folder

Make sure to select the root project folder containing manifest.json.

Using Unsupported Browsers

The extension only works in Chrome or Chromium-based browsers.




⚠️ Common Mistakes
Not Enabling Developer Mode

The extension cannot be loaded unless Developer Mode is enabled.

Selecting the Wrong Folder

Make sure to select the root project folder containing manifest.json.

Using Unsupported Browsers

The extension only works in Chrome or Chromium-based browsers.



🤝 Contributing

Contributions are welcome.

You can contribute by improving:

prompt detection rules

technology recognition

UI features

prompt templates

prompt scoring


📜 License

MIT License




👨‍💻 Author

Built for developers and AI engineers who want better AI prompts automatically and improved AI responses.


