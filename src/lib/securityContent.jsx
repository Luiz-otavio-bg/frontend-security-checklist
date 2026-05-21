import {
  EyeOff,
  FileWarning,
  GlobeLock,
  KeyRound,
  ListChecks,
  LockKeyhole,
  Server,
  ShieldCheck,
} from 'lucide-react'

export const githubUrl = 'https://github.com/Luiz-otavio-bg'

const checklistEn = [
  {
    id: 'token-storage',
    title: 'Token storage',
    category: 'Client-side',
    severity: 'High',
    icon: KeyRound,
    summary: 'Avoid storing sensitive access tokens in localStorage.',
    risk: 'A successful XSS can read localStorage and exfiltrate active tokens.',
    prevention: 'Prefer secure, HttpOnly, SameSite cookies for session tokens and keep token lifetime short.',
    example: 'localStorage.setItem("access_token", token)',
  },
  {
    id: 'authz',
    title: 'Authentication and authorization',
    category: 'Identity',
    severity: 'Critical',
    icon: LockKeyhole,
    summary: 'Never trust route guards as the only access control layer.',
    risk: 'Hidden screens and disabled buttons do not prevent direct API requests.',
    prevention: 'Enforce authorization on the backend for every protected action and resource.',
    example: 'if (user.role === "admin") showAdminPanel()',
  },
  {
    id: 'sensitive-data',
    title: 'Sensitive data exposure',
    category: 'Data',
    severity: 'Critical',
    icon: EyeOff,
    summary: 'Do not expose secrets, private data, or internal payloads in the UI bundle.',
    risk: 'API keys, debug payloads, and personal data can be extracted from browser tools.',
    prevention: 'Keep secrets server-side and return only the minimum data required by the screen.',
    example: 'VITE_PRIVATE_API_KEY="secret"',
  },
  {
    id: 'cors',
    title: 'CORS basics',
    category: 'Browser',
    severity: 'Medium',
    icon: GlobeLock,
    summary: 'Use strict origins and avoid permissive CORS in production.',
    risk: 'Overly broad CORS can allow untrusted origins to interact with sensitive endpoints.',
    prevention: 'Allow only known production origins and avoid wildcard origins with credentials.',
    example: 'Access-Control-Allow-Origin: *',
  },
  {
    id: 'security-headers',
    title: 'Security headers',
    category: 'Hardening',
    severity: 'High',
    icon: Server,
    summary: 'Use browser security headers to reduce common web attack impact.',
    risk: 'Missing headers can increase exposure to XSS, clickjacking, and data leakage.',
    prevention: 'Configure CSP, X-Frame-Options or frame-ancestors, HSTS, Referrer-Policy, and Permissions-Policy.',
    example: 'Content-Security-Policy: default-src "self"',
  },
  {
    id: 'validation',
    title: 'Frontend validation',
    category: 'Input',
    severity: 'Medium',
    icon: ListChecks,
    summary: 'Treat frontend validation as usability, not security.',
    risk: 'Attackers can bypass client validation and send crafted requests directly.',
    prevention: 'Validate and sanitize all input on the server, then mirror safe constraints in the UI.',
    example: '<input maxLength={20} pattern="[a-z]+" />',
  },
  {
    id: 'forms',
    title: 'Form safety',
    category: 'Input',
    severity: 'Medium',
    icon: FileWarning,
    summary: 'Protect forms against unsafe submission flows and weak feedback.',
    risk: 'Poor form handling can leak data, allow spam, or create confusing account flows.',
    prevention: 'Use CSRF protections where needed, clear error messages, rate limits, and safe autocomplete settings.',
    example: '<form action="/transfer" method="POST">',
  },
  {
    id: 'login-security',
    title: 'Login security',
    category: 'Identity',
    severity: 'High',
    icon: ShieldCheck,
    summary: 'Design login screens around secure behavior and account protection.',
    risk: 'Weak login feedback and missing controls can help credential stuffing and account takeover.',
    prevention: 'Use MFA support, generic error messages, rate limiting, lockout policies, and secure password reset flows.',
    example: 'User not found for email: luiz@example.com',
  },
]

