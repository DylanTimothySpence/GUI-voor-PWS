from flask import Flask, render_template, request, url_for, redirect
from dijkstra import run_algorithm
from converter import csv_to_adjacency_list
import os
from datetime import datetime, timedelta, time
from dynamic_graphs import graph_for_time, convert_to_time, add_times, subtract_times

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
            time_input = request.form.get("time")
            type_tijd = request.form.get('typeTijd')
            return redirect(url_for("map", src=srcbox_van, dest_label=dest_label, dest_number=srcbox_naar, speed=speed_slider, time_input=time_input, type_tijd=type_tijd))
        else:
            return render_template("login_tobias.html", src=src, graph=csv_to_adjacency_list('hlgraph.csv'))
    except:
        return render_template("login_tobias.html", src=src, graph=csv_to_adjacency_list('hlgraph.csv'))

@app.route("/van-<src>/naar-<dest_label>/<dest_number>/snelheid=<speed>/time=<time_input>/type_tijd=<type_tijd>")
def map(src, dest_label, dest_number, speed, time_input, type_tijd):
    # path = 'hlgraph.csv'
    # graph = csv_to_adjacency_list(path)
    # print(f"time_input: {time_input}, type: {type(time_input)}")
    # graph = graph_for_time(convert_to_time(time_input))
    # route, time = run_algorithm(graph=graph, startnode=int(src), endnode=int(dest_number), speed=float(speed))
    if type_tijd == 'aankomst':
        graph = graph_for_time(subtract_times(time_input, "00:00:30"))
        route, time = run_algorithm(graph=graph, startnode=int(src), endnode=int(dest_number), speed=float(speed))

        ETA_or_PTL = (datetime.strptime(time_input, "%H:%M:%S") - timedelta(seconds=time)).strftime("%H:%M:%S")
        time_message = 'Vertrek om'
    else:
        graph = graph_for_time(add_times(time_input, "00:00:30"))
        route, time = run_algorithm(graph=graph, startnode=int(src), endnode=int(dest_number), speed=float(speed))

        ETA_or_PTL = (datetime.strptime(time_input, "%H:%M:%S") + timedelta(seconds=time)).strftime("%H:%M:%S")
        time_message = 'ETA'
    time_str = f"{int(time // 60)} minuten en {round(time % 60)} seconden"
    return render_template("map.html", src=src, dest_label=dest_label, dest_number=dest_number, speed=speed, route=route, time=time_str, graph=graph, ETA_or_PTL = ETA_or_PTL, time_message=time_message)

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5001))  # Default to port 5001
    app.run(host="0.0.0.0", port=port, debug=True)
