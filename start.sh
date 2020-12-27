#!/bin/sh

git pull
npm install
pm2-runtime start process.json --env local