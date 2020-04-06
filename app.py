from flask import Flask 
from flask_cors import CORS
import mysql.connector
import config
app=Flask(__name__)
CORS(app, supports_credentials=True)
app.config['SECRET_KEY']=config.app['secret_key']
from controler.user.submit import *
from controler.user.query import *
if __name__=='__main__':
    app.run(host='127.0.0.1',port=5050)
