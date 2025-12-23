interface PropsCard {
  img: string;
  title: string;
  desc: string;
}

export const Card = (props: PropsCard) => {
  return (
    <div className="group relative flex min-h-[520px] w-full max-w-[420px] flex-col overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-b from-[#14140F] to-[#0C0C08] p-8 transition-all duration-500 hover:-translate-y-2">
      {/* Glow superior sutil */}
      <span className="absolute -top-24 left-1/2 h-[220px] w-[220px] -translate-x-1/2 rounded-full bg-slate-400/20 opacity-70 blur-[140px] transition-opacity duration-500 group-hover:opacity-100" />

      {/* Textura refinada */}
      <span className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_65%)] opacity-50" />

      {/* Imagem */}
      <img
        src={props.img}
        alt="Tampo de mesa branco sendo içado com proteção reforçada"
        className="relative z-10 mb-8 h-[260px] w-full rounded-2xl object-cover shadow-[0_24px_60px_rgba(0,0,0,0.65)] transition-all duration-500 group-hover:scale-[1.06]"
      />

      {/* Conteúdo */}
      <div className="relative z-10 flex flex-1 flex-col">
        <h1 className="mb-4 text-3xl font-semibold tracking-tight text-white">{props.title}</h1>

        <p className="mb-8 text-base leading-relaxed text-white/70">{props.desc}</p>

        {/* CTA */}
        {/* <span className="mt-auto inline-flex items-center gap-3  text-sm uppercase tracking-wider text-white/60 transition-all duration-300 group-hover:text-white">
                Saber mais
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </span> */}
      </div>
    </div>
  );
};
