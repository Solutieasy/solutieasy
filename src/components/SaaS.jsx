export default function SaaS() {
  return (
    <section id="saas" className="border-t border-white/10">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center">
        <div>
          <h2 className="text-3xl font-bold md:text-4xl">
            Do MVP ao SaaS em operação
          </h2>
          <p className="mt-4 text-slate-300">
            Não entregamos apenas código: estruturamos o produto para ser mantido, medido e evoluído ao longo do tempo.
          </p>

          <ul className="mt-6 space-y-3 text-slate-300">
            {[
              "Descoberta e definição do MVP",
              "Arquitetura, banco de dados e APIs",
              "Autenticação, cobrança e painel administrativo",
              "Deploy, monitoramento e suporte contínuo",
              "Roadmap de melhorias baseado em uso e feedback",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-sky-400" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-sky-500/10 to-slate-900 p-8">
          <h3 className="text-lg font-semibold">Modelo de parceria</h3>
          <div className="mt-6 space-y-4">
            {[
              ["Fase 1", "Descoberta, escopo e protótipo"],
              ["Fase 2", "MVP funcional e validação com usuários"],
              ["Fase 3", "Evolução contínua, métricas e novas features"],
            ].map(([phase, text]) => (
              <div key={phase} className="rounded-xl border border-white/10 bg-slate-950/50 p-4">
                <p className="text-sm font-semibold text-sky-300">{phase}</p>
                <p className="mt-1 text-sm text-slate-300">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}