const services = [
  {
    title: "Desenvolvimento sob medida",
    text: "Aplicações web, APIs, integrações, painéis administrativos e automações internas.",
  },
  {
    title: "Criação de SaaS",
    text: "Do conceito ao MVP: modelagem de produto, arquitetura, desenvolvimento e lançamento.",
  },
  {
    title: "Manutenção e evolução",
    text: "Correções, melhorias, refatorações, monitoramento e evolução contínua do produto.",
  },
  {
    title: "Consultoria técnica",
    text: "Diagnóstico de sistemas, escolha de stack, arquitetura cloud e planejamento técnico.",
  },
];

export default function Services() {
  return (
    <section id="servicos" className="border-t border-white/10 bg-slate-900/40">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-bold md:text-4xl">Como podemos ajudar</h2>
        <p className="mt-3 max-w-2xl text-slate-300">
          Atuamos como um time técnico próximo do seu negócio, seja para construir um novo produto ou assumir a evolução de um sistema existente.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-2xl border border-white/10 bg-slate-950/60 p-6 transition hover:border-sky-500/40"
            >
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="mt-3 text-slate-400">{service.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}