const checklistPt = [
  {
    id: 'token-storage',
    title: 'Armazenamento de tokens',
    category: 'Client-side',
    severity: 'High',
    icon: KeyRound,
    summary: 'Evite salvar tokens sensíveis no localStorage.',
    risk: 'Um XSS bem-sucedido pode ler o localStorage e capturar tokens ativos.',
    prevention: 'Prefira cookies Secure, HttpOnly e SameSite para tokens de sessão, com tempo de vida curto.',
    example: 'localStorage.setItem("access_token", token)',
  },
  {
    id: 'authz',
    title: 'Autenticação e autorização',
    category: 'Identidade',
    severity: 'Critical',
    icon: LockKeyhole,
    summary: 'Nunca confie em proteção de rota como única camada de controle de acesso.',
    risk: 'Telas escondidas e botões desativados não impedem chamadas diretas para APIs.',
    prevention: 'Aplique autorização no backend para toda ação e recurso protegido.',
    example: 'if (user.role === "admin") showAdminPanel()',
  },
  {
    id: 'sensitive-data',
    title: 'Exposição de dados sensíveis',
    category: 'Dados',
    severity: 'Critical',
    icon: EyeOff,
    summary: 'Não exponha segredos, dados privados ou payloads internos no bundle da UI.',
    risk: 'Chaves de API, payloads de debug e dados pessoais podem ser extraídos pelo navegador.',
    prevention: 'Mantenha segredos no servidor e retorne apenas os dados mínimos necessários para a tela.',
    example: 'VITE_PRIVATE_API_KEY="secret"',
  },
  {
    id: 'cors',
    title: 'Fundamentos de CORS',
    category: 'Navegador',
    severity: 'Medium',
    icon: GlobeLock,
    summary: 'Use origins restritas e evite CORS permissivo em produção.',
    risk: 'CORS amplo demais pode permitir que origins não confiáveis interajam com endpoints sensíveis.',
    prevention: 'Permita apenas origins conhecidas de produção e evite wildcard com credenciais.',
    example: 'Access-Control-Allow-Origin: *',
  },
  {
    id: 'security-headers',
    title: 'Headers de segurança',
    category: 'Hardening',
    severity: 'High',
    icon: Server,
    summary: 'Use headers de segurança para reduzir o impacto de ataques web comuns.',
    risk: 'Headers ausentes podem aumentar exposição a XSS, clickjacking e vazamento de dados.',
    prevention: 'Configure CSP, X-Frame-Options ou frame-ancestors, HSTS, Referrer-Policy e Permissions-Policy.',
    example: 'Content-Security-Policy: default-src "self"',
  },
  {
    id: 'validation',
    title: 'Validação no frontend',
    category: 'Entrada',
    severity: 'Medium',
    icon: ListChecks,
    summary: 'Trate validação no frontend como usabilidade, não como segurança.',
    risk: 'Atacantes podem ignorar validações do cliente e enviar requisições manipuladas diretamente.',
    prevention: 'Valide e sanitize toda entrada no servidor, espelhando restrições seguras na UI.',
    example: '<input maxLength={20} pattern="[a-z]+" />',
  },
  {
    id: 'forms',
    title: 'Segurança em formulários',
    category: 'Entrada',
    severity: 'Medium',
    icon: FileWarning,
    summary: 'Proteja formulários contra fluxos inseguros e feedback fraco.',
    risk: 'Formulários mal tratados podem vazar dados, permitir spam ou criar fluxos confusos de conta.',
    prevention: 'Use proteção CSRF quando necessário, mensagens claras, rate limit e autocomplete seguro.',
    example: '<form action="/transfer" method="POST">',
  },
  {
    id: 'login-security',
    title: 'Segurança no login',
    category: 'Identidade',
    severity: 'High',
    icon: ShieldCheck,
    summary: 'Desenhe telas de login pensando em comportamento seguro e proteção de conta.',
    risk: 'Feedback fraco e controles ausentes podem facilitar credential stuffing e tomada de conta.',
    prevention: 'Use suporte a MFA, erros genéricos, rate limiting, bloqueios e reset de senha seguro.',
    example: 'Usuário não encontrado para email: luiz@example.com',
  },
]

