#!/bin/bash
FILE="$2/$3"

if [ -e "$FILE" ]; then
    cd "$2/$3"
    git pull origin $4
else
	cd "$2"
    git clone $1
    exit 0
fi