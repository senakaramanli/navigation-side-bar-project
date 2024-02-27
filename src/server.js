// src/server.ts
import { createServer, Model } from 'miragejs'

export function makeServer({ environment = "development" } = {}) {
  let server = createServer({
    environment,

    models: {
      user: Model,
    },

    routes() {
      this.post("/api/login", (schema, request) => {
        const attrs = JSON.parse(request.requestBody);
        console.log('aşlskdjfhbg', attrs)
        if (attrs.username === "user" && attrs.password === "password") {
          return { token: "fake-token", username: attrs.username };
        } else {
          return new Response(401, {}, { error: "Wrong credentials" });
        }
      });
    },
  });

  return server;
}
