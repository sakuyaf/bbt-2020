from config import db
from flask import abort
import mysql.connector
conn=mysql.connector.connect(host=db["host"],user=db["user"],passwd=db["password"],database=db["database"],charset='utf8mb4')
db=conn.cursor()

def checkPhone(phoneNumber):
    if phoneNumber.startswith("1"):
        return 0
    else:
        return 1
        
def checkEmpty(data):
    user={
        "name":"姓名",
        "sex":"性别",
        "grade":"年级",
        "campus":"校区",
        "academy":"学院",
        "phonenumber":"手机号码",
        "first_choice":"第一志愿",
        "second_choice":"第二志愿",
        "YorN":"是否服从调剂",
        "time":"面试时间",
        "self_introduction":"自我介绍",
        }
    for key in user:
        if data[key]==""or data[key].isspace():
            return{'errcode':400,'errmsg':user[key]+'为空'}
    return 0