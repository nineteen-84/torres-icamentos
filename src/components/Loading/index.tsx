import "./styles.css";

export const Loading = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0C0C08]">
      <div className="relative mb-8">
        <div className="flex items-end gap-1">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="w-2 animate-bounce rounded-full bg-[#DC143C]"
              style={{
                height: "20px",
                animationDelay: `${i * 0.2}s`,
                animationDuration: "1s",
              }}
            />
          ))}
        </div>
      </div>

      <p className="mb-6 animate-pulse text-center font-inter text-lg text-white/70">
        Estamos içando sua página...
        <br />
        Um momento, por favor!
      </p>

      <div className="h-1 w-64 overflow-hidden rounded-full bg-white/10">
        <div className="loading-bar h-full rounded-full bg-gradient-to-r from-[#DC143C] to-red-400" />
      </div>
    </div>
  );
};
