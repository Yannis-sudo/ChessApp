from flask import Flask, request, jsonify
from flask_cors import CORS

# private imports
from engine import getbestmove

app = Flask(__name__)

CORS(
    app,
    resources={r"/therookengine/bestmove": {"origins": "http://localhost:5173"}},
    methods=["GET", "POST"],
    allow_headers=["Content-Type", "Authorization"],
    max_age=86400,
)


# The rook engine
@app.route("/therookengine/bestmove", methods=["POST"])
def bestmove():
    data = request.get_json()
    fen = data["fen"]
    return jsonify(getbestmove(fen))

# Stockfish engine


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0")