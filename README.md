# AI Prompt Enhancer Chrome Extension 🚀

A developer-focused Chrome extension that automatically **enhances prompts while typing** in modern AI chat platforms — **ChatGPT, Claude, Gemini, and Perplexity**.

Converts simple prompts into structured, professional prompts for **better and more accurate AI responses** — completely locally, with no login, no API keys, and no external services.

---

# 📦 Versions in this Repository

---

## 1️⃣ ai-prompt-enhancer-chrome-extension (v1 — Original)

The original prompt enhancer. Lightweight, automatic prompt expansion with technology detection and a floating panel.

```
ai-prompt-enhancer-chrome-extension
```

---

## 2️⃣ ai-prompt-enhancer-chrome-extension-v2 (v2 — Improved)

Improved UX and smarter prompt handling. Introduces the Prompt IDE interface, toast notifications, collapsible icon mode, and better editor compatibility.

```
ai-prompt-enhancer-chrome-extension-v2
```

---

## 3️⃣ ai-prompt-enhancer-chrome-extension-v3 (v3 — Current ✅ Recommended)

The most advanced version. Full Prompt IDE with auto-enhance, 20 intent domains, Neural Terminal UI, persistent settings, and cursor-aware prompt injection.

```
ai-prompt-enhancer-chrome-extension-v3
```

---

# ✨ v3 — Full Feature Overview

## 🤖 Auto Enhance Mode

Type in any AI chat input. The extension watches your typing, detects intent after a short pause, and **automatically replaces your raw prompt with a structured, professional version** — no button press needed.

- Enabled by default on every page load
- Re-enhances when you edit the question inside an already-enhanced prompt
- Cursor stays at your typing position after injection (no cursor jump)
- 1.2 second debounce — only fires when you stop typing

---

## 🧠 20-Domain Intent Detection

The enhancer automatically classifies every prompt and routes it to a domain-specific template:

| Domain | Example Triggers |
|---|---|
| `coding` | code, function, script, build, implement |
| `debug` | error, bug, fix, crash, exception, traceback |
| `testing` | unit test, jest, pytest, mock, TDD, coverage |
| `security` | JWT, OAuth, XSS, SQL injection, encryption |
| `devops` | Docker, Kubernetes, CI/CD, AWS, Terraform |
| `performance` | optimize, bottleneck, cache, latency, benchmark |
| `data-science` | ML, neural network, pandas, PyTorch, LLM, NLP |
| `api` | REST, GraphQL, endpoint, OpenAPI, webhook |
| `ui-ux` | CSS, Tailwind, component, React, responsive |
| `code-review` | review, refactor, SOLID, DRY, code quality |
| `documentation` | README, JSDoc, docstring, changelog |
| `regex` | regex, regular expression, pattern match |
| `git` | commit, branch, merge, rebase, pull request |
| `research` | research, summarize, survey, academic, paper |
| `architecture` | system design, microservices, design pattern |
| `database` | SQL, schema, migration, ORM, index, Redis |
| `writing` | email, letter, blog, LinkedIn, cover letter |
| `comparison` | vs, compare, difference, which is better |
| `explanation` | explain, what is, how does, why, describe |
| `general` | fallback for everything else |

---

## 🌐 17-Language Detection

Python, TypeScript, JavaScript, React, Vue, Angular, Java, Kotlin, Swift, Go, Rust, C#, C++, C, PHP, Ruby, SQL, Bash/Shell, Dart/Flutter, R

---

## 🎨 Neural Terminal UI

A sleek floating Prompt IDE panel with:

- **Animated top accent scanline** across the panel header
- **Pill mode tabs** — DEV / EXPLAIN / GENERAL / MINIMAL (replaces dropdown)
- **LED toggle switch** — glows green when Auto Enhance is active
- **Live status dot** — amber blinking while detecting, green when enhanced
- **Monospace terminal textarea** for the enhanced output preview
- **⎘ Copy button** — copies enhanced output to clipboard in one click
- **Shimmer apply button** with sweep animation on hover
- **Dark glass toast notifications** with cyan border glow
- **Draggable panel** — drag by the header to reposition anywhere
- **Collapsible** — minimises to a compact pill; click to expand

---

## 💾 Persistent Settings

Mode selection and Auto Enhance toggle are saved via `chrome.storage.local` and restored on every page load. Your preferences survive navigation and browser restarts.

---

## ⌨️ Keyboard Shortcut

