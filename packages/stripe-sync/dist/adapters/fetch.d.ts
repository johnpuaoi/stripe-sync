import { H as HandlerOptions } from '../handler-b9a57f76.js';
import 'stripe';
import '../databaseAdapters/createDatabaseAdapter.js';

type Handler = (request: Request, connInfo: any) => Response | Promise<Response>;
declare const createStripeSyncHandler: (opts: HandlerOptions) => (request: Request) => Response | Promise<Response>;

export { Handler, createStripeSyncHandler };
