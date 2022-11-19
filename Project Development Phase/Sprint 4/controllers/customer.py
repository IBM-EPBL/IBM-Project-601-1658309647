import ibm_db
from flask import session


def addCustomer(custid, custname, custmobile, custemail, custaddress, userid, conn):
    columns = '"CUSTID","CUSTNAME","CUSTMOBILE","CUSTEMAIL","CUSTADDRESS","USERID"'
    val = (
        "'"
        + str(custid)
        + "','"
        + custname
        + "','"
        + custmobile
        + "','"
        + custemail
        + "','"
        + custaddress
        + "','"
        + userid
        + "'"
    )
    sql = "INSERT INTO CUSTOMERS (" + columns + ") values(" + val + ")"
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


def getCustomer(userid, conn):
    sql = "Select * from customers where USERID = '" + userid + "'"
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
