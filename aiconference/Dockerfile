FROM node:22-slim

WORKDIR /app

COPY .  .

RUN npm install --legacy-peer-deps

RUN npm run build

EXPOSE 4173

CMD ["npm", "run", "preview"]