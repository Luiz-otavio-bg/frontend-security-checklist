import { useMemo, useState } from 'react'
import { Filter, Terminal } from 'lucide-react'
import { ChecklistCard } from './components/ChecklistCard'
import { ExampleCard } from './components/ExampleCard'
import { Header } from './components/Header'
import { MetricCard } from './components/MetricCard'
import { MobileNav } from './components/MobileNav'
import { SecurityAnalyzer } from './components/SecurityAnalyzer'
import { Sidebar } from './components/Sidebar'
import { content, filters, githubUrl } from './lib/securityContent'

function App() {
  const [completed, setCompleted] = useState(['token-storage', 'security-headers'])
  const [activeFilter, setActiveFilter] = useState('All')
  const [activeView, setActiveView] = useState('checklist')
  const [language, setLanguage] = useState('pt')
  const [analyzerAnswers, setAnalyzerAnswers] = useState([])

  const ui = content[language]
  const checklist = ui.checklist
  const completedCount = completed.length
  const score = Math.round((completedCount / checklist.length) * 100)

  const visibleItems = useMemo(() => {
    if (activeFilter === 'All') return checklist
    return checklist.filter((item) => item.severity === activeFilter)
  }, [activeFilter, checklist])

  function toggleChecklistItem(id) {
    setCompleted((items) =>
      items.includes(id) ? items.filter((item) => item !== id) : [...items, id],
    )
  }

  return (
    <div className="min-h-svh bg-bg-base text-text-primary">
      <Sidebar
        activeView={activeView}
        onViewChange={setActiveView}
        githubUrl={githubUrl}
        ui={ui}
      />

      <main className="pb-24 lg:ml-56 lg:pb-0">
        <Header
          activeView={activeView}
          completedCount={completedCount}
          totalControls={checklist.length}
          language={language}
          onLanguageChange={setLanguage}
          score={score}
          ui={ui}
        />

        {activeView === 'checklist' && (
          <ChecklistView
            activeFilter={activeFilter}
            completed={completed}
            completedCount={completedCount}
            items={visibleItems}
            onFilterChange={setActiveFilter}
            onToggleItem={toggleChecklistItem}
            ui={ui}
          />
        )}

        {activeView === 'examples' && (
          <ExamplesView examples={ui.examples} ui={ui} />
        )}

        {activeView === 'analyzer' && (
          <SecurityAnalyzer
            language={language}
            selectedIds={analyzerAnswers}
            onSelectionChange={setAnalyzerAnswers}
            ui={ui}
          />
        )}
      </main>

      <MobileNav
        activeView={activeView}
        onViewChange={setActiveView}
        githubUrl={githubUrl}
        ui={ui}
      />
    </div>
  )
}

function ChecklistView({
  activeFilter,
  completed,
  completedCount,
  items,
  onFilterChange,
  onToggleItem,
  ui,
}) {
  return (
    <>
      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-4 px-5 py-6 md:grid-cols-3 md:px-8">
        <MetricCard label={ui.criticalControls} value="2" tone="danger" />
        <MetricCard label={ui.highRiskTopics} value="3" tone="warning" />
        <MetricCard label={ui.reviewedItems} value={String(completedCount)} tone="success" />
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-8 md:px-8">
        <div className="mb-4 flex flex-col gap-3 border-y border-border-default py-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2 text-text-secondary">
            <Filter size={16} aria-hidden="true" />
            <span className="font-mono text-xs uppercase tracking-widest">{ui.riskFilter}</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                aria-label={`Filter checklist by ${ui.filters[filter]}`}
                onClick={() => onFilterChange(filter)}
                className={`rounded-sm border px-3.5 py-1.5 font-head text-2xs font-semibold uppercase tracking-widest transition-colors ${
                  activeFilter === filter
                    ? 'border-cyber-cyan bg-cyber-cyan text-bg-base'
                    : 'border-border-subtle bg-transparent text-text-secondary hover:border-cyber-cyan-800 hover:text-text-primary'
                }`}
              >
                {ui.filters[filter]}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {items.map((item) => (
            <ChecklistCard
              key={item.id}
              item={item}
              checked={completed.includes(item.id)}
              onToggle={() => onToggleItem(item.id)}
              ui={ui}
            />
          ))}
        </div>
      </section>
    </>
  )
}

function ExamplesView({ examples, ui }) {
  return (
    <section className="mx-auto max-w-7xl px-5 py-6 pb-8 md:px-8">
      <div className="mb-5 rounded-md border border-cyber-cyan/20 bg-cyber-cyan/[0.06] px-4 py-3.5">
        <div className="flex items-start gap-3">
          <Terminal className="mt-0.5 shrink-0 text-cyber-cyan" size={18} aria-hidden="true" />
          <div>
            <p className="font-head text-base font-semibold text-text-primary">
              {ui.exampleLibrary}
            </p>
            <p className="mt-0.5 font-head text-sm text-text-secondary">
              {ui.exampleLibraryText}
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {examples.map((example) => (
          <ExampleCard key={example.id} example={example} ui={ui} />
        ))}
      </div>
    </section>
  )
}

export default App
