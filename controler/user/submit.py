from app import app
from flask import request
from database import *
from controler.user.check import *
@app.route('/submit', methods=['POST'])
def sumbit():
    from flask import request
    data = request.get_json()
    if findUser(data["name"]):
        return{'errcode':400,'errmsg':'您以经报名~~'},400
    if checkEmpty(data):
        return checkEmpty(data)
    if checkPhone(data["phonenumber"]):
        return {'errcode':400,'errmsg':'输入的手机号码有误'},400
    rowcount = submitin(data)
    if rowcount>0:
        return{'errcode':200,'errmsg':'提交成功'},200
    else:
        return{'errcode':400,'errmsg':'提交失败，请重新填写'},400


        
        

