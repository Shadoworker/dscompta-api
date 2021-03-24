import { LifeCycleObserver } from '@loopback/core';
import { juggler } from '@loopback/repository';
export declare class StorageDataSource extends juggler.DataSource implements LifeCycleObserver {
    static dataSourceName: string;
    static readonly defaultConfig: {
        name: string;
        connector: string;
        provider: string;
        root: string;
    };
    constructor(dsConfig?: object);
}
