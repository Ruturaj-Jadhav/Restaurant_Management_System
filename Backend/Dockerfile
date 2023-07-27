FROM node:14

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# Expose the port that your Node.js server listens on (assuming it's 3000)
EXPOSE 3000

CMD ["npm" ,"start"]



