import Hero from './assets/hero.jpg'

export default function MainPage() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#1e2235] font-['Sora',sans-serif]">

      {/* SIDEBAR — full width on mobile, fixed 260px on desktop */}
      <aside className="w-full md:w-[260px] md:min-w-[260px] bg-[#272b44] border-b md:border-b-0 md:border-r border-indigo-600/20 p-6 flex flex-col gap-5">

        {/* Avatar + Name row on mobile, stacked on desktop */}
        <div className="flex flex-row md:flex-col items-center gap-4 md:gap-5">
          <div className="w-[80px] h-[80px] md:w-[120px] md:h-[120px] rounded-full bg-[#363d6e] border-2 border-indigo-400/50 flex-shrink-0 flex items-center justify-center overflow-hidden">
            <img src={Hero} alt="Jahongir" className="w-full h-full object-cover" />
          </div>
          <div className="text-left md:text-center">
            <p className="text-[#eef0ff] font-bold text-base md:text-lg leading-tight" style={{fontFamily:"'Fraunces', serif"}}>Jahongir Jumaboyev</p>
            <p className="text-[#818cf8] text-[10px] tracking-widest uppercase mt-1 font-medium">Front-End Developer</p>
          </div>
        </div>

        <div className="h-px bg-indigo-600/20" />

        {/* Contact */}
        <div>
          <p className="text-[10px] text-[#818cf8] uppercase tracking-widest font-semibold mb-2">Contact</p>
          {/* 2-column grid on mobile, single column on desktop */}
          <div className="grid grid-cols-2 md:grid-cols-1 gap-x-3 gap-y-1">
            <InfoRow icon={<PinIcon />} text="Tashkent, Uzbekistan" />
            <InfoRow icon={<CalIcon />} text="21.08.1999" />
            <InfoRow icon={<PhoneIcon />}><a href="tel:+998942520009" className="hover:text-yellow-300 transition">+998 94 252 0009</a></InfoRow>
            <InfoRow icon={<WaIcon />}><a href="https://wa.me/998942520009" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition">WhatsApp</a></InfoRow>
            <InfoRow icon={<TgIcon />}><a href="https://t.me/JahongirJumaboyev99" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition">Telegram</a></InfoRow>
            <InfoRow icon={<LinkedInIcon />}><a href="https://www.linkedin.com/in/jahongir-jumaboyev-46202b2a8?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition">LinkedIn</a></InfoRow>
            <InfoRow icon={<MailIcon />}><span className="break-all text-[10px]">jahongirjumaboyev1011@gmail.com</span></InfoRow>
          </div>
        </div>

        <div className="h-px bg-indigo-600/20" />

        {/* Skills */}
        <div>
          <p className="text-[10px] text-[#818cf8] uppercase tracking-widest font-semibold mb-2">Skills</p>
          <div className="flex flex-wrap gap-1.5">
            {['HTML','CSS','JavaScript','React','GitHub','Next.js','TypeScript'].map(s => (
              <span key={s} className="text-[11px] text-emerald-300 bg-emerald-900/40 border border-emerald-600/30 rounded-full px-2.5 py-0.5">✓ {s}</span>
            ))}
          </div>
        </div>

        <div className="h-px bg-indigo-600/20" />

        {/* Languages */}
        <div>
          <p className="text-[10px] text-[#818cf8] uppercase tracking-widest font-semibold mb-2">Languages</p>
          <div className="grid grid-cols-2 md:grid-cols-1 gap-x-3 gap-y-0">
            <InfoRow icon={<GlobeIcon />} text="English — IELTS 6.5" />
            <InfoRow icon={<GlobeIcon />} text="Uzbek — Native" />
            <InfoRow icon={<GlobeIcon />} text="Russian — Intermediate" />
          </div>
        </div>
      </aside>

      {/* MAIN */}
      <main className="flex-1 p-6 md:p-10 overflow-y-auto">
        <h1 className="text-[2rem] md:text-[2.6rem] font-bold text-white leading-none mb-1" style={{fontFamily:"'Fraunces', serif"}}>
          Jahongir<br />Jumaboyev
        </h1>
        <p className="text-[10px] md:text-[11px] text-[#818cf8] uppercase tracking-widest font-medium mb-6 md:mb-8">
          Front-End Developer
        </p>

        <Nested />
      </main>
    </div>
  )
}

/* ── Small reusable icon row ── */
function InfoRow({ icon, text, children }) {
  return (
    <div className="flex items-start gap-2 text-[11px] text-[#d0d8ff] py-0.5 leading-snug">
      <span className="mt-0.5 opacity-70 shrink-0">{icon}</span>
      <span className="min-w-0">{text || children}</span>
    </div>
  )
}

/* ── Inline SVG icons ── */
const PinIcon = () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2a7 7 0 0 1 7 7c0 5-7 13-7 13S5 14 5 9a7 7 0 0 1 7-7z"/><circle cx="12" cy="9" r="2"/></svg>
const CalIcon = () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
const PhoneIcon = () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.56 1.18L6.5 1.18a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.59 9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
const WaIcon = () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
const TgIcon = () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21.5 2.5L12 13M21.5 2.5L14.5 22l-2.5-9-9-2.5 18.5-8z"/></svg>
const LinkedInIcon = () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
const MailIcon = () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
const GlobeIcon = () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 1 0 20 14.5 14.5 0 0 1 0-20"/><path d="M2 12h20"/></svg>

import Nested from './Nested'
