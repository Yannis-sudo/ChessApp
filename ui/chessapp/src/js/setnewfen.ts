// Function to set update FEN after an move
import { Chess } from "chess.js"

export default function setnewfen(fen: string, move: string): string {
    const game = new Chess(fen);

    if (game.move(move)) {
        const new_fen = game.fen();
        return new_fen;
    } else {
        throw new Error("Error while updating the FEN-String")
    }
}