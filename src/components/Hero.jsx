export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <p className="mb-4 inline-flex rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-xs font-medium text-sky-300">
          Engenharia de software sob medida
        </p>

        <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
          Construímos software que gera resultado e mantemos produtos SaaS evoluindo.
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-slate-300">
          Desenvolvemos aplicações web, integrações, automações e produtos SaaS completos. Do MVP à operação contínua, com arquitetura pensada para escalar.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#contato"
            className="rounded-xl bg-sky-500 px-6 py-3 font-semibold text-white transition hover:bg-sky-400"
          >
            Solicitar proposta
          </a>
          <a
            href="#servicos"
            className="rounded-xl border border-white/15 px-6 py-3 font-semibold text-slate-200 transition hover:bg-white/5"
          >
            Ver serviços
          </a>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {[
            ["MVPs rápidos", "Validação de produto com entrega enxuta"],
            ["SaaS contínuo", "Evolução, monitoramento e suporte"],
            ["Arquitetura escalável", "Sistemas prontos para crescer"],
          ].map(([title, text]) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-slate-400">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}