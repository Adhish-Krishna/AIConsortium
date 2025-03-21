FROM node:latest

WORKDIR /app

COPY . .

RUN npm ci --legacy-peer-deps

EXPOSE 4173

RUN npm run build

CMD ["npm", "run", "preview"]
