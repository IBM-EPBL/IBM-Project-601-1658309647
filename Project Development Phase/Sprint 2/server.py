from flask import Flask, jsonify, request
import datetime
from connect import connection
from controllers import user

con = connection.Connection()
userController = user

# Initializing flask app
app = Flask(__name__)


@app.route("/", methods=["GET"])
def helloworld():
    if request.method == "GET":
        data = {"message": "success"}
        return jsonify(data)


@app.route("/user/login", methods=["GET", "POST"])
def userLogin():
    if request.method == "POST":
        email = str(request.json.get("email") or "")
        password = str(request.json.get("password") or "")

        if email and password:
            flag = userController.userLogin(email, password, con)
            if flag[0] == "no user":
                error = "Email Id or Password Incorrect !"
                return jsonify({"message": error, "status": False})
            elif flag[0] == "database error":
                error = "Error while retrying the data !"
                return jsonify({"message": error, "status": False})
            elif flag[0] == "success":
                user = flag[1]
                return jsonify({"message": "LOGIN SUCCESSFULLY"})
        else:
            return (
                jsonify({"message": "All Fields are REQUIRED !", "status": False}),
                400,
            )
    return jsonify({"message": "Something went wrong"})


@app.route("/user/signup", methods=["GET", "POST"])
def userSignup():
    email = ""
    password = ""
    name = ""
    mobile = ""
    if request.method == "POST":
        email = str(request.json.get("email") or "")
        password = str(request.json.get("password") or "")
        name = str(request.json.get("name") or "")
        mobile = str(request.json.get("mobile") or "")
        if email and password and mobile and name:
            flag = userController.Signup(name, email, mobile, password, con)
            if flag == "success":
                data = {"message": "success"}
                return jsonify(data)
            elif flag == "already present":
                error = {"message": "User email Id is already in use! Pls do login."}
                return jsonify(error)
            else:
                error = {"message": "Error occered while SignUp!"}
                return jsonify(error)
        else:
            return (
                jsonify({"message": "All Fields are REQUIRED !", "status": False}),
                400,
            )
    return jsonify({"message": "Something went wrong", "status": False})


# Running app
if __name__ == "__main__":
    app.run(debug=True)
