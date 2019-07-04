#get card data
import json
import random
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

        #add cards to deck and shuffle the deck
        for i in range(0, 7):
            self.deck.append(Card(1))
        for i in range(0, 3):
            self.deck.append(Card(4))
        random.shuffle(self.deck)
        
        
    
    #do player discard methods go here??
    #TODO: determine whether Player classes should keep track of shuffles or the main loop should keep track of shuffles per turn

    #code for drawing cards
    #TODO: write code for case where deck has less than 5 cards
    def draw(self):
        for i in range(0, 5):
            self.hand.append(self.deck[0])
            self.deck.pop(0)      

debug = Player()
debug.draw()
for card in debug.deck:
    print(card)