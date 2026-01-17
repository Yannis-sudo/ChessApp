import { Chessboard } from 'react-chessboard';
import { useState } from 'react';
import { Chess } from 'chess.js';
import '../style/playengine.css';

export default function PlayEngine() {
    const [fen_input, setFenInput] = useState<string>('start');
    const [game] = useState(() => new Chess());
    const [position, setPosition] = useState<string>(game.fen());
    const [error, setError] = useState<string>('');
    const [selectedPiece, setSelectedPiece] = useState<string>('');
    const [allowedColor, setAllowedColor] = useState<string>('w');
    const [engine, setEngine] = useState<string>('therookengine');


    async function userMadeMove(): Promise<string> {
        const res = await fetch(`http://10.168.5.125:5000/${engine}/bestmove`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ fen: game.fen() }),
        });

        const { best_move } = await res.json();

        const engineMove = game.move(best_move);
        if (!engineMove) {
            throw new Error('Engine returned illegal move');
        }
        return game.fen();
    }

    async function onDrop(object: any): Promise<boolean> {
        const { sourceSquare, targetSquare } = object;
        const piece = game.get(sourceSquare);
        if (!piece || piece.color !== allowedColor) return false;

        const myMove = game.move({ from: sourceSquare, to: targetSquare });
        if (!myMove) return false;

        setPosition(game.fen());

        try {
            const newFen = await userMadeMove();
            setPosition(newFen);
        } catch (e) {
            console.error(e);
        }
        return true;
    }


    async function handleOnSquareClick(object: any) {
        if (!selectedPiece) return;

        const piece = game.get(selectedPiece as any);
        if (!piece || piece.color !== allowedColor) return;

        const legal = game.moves({ square: selectedPiece as any, verbose: true });
        const target = object.square;
        if (!legal.some(m => m.to === target)) return;

        game.move({ from: selectedPiece, to: target });
        setPosition(game.fen());
        setSelectedPiece('');

        try {
            const newFen = await userMadeMove();
            setPosition(newFen);
        } catch (e) {
            console.error(e);
            setError('Engine error');
        }
    }

    function hanldeOnPieceClick(object: any) {
        setSelectedPiece(object.square);
    }

    const chessboardConfig = {
        position,
        onPieceDrop: onDrop,
        onPieceClick: hanldeOnPieceClick,
        onSquareClick: handleOnSquareClick,
    };

    return (
        <div className="play-engines-div">
            <div className="board">
                <Chessboard options={chessboardConfig} />
            </div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
}
