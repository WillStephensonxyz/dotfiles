#!/bin/bash 
#
# Set secondary monitor 
xrandr --output "DVI-I-1-1" --mode "1920x1080" 

# Set third monitor to the right of secondary 
xrandr --output "DVI-D-1" --mode "1920x1080" --right-of DVI-I-1-1
