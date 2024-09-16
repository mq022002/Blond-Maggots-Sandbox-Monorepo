from flask import Flask, jsonify, make_response
import sqlite3

app = Flask(__name__)


@app.route("/api/plants", methods=["GET"])
def get_plants():
    conn = sqlite3.connect("apps/python/db.sqlite3")
    c = conn.cursor()

    c.execute("SELECT * FROM plants")
    plants = [
        dict(id=row[0], name=row[1], type=row[2], origin=row[3]) for row in c.fetchall()
    ]

    conn.close()

    response = make_response(jsonify(plants))
    response.headers["Access-Control-Allow-Origin"] = "*"
    return response


if __name__ == "__main__":
    app.run(debug=True)
