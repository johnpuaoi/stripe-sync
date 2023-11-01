interface DatabaseAdapter {
    schema: string;
    getFromClause: (opts: {
        schema: string;
        table: string;
    }) => string;
    upsertRow(opts: {
        fullTableName: string;
        data: any;
        columnNames: string[];
        onConflictColumns?: string[];
    }): Promise<void>;
}
declare function createDatabaseAdapter(opts: DatabaseAdapter): DatabaseAdapter;

export { DatabaseAdapter, createDatabaseAdapter };
