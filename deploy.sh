#!/bin/bash

cd ~/mern-deployment || exit 1
git pull origin master
npm install --force
pm2 restart mern-deploy