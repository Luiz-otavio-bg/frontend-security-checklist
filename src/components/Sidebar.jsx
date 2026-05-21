import { GitBranch, ScanSearch, ShieldCheck, Terminal } from 'lucide-react'

export function Sidebar({ activeView, onViewChange, githubUrl, ui }) {
  return (
    <aside className="fixed left-0 top-0 hidden h-screen w-56 border-r border-border-default bg-bg-raised lg:flex lg:flex-col">
      <div className="border-b border-border-default px-4 py-4">
        <span className="block font-mono text-xs uppercase tracking-widest text-cyber-cyan">
          // FRONTSEC
        </span>
        <span className="block font-mono text-2xs uppercase tracking-widest text-text-muted">
          BG Cyber Lab
        </span>
      </div>

      <nav className="flex-1 py-2">
        <SidebarButton
          active={activeView === 'checklist'}
          icon={ShieldCheck}
          label={ui.checklistNav}
          onClick={() => onViewChange('checklist')}
        />
        <SidebarButton
          active={activeView === 'examples'}
          icon={Terminal}
          label={ui.examplesNav}
          onClick={() => onViewChange('examples')}
        />
        <SidebarButton
          active={activeView === 'analyzer'}
          icon={ScanSearch}
          label={ui.analyzerNav}
          onClick={() => onViewChange('analyzer')}
        />
        <p className="px-4 pb-1 pt-4 font-mono text-2xs uppercase tracking-widest text-text-muted">
          {ui.portfolio}
        </p>
        <a
          href={githubUrl}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2.5 border-l-2 border-transparent px-4 py-2.5 font-head text-sm font-medium text-text-secondary transition-colors hover:bg-white/[0.03] hover:text-text-primary"
        >
          <GitBranch size={16} aria-hidden="true" />
          {ui.githubRepo}
        </a>
      </nav>

      <div className="mt-auto border-t border-border-default px-4 py-5">
        <a
          href={githubUrl}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 text-text-secondary transition-colors hover:text-text-primary"
        >
          <img src="/bg-logo.ico" alt="BG logo" className="h-9 w-9 object-contain" />
          <div>
            <span className="block font-head text-sm font-semibold text-text-primary">
              {ui.author}
            </span>
            <span className="block font-mono text-2xs uppercase tracking-widest text-cyber-cyan">
              {ui.cyberPortfolio}
            </span>
          </div>
        </a>
      </div>
    </aside>
  )
}

function SidebarButton({ active, icon: Icon, label, onClick }) {
  return (
    <button
      type="button"
      aria-label={`Open ${label} view`}
      onClick={onClick}
      className={`flex w-full items-center gap-2.5 border-l-2 px-4 py-2.5 text-left font-head text-sm font-medium transition-colors ${
        active
          ? 'border-cyber-cyan bg-cyber-cyan/[0.06] text-cyber-cyan'
          : 'border-transparent text-text-secondary hover:bg-white/[0.03] hover:text-text-primary'
      }`}
    >
      <Icon size={16} aria-hidden="true" />
      {label}
    </button>
  )
}
