export default function Privacidad() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--ink)]">
      {/* Header simple */}
      <header className="border-b border-[var(--line)] px-5 py-4">
        <div className="mx-auto flex max-w-4xl items-center gap-2">
          <a href="/" className="font-display font-extrabold text-ink hover:opacity-80">
            NC WEBS
          </a>
        </div>
      </header>

      {/* Contenido */}
      <main className="mx-auto max-w-4xl px-5 py-16">
        <h1 className="mb-2 text-3xl font-display font-extrabold">Política de privacidad</h1>
        <p className="mb-10 text-sm text-muted">NC WEBS · Nicolás Cheuquepal · Puerto Montt, Chile</p>

        <div className="rounded-2xl border border-[var(--line)] bg-surface p-8 text-muted">
          <p className="text-center text-base">
            [Contenido de política de privacidad — editar este placeholder con el texto legal correspondiente]
          </p>
        </div>
      </main>

      {/* Footer mínimo */}
      <footer className="border-t border-[var(--line)] py-6 text-center text-sm text-muted">
        © {new Date().getFullYear()} NC WEBS · Puerto Montt, Chile
      </footer>
    </div>
  );
}
