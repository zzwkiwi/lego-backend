// This file is created by egg-ts-helper@1.35.2
// Do not modify this file!!!!!!!!!
/* eslint-disable */

import 'egg';
type AnyClass = new (...args: any[]) => any;
type AnyFunc<T = any> = (...args: any[]) => T;
type CanExportFunc = AnyFunc<Promise<any>> | AnyFunc<IterableIterator<any>>;
type AutoInstanceType<T, U = T extends CanExportFunc ? T : T extends AnyFunc ? ReturnType<T> : T> = U extends AnyClass ? InstanceType<U> : U;
import ExportDog from '../../../app/service/dog';
import ExportTest from '../../../app/service/Test';

declare module 'egg' {
  interface IService {
    dog: AutoInstanceType<typeof ExportDog>;
    test: AutoInstanceType<typeof ExportTest>;
  }
}
