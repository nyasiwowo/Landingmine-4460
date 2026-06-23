import { useState } from "react";
import { useTheme, type ThemeKey } from "../hooks/use-theme";

const HERO_IMG: Record<ThemeKey, string> = {
  lime: "/img/paginas-web-bonitas-lime.png?v=3",
  navy: "/img/paginas-web-bonitas-navy.png?v=3",
  purple: "/img/paginas-web-bonitas-purple.png?v=3",
  orange: "/img/paginas-web-bonitas-orange.png?v=1",
};

const AVATAR_IMG: Record<ThemeKey, string> = {
  lime: "/img/paginas-web-precios-lime.png",
  navy: "/img/paginas-web-precios-navy.png",
  purple: "/img/paginas-web-precios-purple.png",
  orange: "/img/paginas-web-precios-orange.png",
};

const ABOUT_ELEMENTS_IMG: Record<ThemeKey, string> = {
  lime: "/img/about-lime.png?v=2",
  navy: "/img/about-navy.png?v=2",
  purple: "/img/about-purple.png?v=2",
  orange: "/img/about-orange.png?v=1",
};

const THEME_DOT: Record<ThemeKey, string> = {
  lime: "#a3e635",
  navy: "#0284c7",
  purple: "#a78bfa",
  orange: "#ffb347",
};

const LOGO_IMG: Record<ThemeKey, string> = {
  lime: "/img/logo-lime.png",
  navy: "/img/logo-navy.png",
  purple: "/img/logo-purple.png",
  orange: "/img/logo-lime.png",
};

function Logo({ theme, size = "md" }: { theme: ThemeKey; size?: "sm" | "md" }) {
  const box = size === "sm" ? "h-8 w-8" : "h-9 w-9";
  return (
    <span className={`grid ${box} place-items-center rounded-xl bg-ink p-1`}>
      <img src={LOGO_IMG[theme]} alt="NC WEBS" className="h-full w-full object-contain" />
    </span>
  );
}

/* ---------- small flat icons ---------- */
function Icon({ name }: { name: string }) {
  const common = {
    width: 26,
    height: 26,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (name) {
    case "rocket":
      return (
        <svg {...common}>
          <path d="M4.5 16.5c-1.5 1.3-2 5-2 5s3.7-.5 5-2c.7-.8.7-2 0-2.8a2 2 0 0 0-3 .8Z" />
          <path d="M12 15l-3-3a22 22 0 0 1 8-9 8 8 0 0 1 4 4 22 22 0 0 1-9 8Z" />
          <path d="M9 12H4s.5-2.8 2-4 5 0 5 0M12 15v5s2.8-.5 4-2 0-5 0-5" />
        </svg>
      );
    case "code":
      return (
        <svg {...common}>
          <path d="m16 18 6-6-6-6M8 6l-6 6 6 6" />
        </svg>
      );
    case "search":
      return (
        <svg {...common}>
          <circle cx="11" cy="11" r="7" />
          <path d="m21 21-4.3-4.3" />
        </svg>
      );
    case "cart":
      return (
        <svg {...common}>
          <circle cx="8" cy="21" r="1" />
          <circle cx="19" cy="21" r="1" />
          <path d="M2.5 3h2l2.6 13h11l2-9H6" />
        </svg>
      );
    case "gauge":
      return (
        <svg {...common}>
          <path d="M12 14 9 9" />
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v2M19 12h-2M7 12H5" />
        </svg>
      );
    case "shield":
      return (
        <svg {...common}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );
    case "chat":
      return (
        <svg {...common}>
          <path d="M21 11.5a8.4 8.4 0 0 1-12 7.6L3 21l1.9-6A8.4 8.4 0 1 1 21 11.5Z" />
        </svg>
      );
    case "wand":
      return (
        <svg {...common}>
          <path d="m15 4 1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2ZM3 21l9-9M14 14l1 1" />
        </svg>
      );
    default:
      return null;
  }
}

function CodeMark({ className = "" }: { className?: string }) {
  return (
    <span className={`font-display font-extrabold ${className}`}>&lt;/&gt;</span>
  );
}

/* ---------- decorative background blobs ---------- */
function Blobs() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-[var(--soft)] blur-3xl opacity-70" />
      <div className="absolute top-1/3 -left-32 h-80 w-80 rounded-full bg-[var(--soft)] blur-3xl opacity-60" />
    </div>
  );
}

