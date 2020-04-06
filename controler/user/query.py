from app import app
from database import *
@app.route('/query',methods=['post'])
def query():
    from flask import request
    data=request.get_json()
    phoneNumber=data["phonenumber"]
    return queryin(phoneNumber)
    