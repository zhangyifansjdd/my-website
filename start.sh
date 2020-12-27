#!/bin/sh

git pull
npm install
pm2 start process.json --env local