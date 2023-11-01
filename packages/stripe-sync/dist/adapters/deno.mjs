import {
  createHandler
} from "../chunk-EW4VQUXX.mjs";

// src/adapters/deno.ts
import { createRequestHandler as createDenoRequestHandler } from "@hattip/adapter-deno";
var createDenoHandler = (opts) => createDenoRequestHandler(createHandler(opts));
export {
  createDenoHandler
};