const SERVICES = [
  { icon: "rocket", title: "Landing pages que convierten", desc: "Páginas rápidas y enfocadas en transformar visitas en clientes." },
  { icon: "code", title: "Sitios corporativos", desc: "Presencia profesional, clara y a la medida de tu negocio." },
  { icon: "search", title: "SEO local", desc: "Aparece cuando tus clientes te buscan en tu ciudad." },
  { icon: "cart", title: "E-commerce", desc: "Tiendas online simples de administrar y listas para vender." },
  { icon: "gauge", title: "Rendimiento web", desc: "Optimización de velocidad y experiencia en todos los dispositivos." },
  { icon: "shield", title: "Mantención y soporte", desc: "Tu sitio siempre actualizado, seguro y funcionando." },
  { icon: "chat", title: "Integración WhatsApp", desc: "Conecta formularios y botones directo a tus conversaciones." },
  { icon: "wand", title: "Branding y diseño", desc: "Identidad visual coherente que te hace destacar." },
];

const STEPS = [
  {
    n: "01",
    title: "Conversamos",
    desc: "Cuéntame tu idea y objetivos por WhatsApp.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        {/* Globo principal */}
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        {/* Puntos de escritura */}
        <circle cx="9" cy="10" r="0.9" fill="currentColor" stroke="none" />
        <circle cx="12" cy="10" r="0.9" fill="currentColor" stroke="none" />
        <circle cx="15" cy="10" r="0.9" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    n: "02",
    title: "Diseñamos",
    desc: "Propongo una solución clara a tu medida.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        {/* Monitor / diseño web */}
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
        {/* Check de aprobación dentro de la pantalla */}
        <path d="m8 10 3 3 5-5" strokeWidth="2" />
      </svg>
    ),
  },
  {
    n: "03",
    title: "Lanzamos",
    desc: "Publico tu sitio y te acompaño después.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        {/* Cohete lanzamiento */}
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09Z" />
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2Z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
        {/* Estrella / satisfacción */}
        <circle cx="18" cy="9" r="1.2" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

function Index() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [mailOpen, setMailOpen] = useState(false);
  const [mailForm, setMailForm] = useState({ nombre: "", email: "", mensaje: "" });
  const [mailStatus, setMailStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [mailError, setMailError] = useState("");

  async function handleMailSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setMailStatus("sending");
    setMailError("");

    const formEl = e.currentTarget;
    const fd = new FormData(formEl);
    fd.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);
    fd.append("subject", `NC WEBS · Contacto de ${mailForm.nombre}`);
    fd.append("from_name", "NC WEBS Landing");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: fd,
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.message ?? "Error al enviar el mensaje.");
      }
      setMailStatus("success");
      setMailForm({ nombre: "", email: "", mensaje: "" });
    } catch (err: any) {
      setMailStatus("error");
      setMailError(err.message ?? "No se pudo enviar. Intenta nuevamente.");
    }
  }

  return (
    <div className="relative min-h-screen bg-bg text-ink">
      {/* ===== NAV (pill) ===== */}
      <header className="fixed inset-x-0 top-4 z-50 px-4">
        <nav className="mx-auto flex max-w-5xl items-center justify-between rounded-full border border-[var(--line)] bg-surface/80 px-4 py-2.5 shadow-[0_8px_30px_rgba(0,0,0,0.06)] backdrop-blur-md">
          <a href="#inicio" className="flex items-center gap-2 font-display text-lg font-extrabold">
            <Logo theme={theme} />
            <span>NC<span className="text-[var(--primary-strong)]"> WEBS</span></span>
          </a>

          <div className="hidden items-center gap-7 text-sm font-medium text-muted md:flex">
            <a href="#servicios" className="hover:text-ink">Servicios</a>
            <a href="#proceso" className="hover:text-ink">Proceso</a>
            <a href="#sobre-mi" className="hover:text-ink">Sobre nosotros</a>
          </div>

          <div className="flex items-center gap-2">
            <ThemeSwitch theme={theme} setTheme={setTheme} />

            <button
              aria-label="Menú"
              onClick={() => setOpen((v) => !v)}
              className="grid h-9 w-9 place-items-center rounded-full border border-[var(--line)] md:hidden"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round">
                <path d="M3 6h18M3 12h18M3 18h18" />
              </svg>
            </button>
          </div>
        </nav>

        {open && (
          <div className="mx-auto mt-2 max-w-5xl rounded-2xl border border-[var(--line)] bg-surface p-4 text-sm font-medium shadow-lg md:hidden">
            {[["servicios", "Servicios"], ["proceso", "Proceso"], ["sobre-mi", "Sobre nosotros"]].map(([id, label]) => (
              <a key={id} href={`#${id}`} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2 hover:bg-[var(--soft)]">
                {label}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* ===== HERO ===== */}
      <section id="inicio" className="relative overflow-hidden pt-32 pb-20 md:pt-40">
        <Blobs />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 md:grid-cols-2">
          <div className="relative z-10 animate-rise">
            <span className="inline-flex items-center gap-2 rounded-full bg-[var(--soft)] px-3 py-1 text-xs font-semibold text-[var(--primary-strong)]">
              <CodeMark className="text-xs" /> Consultoría digital · Puerto Montt
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Páginas web{" "}
              <span className="relative whitespace-nowrap text-[var(--primary-strong)]">
                accesibles
                <svg className="absolute -bottom-2 left-0 w-full" height="10" viewBox="0 0 200 10" fill="none">
                  <path d="M2 7c40-6 158-6 196 0" stroke="var(--primary)" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span>
              <br />para tu negocio o pyme.
            </h1>
            <p className="mt-5 max-w-md text-base text-muted">
              Diseño y desarrollo para que tus clientes te encuentren y contacten más fácil. A ti y a tus productos.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="https://wa.me/56920734676" className="rounded-full bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-[var(--on-primary,#14271b)] shadow-md transition hover:bg-[var(--primary-strong)] hover:text-white">
                Cotizar por WhatsApp
              </a>
              <a href="#servicios" className="rounded-full border border-[var(--line)] bg-surface px-6 py-3 text-sm font-semibold transition hover:border-[var(--primary)]">
                Ver servicios
              </a>
            </div>
          </div>

          <div className="relative z-0 animate-rise [animation-delay:120ms] md:-mt-16 md:-ml-10 lg:-mt-20 lg:-ml-14">
            <div className="absolute inset-6 rounded-[2.5rem] bg-[var(--soft)] opacity-50 blur-3xl" />
            <img
              src={HERO_IMG[theme]}
              alt="Ilustración desarrollador frente a una pizarra de ideas NC WEBS"
              className="relative w-full max-w-none animate-floaty md:scale-100 lg:scale-105"
            />
          </div>
        </div>
      </section>

      {/* ===== SERVICIOS ===== */}
      <section id="servicios" className="py-20 bg-[var(--ink)]" aria-labelledby="servicios-titulo">
        <div className="mx-auto max-w-5xl px-5">
          <div className="mb-12 text-center">
            <h2 id="servicios-titulo" className="text-3xl font-bold tracking-tight text-[var(--bg)] sm:text-4xl">
              Servicios de desarrollo y asesoría digital.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--muted)] opacity-80">
              Todo lo que tu negocio necesita para tener presencia digital profesional en Chile, sin costos ocultos ni complicaciones técnicas.
            </p>
          </div>
          <ul className="grid grid-cols-1 gap-8 md:grid-cols-3" role="list">
            {[
              {
                num: "01",
                title: "Diseño Web y UI/UX",
                desc: "Creamos páginas web y landing pages exclusivas. Diseños 100% responsivos, adaptados a celulares y optimizados para cargar en menos de un segundo.",
              },
              {
                num: "02",
                title: "Páginas de alta velocidad",
                desc: "Programamos páginas web que serán 100% de tu propiedad, rápidas y sin mensualidades inesperadas.",
              },
              {
                num: "03",
                title: "Consultoría",
                desc: "Te ayudamos a encontrar soluciones a tus problemas digitales, te orientamos en qué más te conviene y de forma gratuita.",
              },
            ].map((s) => (
              <li
                key={s.num}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:border-[var(--primary)]"
              >
                <div className="mb-4 flex justify-center">
                  <div className="relative grid h-16 w-16 place-items-center rounded-full bg-[var(--primary)]/20 shadow-[0_0_30px_var(--primary)]">
                    <span className="font-display text-2xl font-extrabold text-[var(--primary)]">{s.num}</span>
                  </div>
                </div>
                <h3 className="mb-2 text-center text-xl font-semibold text-[var(--bg)]">{s.title}</h3>
                <p className="text-center text-sm leading-relaxed text-[var(--muted)] opacity-80">{s.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===== PROCESO ===== */}
      <section id="proceso" className="relative overflow-hidden py-20">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHead kicker="Proceso" title="Simple, rápido y sin vueltas" sub="Tres pasos para tener tu sitio listo." />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {STEPS.map((st) => (
              <div key={st.n} className="rounded-3xl border border-[var(--line)] bg-surface p-7">
                <div className="flex justify-center">
                  <div className="relative grid h-16 w-16 place-items-center rounded-full bg-[var(--primary)]/20 shadow-[0_0_30px_var(--primary)] text-[var(--primary)]">
                    {st.icon}
                  </div>
                </div>
                <h3 className="mt-5 text-center text-xl font-bold">{st.title}</h3>
                <p className="mt-2 text-center text-sm text-muted">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SOBRE MÍ ===== */}
      <section id="sobre-mi" className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid items-center gap-10 rounded-[2.5rem] border border-[var(--line)] bg-surface p-8 md:grid-cols-2 md:p-12">
          <div className="relative px-4 py-6">
            <div className="absolute inset-2 rounded-full bg-[var(--soft)] opacity-70 blur-2xl" />
            {/* Avatar laptop */}
            <img src={AVATAR_IMG[theme]} alt="Avatar Nicolás" className="relative mx-auto w-full max-w-sm rounded-3xl md:max-w-md" />

            {/* floating: ventana de código — arriba izquierda */}
            <div className="animate-floaty absolute -left-3 top-2 z-10 rounded-xl border border-[var(--line)] bg-ink p-3 shadow-xl sm:-left-6">
              <div className="mb-2 flex gap-1.5">
                <span className="h-2 w-2 rounded-full bg-red-400" />
                <span className="h-2 w-2 rounded-full bg-yellow-400" />
                <span className="h-2 w-2 rounded-full bg-green-400" />
              </div>
              <p className="mb-1 font-mono text-[10px] text-[var(--primary)]">&lt;/&gt; index.html</p>
              <div className="space-y-1">
                <span className="block h-1.5 w-20 rounded bg-[var(--primary)] opacity-80" />
                <span className="block h-1.5 w-14 rounded bg-white/40" />
                <span className="block h-1.5 w-16 rounded bg-white/25" />
                <span className="block h-1.5 w-10 rounded bg-[var(--primary)] opacity-60" />
              </div>
            </div>

            {/* floating: badge {} — arriba derecha */}
            <div className="animate-floaty absolute -right-2 top-4 z-10 grid h-10 w-10 place-items-center rounded-full border border-[var(--line)] bg-ink shadow-lg [animation-delay:300ms] sm:-right-4">
              <span className="font-mono text-sm font-bold text-[var(--primary)]">{"{}"}</span>
            </div>

            {/* badge ampolleta — superior centro */}
            <div className="animate-floaty absolute top-0 left-1/2 z-10 -translate-x-1/2 -translate-y-3 grid h-11 w-11 place-items-center rounded-full border border-[var(--line)] bg-surface shadow-xl [animation-delay:500ms]">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--primary)]">
                <path d="M9 21h6"/><path d="M12 3a6 6 0 0 1 6 6c0 2.22-1.21 4.16-3 5.2V17a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1v-2.8C7.21 13.16 6 11.22 6 9a6 6 0 0 1 6-6Z"/>
              </svg>
            </div>

            {/* badge </> — esquina inferior derecha */}
            <div className="animate-floaty absolute -right-3 bottom-4 z-10 grid h-11 w-11 place-items-center rounded-full border border-[var(--line)] bg-ink shadow-xl [animation-delay:200ms] sm:-right-5">
              <span className="font-mono text-xs font-bold text-[var(--primary)]">&lt;/&gt;</span>
            </div>

            {/* floating: checklist — abajo izquierda */}
            <div className="animate-floaty absolute -left-3 bottom-4 z-10 flex flex-col gap-1.5 rounded-xl border border-[var(--line)] bg-surface px-2.5 py-2.5 shadow-xl [animation-delay:350ms] sm:-left-6">
              {[0, 1, 2].map((i) => (
                <span key={i} className="grid h-5 w-5 place-items-center rounded-full bg-[var(--primary)] text-[var(--on-primary,#14271b)]">
                  <svg width="10" height="10" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 5 5L20 7" /></svg>
                </span>
              ))}
            </div>

            {/* floating: ventana browser — izquierda centro */}
            <div className="animate-floaty absolute -left-3 top-1/2 z-10 -translate-y-1/2 w-24 overflow-hidden rounded-xl border border-[var(--line)] bg-ink shadow-xl [animation-delay:400ms] sm:-left-6">
              {/* barra título */}
              <div className="flex items-center gap-1 bg-[var(--primary)] px-2 py-1.5">
                <span className="h-2 w-2 rounded-full bg-red-400" />
                <span className="h-2 w-2 rounded-full bg-yellow-400" />
                <span className="h-2 w-2 rounded-full bg-green-400" />
              </div>
              {/* contenido ventana */}
              <div className="p-2">
                {/* imagen placeholder: cielo + montañas */}
                <div className="relative h-12 w-full overflow-hidden rounded-md bg-[var(--soft)]">
                  {/* sol */}
                  <span className="absolute right-2 top-1.5 h-3 w-3 rounded-full bg-yellow-300" />
                  {/* montaña izq */}
                  <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 96 32" fill="none" preserveAspectRatio="none">
                    <polygon points="0,32 28,8 56,32" fill="var(--primary)" opacity="0.85"/>
                    <polygon points="36,32 60,12 84,32" fill="var(--primary)" opacity="0.6"/>
                    <polygon points="70,32 96,14 96,32" fill="var(--primary)" opacity="0.45"/>
                  </svg>
                </div>
                {/* líneas de texto */}
                <div className="mt-1.5 space-y-1">
                  <span className="block h-1.5 w-full rounded bg-white/30" />
                  <span className="block h-1.5 w-3/4 rounded bg-white/20" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-[var(--primary-strong)]">Sobre nosotros</span>
            <h2 className="mt-2 text-3xl font-extrabold">NC WEBS, de Puerto Montt a Chile y el mundo.</h2>
            <p className="mt-4 text-muted">
              Desarrollo y orientación web del sur de Chile, enfocado en hacer accesible la presencia digital con planes a medida del consumidor, desde lo básico a lo avanzado, te ayudamos a poner tu idea online.
            </p>
            <ul className="mt-6 space-y-2 text-sm">
              {["Atención directa y personalizada", "Diseño a medida, sin plantillas genéricas", "Acompañamiento después del lanzamiento"].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <span className="grid h-5 w-5 place-items-center rounded-full bg-[var(--primary)] text-[var(--on-primary,#14271b)]">
                    <svg width="12" height="12" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 5 5L20 7" /></svg>
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="mx-auto max-w-6xl px-5 pb-24">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-ink px-6 py-14 text-center text-white md:py-20">
          <div aria-hidden className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[var(--primary)] opacity-30 blur-3xl" />
          <div aria-hidden className="absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-[var(--primary)] opacity-20 blur-3xl" />
          <h2 className="relative text-3xl font-extrabold sm:text-4xl">¿Listo para tu nueva web?</h2>
          <p className="relative mx-auto mt-3 max-w-md text-white/70">
            Conversemos sin compromiso. Te respondo con una propuesta clara para tu proyecto.
          </p>
          <div className="relative mt-8 flex flex-wrap justify-center gap-3">
            <a href="https://wa.me/56920734676" className="rounded-full bg-[var(--primary)] px-7 py-3 text-sm font-semibold text-[var(--on-primary,#14271b)] transition hover:scale-105">
              Escríbeme por WhatsApp
            </a>
            <button onClick={() => { setMailOpen(true); setMailStatus("idle"); }} className="rounded-full border border-white/20 px-7 py-3 text-sm font-semibold transition hover:bg-white/10">
              Prefiero enviar un correo
            </button>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="border-t border-[var(--line)] py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 text-sm text-muted sm:flex-row">
          <div className="flex flex-col items-center sm:items-start">
            <div className="flex items-center gap-2 font-display font-extrabold text-ink">
              <Logo theme={theme} size="sm" />
              NC WEBS
            </div>
            <p className="text-xs text-muted">Diseño y desarrollo web</p>
          </div>
          <div className="flex flex-col items-center gap-0.5 text-center">
            <p>© {new Date().getFullYear()} NC WEBS · Puerto Montt, Chile</p>
            <a href="mailto:nicolas.ncwebs@gmail.com" className="text-xs text-muted hover:text-ink transition-colors">nicolas.ncwebs@gmail.com</a>
            <a href="https://wa.me/56920734676" className="text-xs text-muted hover:text-ink transition-colors">+56 9 2073 4676</a>
          </div>
          <div className="flex gap-4">
            <a href="/terminos" target="_blank" className="hover:text-ink">Términos y condiciones</a>
            <a href="/privacidad" target="_blank" className="hover:text-ink">Política de privacidad</a>
          </div>
        </div>
      </footer>

      {/* ===== MODAL CONTACTO EMAIL ===== */}
      {mailOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setMailOpen(false)} />

          {/* Panel */}
          <div className="relative w-full max-w-md rounded-3xl border border-[var(--line)] bg-surface p-8 shadow-2xl">
            {/* Close */}
            <button
              onClick={() => setMailOpen(false)}
              className="absolute right-5 top-5 grid h-8 w-8 place-items-center rounded-full text-muted hover:text-ink hover:bg-[var(--soft)] transition"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
            </button>

            {mailStatus === "success" ? (
              <div className="flex flex-col items-center gap-4 py-6 text-center">
                <div className="grid h-16 w-16 place-items-center rounded-full bg-green-500 text-white shadow-[0_0_30px_rgba(34,197,94,0.5)]">
                  <svg width="34" height="34" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 5 5L20 7"/></svg>
                </div>
                <h3 className="text-xl font-bold">¡Mensaje Enviado!</h3>
                <p className="text-sm text-muted">Te respondo pronto. También puedes escribirme por WhatsApp si necesitas respuesta inmediata.</p>
                <button onClick={() => { setMailOpen(false); setMailStatus("idle"); }} className="mt-2 rounded-full bg-[var(--primary)] px-6 py-2.5 text-sm font-semibold text-[var(--on-primary,#14271b)] transition hover:scale-105">
                  Cerrar
                </button>
              </div>
            ) : (
              <>
                <h3 className="mb-1 text-xl font-bold">Envíame un mensaje</h3>
                <p className="mb-6 text-sm text-muted">Te respondo a la brevedad.</p>

                <form onSubmit={handleMailSubmit} className="flex flex-col gap-4">
                  {/* Honeypot anti-spam (oculto) */}
                  <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

                  <div>
                    <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted">Nombre</label>
                    <input
                      required
                      type="text"
                      name="nombre"
                      placeholder="Tu nombre"
                      value={mailForm.nombre}
                      onChange={e => setMailForm(f => ({ ...f, nombre: e.target.value }))}
                      className="w-full rounded-xl border border-[var(--line)] bg-bg px-4 py-2.5 text-sm outline-none focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 transition"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted">Email de respuesta</label>
                    <input
                      required
                      type="email"
                      name="email"
                      placeholder="tu@email.com"
                      value={mailForm.email}
                      onChange={e => setMailForm(f => ({ ...f, email: e.target.value }))}
                      className="w-full rounded-xl border border-[var(--line)] bg-bg px-4 py-2.5 text-sm outline-none focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 transition"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted">Mensaje</label>
                    <textarea
                      required
                      rows={4}
                      name="mensaje"
                      placeholder="Cuéntame sobre tu proyecto..."
                      value={mailForm.mensaje}
                      onChange={e => setMailForm(f => ({ ...f, mensaje: e.target.value }))}
                      className="w-full resize-none rounded-xl border border-[var(--line)] bg-bg px-4 py-2.5 text-sm outline-none focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 transition"
                    />
                  </div>

                  {mailStatus === "error" && (
                    <div className="bg-red-50 text-red-600 rounded-lg p-3 text-sm mb-4">
                      {mailError || "No se pudo enviar. Intenta nuevamente."}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={mailStatus === "sending"}
                    className="rounded-full bg-[var(--primary)] py-3 text-sm font-semibold text-[var(--on-primary,#14271b)] transition hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {mailStatus === "sending" ? "Enviando..." : "Enviar mensaje"}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

/* ---------- subcomponents ---------- */
function SectionHead({ kicker, title, sub }: { kicker: string; title: string; sub: string }) {
  return (
    <div className="max-w-xl">
      <span className="text-sm font-semibold uppercase tracking-wider text-[var(--primary-strong)]">{kicker}</span>
      <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">{title}</h2>
      <p className="mt-3 text-muted">{sub}</p>
    </div>
  );
}

function ThemeSwitch({ theme, setTheme }: { theme: ThemeKey; setTheme: (t: ThemeKey) => void }) {
  const order: ThemeKey[] = ["lime", "navy", "purple", "orange"];
  return (
    <div className="flex items-center gap-1.5 rounded-full border border-[var(--line)] bg-surface px-2 py-1.5">
      {order.map((k) => (
        <button
          key={k}
          aria-label={`Tema ${k}`}
          onClick={() => setTheme(k)}
          className={`h-5 w-5 rounded-full transition ${theme === k ? "ring-2 ring-offset-2 ring-offset-surface scale-110" : "opacity-60 hover:opacity-100"}`}
          style={{ backgroundColor: THEME_DOT[k], boxShadow: theme === k ? `0 0 0 2px ${THEME_DOT[k]}` : undefined }}
        />
      ))}
    </div>
  );
}

export default Index;
