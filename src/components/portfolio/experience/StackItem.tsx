import type { Stack } from "../../../data/experience";

type StackItemProps = {
  stack: Stack;
};

export function StackItem({ stack }: StackItemProps) {
  return (
    <div className="group/stack inline-flex items-center gap-2 rounded-full border-[0.1px] border-gray-700 bg-white/0.025 px-3 py-1.5 transition-all duration-300 hover:border-white/0.16 hover:bg-white/0.05">
      <img
        src={stack.icon}
        alt=""
        aria-hidden="true"
        className="h-4 w-4 object-contain opacity-55 grayscale transition-all duration-300 group-hover/stack:opacity-100 group-hover/stack:grayscale-0"
      />

      <span className="font-mono text-[10px] uppercase tracking-[0.08em] text-white/40 transition-colors duration-300 group-hover/stack:text-white/70">
        {stack.name}
      </span>
    </div>
  );
}