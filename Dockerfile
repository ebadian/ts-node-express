FROM node:18-alpine

WORKDIR /app

RUN ls

COPY dist ./dist
COPY package*.json ./

RUN npm install

EXPOSE 3000

ENTRYPOINT ["node"]
CMD ["dist/index.js"]

