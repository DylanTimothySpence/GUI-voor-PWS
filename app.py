# This code is for Dylan version GUI. Do not change. Instead, make changes to "tobias_app.py"

from flask import Flask, render_template, request, url_for, redirect
from dijkstra import run_algorithm
from converter import csv_to_adjacency_list

app = Flask(__name__)

@app.route("/", defaults={"src": None}, methods=["GET", "POST"])
@app.route("/<src>", methods=["GET", "POST"])
def login(src):
    try:
        if request.method == "POST":
            speed_slider = round(float(request.form.get("speed_slider")) * 1.34 / 100, 2)
            srcbox = int(request.form.get("srcbox"))
            dest_label = request.form.get("dest_label")
            dest_number = int(request.form.get("dest_number"))
            return redirect(url_for("map", src=srcbox, dest_label=dest_label, dest_number=dest_number, speed=speed_slider))
        else:
            return render_template("login.html", src=src)
    except:
        return render_template("login.html", src=src)

@app.route("/van-<src>-naar-<dest_label>-<dest_number>-snelheid=<speed>")
def map(src, dest_label, dest_number, speed):
    path = 'hlgraph.csv'
    graph = csv_to_adjacency_list(path)
    route, time = run_algorithm(graph=graph, startnode=int(src), endnode=int(dest_number), speed=float(speed))
    # print(f'route: {route}, time: {time}s')
    time_str = f"{int(time // 60)} minuten en {round(time % 60)} seconden"
    return render_template("map.html", src=src, dest_label=dest_label, dest_number=dest_number, speed=speed, route=route, time=time_str, graph=graph)

if __name__ == "__main__":
    app.run(debug=True)
