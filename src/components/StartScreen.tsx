interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-full p-6">
      <div className="text-center w-full max-w-sm">

        {/* Shop sign header */}
        <div className="anim-fade-up anim-delay-1 mb-8">
          <p
            style={{ fontFamily: "'Crimson Pro', Georgia, serif" }}
            className="text-sm tracking-[0.35em] uppercase text-mocha mb-1 italic"
          >
            Welcome to
          </p>
          <h1
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            className="text-6xl font-black text-espresso leading-none tracking-tight mb-1"
          >
            Soc Ops
          </h1>
          {/* Decorative rule */}
          <div className="flex items-center justify-center gap-3 my-3">
            <div className="h-px flex-1 bg-mocha/40" />
            <span className="text-caramel text-lg">☕</span>
            <div className="h-px flex-1 bg-mocha/40" />
          </div>
          <p
            style={{ fontFamily: "'Crimson Pro', Georgia, serif" }}
            className="text-xl italic text-mocha"
          >
            Social Bingo
          </p>
        </div>

        {/* Menu card */}
        <div
          className="anim-fade-up anim-delay-2 mb-8 rounded-2xl p-6 border-2"
          style={{
            background: 'linear-gradient(135deg, #faf3e4 0%, #f0e2c0 100%)',
            borderColor: '#d4a96a',
            boxShadow: '0 4px 24px oklch(0.35 0.08 45 / 0.15), inset 0 1px 0 oklch(1 0 0 / 0.6)',
          }}
        >
          <h2
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            className="text-xl font-bold text-espresso mb-4 tracking-wide"
          >
            How to Play
          </h2>
          <ul
            style={{ fontFamily: "'Crimson Pro', Georgia, serif" }}
            className="text-left text-roast text-base space-y-2.5"
          >
            <li className="flex items-start gap-2">
              <span className="text-caramel mt-0.5">—</span>
              <span>Mingle and find people who match each square</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-caramel mt-0.5">—</span>
              <span>Tap a square when you find your match</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-caramel mt-0.5">—</span>
              <span>Get 5 in a row to win!</span>
            </li>
          </ul>
        </div>

        {/* CTA button */}
        <div className="anim-fade-up anim-delay-3">
          <button
            onClick={onStart}
            className="w-full py-4 px-8 rounded-xl text-cream text-xl font-bold tracking-wide transition-all duration-150 active:scale-[0.97]"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              background: 'linear-gradient(160deg, #4a2c1a 0%, #2c1810 100%)',
              boxShadow: '0 4px 20px oklch(0.25 0.08 45 / 0.4), inset 0 1px 0 oklch(1 0 0 / 0.08)',
            }}
          >
            Order Up ☕
          </button>
        </div>

      </div>
    </div>
  );
}
