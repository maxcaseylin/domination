#get card data
import json
data = open('cards.json', 'r') 
carddata = json.load(data)

class Card:
        
    #constructor 
    def __init__(self, id):
        data = carddata[str(id)]
        self.name = data["name"]
        self.text = data["text"]
        self.cost = data["cost"]
        self.value = data["value"]
        self.points = data["points"]
        self.type = data["type"]
        self.effects = data["effects"]
    
    #TODO: somehow write __repr__ without having Cards carrying redundant information

    #Readable form
    def __str__(self):
        return "{} \n {}".format(self.name, self.text)

class Player:

    #constructor
    def __init__(self):
        self.hand = []
        self.deck = []
        self.discard = []
        self.vp = 0
    
    #do player discard methods go here??
    #TODO: determine whether Player classes should keep track of shuffles or the main loop should keep track of shuffles per turn