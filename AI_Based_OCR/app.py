# Flask utils
from flask import Flask, redirect, url_for, request, render_template
from flask import jsonify
import pickle
import numpy as np
import joblib
import tensorflow as tf
from tensorflow import keras
from keras.models import load_model
from PIL import Image
import os
import pytesseract as pyt
import easyocr
import matplotlib.pyplot as plt
import cv2


# Define a flask app
app = Flask(__name__)



#default page first time of opening
@app.route('/')
def home():
    return render_template("index.html")


#home to login, signIn and Guest page route
@app.route('/templates/Login.html')
def Login():
    return render_template("Login.html")  


@app.route('/Sign_up.html')
def SignUp():
    return render_template("Sign_up.html")


@app.route('/index.html')
def Guest():
    return render_template("index.html")


#Login to SignUp,Guest and home page routes
@app.route('/templates/index.html')
def home1():
    return render_template("index.html")  


@app.route('/templates/Sign_up.html')
def SignUp1():
    return render_template("Sign_up.html")



#sign Up form fuction
#Database variable
NewDatabase={'EmailId':'Password'}

@app.route('/Sign_up' ,methods=['POST','GET'])
def Newlogin():
    EmailId=request.form['Email']
    Password=request.form['Password']
    CPassword=request.form['CPassword']


    if CPassword =='' :
        return render_template('Sign_up.html',info='Confirm your Password')
    else:
        if Password!=CPassword:
             return render_template('Sign_up.html',info='Password not matched. type again')
        else:
             return render_template('afterSignup.html')
        


#SignIn validation fuction
@app.route('/form_login')
def Login1():
    return render_template("Login.html")

database={'kishor@gmail.com':'123','shravani@gmail.com':'456','rohit@gmail.com':'789'}

@app.route('/form_login' ,methods=['POST','GET'])
def login():
    name1=request.form['Email']
    pwd=request.form['Password']

    if name1 not in database :
        return render_template('Login.html',info='Invalid User')
    else:
        if database[name1]!=pwd:
             return render_template('Login.html',info='Invalid Password')
        else:
             return render_template('afterSignup.html',name=name1)

   
#model deployment route- input image to input to model and return output variable

@app.route('/predict', methods=['GET', 'POST'])
def done():    
        img = cv2.imread("models/testing_images/") # image in BGR format
        img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
        fig = plt.figure(figsize = [10,10])
        text = pyt.image_to_string(img)
        return render_template('index.html',info=text)
         





if __name__ == '__main__':
    app.run(debug=True)


#comment added to check sync with remote repository done or not