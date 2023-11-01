import {
  createHandler
} from "../chunk-EW4VQUXX.mjs";

// src/adapters/fetch.ts
var createStripeSyncHandler = (opts) => (request) => createHandler(opts)({
  request,
  ip: "",
  passThrough: () => ({}),
  platform: "deno",
  waitUntil: () => ({})
});
export {
  createStripeSyncHandler
};
