import { AlertTriangle } from 'lucide-react'

export function MetricCard({ label, value, tone }) {
  const toneClass = {
    danger: 'border-alert-red/25 bg-alert-red/[0.03] text-alert-red',
    warning: 'border-warn-amber/25 bg-warn-amber/[0.03] text-warn-amber',
    success: 'border-signal-green/20 bg-signal-green/[0.03] text-signal-green-600',
  }[tone]

  return (
    <div className={`rounded-lg border bg-surface p-5 transition-colors ${toneClass}`}>
      <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-md bg-current/10">
        <AlertTriangle size={18} aria-hidden="true" className="text-current" />
      </div>
      <p className="font-head text-base font-semibold text-text-primary">{label}</p>
      <p className="mt-3 font-mono text-3xl text-text-primary">{value}</p>
    </div>
  )
}
