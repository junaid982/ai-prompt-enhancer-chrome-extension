// enhancer.js
// ============================================================
// Domains covered:
//   coding, debug, architecture, database, writing,
//   comparison, explanation, testing, devops, security,
//   performance, data-science, api, ui-ux, code-review,
//   documentation, research, regex, git, general
// ============================================================


// -------------------------------
// Normalize Prompt
// -------------------------------

function normalizePrompt(prompt) {

  if (!prompt) return ""

  return prompt.trim()

}


// ============================================================
// INTENT DETECTION
// ============================================================

function detectIntent(prompt) {

  const t = prompt.toLowerCase()


  // ── Debugging ──────────────────────────────────────────────
  if (
    t.includes("error") ||
    t.includes("bug") ||
    t.includes("fix") ||
    t.includes("exception") ||
    t.includes("crash") ||
    t.includes("not working") ||
    t.includes("undefined") ||
    t.includes("null pointer") ||
    t.includes("traceback") ||
    t.includes("stack trace") ||
    t.includes("issue") ||
    t.includes("broken")
  ) return "debug"


  // ── Testing ────────────────────────────────────────────────
  if (
    t.includes("unit test") ||
    t.includes("integration test") ||
    t.includes("write test") ||
    t.includes("test case") ||
    t.includes("test suite") ||
    t.includes("mock") ||
    t.includes("jest") ||
    t.includes("pytest") ||
    t.includes("selenium") ||
    t.includes("tdd") ||
    t.includes("bdd") ||
    t.includes("coverage") ||
    t.includes("assertion")
  ) return "testing"


  // ── Security ───────────────────────────────────────────────
  if (
    t.includes("security") ||
    t.includes("vulnerability") ||
    t.includes("authentication") ||
    t.includes("authorization") ||
    t.includes("jwt") ||
    t.includes("oauth") ||
    t.includes("xss") ||
    t.includes("sql injection") ||
    t.includes("csrf") ||
    t.includes("encryption") ||
    t.includes("hashing") ||
    t.includes("penetration") ||
    t.includes("firewall") ||
    t.includes("ssl") ||
    t.includes("https") ||
    t.includes("secure")
  ) return "security"


  // ── DevOps / CI-CD ─────────────────────────────────────────
  if (
    t.includes("docker") ||
    t.includes("kubernetes") ||
    t.includes("k8s") ||
    t.includes("ci/cd") ||
    t.includes("pipeline") ||
    t.includes("deploy") ||
    t.includes("deployment") ||
    t.includes("github actions") ||
    t.includes("jenkins") ||
    t.includes("ansible") ||
    t.includes("terraform") ||
    t.includes("helm") ||
    t.includes("nginx") ||
    t.includes("linux") ||
    t.includes("server") ||
    t.includes("infrastructure") ||
    t.includes("cloud") ||
    t.includes("aws") ||
    t.includes("azure") ||
    t.includes("gcp")
  ) return "devops"


  // ── Performance ────────────────────────────────────────────
  if (
    t.includes("performance") ||
    t.includes("optimize") ||
    t.includes("optimise") ||
    t.includes("slow") ||
    t.includes("speed up") ||
    t.includes("bottleneck") ||
    t.includes("memory leak") ||
    t.includes("profil") ||
    t.includes("latency") ||
    t.includes("throughput") ||
    t.includes("cache") ||
    t.includes("lazy load") ||
    t.includes("benchmark")
  ) return "performance"


  // ── Data Science / ML / AI ─────────────────────────────────
  if (
    t.includes("machine learning") ||
    t.includes("deep learning") ||
    t.includes("neural network") ||
    t.includes("model") ||
    t.includes("dataset") ||
    t.includes("training") ||
    t.includes("prediction") ||
    t.includes("classification") ||
    t.includes("regression") ||
    t.includes("clustering") ||
    t.includes("pandas") ||
    t.includes("numpy") ||
    t.includes("tensorflow") ||
    t.includes("pytorch") ||
    t.includes("scikit") ||
    t.includes("data analysis") ||
    t.includes("data science") ||
    t.includes("llm") ||
    t.includes("fine-tun") ||
    t.includes("embedding") ||
    t.includes("nlp")
  ) return "data-science"


  // ── API Design ─────────────────────────────────────────────
  if (
    t.includes("api") ||
    t.includes("rest") ||
    t.includes("graphql") ||
    t.includes("endpoint") ||
    t.includes("webhook") ||
    t.includes("swagger") ||
    t.includes("openapi") ||
    t.includes("postman") ||
    t.includes("http request") ||
    t.includes("http method") ||
    t.includes("status code") ||
    t.includes("response schema") ||
    t.includes("payload")
  ) return "api"


  // ── UI / UX / Frontend ─────────────────────────────────────
  if (
    t.includes("ui") ||
    t.includes("ux") ||
    t.includes("component") ||
    t.includes("css") ||
    t.includes("tailwind") ||
    t.includes("responsive") ||
    t.includes("layout") ||
    t.includes("design system") ||
    t.includes("animation") ||
    t.includes("accessibility") ||
    t.includes("html") ||
    t.includes("react") ||
    t.includes("vue") ||
    t.includes("angular") ||
    t.includes("svelte") ||
    t.includes("frontend")
  ) return "ui-ux"


  // ── Code Review / Refactor ─────────────────────────────────
  if (
    t.includes("review") ||
    t.includes("refactor") ||
    t.includes("clean up") ||
    t.includes("clean code") ||
    t.includes("improve") ||
    t.includes("rewrite") ||
    t.includes("restructure") ||
    t.includes("best practice") ||
    t.includes("code quality") ||
    t.includes("solid") ||
    t.includes("dry principle") ||
    t.includes("smell")
  ) return "code-review"


  // ── Documentation ──────────────────────────────────────────
  if (
    t.includes("document") ||
    t.includes("readme") ||
    t.includes("jsdoc") ||
    t.includes("docstring") ||
    t.includes("comment") ||
    t.includes("wiki") ||
    t.includes("changelog") ||
    t.includes("write docs")
  ) return "documentation"


  // ── Regex ──────────────────────────────────────────────────
  if (
    t.includes("regex") ||
    t.includes("regular expression") ||
    t.includes("pattern match") ||
    t.includes("regexp")
  ) return "regex"


  // ── Git / Version Control ──────────────────────────────────
  if (
    t.includes("git") ||
    t.includes("commit") ||
    t.includes("branch") ||
    t.includes("merge") ||
    t.includes("rebase") ||
    t.includes("pull request") ||
    t.includes("conflict") ||
    t.includes("stash") ||
    t.includes("version control")
  ) return "git"


  // ── Research ───────────────────────────────────────────────
  if (
    t.includes("research") ||
    t.includes("study") ||
    t.includes("summarize") ||
    t.includes("survey") ||
    t.includes("literature") ||
    t.includes("paper") ||
    t.includes("academic") ||
    t.includes("thesis") ||
    t.includes("pros and cons")
  ) return "research"


  // ── Architecture ───────────────────────────────────────────
  if (
    t.includes("architecture") ||
    t.includes("system design") ||
    t.includes("design pattern") ||
    t.includes("microservice") ||
    t.includes("monolith") ||
    t.includes("event driven") ||
    t.includes("scalab") ||
    t.includes("distributed")
  ) return "architecture"


  // ── Database ───────────────────────────────────────────────
  if (
    t.includes("sql") ||
    t.includes("query") ||
    t.includes("database") ||
    t.includes("schema") ||
    t.includes("table") ||
    t.includes("migration") ||
    t.includes("index") ||
    t.includes("join") ||
    t.includes("mongodb") ||
    t.includes("postgres") ||
    t.includes("mysql") ||
    t.includes("redis") ||
    t.includes("orm")
  ) return "database"


  // ── Writing / Communication ────────────────────────────────
  if (
    t.includes("write a mail") ||
    t.includes("write email") ||
    t.includes("draft email") ||
    t.includes("email") ||
    t.includes("message") ||
    t.includes("letter") ||
    t.includes("proposal") ||
    t.includes("report") ||
    t.includes("blog") ||
    t.includes("linkedin") ||
    t.includes("cover letter") ||
    t.includes("announcement")
  ) return "writing"


  // ── Comparison ─────────────────────────────────────────────
  if (
    t.includes(" vs ") ||
    t.includes("versus") ||
    t.includes("compare") ||
    t.includes("difference between") ||
    t.includes("which is better") ||
    t.includes("faster than") ||
    t.includes("prefer") ||
    t.includes("choose between")
  ) return "comparison"


  // ── Explanation ────────────────────────────────────────────
  if (
    t.includes("explain") ||
    t.includes("what is") ||
    t.includes("what are") ||
    t.includes("how does") ||
    t.includes("how do") ||
    t.includes("why is") ||
    t.includes("why does") ||
    t.includes("tell me about") ||
    t.includes("describe") ||
    t.includes("overview")
  ) return "explanation"


  // ── General Coding ─────────────────────────────────────────
  if (
    t.includes("code") ||
    t.includes("script") ||
    t.includes("function") ||
    t.includes("class") ||
    t.includes("module") ||
    t.includes("implement") ||
    t.includes("create") ||
    t.includes("build") ||
    t.includes("develop") ||
    t.includes("generate") ||
    t.includes("write a program") ||
    t.includes("write a script")
  ) return "coding"


  return "general"

}


