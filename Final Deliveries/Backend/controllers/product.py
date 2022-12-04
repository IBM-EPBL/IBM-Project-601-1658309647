import ibm_db
from flask import session


def addProducts(
    proid, cust, proname, procode, userid, spec, price, prodesc, quantity, conn
):
    columns = '"PRODUCTID","CUSTOMER","PRODUCTNAME","PRODUCTCODE","USERID","SPECIFICATION","PRICE","PRODUCTDESC","QUANTITY"'
    val = (
        "'"
        + str(proid)
        + "','"
        + cust
        + "','"
        + proname
        + "','"
        + procode
        + "','"
        + userid
        + "','"
        + spec
        + "','"
        + price
        + "','"
        + prodesc
        + "','"
        + quantity
        + "'"
    )
    sql = "INSERT INTO PRODUCTS (" + columns + ") values(" + val + ")"
    try:
        stmt = ibm_db.prepare(conn, sql)
        ibm_db.execute(stmt)
        print("added :-)")
        return "success"
    except Exception as e:
        # print("error on db", e)
        if ibm_db.stmt_error() == "23505":
            print("data is present already")
            return "already present"
        else:
            # print("Error While Adding the User ! ")
            return "database error"


def getProduct(userid, conn):
    sql = "Select * from products where USERID = '" + userid + "'"
    arr = []
    try:
        stmt = ibm_db.exec_immediate(conn, sql)
        dictionary = ibm_db.fetch_assoc(stmt)
        if dictionary != False:
            arr.append("success")
            # arr.append({"message": "success"})
            while dictionary != False:
                arr.append(dictionary)
                dictionary = ibm_db.fetch_assoc(stmt)
            return arr
        else:
            print("No data is found !")
            arr.append("no data")
            arr.append(dictionary)
            return arr
    except Exception as e:
        print(e)
        print("Error while retrying data !")
        arr.append("database errors")
        arr.append({})
        return arr
    return arr


def updateQuantity(proid, proname, procode, userid, price, minusquantity, con):
    columns = '"PRODUCTID","PRODUCTNAME","PRODUCTCODE","USERID","PRICE","QUANTITY"'
    val = (
        "'"
        + str(proid)
        + "','"
        + proname
        + "','"
        + procode
        + "','"
        + userid
        + "','"
        + price
        + "','"
        + minusquantity
        + "'"
    )
    sql = (
        "UPDATE PRODUCTS SET ("
        + columns
        + ") = ("
        + val
        + ") WHERE USERID ="
        + "'"
        + userid
        + "' AND PRODUCTID ='"
        + proid
        + "'"
    )
    try:
        stmt = ibm_db.prepare(con, sql)
        ibm_db.execute(stmt)
        # print("Update Success")
        return "Update Success"
    except:
        # print("Update error !")
        return "Update Failed"
