import turtle as t
import random

tim = t.Turtle()
nums_sides = 5
colours = [
    "Blue",
    "Yellow",
    "Purple",
    "Orange",
    "Pink",
    "Brown",
    "Gray",
    "Cyan",
    "Magenta",
    "Lime",
    "Maroon",
    "Olive",
    "Navy",
    "Teal",
    "Silver",
    "Gold",
    "Violet",
    "Indigo",
    "Beige",
    "Coral",
    "Turquoise",
    "Salmon",
    "Lavender",
    "Peach",
    "Mint",
    "Black",
    "White",
    "Azure",
    "Ivory",
    "Fuchsia",
    "Khaki",
    "Lilac",
    "Mustard",
    "Emerald",
    "Pearl",
    "Rose",
    "Sand",
    "Sky",
    "Tan",
    "Amber",
]


def draw_shape(nums_sides):
    angle = 360 / nums_sides
    for _ in range(nums_sides):
        tim.forward(100)
        tim.right(angle)


for i in range(3, 11):
    tim.color(random.choise(colours))
    draw_shape(i)
