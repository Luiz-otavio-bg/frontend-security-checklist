import { LanguageSwitch } from './LanguageSwitch'
import { progressColor } from '../lib/securityContent'

export function Header({ activeView, completedCount, totalControls, language, onLanguageChange, score, ui }) {
  const title = {
    analyzer: ui.analyzerTitle,
    checklist: ui.checklistTitle,
    examples: ui.examplesTitle,
  }[activeView]
  const description = {
    analyzer: ui.analyzerDescription,
    checklist: ui.checklistDescription,
    examples: ui.examplesDescription,
  }[activeView]

  return (
    <header className="border-b border-border-default bg-bg-raised/70 px-5 py-5 backdrop-blur md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
        <div>
          <div className="mb-3 flex items-center gap-3">
            <img
              src="/bg-logo.ico"
              alt="BG logo"
              className="h-9 w-9 object-contain lg:hidden"
            />
            <p className="font-mono text-2xs uppercase tracking-widest text-cyber-cyan">
              {ui.eyebrow}
            </p>
          </div>
          <h1 className="font-head text-3xl font-bold text-text-primary md:text-4xl">
            {title}
          </h1>
          <p className="mt-2 max-w-2xl font-head text-md text-text-secondary">
            {description}
          </p>
        </div>

        <div className="min-w-72 rounded-lg border border-border-default bg-surface p-5">
          <LanguageSwitch
            language={language}
            onChange={onLanguageChange}
            label={ui.languageLabel}
          />
          <div className="mb-3 flex items-center justify-between">
            <span className="font-mono text-xs text-text-secondary">{ui.completion}</span>
            <span className="font-mono text-xs text-cyber-cyan">{score}%</span>
          </div>
          <div className="h-1.5 overflow-hidden rounded-full bg-surface-2">
            <div
              className={`h-full rounded-full ${progressColor(score)} transition-all duration-500`}
              style={{ width: `${score}%` }}
            />
          </div>
          <p className="mt-3 font-head text-sm text-text-secondary">
            {ui.controlsReviewed(completedCount, totalControls)}
          </p>
        </div>
      </div>
    </header>
  )
}
