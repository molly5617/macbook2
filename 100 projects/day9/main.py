bids = {}

continue_bidding = True
while continue_bidding:
    name = input("what is your name?")
    price = int(input("what is your bid?: $"))
    bids[name] = price
    should_continue = input("Are there any other bidders?Type 'yes' or 'no'.\n")


def find_highest_bidder(bidding_dictionary):
    highest_bid = 0
    for bidder in bidding_dictionary:
        bid_amount = bidding_dictionary[bidder]
        if bid_amount > highest_bid:
            highest_bid = bid_amount
            winner = bidder



