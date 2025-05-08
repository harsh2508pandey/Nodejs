# Use a smaller base image
FROM node:14-alpine

WORKDIR /app

# Copy only necessary files first to leverage cache
COPY package*.json ./

# Install dependencies
RUN npm install

# Now copy the rest of the application
COPY . .

EXPOSE 8080
CMD ["node", "app.js"]

