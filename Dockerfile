FROM node:18

WORKDIR /usr/src/app
RUN chown -R node:node /usr/src/app

COPY --chown=node:node /app /usr/src/app

# At the end, set the user to use when running this image
USER node
