#!/bin/bash

if [ -z "$1" ]; then
  echo "❌ Mayo kang commit message teh"
  echo "👉 dat arog kani ./sha.sh fix: sample message"
  exit 1
fi

npm run lint || exit 1

npx prettier --check .

npx prettier --write .

git add .

git commit -m "$1"

read -p "Ok na yarn? (y/n): " confirm
if [ "$confirm" = "y" ]; then
  git push
else 
  echo "🚫 K check mo ulit"
fi
