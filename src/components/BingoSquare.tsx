import type { BingoSquareData } from '../types';

interface BingoSquareProps {
  square: BingoSquareData;
  isWinning: boolean;
  onClick: () => void;
}

export function BingoSquare({ square, isWinning, onClick }: BingoSquareProps) {
  // Free space: dark espresso tile
  if (square.isFreeSpace) {
    return (
      <div
        className="relative flex flex-col items-center justify-center p-1 text-center rounded-lg select-none"
        style={{
          background: 'linear-gradient(160deg, #4a2c1a 0%, #2c1810 100%)',
          border: '1px solid #8b5e3c',
        }}
        aria-label="Free space"
      >
        <span className="text-xl leading-none mb-0.5">☕</span>
        <span
          className="text-cream text-[9px] font-bold tracking-wider uppercase"
          style={{ fontFamily: "'Crimson Pro', Georgia, serif" }}
        >
          Free
        </span>
      </div>
    );
  }

  // Winning marked square — golden latte
  const winningStyle = {
    background: 'linear-gradient(135deg, #d4a96a 0%, #c8851b 100%)',
    border: '2px solid #c8851b',
    color: '#2c1810',
    boxShadow: 'inset 0 1px 0 oklch(1 0 0 / 0.25)',
  };

  // Regular marked square — warm cream stamp
  const markedStyle = {
    background: 'linear-gradient(135deg, #f0e2c0 0%, #e8d4a8 100%)',
    border: '1.5px solid #c8851b',
    color: '#2c1810',
  };

  // Unmarked — parchment
  const unmarkedStyle = {
    background: '#faf3e4',
    border: '1px solid #d4a96a',
    color: '#4a2c1a',
  };

  const currentStyle = square.isMarked
    ? isWinning ? winningStyle : markedStyle
    : unmarkedStyle;

  return (
    <button
      onClick={onClick}
      className="relative flex items-center justify-center p-1 text-center rounded-lg transition-all duration-100 select-none active:scale-95"
      style={currentStyle}
      aria-pressed={square.isMarked}
      aria-label={square.text}
    >
      <span
        className="text-[10px] leading-tight hyphens-auto break-words"
        style={{ fontFamily: "'Crimson Pro', Georgia, serif", fontWeight: 600 }}
      >
        {square.text}
      </span>
      {square.isMarked && (
        <span className="stamp-in absolute top-0.5 right-0.5 text-caramel text-xs font-bold">
          ✓
        </span>
      )}
    </button>
  );
}
