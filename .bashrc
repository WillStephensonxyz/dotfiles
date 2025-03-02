# start tmux on terminal launch 
if command -v tmux &> /dev/null && [ -z "$TMUX" ]; then 
	tmux new-session 
fi 

# Vim keys 
set -o vi 

alias c='clear' 
alias h='cd ~' 
alias v='vim'
alias r='ranger' 
alias nv='nvim'
alias pingg='ping 8.8.8.8'
alias torbrowser='cd ~/tor ; ./start-tor-browser.desktop'
alias up='sudo ip link set dev enp0s31f6 up' 
alias down='sudo ip link set dev enp0s31f6 down' 
alias cleanup='python3 ~/work/downloads/Downloads-Cleanup/cleanup.py' 
alias isearch='python3 ~/work/search/TechSearch/isearch.py' 
alias clipc='xclip -selection c'
alias gitroll='python3 ~/work/gitroll/gitroll.py' 
alias music='python3 ~/work/sendmusic/Send-Music/music.py' 
