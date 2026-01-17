export default async function getbestmove(fen_string: string, engine: string) {
    let res = await fetch("http://10.168.5.125:5000/" + engine + "/bestmove", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fen: fen_string })
    });
    let json = await res.json();
    return json.best_move;
}