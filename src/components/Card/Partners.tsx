interface PropsPartners {
  link: string;
  img: string;
  alt: string;
}

export const Partner = (props: PropsPartners) => {
  return (
    <a href={props.link} target="_blank" rel="noopener noreferrer">
      <div className="group flex h-[160px] items-center justify-center rounded-2xl border border-white/15 bg-white/[0.06] backdrop-blur-md transition-all duration-300 ease-out hover:border-white/30 hover:bg-white/[0.12] hover:shadow-[0_0_40px_rgba(255,255,255,0.08)]">
        <img
          src={props.img}
          alt={props.alt}
          className="contrast-110 max-h-[72px] brightness-110 transition-all duration-300 group-hover:scale-105"
        />
      </div>
    </a>
  );
};
