"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/databaseAdapters/supabase.ts
var supabase_exports = {};
__export(supabase_exports, {
  createSupabaseAdapter: () => createSupabaseAdapter
});
module.exports = __toCommonJS(supabase_exports);

// src/databaseAdapters/createDatabaseAdapter.ts
function createDatabaseAdapter(opts) {
  return opts;
}

// src/databaseAdapters/supabase.ts
function createSupabaseAdapter(opts) {
  const { supabase, schema } = opts;
  return createDatabaseAdapter({
    schema: schema ?? "stripe",
    upsertRow: async (opts2) => {
      const { error } = await supabase.from(opts2.fullTableName).upsert(opts2.data, { onConflict: opts2.onConflictColumns?.join(",") });
      if (error) {
        throw error;
      }
    },
    getFromClause: ({ schema: schema2, table }) => `${table}`
  });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createSupabaseAdapter
});
