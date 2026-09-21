export function GridBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0">
      <div
        className="
          absolute
          inset-0
          bg-[#011627]
        "
      />

      <div
        className="
          absolute
          inset-0
          opacity-[0.08]
          [background-image:linear-gradient(to_right,rgba(255,255,255,0.35)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.35)_1px,transparent_1px)]
          [background-size:64px_64px]
        "
      />

      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,transparent_0%,#020408_80%)]
        "
      />
    </div>
  );
}