// ============================================================
// LANGUAGE DETECTION
// ============================================================

function detectLanguage(prompt) {

  const t = prompt.toLowerCase()

  if (t.includes("python") || t.includes("django") || t.includes("flask") || t.includes("fastapi") || t.includes("pandas") || t.includes("numpy"))
    return "Python"

  if (t.includes("typescript") || t.includes(" ts ") || t.includes(".ts"))
    return "TypeScript"

  if (t.includes("javascript") || t.includes("node") || t.includes(" js ") || t.includes("express") || t.includes("next.js") || t.includes("nuxt"))
    return "JavaScript"

  if (t.includes("react") || t.includes("jsx") || t.includes(".jsx"))
    return "React (JavaScript)"

  if (t.includes("vue") || t.includes(".vue"))
    return "Vue.js"

  if (t.includes("angular"))
    return "Angular"

  if (t.includes("java") && !t.includes("javascript"))
    return "Java"

  if (t.includes("kotlin"))
    return "Kotlin"

  if (t.includes("swift"))
    return "Swift"

  if (t.includes("golang") || t.includes(" go "))
    return "Go"

  if (t.includes("rust"))
    return "Rust"

  if (t.includes(" c# ") || t.includes("csharp") || t.includes(".net") || t.includes("dotnet"))
    return "C#"

  if (t.includes(" c++ ") || t.includes("cpp"))
    return "C++"

  if (t.includes(" c ") && (t.includes("pointer") || t.includes("malloc")))
    return "C"

  if (t.includes("php") || t.includes("laravel"))
    return "PHP"

  if (t.includes("ruby") || t.includes("rails"))
    return "Ruby"

  if (t.includes("sql") || t.includes("mysql") || t.includes("postgres") || t.includes("sqlite"))
    return "SQL"

  if (t.includes("bash") || t.includes("shell") || t.includes("zsh"))
    return "Bash/Shell"

  if (t.includes("dart") || t.includes("flutter"))
    return "Dart (Flutter)"

  if (t.includes("r language") || t.includes("ggplot") || t.includes("tidyverse"))
    return "R"

  return ""

}


