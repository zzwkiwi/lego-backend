// This file is created by egg-ts-helper@1.35.2
// Do not modify this file!!!!!!!!!
/* eslint-disable */

import 'egg';
import ExportMyLogger from '../../../app/middleware/myLogger';

declare module 'egg' {
  interface IMiddleware {
    myLogger: typeof ExportMyLogger;
  }
}