const examplesEn = [
  {
    id: 'token-storage-example',
    title: 'Token storage review',
    category: 'Client-side',
    severity: 'High',
    context: 'A login flow receives an access token after authentication.',
    insecure: `// Insecure pattern
localStorage.setItem("access_token", token)

fetch("/api/me", {
  headers: {
    Authorization: \`Bearer \${localStorage.getItem("access_token")}\`,
  },
})`,
    safer: `// Safer direction
// Keep the session token in an HttpOnly, Secure, SameSite cookie.
// The frontend asks the backend for the current session state.

const session = await fetch("/api/session", {
  credentials: "include",
}).then((response) => response.json())`,
    takeaway: 'The frontend can track session state, but sensitive tokens should not be readable by JavaScript.',
  },
  {
    id: 'route-guard-example',
    title: 'Route guard versus authorization',
    category: 'Identity',
    severity: 'Critical',
    context: 'An admin page is hidden from regular users in the interface.',
    insecure: `// Incomplete protection
if (user.role === "admin") {
  return <AdminPanel />
}

return <Navigate to="/dashboard" />`,
    safer: `// Better boundary
// UI guards improve experience, but the API must enforce access.

app.get("/api/admin/reports", requireAuth, requireRole("admin"), (req, res) => {
  return res.json({ reports: safeReportList })
})`,
    takeaway: 'Hiding UI is not authorization. Every protected API route needs its own permission check.',
  },
  {
    id: 'env-exposure-example',
    title: 'Environment variable exposure',
    category: 'Data',
    severity: 'Critical',
    context: 'A React build needs to call a third-party service.',
    insecure: `// Insecure pattern
const apiKey = import.meta.env.VITE_PRIVATE_BILLING_KEY

await fetch("https://billing.example.com/charge", {
  headers: { "x-api-key": apiKey },
})`,
    safer: `// Safer direction
// Keep private keys in the server environment only.

await fetch("/api/billing/charge", {
  method: "POST",
  body: JSON.stringify({ planId }),
})`,
    takeaway: 'Variables exposed to the browser bundle are public. Private keys belong on the server.',
  },
  {
    id: 'security-headers-example',
    title: 'Security headers baseline',
    category: 'Hardening',
    severity: 'High',
    context: 'A production frontend is served without baseline browser protections.',
    insecure: `// Weak response
HTTP/1.1 200 OK
Content-Type: text/html`,
    safer: `// Safer baseline
Content-Security-Policy: default-src 'self'; frame-ancestors 'none'
Strict-Transport-Security: max-age=31536000; includeSubDomains
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=()`,
    takeaway: 'Security headers reduce impact and make browser behavior more predictable.',
  },
]

