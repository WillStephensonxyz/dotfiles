#!/bin/bash 
#
# Set secondary monitor 
xrandr --output "DVI-I-2-2" --mode "1920x1080" --right-of eDP-1

# Set third monitor to the right of secondary 
xrandr --output "DVI-I-1-1" --mode "1920x1080" --right-of DVI-I-2-2
