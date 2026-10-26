export default function About() {
  return (
    <section id="sobre" className="border-t border-white/10 bg-slate-900/40">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-bold md:text-4xl">Sobre nós</h2>
        <p className="mt-4 max-w-3xl text-slate-300">
          Somos um time de engenharia de software focado em transformar problemas de negócio em produtos digitais confiáveis. Combinamos desenvolvimento de alta qualidade, visão de produto e operação contínua para reduzir riscos e acelerar resultados.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {[
            ["Produto", "Foco em resultado de negócio, não só em código"],
            ["Qualidade", "Boas práticas, testes e manutenibilidade"],
            ["Parceria", "Comunicação clara e evolução contínua"],
          ].map(([title, text]) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-slate-950/60 p-6">
              <h3 className="font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-slate-400">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}