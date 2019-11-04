# Alpine is a minimal Docker image
FROM node:alpine

# Create app directory
WORKDIR /usr/src/react-node-docker

# Copy package.json and package-lock.json into WORKDIR
COPY package*.json ./

# Install node_modules
RUN npm install

# Copy source code into WORKDIR
COPY . .

EXPOSE 3000
CMD ["npm", "start"]