FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

# Copy all files including assets directory
COPY . .

EXPOSE 4173

# Build the application
RUN npm run build

CMD ["npm", "run", "preview"]
