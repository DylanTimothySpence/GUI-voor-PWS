from flask import Flask, render_template, request, url_for, redirect

app = Flask(__name__)

@app.route("/", defaults={"src": None}, methods=["GET", "POST"])
@app.route("/<src>", methods=["GET", "POST"])
def login(src):
    if request.method == "POST":
        speed_slider = round(float(request.form.get("speed_slider")) * 1.34 / 100, 2)
        srcbox = int(request.form.get("srcbox"))
        dest_label = request.form.get("dest_label")
        dest_number = int(request.form.get("dest_number"))
        return redirect(url_for("map", src=srcbox, dest_label=dest_label, dest_number=dest_number, speed=speed_slider))
    else:
        return render_template("login.html", src=src)

@app.route("/van-<src>-naar-<dest_label>-<dest_number>-snelheid=<speed>")
def map(src, dest_label, dest_number, speed):
    #route, time = run_algorithm(src, dest_number)
    return render_template("map.html", src=src, dest_label=dest_label, dest_number=dest_number, speed=speed)

if __name__ == "__main__":
    app.run(debug=True)
