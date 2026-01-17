type ChessMove = {
    from: string;
    to: string;
    promotion: "q" | "r" | "b" | "n" | undefined;
}

export default function parsemove(move_text: string): ChessMove {
    let move_string = move_text.split(' ')[1];
    if (move_string.length !== 4 && move_string.length !== 5) {
        throw new Error("The string is not a complete move.");
    }

    const from = move_string.slice(0, 2);
    const to = move_string.slice(2, 4);
    const promotion = move_string.length === 5 ? (move_string[4] as ChessMove["promotion"]) : undefined;
    return { from, to, promotion };
}