FROM node
RUN npm i pm2 -g && git clone https://github.com/zhangyifansjdd/my-website.git
WORKDIR /my-website
EXPOSE  8888
CMD start.sh
