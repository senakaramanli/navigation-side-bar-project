// src/server.ts
import { createServer, Model, Response } from "miragejs";

export function makeServer({ environment = "development" } = {}) {
  let server = createServer({
    environment,

    models: {
      user: Model,
    },

    routes() {
      this.post("/api/login", (schema, request) => {
        const req = JSON.parse(request.requestBody);
        const username = "flowforge";
        const password = "12345";
        if (req.username === username && req.password === password) {
          return new Response(
            200,
            {},
            { token: "fake-token", username: req.username }
          );
        } else {
          return new Response(
            401,
            {},
            { error: "Username or password incorrect" }
          );
        }
      });
    },
  });

  return server;
}
