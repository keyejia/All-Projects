import turtle
import random

#Setup Varible
branch_length = 150
branch_depth = 20
branch_angle = 30
t_speed = 100
leaf_color = "green"
branch_color = "brown"
#Initialize: setup window and position turtle
window = turtle.Screen()
t=turtle.Turtle()
t.speed(t_speed)
t.left(90)

#Drawing branch function
def branch(t,h,d,a):
    #stop condition
    if d < 0:
        return
    t.pendown()   
    #coloring
    if d < 4:
        t.color(leaf_color)
    else:
        t.color(branch_color)
    #set random branch angles
    angle_left = random.normalvariate(a,4)
    angle_right = random.normalvariate(a,4)
    t.forward(h)
    #left branch
    t.left(angle_left)
    branch(t,h/random.normalvariate(1.4,0.15),random.randint(d-3,d-1),30)
    #right branch
    t.right(angle_left+angle_right)
    branch(t,h/random.normalvariate(1.4,0.15),random.randint(d-3,d-1),30)
    #return to starting position
    t.penup()
    t.left(180+angle_right)
    t.forward(h)
    t.left(180)
    

#Calling function
branch(t,branch_length,branch_depth,branch_angle)

#Closing
windows.exitonclick()
