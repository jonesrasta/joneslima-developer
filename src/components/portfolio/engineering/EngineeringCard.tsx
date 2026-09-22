import type { EngineeringItem } from "../../../types/portfolio";

interface EngineeringCardProps {
  item: EngineeringItem;
}

export function EngineeringCard({ item }: EngineeringCardProps) {
  return (
    <article className="group border-t border-white/10 py-8 px-4 transition-all duration-300 hover:border-sky-500/50 hover:bg-white/0.02 rounded-xl">
      <div className="grid gap-6 md:grid-cols-[80px_1fr_1fr] items-start">
        <span className="font-mono text-xs text-sky-400/80 group-hover:text-sky-400 transition-colors">{item.number}</span>
        <div>
          <h3 className="text-2xl font-black tracking-tight text-white uppercase group-hover:text-sky-300 transition-colors">
            {item.title}
          </h3>
        </div>

        <div>
          <p className="text-sm leading-6 text-white/60 font-light">{item.description}</p>

          <div className="mt-5 flex flex-wrap gap-2">
            {item.technologies.map((technology) => (
              <span
                key={technology}
                className="
                  border
                  border-white/10
                  bg-white/5
                  px-2.5
                  py-1
                  text-[10px]
                  font-mono
                  uppercase
                  tracking-[0.12em]
                  text-white/70
                  group-hover:border-sky-500/20
                  group-hover:text-white
                  transition-colors
                "
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
