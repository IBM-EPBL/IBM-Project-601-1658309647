import ibm_db
from flask import session


def Connection():
    try:
        conn = ibm_db.connect(
            "DATABASE=bludb;HOSTNAME=2d46b6b4-cbf6-40eb-bbce-6251e6ba0300.bs2io90l08kqb1od8lcg.databases.appdomain.cloud;PORT=32328;SECURITY=SSL;SSLServerCertificate=DigiCertGlobalRootCA.crt;UID=wfd30378;PWD=r8Lk03cZCGL9C2rB",
            "",
            "",
        )
        print("Database Connected Successfully !")
        return conn
    except:
        print("Unable to connect: ", ibm_db.conn_errormsg())
