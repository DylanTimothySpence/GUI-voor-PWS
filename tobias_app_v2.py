from flask import Flask, render_template, request, url_for, redirect
from dijkstra_v4 import run_algorithm
from converter import csv_to_adjacency_list
import os
from datetime import datetime, timedelta, time
from dynamic_graphs import graph_for_time, convert_to_time, add_times, subtract_times

app = Flask(__name__)

@app.route("/", methods=["GET", "POST"])
def login():
    try:
        if request.method == "POST":
            speed_slider = round(float(request.form.get("speed_slider")) * 1.34 / 100, 2)
            srcbox_van = int(request.form.get("srcbox_van"))
            srcbox_naar = int(request.form.get("srcbox_naar"))
            time_input = request.form.get("time")
            type_tijd = request.form.get('typeTijd')
            return redirect(url_for("map", src=srcbox_van, dest=srcbox_naar, speed=speed_slider, time_input=time_input, type_tijd=type_tijd))
        else:
            return render_template("login_tobias.html", graph=csv_to_adjacency_list('hlgraph.csv'))
    except:
        return render_template("login_tobias.html", graph=csv_to_adjacency_list('hlgraph.csv'))

@app.route("/van-<src>/naar-<dest>/snelheid=<speed>/ingevoerde_tijd=<time_input>/type_tijd=<type_tijd>")
def map(src, dest, speed, time_input, type_tijd):
    if type_tijd == 'aankomst':
        graph = graph_for_time(subtract_times(time_input, "00:00:30"))
        route, time = run_algorithm(graph=graph, startnode=int(src), endnode=int(dest), speed=float(speed))
        time = round(time, 0)
        leave_time = (datetime.strptime(time_input, "%H:%M:%S") - timedelta(seconds=time)).strftime("%H:%M:%S")
        arrival_time = time_input
        leave_message = 'Vertrek om'
        arrival_message = 'Als u aan wilt komen op'
    else:
        graph = graph_for_time(add_times(time_input, "00:00:30"))
        route, time = run_algorithm(graph=graph, startnode=int(src), endnode=int(dest), speed=float(speed))
        time = round(time, 0)
        leave_time = time_input
        arrival_time = (datetime.strptime(time_input, "%H:%M:%S") + timedelta(seconds=time)).strftime("%H:%M:%S")
        leave_message = 'Vertrek om'
        arrival_message = 'Voorspelde aankomsttijd'
    time_str = f"{int(time // 60)} minuten en {round(time % 60)} seconden"
    return render_template("map.html", src=src, dest=dest, speed=speed, route=route, time=time_str, graph=graph, leave_time=leave_time, arrival_time=arrival_time, leave_message=leave_message, arrival_message=arrival_message)

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5001))  # Default to port 5001
    app.run(host="0.0.0.0", port=port, debug=True)