// ============================================================
// PROMPT BUILDERS
// ============================================================

function buildCoding(prompt, language) {

  return `You are a senior software engineer with deep expertise in ${language || "software development"}.

Task:
${prompt}

Requirements:

• Write clean, production-ready ${language || ""} code
• Add clear inline comments explaining non-obvious logic
• Follow SOLID principles and language-specific best practices
• Handle edge cases and include basic error handling
• Keep the code modular and reusable where possible

Output format:
Return the complete code first, followed by:
1. A brief explanation of the approach
2. Key decisions or trade-offs made
3. How to run or use the code
4. Any dependencies required`

}


function buildDebug(prompt) {

  return `You are an expert debugging engineer with years of experience diagnosing complex software issues.

Problem:
${prompt}

Debugging approach:

• Identify the root cause with a clear explanation of why it happens
• Provide the corrected, working code
• Walk through the fix step by step
• List any related issues this bug might cause if left unfixed
• Suggest defensive coding practices to prevent this type of bug in future
• If multiple causes are possible, address each one`

}


function buildArchitecture(prompt) {

  return `You are a senior system architect with experience designing large-scale, production systems.

Question:
${prompt}

Provide a thorough response covering:

• High-level system architecture with key components
• Technology stack recommendations with justification
• Data flow and communication between services
• Scalability strategy (horizontal vs vertical, load balancing)
• Fault tolerance and failure handling
• Security considerations at the architecture level
• Estimated complexity and phased implementation plan
• Trade-offs of the proposed design vs alternatives`

}


