import subprocess

# Engine Communication
engine = subprocess.Popen(
    ["/home/pi/dev/engine/engine_1/build/engine"],
    stdin=subprocess.PIPE,
    stdout=subprocess.PIPE,
    text=True
)

def send(cmd):
    engine.stdin.write(cmd + "\n")
    engine.stdin.flush()

def read():
    while True:
        line = engine.stdout.readline().strip()
        if line:
            return line


def getbestmove(FEN):
    depht = 2
    send("position " + FEN)
    send("depht " + str(depht))
    send("go")

    move = None

    while True:
        line = engine.stdout.readline().strip()
        if line.startswith("bestmove"):
            move = line
            break
    
    return_json = {
        "best_move": move,
        "depht": depht
    }
    print(return_json)
    return return_json