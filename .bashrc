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
alias torbrowser='cd ~/tor ; ./start-tor-browser.desktop'
