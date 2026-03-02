interface BingoModalProps {
  onDismiss: () => void;
}

export function BingoModal({ onDismiss }: BingoModalProps) {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center p-4 z-50"
      style={{ background: 'oklch(0.28 0.06 45 / 0.65)' }}
    >
      <div
        className="modal-in max-w-xs w-full text-center rounded-2xl p-7"
        style={{
          background: 'linear-gradient(160deg, #faf3e4 0%, #f0e2c0 100%)',
          border: '2px solid #d4a96a',
          boxShadow: '0 20px 60px oklch(0.2 0.08 45 / 0.5), inset 0 1px 0 oklch(1 0 0 / 0.7)',
        }}
      >
        {/* Decorative rule top */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-px flex-1 bg-caramel/40" />
          <span className="text-3xl">☕</span>
          <div className="h-px flex-1 bg-caramel/40" />
        </div>

        <h2
          className="text-5xl font-black text-espresso mb-1 tracking-tight"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          BINGO!
        </h2>
        <p
          className="text-mocha italic text-lg mb-6"
          style={{ fontFamily: "'Crimson Pro', Georgia, serif" }}
        >
          You completed a line!
        </p>

        <button
          onClick={onDismiss}
          className="w-full py-3 px-6 rounded-xl text-cream font-bold text-lg tracking-wide transition-all active:scale-[0.97]"
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            background: 'linear-gradient(160deg, #4a2c1a 0%, #2c1810 100%)',
            boxShadow: '0 4px 16px oklch(0.25 0.08 45 / 0.4)',
          }}
        >
          Keep Going
        </button>
      </div>
    </div>
  );
}
