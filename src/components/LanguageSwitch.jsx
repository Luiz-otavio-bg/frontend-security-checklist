import { Languages } from 'lucide-react'

export function LanguageSwitch({ language, onChange, label }) {
  return (
    <div className="mb-4 flex items-center justify-between gap-3 border-b border-border-default pb-4">
      <div className="flex items-center gap-2 text-text-secondary">
        <Languages size={16} aria-hidden="true" />
        <span className="font-mono text-2xs uppercase tracking-widest">{label}</span>
      </div>
      <div className="grid grid-cols-2 rounded-sm border border-border-subtle bg-bg-raised p-0.5">
        {['pt', 'en'].map((option) => (
          <button
            key={option}
            type="button"
            aria-label={`Switch language to ${option.toUpperCase()}`}
            onClick={() => onChange(option)}
            className={`rounded-xs px-3 py-1.5 font-mono text-2xs uppercase tracking-widest transition-colors ${
              language === option
                ? 'bg-cyber-cyan text-bg-base'
                : 'text-text-secondary hover:text-text-primary'
            }`}
          >
            {option.toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  )
}
