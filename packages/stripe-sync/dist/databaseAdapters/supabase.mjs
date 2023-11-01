import {
  createDatabaseAdapter
} from "../chunk-HKTYAXA2.mjs";

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
export {
  createSupabaseAdapter
};
