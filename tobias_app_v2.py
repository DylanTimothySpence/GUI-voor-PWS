from flask import Flask, render_template, request, url_for, redirect
from dijkstra import run_algorithm
from converter import csv_to_adjacency_list
import os

app = Flask(__name__)

@app.route("/", defaults={"src": None}, methods=["GET", "POST"])
@app.route("/<src>", methods=["GET", "POST"])
def login(src):
    try:
        if request.method == "POST":
            speed_slider = round(float(request.form.get("speed_slider")) * 1.34 / 100, 2)
            srcbox_van = int(request.form.get("srcbox_van"))
            srcbox_naar = int(request.form.get("srcbox_naar"))
            dest_label = f"#{srcbox_naar}"
            return redirect(url_for("map", src=srcbox_van, dest_label=dest_label, dest_number=srcbox_naar, speed=speed_slider))
        else:
            return render_template("login_tobias.html", src=src, graph=csv_to_adjacency_list('hlgraph.csv'), route=[0, 1, 16, 17, 18, 24, 7, 5, 6, 70, 62, 71, 72, 119, 118, 148, 149, 152, 153, 155, 156])
    except:
        return render_template("login_tobias.html", src=src)

@app.route("/van-<src>-naar-<dest_label>-<dest_number>-snelheid=<speed>")
def map(src, dest_label, dest_number, speed):
    path = 'hlgraph.csv'
    graph = csv_to_adjacency_list(path)
    route, time = run_algorithm(graph=graph, startnode=int(src), endnode=int(dest_number), speed=float(speed))
    # print(f'route: {route}, time: {time}s')
    time_str = f"{int(time // 60)} minuten en {round(time % 60)} seconden"
    return render_template("map.html", src=src, dest_label=dest_label, dest_number=dest_number, speed=speed, route=route, time=time_str, graph=graph)

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5001))  # Default to port 5001
    app.run(host="0.0.0.0", port=port, debug=True)
