from app import app 

# view funcs are funcs called when user 
# wants to interract with a specific URL route within the app


# ex: 
# when an user request the below 2 urls via these 2 decorators 
@app.route("/")
    # route func from app module takes in the index() func as argument 
    # and does its little magic trick so that the first ar i.e. /index 
    # spits out output from func index
@app.route("/index")
# invoke this func 
def index(): 
    return "hello there, gorgeous!"
