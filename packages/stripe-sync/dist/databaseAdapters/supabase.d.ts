import { DatabaseAdapter } from './createDatabaseAdapter.js';
import { SupabaseClient } from '@supabase/supabase-js';

declare function createSupabaseAdapter(opts: {
    supabase: SupabaseClient<any, any, any>;
    schema?: string;
}): DatabaseAdapter;

export { createSupabaseAdapter };