function buildDatabase(prompt) {

  return `You are a senior database engineer with expertise in both relational and NoSQL systems.

Task:
${prompt}

Provide:

• The complete, correct query or schema definition
• Step-by-step explanation of how the query/schema works
• Performance analysis — time and space complexity
• Index strategy: which columns to index and why
• Common pitfalls and how this solution avoids them
• Alternative approaches and when to use them
• Sample output or expected result`

}


function buildWriting(prompt) {

  return `You are a professional communication specialist skilled in business, technical, and creative writing.

Task:
${prompt}

Produce:

• A well-structured, polished draft ready to send or publish
• Clear opening that establishes context and purpose immediately
• Logical flow with smooth transitions between sections
• Appropriate tone calibrated to the audience (formal / semi-formal / casual)
• Strong, concise closing with a clear call to action if needed
• Offer 2 variations if tone might vary (e.g. assertive vs diplomatic)`

}


function buildComparison(prompt) {

  return `You are a senior technical analyst skilled at objective, balanced comparisons.

Question:
${prompt}

Structure your response as:

• Side-by-side overview of the key differences
• Detailed breakdown by category: performance, learning curve, ecosystem, use cases, cost, community support
• Advantages of each option
• Disadvantages and limitations of each option
• Decision matrix: when to choose A vs B
• Real-world examples of companies or projects using each
• Final recommendation with reasoning`

}


function buildExplanation(prompt) {

  return `You are an expert teacher who can explain complex topics clearly to any audience.

Topic:
${prompt}

Explanation structure:

• Start with a simple one-sentence definition (ELI5 level)
• Build up with a proper technical explanation
• Break down every key concept involved
• Use a concrete real-world analogy to make it intuitive
• Provide 1-2 practical examples with code or diagrams (if applicable)
• Common misconceptions to avoid
• How this topic connects to related concepts
• Further reading or next steps to deepen understanding`

}


function buildTesting(prompt) {

  return `You are a senior QA engineer and testing expert who follows TDD and BDD best practices.

Task:
${prompt}

Provide:

• Complete, runnable test suite covering the described functionality
• Unit tests for individual functions/components
• Edge case tests: empty inputs, nulls, boundary values, large inputs
• Negative tests: invalid inputs, expected error scenarios
• Clear test naming convention that documents behaviour (e.g. should_return_X_when_Y)
• Setup and teardown logic where needed (mocks, stubs, fixtures)
• Code coverage notes — which paths are covered
• Instructions to run the tests and interpret results`

}


function buildDevOps(prompt) {

  return `You are a senior DevOps / platform engineer with deep expertise in cloud infrastructure and CI/CD.

Task:
${prompt}

Provide:

• Complete configuration files, scripts, or pipeline definitions
• Step-by-step explanation of each stage or component
• Environment variable and secret management best practices
• Error handling and rollback strategy
• Security hardening recommendations
• Scalability and resource optimisation tips
• Monitoring and alerting setup suggestions
• Common issues in this setup and how to avoid them`

}


function buildSecurity(prompt) {

  return `You are a senior application security engineer and ethical hacker specialising in secure software design.

Task:
${prompt}

Cover:

• Detailed explanation of the vulnerability or security concern
• Risk level: Critical / High / Medium / Low — with CVSS context if applicable
• Attack vector: how an attacker would exploit this
• Proof-of-concept example (safe and educational)
• Remediation: exact code changes or configuration fixes needed
• Defence-in-depth strategy: layered security controls
• OWASP or industry guidelines relevant to this issue
• Security testing methods to verify the fix is effective`

}


function buildPerformance(prompt) {

  return `You are a performance engineering expert specialising in profiling, optimisation, and scalable system design.

Task:
${prompt}

Provide:

• Diagnosis of the likely performance bottleneck
• Profiling approach: which tools to use and what metrics to capture
• Optimised code or configuration with before/after comparison
• Algorithmic complexity analysis: O(n) before and after
• Memory usage considerations
• Caching strategy if applicable
• Database query optimisation if relevant
• Load testing approach to validate the improvement
• Monitoring metrics to track ongoing performance`

}


