import ibm_db
from flask import session
from controllers import product

productController = product


def addSales(
    saleid, proname, procode, proid, quantity, price, userid, fullquantity, con
):
    columns = (
        '"SALEID","PRODUCTNAME","PRODUCTCODE","USERID","PRICE","PRODUCTID","QUANTITY"'
    )
    val = (
        "'"
        + str(saleid)
        + "','"
        + proname
        + "','"
        + procode
        + "','"
        + userid
        + "','"
        + price
        + "','"
        + proid
        + "','"
        + quantity
        + "'"
    )
    sql = "INSERT INTO SALES (" + columns + ") values(" + val + ")"
    try:
        stmt = ibm_db.prepare(con, sql)
        ibm_db.execute(stmt)
        productController.updateQuantity(
            proid,
            proname,
            procode,
            userid,
            price,
            str(abs(int(fullquantity) - int(quantity))),
            con,
        )
        print("added :-)")
        return "success"
    except Exception as e:
        print("error on db", e)
        if ibm_db.stmt_error() == "23505":
            print("data is present already")
            return "already present"
        else:
            # print("Error While Adding the User ! ")
            return "database error"


def getSales(userid, con):
    sql = "Select * from SALES where USERID = '" + userid + "'"
    arr = []
    try:
        stmt = ibm_db.exec_immediate(con, sql)
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
