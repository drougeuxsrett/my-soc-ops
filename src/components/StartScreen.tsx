type PreviewCell = readonly [isMarked: boolean, isFreeSpace: boolean, label: string];

// [isMarked, isFreeSpace, truncated label]
// Index 12 = center = free space
// ~6-7 cells marked, asymmetrically (not a winning line)
const PREVIEW_CELLS: PreviewCell[] = [
  [false, false, 'Morning person'],
  [false, false, 'Remote worker'],
  [true,  false, 'Has a pet'],
  [false, false, 'Speaks 2+ langs'],
  [false, false, 'Night owl'],
  [true,  false, 'Coffee snob'],
  [false, false, 'Reads fiction'],
  [false, false, 'Gym regular'],
  [true,  false, 'Loves spicy food'],
  [false, false, 'Has a side-proj'],
  [false, false, 'Early adopter'],
  [false, false, 'Board gamer'],
  [false, true,  '☕'],
  [false, false, 'Vegan/veggie'],
  [true,  false, 'Cat person'],
  [false, false, 'Moved cities'],
  [false, false, 'Skips breakfast'],
  [true,  false, 'Hates small talk'],
  [false, false, 'Weekend hiker'],
  [false, false, 'Vinyl collector'],
  [true,  false, 'Tea > coffee'],
  [false, false, 'Night coder'],
  [false, false, 'Meditates'],
  [false, false, 'Zero inbox'],
  [false, false, 'Plant parent'],
];

interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-full p-6">
      <div className="text-center w-full max-w-sm">

        {/* Shop sign header */}
        <div className="anim-fade-up anim-delay-1 mb-6">
          <p
            style={{ fontFamily: "'Crimson Pro', Georgia, serif" }}
            className="text-sm tracking-[0.35em] uppercase text-mocha mb-1 italic"
          >
            Welcome to
          </p>
          <h1
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            className="text-5xl font-black text-espresso leading-none tracking-tight mb-1"
          >
            Soc Ops
          </h1>
          <p
            style={{ fontFamily: "'Crimson Pro', Georgia, serif" }}
            className="text-lg italic text-mocha"
          >
            Social Bingo
          </p>
        </div>

        {/* Mini decorative bingo board */}
        <div
          className="anim-fade-up anim-delay-2 mb-2"
          style={{ transform: 'rotate(1deg)' }}
        >
          <div
            className="rounded-xl p-2"
            style={{
              background: 'linear-gradient(135deg, #f5ecd7 0%, #ede0c4 100%)',
              border: '1.5px solid #d4a96a',
              boxShadow: '0 6px 28px oklch(0.35 0.08 45 / 0.18), inset 0 1px 0 oklch(1 0 0 / 0.5)',
            }}
          >
            <div className="grid grid-cols-5 gap-0.5">
              {PREVIEW_CELLS.map(([isMarked, isFreeSpace, label], i) => {
                if (isFreeSpace) {
                  return (
                    <div
                      key={i}
                      className="rounded-sm flex items-center justify-center text-base w-full aspect-square"
                      style={{ background: '#2c1810', color: '#d4a96a' }}
                    >
                      {label}
                    </div>
                  );
                }
                if (isMarked) {
                  return (
                    <div
                      key={i}
                      className="rounded-sm aspect-square flex items-center justify-center text-[6px] leading-tight text-center p-0.5 relative overflow-hidden border border-caramel"
                      style={{ background: '#f5ecd7' }}
                    >
                      <span className="text-roast">{label}</span>
                      <span className="absolute top-0.5 right-0.5 text-caramel text-[8px] font-bold">✓</span>
                    </div>
                  );
                }
                return (
                  <div
                    key={i}
                    className="rounded-sm aspect-square flex items-center justify-center text-[6px] leading-tight text-center p-0.5 border border-latte/50"
                    style={{ background: '#faf3e4' }}
                  >
                    <span className="text-roast">{label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Board caption */}
        <p className="text-center text-xs italic text-mocha/70 mt-2 mb-6">
          Tap squares to mark them off
        </p>

        {/* How to Play — compact inline summary */}
        <div className="anim-fade-up anim-delay-3 mb-6">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px flex-1 bg-mocha/40" />
            <span className="text-caramel text-base">☕</span>
            <div className="h-px flex-1 bg-mocha/40" />
          </div>
          <div className="flex items-center justify-center gap-2 flex-wrap">
            <span
              style={{ fontFamily: "'Crimson Pro', Georgia, serif" }}
              className="text-base text-roast"
            >
              Mingle
            </span>
            <span className="text-caramel">·</span>
            <span
              style={{ fontFamily: "'Crimson Pro', Georgia, serif" }}
              className="text-base text-roast"
            >
              Tap a square
            </span>
            <span className="text-caramel">·</span>
            <span
              style={{ fontFamily: "'Crimson Pro', Georgia, serif" }}
              className="text-base text-roast"
            >
              5 in a row wins
            </span>
          </div>
        </div>

        {/* CTA button */}
        <div className="anim-fade-up anim-delay-4">
          <button
            onClick={onStart}
            className="w-full py-4 px-8 rounded-xl text-cream text-xl font-bold tracking-wide transition-all duration-150 active:scale-[0.97]"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              background: 'linear-gradient(160deg, #4a2c1a 0%, #2c1810 100%)',
              boxShadow: '0 4px 20px oklch(0.25 0.08 45 / 0.4), inset 0 1px 0 oklch(1 0 0 / 0.08)',
            }}
          >
            Let's Play →
          </button>
        </div>

      </div>
    </div>
  );
}
