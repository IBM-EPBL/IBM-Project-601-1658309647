from flask import Flask, jsonify, request, json
import datetime
from connect import connection
from controllers import user
from controllers import product
from controllers import customer
from controllers import sales
import uuid

con = connection.Connection()
userController = user
productController = product
custController = customer
salesController = sales

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
    return jsonify({"message": "Something went wrong", "status": False}), 500


@app.route("/api/addproduct", methods=["GET", "POST"])
def addProducts():
    if request.method == "POST":
        cust = str(request.json.get("customer") or "")
        proname = str(request.json.get("productName") or "")
        procode = str(request.json.get("productCode") or "")
        spec = str(request.json.get("specification") or "")
        price = str(request.json.get("price") or "")
        prodesc = str(request.json.get("productDescription") or "")
        userid = str(request.json.get("userid") or "")
        quantity = str(request.json.get("quantity") or "")
        if cust and price and procode and prodesc and proname and userid:
            flag = productController.addProducts(
                uuid.uuid4().hex,
                cust,
                proname,
                procode,
                userid,
                spec,
                price,
                prodesc,
                quantity,
                con,
            )
            print(flag)
            if flag == "success":
                data = {"message": "product added success"}
                return jsonify(data)
            elif flag == "already present":
                error = {"message": "product is already in database"}
                return jsonify(error)
            else:
                error = {"message": "Error occered while adding data"}
                return jsonify(error)
        else:
            return (
                jsonify({"message": "All Fields are REQUIRED !", "status": False}),
                400,
            )
    return jsonify({"message": "Something went wrong", "status": False}), 500


@app.route("/api/getProducts", methods=["GET"])
def getProducts():
    if request.method == "GET":
        userid = str(request.args.get("userid") or "")
        if userid:
            flag = productController.getProduct(userid, con)
            if flag[0] == "no data":
                error = "no products available"
                return jsonify({"message": error, "status": False})
            elif flag[0] == "database error":
                error = "Error while retrying the data !"
                return jsonify({"message": error, "status": False})
            elif flag[0] == "success":
                user = flag[1]
                res = []
                for i in range(0, len(flag)):
                    res.append(flag[i])
                # print(res)
                res.pop(0)
                # # print(user["CUSTOMER"])
                # for i in user:
                #     print(user[i])
                # print()
                return jsonify(res)
        else:
            return (
                jsonify({"message": "All Fields are REQUIRED !", "status": False}),
                400,
            )
    return jsonify({"message": "Something went wrong", "status": False}), 500


@app.route("/api/addCustomer", methods=["GET", "POST"])
def addCustomer():
    if request.method == "POST":
        custname = str(request.json.get("custname") or "")
        custemail = str(request.json.get("custemail") or "")
        custmobile = str(request.json.get("custmobile") or "")
        custaddress = str(request.json.get("custaddress") or "")
        userid = str(request.json.get("userid") or "")
        if custname and custemail and custmobile and custaddress and userid:
            flag = custController.addCustomer(
                uuid.uuid4().hex,
                custname,
                custmobile,
                custemail,
                custaddress,
                userid,
                con,
            )
            print(flag)
            if flag == "success":
                data = {"message": "Customer added success"}
                return jsonify(data)
            elif flag == "already present":
                error = {"message": "Customer is already in database"}
                return jsonify(error)
            else:
                error = {"message": "Error occered while adding data"}
                return jsonify(error)
        else:
            return (
                jsonify({"message": "All Fields are REQUIRED !", "status": False}),
                400,
            )
    return jsonify({"message": "Something went wrong", "status": False}), 500


@app.route("/api/getCustomer", methods=["GET"])
def getCustomer():
    if request.method == "GET":
        userid = str(request.args.get("userid") or "")
        if userid:
            flag = custController.getCustomer(userid, con)
            if flag[0] == "no data":
                error = "no products available"
                return jsonify({"message": error, "status": False})
            elif flag[0] == "database error":
                error = "Error while retrying the data !"
                return jsonify({"message": error, "status": False})
            elif flag[0] == "success":
                user = flag[1]
                res = []
                for i in range(0, len(flag)):
                    res.append(flag[i])
                res.pop(0)
                return jsonify(res)
        else:
            return (
                jsonify({"message": "All Fields are REQUIRED !", "status": False}),
                400,
            )
    return jsonify({"message": "Something went wrong", "status": False}), 500


@app.route("/api/updateQuantity", methods=["GET", "POST"])
def updateQuantity():
    if request.method == "POST":
        cust = str(request.json.get("customer") or "")
        proname = str(request.json.get("productName") or "")
        procode = str(request.json.get("productCode") or "")
        spec = str(request.json.get("specification") or "")
        price = str(request.json.get("price") or "")
        prodesc = str(request.json.get("productDescription") or "")
        userid = str(request.json.get("userid") or "")
        minusquantity = str(request.json.get("minusquantity") or "")
        proid = str(request.json.get("proid") or "")
        if cust and price and procode and prodesc and proname and userid and proid:
            flag = productController.updateQuantity(
                proid,
                cust,
                proname,
                procode,
                userid,
                spec,
                price,
                prodesc,
                minusquantity,
                con,
            )
            print(flag)
            if flag == "Update Success":
                data = {"message": "product Updated success"}
                return jsonify(data)
            else:
                error = {"message": "Error occered while adding data"}
                return jsonify(error)
        else:
            return (
                jsonify({"message": "All Fields are REQUIRED !", "status": False}),
                400,
            )
    return jsonify({"message": "Something went wrong", "status": False}), 500


@app.route("/api/addSales", methods=["GET", "POST"])
def addSales():
    if request.method == "POST":
        proname = str(request.json.get("proname") or "")
        procode = str(request.json.get("procode") or "")
        proid = str(request.json.get("proid") or "")
        price = str(request.json.get("price") or "")
        quantity = str(request.json.get("quantity") or "")
        userid = str(request.json.get("userid") or "")
        fullquantity = str(request.json.get("fullquantity"))
        if proname and procode and proid and price and userid and quantity:
            flag = salesController.addSales(
                uuid.uuid4().hex,
                proname,
                procode,
                proid,
                quantity,
                price,
                userid,
                fullquantity,
                con,
            )
            print(flag)
            if flag == "success":
                data = {"message": "SaLes added success"}
                return jsonify(data)
            elif flag == "already present":
                error = {"message": "Sales is already in database"}
                return jsonify(error)
            else:
                error = {"message": "Error occered while adding data"}
                return jsonify(error)
        else:
            return (
                jsonify({"message": "All Fields are REQUIRED !", "status": False}),
                400,
            )
    return jsonify({"message": "Something went wrong", "status": False}), 500


@app.route("/api/getSales", methods=["GET", "POST"])
def getSales():
    if request.method == "GET":
        userid = str(request.args.get("userid") or "")
        if userid:
            flag = salesController.getSales(userid, con)
            if flag[0] == "no data":
                error = "no sales list available"
                return jsonify({"message": error, "status": False})
            elif flag[0] == "database error":
                error = "Error while retrying the data !"
                return jsonify({"message": error, "status": False})
            elif flag[0] == "success":
                user = flag[1]
                res = []
                for i in range(0, len(flag)):
                    res.append(flag[i])
                res.pop(0)
                return jsonify(res)
        else:
            return (
                jsonify({"message": "All Fields are REQUIRED !", "status": False}),
                400,
            )
    return jsonify({"message": "Something went wrong", "status": False}), 500


# Running app
if __name__ == "__main__":
    app.run(debug=True)