const examplesPt = [
  {
    id: 'token-storage-example',
    title: 'Revisão de armazenamento de token',
    category: 'Client-side',
    severity: 'High',
    context: 'Um fluxo de login recebe um access token depois da autenticação.',
    insecure: `// Padrão inseguro
localStorage.setItem("access_token", token)

fetch("/api/me", {
  headers: {
    Authorization: \`Bearer \${localStorage.getItem("access_token")}\`,
  },
})`,
    safer: `// Direção mais segura
// Mantenha o token de sessão em cookie HttpOnly, Secure e SameSite.
// O frontend consulta o backend para saber o estado da sessão.

const session = await fetch("/api/session", {
  credentials: "include",
}).then((response) => response.json())`,
    takeaway: 'O frontend pode acompanhar o estado da sessão, mas tokens sensíveis não devem ser lidos por JavaScript.',
  },
  {
    id: 'route-guard-example',
    title: 'Route guard versus autorização',
    category: 'Identidade',
    severity: 'Critical',
    context: 'Uma página admin é escondida de usuários comuns na interface.',
    insecure: `// Proteção incompleta
if (user.role === "admin") {
  return <AdminPanel />
}

return <Navigate to="/dashboard" />`,
    safer: `// Melhor limite de segurança
// Guards de UI melhoram a experiência, mas a API precisa validar acesso.

app.get("/api/admin/reports", requireAuth, requireRole("admin"), (req, res) => {
  return res.json({ reports: safeReportList })
})`,
    takeaway: 'Esconder a interface não é autorização. Toda rota protegida da API precisa validar permissões.',
  },
  {
    id: 'env-exposure-example',
    title: 'Exposição de variável de ambiente',
    category: 'Dados',
    severity: 'Critical',
    context: 'Um build React precisa chamar um serviço terceiro.',
    insecure: `// Padrão inseguro
const apiKey = import.meta.env.VITE_PRIVATE_BILLING_KEY

await fetch("https://billing.example.com/charge", {
  headers: { "x-api-key": apiKey },
})`,
    safer: `// Direção mais segura
// Mantenha chaves privadas apenas no ambiente do servidor.

await fetch("/api/billing/charge", {
  method: "POST",
  body: JSON.stringify({ planId }),
})`,
    takeaway: 'Variáveis expostas no bundle do navegador são públicas. Chaves privadas pertencem ao servidor.',
  },
  {
    id: 'security-headers-example',
    title: 'Baseline de headers de segurança',
    category: 'Hardening',
    severity: 'High',
    context: 'Um frontend de produção é servido sem proteções básicas do navegador.',
    insecure: `// Resposta fraca
HTTP/1.1 200 OK
Content-Type: text/html`,
    safer: `// Baseline mais seguro
Content-Security-Policy: default-src 'self'; frame-ancestors 'none'
Strict-Transport-Security: max-age=31536000; includeSubDomains
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=()`,
    takeaway: 'Headers de segurança reduzem impacto e deixam o comportamento do navegador mais previsível.',
  },
]

export const filters = ['All', 'Critical', 'High', 'Medium']
export const analyzerLevels = ['Low', 'Medium', 'High', 'Critical']

export const analyzerQuestions = [
  {
    id: 'token-local-storage',
    severity: 'High',
    weight: 18,
    en: {
      question: 'Does the application store access tokens in localStorage or sessionStorage?',
      recommendation: 'Move sensitive session tokens to Secure, HttpOnly and SameSite cookies.',
    },
    pt: {
      question: 'A aplicação salva access tokens no localStorage ou sessionStorage?',
      recommendation: 'Mova tokens sensíveis de sessão para cookies Secure, HttpOnly e SameSite.',
    },
  },
  {
    id: 'backend-authorization',
    severity: 'Critical',
    weight: 24,
    en: {
      question: 'Are protected actions authorized only by frontend route guards?',
      recommendation: 'Validate permissions on every protected backend endpoint.',
    },
    pt: {
      question: 'Ações protegidas dependem apenas de guards de rota no frontend?',
      recommendation: 'Valide permissões em todo endpoint protegido do backend.',
    },
  },
  {
    id: 'secret-exposure',
    severity: 'Critical',
    weight: 24,
    en: {
      question: 'Does the frontend bundle expose API keys, private endpoints or sensitive payloads?',
      recommendation: 'Keep secrets server-side and return only the data required by each screen.',
    },
    pt: {
      question: 'O bundle do frontend expõe chaves de API, endpoints privados ou payloads sensíveis?',
      recommendation: 'Mantenha segredos no servidor e retorne apenas os dados necessários para cada tela.',
    },
  },
  {
    id: 'cors-wildcard',
    severity: 'Medium',
    weight: 12,
    en: {
      question: 'Does production CORS allow wildcard origins or untrusted domains?',
      recommendation: 'Restrict CORS to trusted production origins and review credential usage.',
    },
    pt: {
      question: 'O CORS de produção permite wildcard ou domínios não confiáveis?',
      recommendation: 'Restrinja CORS a origins confiáveis de produção e revise o uso de credenciais.',
    },
  },
  {
    id: 'missing-headers',
    severity: 'High',
    weight: 16,
    en: {
      question: 'Are baseline security headers missing from production responses?',
      recommendation: 'Add CSP, HSTS, Referrer-Policy, Permissions-Policy and frame restrictions.',
    },
    pt: {
      question: 'Headers básicos de segurança estão ausentes nas respostas de produção?',
      recommendation: 'Adicione CSP, HSTS, Referrer-Policy, Permissions-Policy e restrições de frame.',
    },
  },
  {
    id: 'client-validation-only',
    severity: 'Medium',
    weight: 10,
    en: {
      question: 'Is user input validated only in the browser?',
      recommendation: 'Validate and sanitize user input again on the server.',
    },
    pt: {
      question: 'A entrada do usuário é validada apenas no navegador?',
      recommendation: 'Valide e sanitize a entrada do usuário novamente no servidor.',
    },
  },
  {
    id: 'weak-login-controls',
    severity: 'High',
    weight: 16,
    en: {
      question: 'Is the login flow missing rate limiting, generic errors or MFA support?',
      recommendation: 'Add rate limiting, generic login feedback and MFA support where possible.',
    },
    pt: {
      question: 'O fluxo de login não possui rate limit, erros genéricos ou suporte a MFA?',
      recommendation: 'Adicione rate limit, feedback genérico de login e suporte a MFA quando possível.',
    },
  },
]

