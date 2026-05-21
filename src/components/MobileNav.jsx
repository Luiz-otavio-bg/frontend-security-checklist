import { GitBranch, ScanSearch, ShieldCheck, Terminal } from 'lucide-react'

export function MobileNav({ activeView, onViewChange, githubUrl, ui }) {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-10 grid grid-cols-4 border-t border-border-default bg-bg-raised lg:hidden">
      <MobileButton
        active={activeView === 'checklist'}
        icon={ShieldCheck}
        label={ui.checklistNav}
        onClick={() => onViewChange('checklist')}
      />
      <MobileButton
        active={activeView === 'examples'}
        icon={Terminal}
        label={ui.examplesNav}
        onClick={() => onViewChange('examples')}
      />
      <MobileButton
        active={activeView === 'analyzer'}
        icon={ScanSearch}
        label={ui.analyzerNav}
        onClick={() => onViewChange('analyzer')}
      />
      <a
        href={githubUrl}
        target="_blank"
        rel="noreferrer"
        className="flex flex-col items-center gap-1 px-3 py-2 font-head text-xs text-text-secondary"
      >
        <GitBranch size={18} aria-hidden="true" />
        {ui.github}
      </a>
    </nav>
  )
}

function MobileButton({ active, icon: Icon, label, onClick }) {
  return (
    <button
      type="button"
      aria-label={`Open ${label} view`}
      onClick={onClick}
      className={`flex flex-col items-center gap-1 px-3 py-2 font-head text-xs ${
        active ? 'text-cyber-cyan' : 'text-text-secondary'
      }`}
    >
      <Icon size={18} aria-hidden="true" />
      {label}
    </button>
  )
}
