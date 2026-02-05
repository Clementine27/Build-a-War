from flask import Flask 
from config import Config
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate


# application is an instance of Flask class 
# were naming this instance the name of dir = app 
# helps with loading associated files 
app = Flask(__name__)
# update the current app's config from Config object
app.config.from_object(Config)
db = SQLAlchemy(app)
migrate = Migrate(app, db)

# package app defined by dir & this file 
# app instance above is a part of this package 
# we importing routes after defining app because 
# routes requires the app variable 

# routes = protocol + domain name 
# models define structure of data 
from app import routes, models


