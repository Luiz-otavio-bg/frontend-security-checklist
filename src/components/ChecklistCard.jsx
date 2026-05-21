import { CheckCircle2, Circle } from 'lucide-react'
import { severityStyles } from '../lib/securityContent'

export function ChecklistCard({ item, checked, onToggle, ui }) {
  const Icon = item.icon
  const CheckIcon = checked ? CheckCircle2 : Circle

  return (
    <article className="rounded-lg border border-border-default bg-surface p-5 transition-colors hover:border-border-subtle">
      <div className="mb-4 flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-md bg-cyber-cyan/10 text-cyber-cyan">
            <Icon size={18} aria-hidden="true" />
          </div>
          <div>
            <p className="font-head text-lg font-semibold text-text-primary">{item.title}</p>
            <p className="font-mono text-xs text-text-muted">{item.category}</p>
          </div>
        </div>
        <span
          className={`rounded-xs border px-2 py-0.5 font-mono text-2xs uppercase tracking-widest ${severityStyles[item.severity]}`}
        >
          {ui.severities[item.severity]}
        </span>
      </div>

      <p className="mb-4 font-head text-md text-text-secondary">{item.summary}</p>

      <div className="grid gap-3">
        <InfoBlock label={ui.risk} value={item.risk} />
        <InfoBlock label={ui.prevention} value={item.prevention} />
      </div>

      <div className="mt-4 overflow-x-auto rounded-md border border-border-default bg-bg-raised px-5 py-4">
        <pre className="font-mono text-xs leading-relaxed text-text-secondary">
          <span className="text-text-muted">{ui.exampleToReview}</span>
          {'\n'}
          <span className="text-cyber-cyan">{item.example}</span>
        </pre>
      </div>

      <button
        type="button"
        aria-label={`Mark ${item.title} as ${checked ? ui.notReviewedAria : ui.reviewedAria}`}
        onClick={onToggle}
        className={`mt-4 inline-flex items-center gap-2 rounded-sm border px-5 py-2.5 font-head text-xs font-semibold uppercase tracking-widest transition-colors ${
          checked
            ? 'border-signal-green/20 bg-signal-green/10 text-signal-green-600'
            : 'border-cyber-cyan-800 bg-transparent text-cyber-cyan hover:border-cyber-cyan hover:bg-cyber-cyan/5'
        }`}
      >
        <CheckIcon size={16} aria-hidden="true" />
        {checked ? ui.reviewed : ui.markReviewed}
      </button>
    </article>
  )
}

function InfoBlock({ label, value }) {
  return (
    <div className="border-l border-border-subtle pl-3">
      <p className="font-mono text-2xs uppercase tracking-widest text-text-muted">{label}</p>
      <p className="mt-1 font-head text-sm text-text-secondary">{value}</p>
    </div>
  )
}
