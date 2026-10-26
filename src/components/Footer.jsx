export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-slate-400">
          © {new Date().getFullYear()} Solutieasy. Engenharia de software e produtos SaaS.
        </p>

        <div className="flex gap-6 text-sm text-slate-400">
          <a href="#servicos" className="hover:text-white">Serviços</a>
          <a href="#saas" className="hover:text-white">SaaS</a>
          <a href="#contato" className="hover:text-white">Contato</a>
        </div>
      </div>
    </footer>
  );
}