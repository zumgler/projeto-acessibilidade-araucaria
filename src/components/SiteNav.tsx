import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { n: "01", label: "Contexto", id: "contexto" },
  { n: "02", label: "Formulário", id: "formulario" },
  { n: "03", label: "Painel", id: "painel" },
  { n: "04", label: "Equipe", id: "credits" },
] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header className="site-header fixed inset-x-0 top-0 z-50 border-b border-border/50 shadow-sm backdrop-blur-xl">
      <nav
        className="site-nav mx-auto flex h-14 max-w-7xl items-center justify-between gap-3 px-4 sm:h-16 sm:px-6"
        aria-label="Navegação principal"
      >
        <a
          href="#top"
          className="flex min-w-0 shrink-0 items-center gap-2 text-xs tracking-[0.18em] uppercase sm:tracking-[0.2em]"
          onClick={closeMenu}
        >
          <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-primary/50 bg-primary/10 text-[11px] font-bold text-primary">
            NX
          </span>
          <span className="truncate text-foreground/80">
            Nexo<span className="text-primary">Urbano</span>
          </span>
        </a>

        <ul className="hidden items-center gap-0.5 md:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`} className="site-nav-link group">
                <span className="text-primary/60 group-hover:text-primary">{item.n}</span>
                <span>{item.label}</span>
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="neon-btn inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div id="mobile-nav" className="border-t border-border/40 bg-background/95 md:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3 sm:px-6">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="flex items-center gap-3 rounded-md border border-transparent px-3 py-3 text-sm uppercase tracking-[0.15em] transition-colors hover:border-primary/40 hover:bg-primary/5 hover:text-primary"
                  onClick={closeMenu}
                >
                  <span className="font-bold text-primary/70">{item.n}</span>
                  <span className="text-foreground/90">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
