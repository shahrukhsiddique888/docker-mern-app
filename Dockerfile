# FROM node:22
# WORKDIR /app
# COPY package.json .
# # RUN npm install --only=production

# ARG NODE_ENV
# RUN if [ "$NODE_ENV" = "development" ]; \
#          then npm install; \
#          else npm install --only=production; \
#      fi

# COPY . ./
# ENV PORT 3000
# EXPOSE $PORT

# # CMD [ "npm", "run", "dev" ]
# CMD [ "node", "index.js" ]
# Dockerfile
FROM node:22

WORKDIR /app

COPY package.json .

# Install dependencies based on the NODE_ENV argument
ARG NODE_ENV
RUN if [ "$NODE_ENV" = "development" ]; \
       then npm install; \
       else npm install --only=production; \
     fi

COPY . ./

ENV PORT 3000 
EXPOSE $PORT

CMD ["node", "index.js"]
