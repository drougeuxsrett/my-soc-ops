interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="flex flex-col min-h-full">

      {/* Hero — full-bleed espresso */}
      <div
        className="anim-fade-up anim-delay-1 w-full pt-12 pb-10 px-6 text-center"
        style={{
          backgroundImage:
            'radial-gradient(ellipse at 50% 0%, oklch(0.55 0.08 45 / 0.3) 0%, transparent 60%), linear-gradient(160deg, #4a2c1a 0%, #2c1810 100%)',
        }}
      >
        {/* Title row with star flanks */}
        <div className="flex items-center justify-center mb-2">
          <span className="text-caramel text-xl mx-3">✦</span>
          <h1
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            className="text-7xl font-black text-cream leading-none tracking-tight"
          >
            SOC OPS
          </h1>
          <span className="text-caramel text-xl mx-3">✦</span>
        </div>

        {/* Decorative rule */}
        <div className="flex items-center justify-center gap-3 my-4 px-8">
          <div className="h-px flex-1" style={{ background: 'oklch(1 0 0 / 0.2)' }} />
          <span className="text-caramel text-xl">☕</span>
          <div className="h-px flex-1" style={{ background: 'oklch(1 0 0 / 0.2)' }} />
        </div>

        {/* Tagline */}
        <p
          style={{ fontFamily: "'Crimson Pro', Georgia, serif" }}
          className="text-lg italic text-cream/70 mt-4"
        >
          Find your people. Fill the grid. Win the room.
        </p>

        {/* Steam wisps */}
        <div className="flex justify-center mt-6 gap-1">
          <span className="anim-steam text-cream/30 text-xs" style={{ animationDelay: '0s' }}>∙</span>
          <span className="anim-steam text-cream/30 text-xs" style={{ animationDelay: '1s' }}>∙</span>
          <span className="anim-steam text-cream/30 text-xs" style={{ animationDelay: '2s' }}>∙</span>
        </div>
      </div>

      {/* Step tiles */}
      <div className="anim-fade-up anim-delay-2 max-w-sm mx-auto w-full px-6 pt-6">
        <div className="grid grid-cols-3 gap-3">
          {[
            { num: '01', label: 'Mingle', body: 'Find someone who fits' },
            { num: '02', label: 'Tap', body: 'Mark off the square' },
            { num: '03', label: 'Bingo!', body: '5 in a row wins' },
          ].map(({ num, label, body }) => (
            <div
              key={num}
              className="rounded-xl p-3 text-center"
              style={{
                background: 'linear-gradient(135deg, #faf3e4 0%, #f0e2c0 100%)',
                border: '1px solid #d4a96a',
              }}
            >
              <span
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                className="text-2xl font-black text-caramel block mb-1"
              >
                {num}
              </span>
              <span
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                className="text-sm font-bold text-espresso block mb-1"
              >
                {label}
              </span>
              <span
                style={{ fontFamily: "'Crimson Pro', Georgia, serif" }}
                className="text-xs text-mocha"
              >
                {body}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="anim-fade-up anim-delay-3 max-w-sm mx-auto w-full px-6 pb-8 pt-6">
        <button
          onClick={onStart}
          className="w-full py-4 rounded-xl text-cream text-xl font-bold tracking-wide transition-all duration-150 active:scale-[0.97]"
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            background: 'linear-gradient(160deg, #4a2c1a 0%, #2c1810 100%)',
            boxShadow: '0 4px 20px oklch(0.25 0.08 45 / 0.4), inset 0 1px 0 oklch(1 0 0 / 0.08)',
          }}
        >
          Let&apos;s Play →
        </button>
        <p
          style={{ fontFamily: "'Crimson Pro', Georgia, serif" }}
          className="text-center text-sm italic text-mocha mt-2"
        >
          No sign-up. Just mingle.
        </p>
      </div>

    </div>
  );
}
