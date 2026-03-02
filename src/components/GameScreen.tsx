import type { BingoSquareData } from '../types';
import { BingoBoard } from './BingoBoard';

interface GameScreenProps {
  board: BingoSquareData[];
  winningSquareIds: Set<number>;
  hasBingo: boolean;
  onSquareClick: (squareId: number) => void;
  onReset: () => void;
}

export function GameScreen({
  board,
  winningSquareIds,
  hasBingo,
  onSquareClick,
  onReset,
}: GameScreenProps) {
  return (
    <div className="flex flex-col min-h-full">
      {/* Header — espresso bar */}
      <header
        className="flex items-center justify-between px-4 py-3"
        style={{
          background: 'linear-gradient(160deg, #4a2c1a 0%, #2c1810 100%)',
          boxShadow: '0 2px 12px oklch(0.2 0.08 45 / 0.35)',
        }}
      >
        <button
          onClick={onReset}
          className="text-latte text-sm italic py-1 active:text-cream transition-colors"
          style={{ fontFamily: "'Crimson Pro', Georgia, serif" }}
        >
          ← Leave
        </button>
        <h1
          className="font-black text-cream text-xl tracking-wide"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Soc Ops
        </h1>
        <div className="w-14" />
      </header>

      {/* Instructions */}
      <p
        className="text-center text-mocha text-sm py-2 px-4 italic"
        style={{ fontFamily: "'Crimson Pro', Georgia, serif" }}
      >
        Find someone who matches each square and tap it.
      </p>

      {/* Bingo banner */}
      {hasBingo && (
        <div
          className="text-center py-2 font-bold text-sm tracking-wide"
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            background: 'linear-gradient(90deg, #f0e2c0, #faf3e4, #f0e2c0)',
            color: '#2c1810',
            borderTop: '1px solid #d4a96a',
            borderBottom: '1px solid #d4a96a',
          }}
        >
          ☕ BINGO! You got a line!
        </div>
      )}

      {/* Board */}
      <div className="flex-1 flex items-center justify-center p-3">
        <BingoBoard
          board={board}
          winningSquareIds={winningSquareIds}
          onSquareClick={onSquareClick}
        />
      </div>
    </div>
  );
}