function buildDataScience(prompt) {

  return `You are a senior data scientist and ML engineer with expertise in the full ML lifecycle.

Task:
${prompt}

Provide:

• Problem framing: supervised/unsupervised/reinforcement — which applies and why
• Data requirements: what data is needed, format, volume, quality checks
• Feature engineering approach: key transformations and why
• Model selection with justification (and alternatives worth considering)
• Complete implementation code with comments
• Training, validation and evaluation strategy
• Key metrics to track: accuracy, precision, recall, F1, AUC etc.
• Potential pitfalls: overfitting, data leakage, class imbalance
• Deployment considerations and how to serve the model in production`

}


function buildAPI(prompt) {

  return `You are a senior API architect with expertise in REST, GraphQL, and API security best practices.

Task:
${prompt}

Provide:

• Complete API design with all endpoints, methods, and URL structure
• Request and response schemas with field types and descriptions
• HTTP status codes used and when each is returned
• Authentication and authorisation mechanism
• Versioning strategy
• Input validation and error response format
• Rate limiting and pagination design
• Example curl / HTTP request and response for each endpoint
• OpenAPI / Swagger snippet for the main endpoints`

}


function buildUIUX(prompt) {

  return `You are a senior frontend engineer and UI/UX specialist with a strong eye for design systems and accessibility.

Task:
${prompt}

Provide:

• Complete, working component or layout code
• Semantic HTML structure with accessibility attributes (ARIA, roles, alt text)
• Responsive design implementation (mobile-first where applicable)
• State management: hover, focus, active, disabled, loading states
• Micro-interactions and animation approach
• Cross-browser compatibility notes
• Performance considerations: lazy loading, image optimisation, CSS efficiency
• Design tokens / CSS variables used
• How the component fits into a broader design system`

}


function buildCodeReview(prompt) {

  return `You are a senior software engineer performing a thorough, constructive code review.

Code / Context:
${prompt}

Review covering:

• Overall code quality assessment
• Bugs or logic errors found (with line-level explanation)
• Security vulnerabilities or risky patterns
• Performance issues or inefficient algorithms
• Violations of SOLID, DRY, or KISS principles
• Naming clarity: variables, functions, classes
• Missing or inadequate error handling
• Test coverage gaps
• Refactored version of the most critical issues
• Priority ranking: Critical → High → Medium → Low findings`

}


function buildDocumentation(prompt) {

  return `You are a senior technical writer and documentation engineer.

Task:
${prompt}

Produce:

• Well-structured documentation in Markdown format
• Clear overview section explaining the purpose
• Prerequisites and installation / setup instructions
• Usage examples with working code snippets
• API reference table (if functions or methods are involved): name, params, return type, description
• Configuration options with defaults explained
• Common errors and how to resolve them
• FAQ section for anticipated questions
• Contribution guidelines (if a README is requested)`

}


function buildRegex(prompt) {

  return `You are a regex expert who can craft precise, readable regular expressions for any use case.

Task:
${prompt}

Provide:

• The complete regular expression pattern
• A breakdown of every token, group, and quantifier in the pattern
• Explanation of flags used (g, i, m, s etc.) and why
• Working code example using the regex in the relevant language
• Test cases showing what the pattern matches and what it rejects
• Edge cases to be aware of
• Alternative patterns if trade-offs exist (e.g. strict vs lenient)
• Link to test it live: https://regex101.com`

}


function buildGit(prompt) {

  return `You are a Git expert and version control specialist with deep knowledge of workflows and advanced Git operations.

Task:
${prompt}

Provide:

• The exact Git commands needed, in order
• Explanation of what each command does and why
• Before/after state of the repository
• How to verify the operation worked correctly
• How to undo or recover if something goes wrong
• Best practices for this type of Git operation
• Common mistakes to avoid
• Relevant Git aliases or config settings that help`

}


