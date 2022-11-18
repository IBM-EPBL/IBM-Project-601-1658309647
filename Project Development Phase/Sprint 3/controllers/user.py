import ibm_db
from flask import session


def userLogin(email, password, conn):

    sql = (
        "SELECT * FROM USER WHERE EMAIL = '"
        + email
        + "' AND PASSWORD = '"
        + password
        + "'"
    )
    arr = []
    try:
        stmt = ibm_db.exec_immediate(conn, sql)
        dictionary = ibm_db.fetch_both(stmt)
        if dictionary != False:
            if not dictionary == {}:
                print("Log in Success !")
                arr.append("success")
                arr.append(dictionary)
                # print(session["income"])
                return arr
        else:
            print("No user is found !")
            arr.append("no user")
            arr.append(dictionary)
            return arr
    except:
        print("Error while retrying data !")
        arr.append("database errors")
        arr.append({})
        return arr
    return arr


def Signup(name, email, phone, password, conn):

    lis = email.split("@")
    userid = str(lis[0])

    columns = '"NAME","EMAIL","PHONE","PASSWORD","USERID"'
    val = (
        "'"
        + name
        + "','"
        + email
        + "','"
        + phone
        + "','"
        + password
        + "','"
        + userid
        + "'"
    )
    sql = "Insert into USER(" + columns + ") values(" + val + ")"
    try:
        stmt = ibm_db.prepare(conn, sql)
        ibm_db.execute(stmt)
        print("added :-)")
        return "success"
    except Exception as e:
        print("error on db", e)
        if ibm_db.stmt_error() == "23505":
            print("already have an account")
            return "already present"
        else:
            print("Error While Adding the User ! ")
            return "database error"
