interface StartScreenProps {
  onStart: () => void;
}

const TearLine = () => (
  <div className="relative h-8 overflow-hidden">
    <div
      className="absolute left-[-10px] top-1.5 w-5 h-5 rounded-full border"
      style={{ backgroundColor: '#faf3e4', borderColor: 'oklch(0.72 0.09 60 / 0.3)' }}
    />
    <div
      className="absolute right-[-10px] top-1.5 w-5 h-5 rounded-full border"
      style={{ backgroundColor: '#faf3e4', borderColor: 'oklch(0.72 0.09 60 / 0.3)' }}
    />
    <div
      className="absolute inset-x-6 top-3.5 border-t-2 border-dashed"
      style={{ borderColor: 'oklch(0.72 0.09 60 / 0.4)' }}
    />
  </div>
);

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="anim-fade-up anim-delay-1 flex flex-col items-center justify-center min-h-full p-6">
      {/* Outer ticket card */}
      <div
        className="w-full max-w-sm"
        style={{
          background: 'linear-gradient(180deg, #2c1810 0%, #2c1810 38%, #faf3e4 38%, #faf3e4 100%)',
          borderRadius: '16px',
          border: '1.5px solid #d4a96a',
          boxShadow: '0 8px 40px oklch(0.28 0.08 45 / 0.25), inset 0 1px 0 oklch(1 0 0 / 0.06)',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        {/* Ticket header */}
        <div className="pt-8 pb-6 px-6 relative">
          {/* Circular stamp badge */}
          <div
            className="absolute top-6 right-5 w-16 h-16 rounded-full flex items-center justify-center flex-col"
            style={{
              backgroundColor: '#3d1f10',
              border: '2px dashed oklch(0.72 0.09 60 / 0.5)',
            }}
          >
            <span className="text-2xl leading-none" style={{ color: '#c8851b' }}>☕</span>
            <span
              className="uppercase tracking-widest mt-0.5"
              style={{
                fontFamily: "'Crimson Pro', Georgia, serif",
                fontSize: '7px',
                color: '#d4a96a',
              }}
            >
              FREE
            </span>
          </div>

          <p
            className="text-xs uppercase text-center"
            style={{
              fontFamily: "'Crimson Pro', Georgia, serif",
              letterSpacing: '0.4em',
              color: 'oklch(0.93 0.03 60 / 0.5)',
            }}
          >
            ADMIT ONE
          </p>

          <hr
            className="my-3 mx-0 border-t border-dashed"
            style={{ borderColor: 'oklch(0.93 0.03 60 / 0.2)' }}
          />

          <h1
            className="text-6xl font-black text-center leading-none"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              color: '#f5ecd7',
            }}
          >
            SOC OPS
          </h1>

          <p
            className="text-lg text-center mt-1"
            style={{
              fontFamily: "'Crimson Pro', Georgia, serif",
              fontStyle: 'italic',
              color: 'oklch(0.93 0.03 60 / 0.7)',
            }}
          >
            Social Bingo
          </p>
        </div>

        {/* First tear line */}
        <TearLine />

        {/* Menu body */}
        <div className="px-6 pt-4 pb-2">
          <p
            className="text-xs uppercase font-bold"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              letterSpacing: '0.35em',
              color: '#c8851b',
            }}
          >
            TODAY'S SPECIAL
          </p>

          <hr
            className="my-3 border-t border-dashed"
            style={{ borderColor: 'oklch(0.48 0.07 45 / 0.3)' }}
          />

          {/* Menu rows */}
          {[
            { num: '№1', label: 'Mingle', desc: 'find your people' },
            { num: '№2', label: 'Tap a square', desc: 'mark it off' },
            { num: '№3', label: 'Bingo!', desc: '5 in a row' },
          ].map(({ num, label, desc }) => (
            <div
              key={num}
              className="flex items-baseline gap-3 py-2 border-b border-dashed last:border-0"
              style={{ borderColor: 'oklch(0.48 0.07 45 / 0.2)' }}
            >
              <span
                className="text-sm font-bold"
                style={{ fontFamily: "'Playfair Display', Georgia, serif", color: '#c8851b' }}
              >
                {num}
              </span>
              <span
                className="text-base font-semibold"
                style={{ fontFamily: "'Playfair Display', Georgia, serif", color: '#2c1810' }}
              >
                {label}
              </span>
              <div
                className="flex-1 mb-1 border-b border-dotted"
                style={{ borderColor: 'oklch(0.48 0.07 45 / 0.3)' }}
              />
              <span
                className="text-sm"
                style={{
                  fontFamily: "'Crimson Pro', Georgia, serif",
                  fontStyle: 'italic',
                  color: '#8b5e3c',
                }}
              >
                {desc}
              </span>
            </div>
          ))}
        </div>

        {/* Second tear line */}
        <TearLine />

        {/* Ticket footer */}
        <div
          className="px-6 pt-4 pb-8"
          style={{ backgroundColor: 'oklch(0.88 0.04 60 / 0.4)' }}
        >
          <button
            onClick={onStart}
            className="w-full py-4 rounded-xl text-xl font-bold tracking-wide transition-all duration-150 active:scale-[0.97]"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              color: '#f5ecd7',
              background: 'linear-gradient(160deg, #4a2c1a 0%, #2c1810 100%)',
              boxShadow: '0 4px 20px oklch(0.25 0.08 45 / 0.4), inset 0 1px 0 oklch(1 0 0 / 0.08)',
            }}
          >
            Order Up ☕
          </button>

          <p
            className="text-center text-xs mt-3"
            style={{
              fontFamily: "'Crimson Pro', Georgia, serif",
              fontStyle: 'italic',
              color: 'oklch(0.48 0.07 45 / 0.6)',
            }}
          >
            Est. Good Vibes · Since 2025
          </p>
        </div>
      </div>
    </div>
  );
}