function buildResearch(prompt) {

  return `You are a thorough research analyst who synthesises complex topics into clear, actionable insights.

Topic:
${prompt}

Provide:

• Executive summary (3-5 sentences capturing the key takeaway)
• Background and context: why this topic matters
• Key findings or concepts, organised by theme
• Current state of the field or technology
• Major perspectives or schools of thought (where applicable)
• Practical implications and applications
• Limitations, open questions, or areas of debate
• Conclusions and recommendations
• Suggested resources for deeper reading`

}


function buildGeneral(prompt) {

  return `Answer the following question clearly and thoroughly.

Question:
${prompt}

Provide:

• A direct, concise answer to the question first
• Detailed explanation supporting the answer
• Concrete example or use case that illustrates the point
• Any important caveats, exceptions, or edge cases to be aware of
• Practical next steps or recommendations
• Related topics worth exploring`

}


// ============================================================
// ALREADY-ENHANCED DETECTION
// ============================================================

function isAlreadyEnhanced(prompt) {

  return (
    prompt.includes("Question:")      ||
    prompt.includes("Provide:")       ||
    prompt.includes("Requirements:")  ||
    prompt.includes("Task:")          ||
    prompt.includes("Problem:")       ||
    prompt.includes("Topic:")         ||
    prompt.includes("Include:")       ||
    prompt.includes("Output format:") ||
    prompt.includes("Cover:")         ||
    prompt.includes("Structure your") ||
    prompt.includes("Code / Context:")
  )

}


// ============================================================
// EXTRACT CORE CONTENT
// (from inside any enhanced template)
// ============================================================

function extractCoreContent(prompt) {

  const startMarkers = [
    "Task:",
    "Question:",
    "Problem:",
    "Topic:",
    "Code / Context:"
  ]

  const endMarkers = [
    "Provide:",
    "Include:",
    "Requirements:",
    "Return",
    "Output format:",
    "Cover:",
    "Structure your",
    "Debugging approach:",
    "Review covering:",
    "Produce:"
  ]

  const lines = prompt.split("\n")

  for (const marker of startMarkers) {

    const startIndex = lines.findIndex(l => l.trim().startsWith(marker))

    if (startIndex === -1) continue

    const contentLines = []

    for (let i = startIndex + 1; i < lines.length; i++) {

      const line = lines[i].trim()

      if (endMarkers.some(m => line.startsWith(m))) break

      if (line !== "") contentLines.push(line)

    }

    if (contentLines.length > 0) {
      return contentLines.join(" ").trim()
    }

  }

  return null

}


// ============================================================
// MAIN ENHANCER
// ============================================================

function enhancePrompt(prompt) {

  prompt = normalizePrompt(prompt)

  if (!prompt) return ""

  if (isAlreadyEnhanced(prompt)) return prompt

  const mode = getEnhanceMode()


  // ── Minimal mode ───────────────────────────────────────────
  if (mode === "minimal") {
    return prompt
  }

  // ── Explanation mode ───────────────────────────────────────
  if (mode === "explanation") {
    return buildExplanation(prompt)
  }

  // ── General Queries mode ───────────────────────────────────
  if (mode === "general") {
    return buildGeneral(prompt)
  }

  // ── Developer mode ─────────────────────────────────────────
  if (mode === "developer") {

    const intent = detectIntent(prompt)
    const lang   = detectLanguage(prompt)

    switch (intent) {
      case "coding":        return buildCoding(prompt, lang)
      case "debug":         return buildDebug(prompt)
      case "architecture":  return buildArchitecture(prompt)
      case "database":      return buildDatabase(prompt)
      case "writing":       return buildWriting(prompt)
      case "comparison":    return buildComparison(prompt)
      case "explanation":   return buildExplanation(prompt)
      case "testing":       return buildTesting(prompt)
      case "devops":        return buildDevOps(prompt)
      case "security":      return buildSecurity(prompt)
      case "performance":   return buildPerformance(prompt)
      case "data-science":  return buildDataScience(prompt)
      case "api":           return buildAPI(prompt)
      case "ui-ux":         return buildUIUX(prompt)
      case "code-review":   return buildCodeReview(prompt)
      case "documentation": return buildDocumentation(prompt)
      case "regex":         return buildRegex(prompt)
      case "git":           return buildGit(prompt)
      case "research":      return buildResearch(prompt)
      default:              return buildGeneral(prompt)
    }

  }

  return buildGeneral(prompt)

}
