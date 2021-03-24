"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StorageDataSource = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const config = {
    name: 'storage',
    connector: 'loopback-component-storage',
    provider: 'filesystem',
    root: './files'
};
// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
let StorageDataSource = class StorageDataSource extends repository_1.juggler.DataSource {
    constructor(dsConfig = config) {
        super(dsConfig);
    }
};
StorageDataSource.dataSourceName = 'storage';
StorageDataSource.defaultConfig = config;
StorageDataSource = tslib_1.__decorate([
    core_1.lifeCycleObserver('datasource'),
    tslib_1.__param(0, core_1.inject('datasources.config.storage', { optional: true })),
    tslib_1.__metadata("design:paramtypes", [Object])
], StorageDataSource);
exports.StorageDataSource = StorageDataSource;
//# sourceMappingURL=storage.datasource.js.map