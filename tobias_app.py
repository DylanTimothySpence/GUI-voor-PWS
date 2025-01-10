# #todo: logboek (9 jan 1 uur aan tobias GUI)
# from flask import Flask, render_template, request, url_for, redirect
# from dijkstra import run_algorithm
# from converter import csv_to_adjacency_list

# app = Flask(__name__)

# @app.route("/", methods=["GET", "POST"])
# def home():
#     if request.method == "POST":
#         if "tobias_button" in request.form:
#             print("Tobias button clicked")
#             return redirect(url_for("login_tobias"))  # Redirect to the 'login_tobias' route
#         elif "normal_button" in request.form:
#             print("Normal button clicked")
#             return redirect(url_for("login"))  # Redirect to the 'login' route
#     return render_template("home_tobias.html")

# @app.route("/vertrek-nu", methods=["GET", "POST"])
# def login():
#     try:
#         if request.method == "POST":
#             speed_slider = round(float(request.form.get("speed_slider")) * 1.34 / 100, 2)
#             srcbox = int(request.form.get("srcbox"))
#             dest_label = request.form.get("dest_label")
#             dest_number = int(request.form.get("dest_number"))
#             red = url_for("map", src=srcbox, dest_label=dest_label, dest_number=dest_number, speed=speed_slider)
#             print(red)
#             return redirect(red)
#         else:
#             return render_template("login.html")
#     except:
#         return render_template("login.html")


# @app.route("/plan-route", methods=["GET", "POST"])
# def login_tobias():
#     try:
#         if request.method == "POST":
#             speed_slider = round(float(request.form.get("speed_slider")) * 1.34 / 100, 2)
#             srcbox = int(request.form.get("srcbox"))
#             dest_label = request.form.get("dest_label")
#             dest_number = int(request.form.get("dest_number"))
#             return redirect(url_for("map", src=srcbox, dest_label=dest_label, dest_number=dest_number, speed=speed_slider))
#         else:
#             return render_template("login_tobias.html")
#     except:
#         return render_template("login_tobias.html")

# @app.route("/van-<src>-naar-<dest_label>-<dest_number>-snelheid=<speed>")
# def map(src, dest_label, dest_number, speed):
#     path = 'hlgraph.csv'
#     graph = csv_to_adjacency_list(path)
#     route, time = run_algorithm(graph=graph, startnode=int(src), endnode=int(dest_number), speed=float(speed))
#     # print(f'route: {route}, time: {time}s')
#     time_str = f"{int(time // 60)} minuten en {round(time % 60)} seconden"
#     return render_template("map.html", src=src, dest_label=dest_label, dest_number=dest_number, speed=speed, route=route, time=time_str, graph=graph)

# if __name__ == "__main__":
#     app.run(debug=True)
