import { RotateCcw, ShieldAlert } from 'lucide-react'
import {
  analyzerQuestions,
  calculateAnalyzerResult,
  severityStyles,
} from '../lib/securityContent'

const levelStyles = {
  Low: 'text-signal-green-600 border-signal-green/20 bg-signal-green/[0.06]',
  Medium: 'text-cyber-cyan border-cyber-cyan/20 bg-cyber-cyan/[0.06]',
  High: 'text-warn-amber border-warn-amber/20 bg-warn-amber/[0.06]',
  Critical: 'text-alert-red border-alert-red/20 bg-alert-red/[0.06]',
}

export function SecurityAnalyzer({ language, selectedIds, onSelectionChange, ui }) {
  const result = calculateAnalyzerResult(selectedIds)

  function toggleQuestion(id) {
    onSelectionChange(
      selectedIds.includes(id)
        ? selectedIds.filter((selectedId) => selectedId !== id)
        : [...selectedIds, id],
    )
  }

  return (
    <section className="mx-auto grid max-w-7xl grid-cols-1 gap-5 px-5 py-6 pb-8 md:px-8 xl:grid-cols-[1fr_380px]">
      <div className="rounded-lg border border-border-default bg-surface p-5">
        <div className="mb-5 flex flex-col gap-3 border-b border-border-default pb-4 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-head text-xl font-medium text-text-primary">
              {ui.analyzerQuestionnaire}
            </p>
            <p className="mt-1 max-w-3xl font-head text-sm text-text-secondary">
              {ui.analyzerQuestionnaireText}
            </p>
          </div>
          <button
            type="button"
            aria-label={ui.analyzerReset}
            onClick={() => onSelectionChange([])}
            className="inline-flex items-center gap-2 rounded-sm border border-border-subtle px-3.5 py-2 font-head text-2xs font-semibold uppercase tracking-widest text-text-secondary transition-colors hover:border-cyber-cyan-800 hover:text-text-primary"
          >
            <RotateCcw size={14} aria-hidden="true" />
            {ui.analyzerReset}
          </button>
        </div>

        <div className="grid gap-3">
          {analyzerQuestions.map((question) => (
            <AnalyzerQuestion
              key={question.id}
              checked={selectedIds.includes(question.id)}
              language={language}
              question={question}
              ui={ui}
              onToggle={() => toggleQuestion(question.id)}
            />
          ))}
        </div>
      </div>

      <aside className="flex flex-col gap-4">
        <ScoreSummary result={result} ui={ui} />
        <Recommendations findings={result.findings} language={language} ui={ui} />
      </aside>
    </section>
  )
}

function AnalyzerQuestion({ checked, language, question, ui, onToggle }) {
  const content = question[language]

  return (
    <label className="flex cursor-pointer items-start gap-3 rounded-md border border-border-default bg-bg-raised px-4 py-3.5 transition-colors hover:border-border-subtle">
      <input
        type="checkbox"
        checked={checked}
        onChange={onToggle}
        className="mt-1 h-4 w-4 accent-cyber-cyan"
      />
      <div className="flex-1">
        <div className="mb-2 flex flex-wrap items-center gap-2">
          <span
            className={`rounded-xs border px-2 py-0.5 font-mono text-2xs uppercase tracking-widest ${severityStyles[question.severity]}`}
          >
            {ui.severities[question.severity]}
          </span>
          <span className="font-mono text-2xs uppercase tracking-widest text-text-muted">
            +{question.weight}
          </span>
        </div>
        <p className="font-head text-sm text-text-primary">{content.question}</p>
      </div>
    </label>
  )
}

function ScoreSummary({ result, ui }) {
  return (
    <div className="rounded-lg border border-border-default bg-surface p-5">
      <div className="mb-4 flex items-start justify-between gap-3">
        <div>
          <p className="font-mono text-2xs uppercase tracking-widest text-cyber-cyan">
            {ui.analyzerRiskScore}
          </p>
          <p className="mt-2 font-mono text-4xl text-text-primary">{result.score}</p>
        </div>
        <div className={`rounded-md border px-3 py-2 ${levelStyles[result.level]}`}>
          <p className="font-mono text-2xs uppercase tracking-widest">{ui.analyzerRiskLabel}</p>
          <p className="mt-1 font-head text-base font-semibold">{ui.severities[result.level]}</p>
        </div>
      </div>

      <div className="mb-3 h-1.5 overflow-hidden rounded-full bg-surface-2">
        <div
          className={`h-full rounded-full ${scoreBarColor(result.level)} transition-all duration-500`}
          style={{ width: `${result.score}%` }}
        />
      </div>

      <p className="font-head text-sm text-text-secondary">
        {ui.analyzerScoreCopy(result.score)}
      </p>
      <p className="mt-1 font-head text-sm text-text-secondary">
        {ui.analyzerSelectedCount(result.findings.length)}
      </p>
    </div>
  )
}

function Recommendations({ findings, language, ui }) {
  return (
    <div className="rounded-lg border border-border-default bg-surface p-5">
      <div className="mb-4 flex items-center gap-2">
        <ShieldAlert size={18} className="text-cyber-cyan" aria-hidden="true" />
        <p className="font-head text-base font-semibold text-text-primary">
          {ui.analyzerRecommendations}
        </p>
      </div>

      {findings.length === 0 ? (
        <div className="rounded-md border border-signal-green/20 bg-signal-green/[0.06] px-4 py-3">
          <p className="font-head text-sm font-semibold text-text-primary">
            {ui.analyzerCleanState}
          </p>
          <p className="mt-1 font-head text-sm text-text-secondary">
            {ui.analyzerCleanStateText}
          </p>
        </div>
      ) : (
        <div className="grid gap-3">
          {findings.map((finding) => (
            <div key={finding.id} className="border-l border-border-subtle pl-3">
              <p className="font-mono text-2xs uppercase tracking-widest text-text-muted">
                {ui.severities[finding.severity]}
              </p>
              <p className="mt-1 font-head text-sm text-text-secondary">
                {finding[language].recommendation}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

function scoreBarColor(level) {
  if (level === 'Critical') return 'bg-alert-red'
  if (level === 'High') return 'bg-warn-amber'
  if (level === 'Medium') return 'bg-cyber-cyan'
  return 'bg-signal-green-600'
}
