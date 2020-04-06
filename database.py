from config import db
import mysql.connector
from utils import encrypt,checkPwd
conn=mysql.connector.connect(host='localhost',user='Williams',passwd='bbtzetao',database='bbt',charset='utf8mb4')
db=conn.cursor()
#提交表单
def findUser(username):
    try:
        db.execute('select * from users where `username`=%s',(username,))
    except Exception as e:
        abort(408,message=str(e))
    result=db.fetchall()
    return result
def submitin(data):
    username = data['name']
    gender=data['sex']
    grade=data['grade']
    campus=data['campus']
    academy= data['academy']
    phoneNumber= data['phonenumber']
    firstVolunteer=data['first_choice']
    secondVolunteer=data['second_choice']
    YorN=data['YorN']
    time=data['time']
    self_introduction= data['self_introduction']
    db.execute('insert into users (`username`,`gender`,`grade`,`campus`,`academy`,`phoneNumber`,`firstVolunteer`,`secondVolunteer`,`YorN`,`time`,`self_introduction`)values(%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)',
                (username,gender,grade,campus,academy,phoneNumber,firstVolunteer,secondVolunteer,YorN,time,self_introduction))
    try:
        conn.commit()
    except Exception as e:
        abort(408,message=str(e))
    return db.rowcount
def queryin(phoneNumber):
    try:
        db.execute('select * from users where `phoneNumber`=%s',(phoneNumber,))
    except Exception as e:
        abort(408,message=str(e))
    result=db.fetchall()
    if(db.rowcount==1):
        user={
            "name":result[0][1],
            "gender":result[0][2],
            "grade":result[0][3],
            "campus":result[0][4],
            "academy":result[0][5],
            "phoneNumber":result[0][6],
            "firstVolunteer":result[0][7],
            "secondVolunteer":result[0][8],
            "YorN":result[0][9],
            "time":result[0][10],
            "selfIntroduction":result[0][11],
            }
        return user
    else:
        return{"errcode":"400","errmsg":"查不到该手机号"}
#修改表单
