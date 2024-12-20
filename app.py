from flask import Flask, render_template, request, url_for, redirect

app = Flask(__name__)

@app.route("/", defaults={"src": None}, methods=["GET", "POST"])
@app.route("/<src>", methods=["GET", "POST"])
def login(src):
    if request.method == "POST":
        srcbox = request.form.get("srcbox")
        return redirect(url_for("map", src=srcbox))
    else:
        return render_template("login.html", src=src)

@app.route("/van-<src>")
def map(src):
    return render_template("map.html", src=src)

if __name__ == "__main__":
    app.run(debug=True)
