import csv

with open("day25/weather_data.csv") as data_file:
    data = csv.reader(data_file)
    temperature = []
    for row in data:
        if row[1] != "temp":
            temperature.append(row[1])
    print(temperature)

import pandas

data = pandas.read_csv("day25/weather_data.csv")
monday=data[data.day=="Monday"]
monday_temp=monday.temp[0]




