import { H as HandlerOptions } from '../handler-b9a57f76.js';
import 'stripe';
import '../databaseAdapters/createDatabaseAdapter.js';

type Handler = (request: Request, connInfo: any) => Response | Promise<Response>;
declare const createDenoHandler: (opts: HandlerOptions) => Handler;

export { Handler, createDenoHandler };
