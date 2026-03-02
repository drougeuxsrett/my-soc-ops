import type { BingoSquareData } from '../types';
import { BingoSquare } from './BingoSquare';

interface BingoBoardProps {
  board: BingoSquareData[];
  winningSquareIds: Set<number>;
  onSquareClick: (squareId: number) => void;
}

export function BingoBoard({ board, winningSquareIds, onSquareClick }: BingoBoardProps) {
  return (
    <div
      className="p-2 rounded-2xl w-full max-w-md mx-auto"
      style={{
        background: 'linear-gradient(135deg, #f5ecd7 0%, #ede0c4 100%)',
        boxShadow: '0 8px 32px oklch(0.3 0.08 45 / 0.2), inset 0 1px 0 oklch(1 0 0 / 0.5)',
        border: '1px solid #d4a96a',
      }}
    >
      <div className="grid grid-cols-5 gap-1 aspect-square">
        {board.map((square) => (
          <BingoSquare
            key={square.id}
            square={square}
            isWinning={winningSquareIds.has(square.id)}
            onClick={() => onSquareClick(square.id)}
          />
        ))}
      </div>
    </div>
  );
}
