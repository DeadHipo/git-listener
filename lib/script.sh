#!/bin/bash
FILE="$2/$3/.git"

echo "$FILE"

if [ -e "$FILE" ]; then
    echo "Repo exists"
    git pull origin $4
else 
	echo "Repo not exists"
    git clone $1
    exit 0
fi 