`Ctrl + Shift + Enter` — applies the enhanced prompt from anywhere on the page.

---

# 📊 Enhanced Prompt Examples

### Before / After — Debugging

**Input**
```
getting null pointer exception in java
```

**Enhanced**
```
You are an expert debugging engineer with years of experience diagnosing complex software issues.

Problem:
getting null pointer exception in java

Debugging approach:

• Identify the root cause with a clear explanation of why it happens
• Provide the corrected, working code
• Walk through the fix step by step
• List any related issues this bug might cause if left unfixed
• Suggest defensive coding practices to prevent this type of bug in future
• If multiple causes are possible, address each one
```

---

### Before / After — Data Science

**Input**
```
build a classification model with scikit-learn
```

**Enhanced**
```
You are a senior data scientist and ML engineer with expertise in the full ML lifecycle.

Task:
build a classification model with scikit-learn

Provide:

• Problem framing: supervised/unsupervised/reinforcement — which applies and why
• Data requirements: format, volume, quality checks
• Feature engineering approach
• Model selection with justification
• Complete implementation code with comments
• Training, validation and evaluation strategy
• Key metrics: accuracy, precision, recall, F1, AUC
• Potential pitfalls: overfitting, data leakage, class imbalance
• Deployment considerations
```

---

### Before / After — Security

**Input**
```
how to implement jwt authentication
```

**Enhanced**
```
You are a senior application security engineer specialising in secure software design.

Task:
how to implement jwt authentication

Cover:

• Detailed explanation of the vulnerability or security concern
• Risk level with CVSS context
• Attack vector: how an attacker would exploit this
• Remediation: exact code changes or configuration fixes
• Defence-in-depth strategy
• OWASP guidelines relevant to this issue
• Security testing methods to verify the fix
```

---

# 📁 Project Structure (v3)

```
ai-prompt-enhancer-chrome-extension-v3
│
├── manifest.json   — Extension config and permissions
├── detector.js     — Editor detection + cursor-aware prompt injection
├── enhancer.js     — 20-domain intent engine + prompt builders
├── ui.js           — Neural Terminal floating panel
├── content.js      — Main controller (polling, auto-enhance loop)
└── style.css       — Neural Terminal theme (JetBrains Mono, cyan/indigo)
```

---

# 🤖 Supported AI Platforms

| Platform | URL |
|---|---|
| ChatGPT | https://chatgpt.com |
| Claude | https://claude.ai |
| Gemini | https://gemini.google.com |
| Perplexity | https://perplexity.ai |

---

# ⚙️ Installation Guide

## Step 1 — Clone the Repository

```bash
git clone https://github.com/junaid982/ai-prompt-enhancer-chrome-extension.git
```

Or download as a ZIP and extract it.

## Step 2 — Open Chrome Extensions

```
chrome://extensions/
```

Enable **Developer Mode** (top-right corner).

## Step 3 — Load the Extension

Click **Load unpacked** and select the version folder:

| Version | Folder |
|---|---|
| v1 | `ai-prompt-enhancer-chrome-extension` |
| v2 | `ai-prompt-enhancer-chrome-extension-v2` |
| v3 ✅ Recommended | `ai-prompt-enhancer-chrome-extension-v3` |

## Step 4 — Open an AI Platform

Navigate to any supported AI platform and start typing.

---

# 🚀 How to Use (v3)

1. Open a supported AI chat platform.
2. The Prompt IDE panel loads collapsed in the top-right corner.
3. **Auto Enhance is on by default** — just start typing.
4. After a short pause, your prompt is automatically enhanced in the chat input.
5. Edit the question inside the enhanced template to refine — it will re-enhance automatically.
6. Expand the panel (`□`) to see the enhanced output, switch modes, or manually apply.
7. Use `Ctrl + Shift + Enter` to apply at any time.

---

# ⚠️ Common Mistakes

**Developer Mode not enabled** — the extension cannot load without it.

**Wrong folder selected** — always select the folder that contains `manifest.json`.

**Unsupported browser** — works only in Chrome or Chromium-based browsers.

---

# 🤝 Contributing

Contributions welcome. Areas to improve:

- Additional prompt domain templates
- New AI platform support
- Prompt quality scoring
- UI themes

---

# 📜 License

MIT License

---

# 👨‍💻 Author

Built for developers and AI engineers who want **better AI prompts automatically and improved AI responses**.
