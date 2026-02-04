from flask import Flask 

# application is an instance of Flask class 
# were naming this instance the name of dir = app 
# helps with loading associated files 
app = Flask(__name__)

# package app defined by dir & this file 
# app instance above is a part of this package 
# we importing routes after defining app because 
# routes requires the app variable 

# routes = protocol + domain name 
from app import routes 