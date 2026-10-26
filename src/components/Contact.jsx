import { useState } from "react";

const FORMSUBMIT_ENDPOINT = "https://formsubmit.co/live-demo";

export default function Contact() {
  const [status, setStatus] = useState("idle");

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("sending");

    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch(FORMSUBMIT_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Falha ao enviar a mensagem.");
      }

      event.currentTarget.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contato" className="border-t border-white/10">
      <div className="mx-auto max-w-4xl px-6 py-20">
        <h2 className="text-3xl font-bold md:text-4xl">Vamos conversar?</h2>
        <p className="mt-3 text-slate-300">
          Conte sobre o seu projeto, produto ou desafio técnico. Retornamos com uma proposta inicial.
        </p>

        <form className="mt-10 grid gap-4" onSubmit={handleSubmit}>
          <input
            type="hidden"
            name="_subject"
            value="Novo contato pelo site — Solutieasy"
          />

          <input
            type="hidden"
            name="_template"
            value="table"
          />

          <input
            type="hidden"
            name="_captcha"
            value="false"
          />

          <div className="grid gap-4 md:grid-cols-2">
            <input
              required
              name="name"
              placeholder="Seu nome"
              className="rounded-xl border border-white/10 bg-slate-950 px-4 py-3 outline-none focus:border-sky-500"
            />

            <input
              required
              type="email"
              name="email"
              placeholder="Seu e-mail"
              className="rounded-xl border border-white/10 bg-slate-950 px-4 py-3 outline-none focus:border-sky-500"
            />
          </div>

          <input
            name="company"
            placeholder="Empresa ou produto"
            className="rounded-xl border border-white/10 bg-slate-950 px-4 py-3 outline-none focus:border-sky-500"
          />

          <textarea
            required
            name="message"
            rows={5}
            placeholder="Descreva brevemente o que você precisa construir ou melhorar"
            className="rounded-xl border border-white/10 bg-slate-950 px-4 py-3 outline-none focus:border-sky-500"
          />

          <button
            type="submit"
            disabled={status === "sending"}
            className="rounded-xl bg-sky-500 px-6 py-3 font-semibold text-white transition hover:bg-sky-400 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "sending" ? "Enviando..." : "Enviar mensagem"}
          </button>

          {status === "success" && (
            <p className="text-sm text-emerald-400">
              Mensagem enviada com sucesso. Retornaremos em breve.
            </p>
          )}

          {status === "error" && (
            <p className="text-sm text-red-400">
              Não foi possível enviar agora. Tente novamente ou fale conosco por e-mail.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}