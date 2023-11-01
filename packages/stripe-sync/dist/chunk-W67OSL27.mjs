import {
  createHandler
} from "./chunk-EW4VQUXX.mjs";

// src/adapters/express.ts
import { createMiddleware } from "@hattip/adapter-node";
var createExpressHandler = (opts) => createMiddleware(createHandler(opts));

export {
  createExpressHandler
};
