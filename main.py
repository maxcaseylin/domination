import helper as h

#main game loop

#ask for # of players, init turns
players = int(input("number of players:"))
order = []
for i in range(0, players):
    order.append(h.Player())

print(order)