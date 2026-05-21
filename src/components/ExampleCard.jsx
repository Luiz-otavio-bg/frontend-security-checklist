import { severityStyles } from '../lib/securityContent'

export function ExampleCard({ example, ui }) {
  return (
    <article className="rounded-lg border border-border-default bg-surface p-5 transition-colors hover:border-border-subtle">
      <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="font-head text-xl font-medium text-text-primary">{example.title}</p>
          <p className="mt-1 font-head text-sm text-text-secondary">{example.context}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <span className="rounded-xs border border-border-subtle bg-white/5 px-2 py-0.5 font-mono text-2xs uppercase tracking-widest text-text-secondary">
            {example.category}
          </span>
          <span
            className={`rounded-xs border px-2 py-0.5 font-mono text-2xs uppercase tracking-widest ${severityStyles[example.severity]}`}
          >
            {ui.severities[example.severity]}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
        <CodePanel title={ui.insecurePattern} tone="danger" code={example.insecure} />
        <CodePanel title={ui.saferPattern} tone="success" code={example.safer} />
      </div>

      <div className="mt-4 rounded-md border border-cyber-cyan/20 bg-cyber-cyan/[0.06] px-4 py-3">
        <p className="font-mono text-2xs uppercase tracking-widest text-cyber-cyan">
          {ui.keyTakeaway}
        </p>
        <p className="mt-1 font-head text-sm text-text-secondary">{example.takeaway}</p>
      </div>
    </article>
  )
}

function CodePanel({ title, tone, code }) {
  const toneClass =
    tone === 'danger'
      ? 'border-alert-red/20 text-alert-red'
      : 'border-signal-green/20 text-signal-green-600'

  return (
    <div className={`overflow-hidden rounded-md border bg-bg-raised ${toneClass}`}>
      <div className="border-b border-border-default px-4 py-2">
        <p className="font-mono text-2xs uppercase tracking-widest text-current">{title}</p>
      </div>
      <pre className="overflow-x-auto px-4 py-4 font-mono text-xs leading-relaxed text-text-secondary">
        <code>{code}</code>
      </pre>
    </div>
  )
}
