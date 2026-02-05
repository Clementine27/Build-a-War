

def fizz_buzz(): 
    # get the user input
        # check if its a number, if its not, then keep asking the user until it does 
    number = ""
    while type(number) != int: 
        number = int(input("give me a number: "))
    # if its a division of 3, print fizz 
    if number % 3 == 0: 
        print("Fizz")
    # if 5, print buzz 
    if number % 5 == 0: 
        print("Buzz")
        
    # else, just print the damn thing 
    else: 
        for i in range(1, number): 
            print(i)
        

fizz_buzz()

    
        