export const severityStyles = {
  Critical: 'bg-alert-red/10 text-alert-red border-alert-red/20',
  High: 'bg-warn-amber/10 text-warn-amber border-warn-amber/20',
  Medium: 'bg-cyber-cyan/10 text-cyber-cyan border-cyber-cyan/20',
}

export const content = {
  en: {
    languageLabel: 'Language',
    checklistNav: 'Checklist',
    examplesNav: 'Examples',
    analyzerNav: 'Analyzer',
    portfolio: 'Portfolio',
    githubRepo: 'GitHub repo',
    github: 'GitHub',
    analyzerTitle: 'Security Score Analyzer',
    analyzerDescription:
      'Answer a short review questionnaire to estimate frontend security risk and generate prioritized recommendations.',
    eyebrow: 'Front-end security checklist',
    checklistTitle: 'Web UI security review board',
    checklistDescription:
      'A practical checklist for reviewing token handling, authentication flows, browser controls, form safety, and frontend exposure risks.',
    examplesTitle: 'Controlled security examples',
    examplesDescription:
      'Safe comparison examples that explain common frontend security mistakes and stronger implementation directions.',
    completion: 'Completion',
    controlsReviewed: (done, total) => `${done} of ${total} controls reviewed`,
    criticalControls: 'Critical controls',
    highRiskTopics: 'High risk topics',
    reviewedItems: 'Reviewed items',
    analyzerRiskScore: 'Risk score',
    analyzerFindings: 'Findings',
    analyzerQuestionnaire: 'Assessment questionnaire',
    analyzerQuestionnaireText:
      'Mark the statements that are true for the application being reviewed. Higher severity answers increase the final risk score.',
    analyzerRecommendations: 'Recommendations',
    analyzerCleanState: 'No active findings',
    analyzerCleanStateText:
      'No risky statements are selected. Keep validating server-side controls during implementation.',
    analyzerReset: 'Reset answers',
    analyzerRiskLabel: 'Risk level',
    analyzerScoreCopy: (score) => `${score}/100 weighted risk`,
    analyzerSelectedCount: (count) => `${count} selected findings`,
    riskFilter: 'Risk filter',
    filters: { All: 'All', Critical: 'Critical', High: 'High', Medium: 'Medium' },
    severities: { Critical: 'Critical', High: 'High', Medium: 'Medium' },
    exampleLibrary: 'Example library',
    exampleLibraryText:
      'These examples are intentionally controlled. They show review thinking, risk explanation, and prevention patterns for a portfolio audience.',
    risk: 'Risk',
    prevention: 'Prevention',
    exampleToReview: '// example to review',
    markReviewed: 'Mark reviewed',
    reviewed: 'Reviewed',
    notReviewedAria: 'not reviewed',
    reviewedAria: 'reviewed',
    keyTakeaway: 'Key takeaway',
    insecurePattern: 'Insecure pattern',
    saferPattern: 'Safer pattern',
    author: 'Luiz Otávio',
    cyberPortfolio: 'Cyber portfolio',
    checklist: checklistEn,
    examples: examplesEn,
  },
  pt: {
    languageLabel: 'Idioma',
    checklistNav: 'Checklist',
    examplesNav: 'Exemplos',
    analyzerNav: 'Analisador',
    portfolio: 'Portfólio',
    githubRepo: 'GitHub repo',
    github: 'GitHub',
    analyzerTitle: 'Analisador de Score de Segurança',
    analyzerDescription:
      'Responda um questionário curto para estimar risco de segurança front-end e gerar recomendações priorizadas.',
    eyebrow: 'Checklist de segurança front-end',
    checklistTitle: 'Painel de revisão de segurança web',
    checklistDescription:
      'Um checklist prático para revisar tokens, autenticação, controles do navegador, formulários e riscos de exposição no front-end.',
    examplesTitle: 'Exemplos controlados de segurança',
    examplesDescription:
      'Comparações seguras que explicam erros comuns de segurança front-end e direções de implementação mais fortes.',
    completion: 'Progresso',
    controlsReviewed: (done, total) => `${done} de ${total} controles revisados`,
    criticalControls: 'Controles críticos',
    highRiskTopics: 'Tópicos de alto risco',
    reviewedItems: 'Itens revisados',
    analyzerRiskScore: 'Score de risco',
    analyzerFindings: 'Achados',
    analyzerQuestionnaire: 'Questionário de avaliação',
    analyzerQuestionnaireText:
      'Marque as afirmações verdadeiras para a aplicação revisada. Respostas com maior severidade aumentam o score final.',
    analyzerRecommendations: 'Recomendações',
    analyzerCleanState: 'Nenhum achado ativo',
    analyzerCleanStateText:
      'Nenhuma afirmação de risco está selecionada. Continue validando controles server-side durante a implementação.',
    analyzerReset: 'Limpar respostas',
    analyzerRiskLabel: 'Nível de risco',
    analyzerScoreCopy: (score) => `${score}/100 de risco ponderado`,
    analyzerSelectedCount: (count) => `${count} achados selecionados`,
    riskFilter: 'Filtro de risco',
    filters: { All: 'Todos', Critical: 'Crítico', High: 'Alto', Medium: 'Médio' },
    severities: { Critical: 'Crítico', High: 'Alto', Medium: 'Médio' },
    exampleLibrary: 'Biblioteca de exemplos',
    exampleLibraryText:
      'Estes exemplos são intencionalmente controlados. Eles mostram pensamento de revisão, explicação de risco e padrões de prevenção para portfólio.',
    risk: 'Risco',
    prevention: 'Prevenção',
    exampleToReview: '// exemplo para revisar',
    markReviewed: 'Marcar revisado',
    reviewed: 'Revisado',
    notReviewedAria: 'não revisado',
    reviewedAria: 'revisado',
    keyTakeaway: 'Aprendizado-chave',
    insecurePattern: 'Padrão inseguro',
    saferPattern: 'Padrão mais seguro',
    author: 'Luiz Otávio',
    cyberPortfolio: 'Portfólio cyber',
    checklist: checklistPt,
    examples: examplesPt,
  },
}

export function progressColor(score) {
  if (score >= 75) return 'bg-signal-green-600'
  if (score >= 50) return 'bg-cyber-cyan'
  if (score >= 25) return 'bg-warn-amber'
  return 'bg-alert-red'
}

export function calculateAnalyzerResult(selectedIds) {
  const findings = analyzerQuestions.filter((question) => selectedIds.includes(question.id))
  const score = Math.min(
    100,
    findings.reduce((total, question) => total + question.weight, 0),
  )

  return {
    findings,
    score,
    level: getAnalyzerLevel(score),
  }
}

function getAnalyzerLevel(score) {
  if (score >= 70) return 'Critical'
  if (score >= 45) return 'High'
  if (score >= 20) return 'Medium'
  return 'Low'
}
