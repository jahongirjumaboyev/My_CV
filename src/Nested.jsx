export default function Nested() {
  return (
    <div className="flex flex-col gap-6 md:gap-8">

      {/* ── Education ── */}
      <Section title="Education">
        <Card title="Najot Ta'lim — Web Development" meta="November 2025 — Present">
          <div className="flex flex-wrap gap-1.5 mt-1">
            {['HTML','CSS','JavaScript','React','GitHub','Next.js','TypeScript'].map(s => (
              <Badge key={s}>✓ {s}</Badge>
            ))}
          </div>
        </Card>

        <Card title="Customs Institute" meta="09.2018 — 06.2022">
          <p className="text-[11px] md:text-[12px] text-slate-400 leading-relaxed">
            Student at the Customs Institute under the Customs Committee of the Ministry of Economy and Finance
          </p>
          <p className="text-[11px] md:text-[12px] text-slate-400 leading-relaxed mt-1">
            Field of study: Economist
          </p>
        </Card>
      </Section>

      {/* ── Projects ── */}
      <Section title="Projects">
        <div className="text-[10px] md:text-[11px] text-red-300 bg-red-950/40 border border-red-800/30 rounded-lg px-3 py-1.5 mb-2">
          Note: All projects are demo versions (clones).
        </div>

        <ProjectCard
          href="https://revision-movie.vercel.app/"
          title="Movie Platform"
          desc="Built fully in React. API integration, search system, navigation between pages."
        />
        <ProjectCard
          href="https://10-lesson-homework.netlify.app/"
          title="Website"
          desc="Design project created using Tailwind CSS."
        />
      </Section>

    </div>
  )
}

/* ── Section wrapper ── */
function Section({ title, children }) {
  return (
    <section>
      <div className="flex items-center gap-3 mb-3">
        <span className="text-[10px] md:text-[11px] text-[#818cf8] uppercase tracking-widest font-semibold whitespace-nowrap">{title}</span>
        <div className="flex-1 h-px bg-indigo-800/35" />
      </div>
      {children}
    </section>
  )
}

/* ── Education card ── */
function Card({ title, meta, children }) {
  return (
    <div className="bg-[#2a2c45] border border-indigo-600/20 rounded-xl p-3 md:p-4 mb-2">
      <h3 className="text-[12px] md:text-[13px] font-semibold text-[#eef0ff] mb-1">{title}</h3>
      <p className="text-[10px] md:text-[11px] text-[#818cf8] mb-2">{meta}</p>
      {children}
    </div>
  )
}

/* ── Skill badge ── */
function Badge({ children }) {
  return (
    <span className="text-[10px] md:text-[11px] rounded-full px-2.5 py-0.5 bg-emerald-900/40 text-emerald-300 border border-emerald-600/30">
      {children}
    </span>
  )
}

/* ── Project card ── */
function ProjectCard({ href, title, desc }) {
  return (
    <div className="bg-[#2a2c45] border border-indigo-600/20 rounded-xl p-3 md:p-4 mb-2">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[12px] md:text-[13px] font-semibold text-[#9da8fb] hover:text-yellow-300 transition flex items-center gap-1 mb-1"
      >
        <ChevronIcon /> {title}
      </a>
      <p className="text-[11px] md:text-[12px] text-slate-400 leading-relaxed">
        {desc}
      </p>
    </div>
  )
}

/* ── Icons ── */
const ChevronIcon = () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>
