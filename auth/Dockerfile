FROM node:alpine

WORKDIR /app
COPY package.json .
RUN npm install --only=dev
COPY . .

CMD ["npm", "start"]