from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

# ---------------- PAGES ----------------

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/dashboard")
def dashboard():
    return render_template("dashboard.html")

@app.route("/courses")
def courses():
    return render_template("courses.html")

@app.route("/colleges")
def colleges():
    return render_template("colleges.html")

@app.route("/career")
def career():
    return render_template("carrer.html")

@app.route("/contact")
def contact():
    return render_template("contact.html")

@app.route("/profile")
def profile():
    return render_template("profile.html")

@app.route("/setting")
def setting():
    return render_template("setting.html")

# ---------------- AUTH APIs ----------------

@app.route("/login", methods=["POST"])
def login():
    data = request.json
    email = data.get("email")
    password = data.get("password")

    # TEMP LOGIN (Replace with DB later)
    if email == "admin@gmail.com" and password == "1234":
        return jsonify({"status": "success"})
    else:
        return jsonify({"status": "fail"}), 401

@app.route("/signup", methods=["POST"])
def signup():
    return jsonify({"status": "success"})

# ---------------- RUN ----------------

if __name__ == "__main__":
    app.run(debug=True)

