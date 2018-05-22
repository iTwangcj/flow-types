/* @flow */

declare interface ppm$IUploadTarball extends stream$PassThrough {
    abort: Function;
    done: Function;
    _transform: Function;
    
    abort (): void;
    
    done (): void;
}

declare interface ppm$IReadTarball extends stream$PassThrough {
    abort: Function;
    
    abort (): void;
}

declare type ppm$Callback = Function;

declare type ppm$StorageList = Array<string>;

declare type ppm$LocalStorage = {
    list: ppm$StorageList;
    secret: string;
}

declare type ppm$Dist = {
    integrity?: string;
    shasum: string;
    tarball: string;
}

declare type ppm$Author = {
    name: string;
    email: string;
}

declare type ppm$Version = {
    name: string,
    version: string,
    devDependencies: string,
    directories: any,
    dist: ppm$Dist,
    author: string,
    main: string,
    homemage: string,
    license: string,
    readme: string,
    readmeFileName: string,
    description: string,
    bin: string,
    bugs: any,
    files: Array<string>,
    gitHead: string,
    maintainers: Array<ppm$Author>,
    repository: string | any,
    scripts: any,
    homepage: string,
    dist: ppm$Dist,
    readmeFilename: string;
    etag: string;
    contributors: Array<ppm$Author>,
    dependencies: any,
    keywords: string | Array<string>,
    _id: string,
    nodeVersion: string,
    _npmUser: ppm$Author,
    _hasShrinkwrap: boolean
};

declare type ppm$Logger = {
    child: (conf: any) => any;
    debug: (conf: any, template?: mixed) => void;
    error: (conf: any, template?: mixed) => void;
    http: (conf: any, template?: mixed) => void;
    trace: (conf: any, template?: mixed) => void;
    warn: (conf: any, template?: mixed) => void;
    info: (conf: any, template?: mixed) => void;
}

declare type ppm$Versions = {
    [key: string]: ppm$Version;
}

declare type ppm$DistFile = {
    url: string;
    sha: string;
    registry?: string;
}

declare type ppm$MergeTags = {
    [key: string]: string;
}

declare type ppm$DistFiles = {
    [key: string]: ppm$DistFile;
}

declare type ppm$AttachMents = {
    [key: string]: ppm$Version;
}

declare type ppm$GenericBody = {
    [key: string]: string;
}

declare type ppm$UpLinkMetadata = {
    etag: string;
    fetched: number;
}

declare type ppm$UpLinks = {
    [key: string]: ppm$UpLinkMetadata;
}

declare type ppm$Tags = {
    [key: string]: ppm$Version;
}

declare type ppm$Headers = {
    [key: string]: string;
}

declare type ppm$Package = {
    _id?: string;
    name: string;
    versions: ppm$Versions;
    'dist-tags': ppm$GenericBody;
    time?: ppm$GenericBody;
    readme?: string;
    _distfiles: ppm$DistFiles;
    _attachments: ppm$AttachMents;
    _uplinks: ppm$UpLinks;
    _rev: string;
}

declare interface ppm$ILocalStorage {
    add (name: string): void;
    
    remove (name: string): void;
    
    get (): ppm$StorageList;
    
    sync (): void;
}

declare type ppm$UpLinkTokenConf = {
    type: 'Bearer' | 'Basic',
    token?: string,
    token_env?: boolean | string
}

declare type ppm$UpLinkConf = {
    url: string;
    ca?: string;
    cache?: boolean;
    timeout?: string | void;
    maxage?: string | void;
    max_fails?: number | void;
    fail_timeout?: string | void;
    headers?: ppm$Headers;
    auth?: ppm$UpLinkTokenConf;
    strict_ssl?: boolean | void;
}

declare type ppm$PackageAccess = {
    storage: string;
    publish: string;
    proxy: string;
    access: string;
}

declare type ppm$PackageList = {
    [key: string]: ppm$PackageAccess;
}

declare type ppm$UpLinksConfList = {
    [key: string]: ppm$UpLinkConf;
}

declare interface ppm$AuthHtpasswd {
    file: string;
    max_users: string;
}

declare type ppm$LoggerType = 'stdout' | 'stderr' | 'file';
declare type ppm$LoggerFormat = 'pretty' | 'pretty-timestamped' | 'file';
declare type ppm$LoggerLevel = 'http' | 'fatal' | 'warn' | 'info' | 'debug' | 'trace';

declare type ppm$LoggerConfItem = {
    type: ppm$LoggerType;
    format: ppm$LoggerFormat;
    level: ppm$LoggerLevel;
}

declare type ppm$PublishOptions = {
    allow_offline: boolean;
}

declare interface ppm$LoggerConf {
    [key: string]: ppm$LoggerConfItem;
}

declare interface ppm$ListenAddress {
    [key: string]: string;
}

declare interface ppm$WebConf {
    enable: boolean;
    title: string;
    logo: string;
}

declare interface ppm$HttpsConf {
    key?: string;
    cert?: string;
    ca?: string;
    pfx?: string;
    passphrase?: string;
}

declare type ppm$AuthConf = any | ppm$AuthHtpasswd;

declare type ppm$Notifications = {
    method: string;
    packagePattern: RegExp;
    packagePatternFlags: string;
    headers: ppm$Headers;
    endpoint: string;
    content: string;
    [key: string]: string;
}

declare type ppm$ConfigFile = {
    storage: string;
    self_path: string;
    packages: ppm$PackageList;
    uplinks: ppm$UpLinksConfList;
    logs: Array<ppm$LoggerConf>;
    web: ppm$WebConf;
    auth: ppm$AuthConf;
    publish?: ppm$PublishOptions;
    url_prefix?: string;
    listen?: ppm$ListenAddress;
    https?: ppm$HttpsConf;
    http_proxy?: string;
    https_proxy?: string;
    no_proxy?: string;
    max_body_size?: string;
    notifications: ppm$Notifications;
}

declare type ppm$Config = {
    user_agent: string;
    server_id: any;
    _debug?: boolean;
    storage: string;
    secret: string;
    self_path: string;
    packages: ppm$PackageList;
    uplinks: ppm$UpLinksConfList;
    logs: Array<ppm$LoggerConf>;
    web: ppm$WebConf;
    auth: ppm$AuthConf;
    publish?: ppm$PublishOptions;
    url_prefix?: string;
    store?: any;
    listen?: ppm$ListenAddress;
    https?: ppm$HttpsConf;
    http_proxy?: string;
    https_proxy?: string;
    no_proxy?: string;
    max_body_size?: string;
    notifications: ppm$Notifications;
    middlewares?: any;
    checkSecretKey: (token: string) => string;
    hasProxyTo (pkg: string, upLink: string): boolean;
    getMatchedPackagesSpec?: (storage: string) => ppm$PackageAccess;
}

declare type ppm$SyncReturn = Error | void;
declare type ppm$IPackageStorage = ppm$ILocalPackageManager | void;

declare interface ppm$ILocalData {
    add (name: string, callback: ppm$Callback): void;
    
    remove (name: string, callback: ppm$Callback): void;
    
    get (callback: ppm$Callback): void;
    
    getSecret (): Promise<string>;
    
    setSecret (secret: string): Promise<any>;
    
    getPackageStorage (packageInfo: string): ppm$IPackageStorage;
}

declare interface ppm$ILocalPackageManager {
    writeTarball (name: string): ppm$IUploadTarball;
    
    readTarball (name: string): ppm$IReadTarball;
    
    readPackage (fileName: string, callback: ppm$Callback): void;
    
    createPackage (name: string, value: ppm$Package, cb: ppm$Callback): void;
    
    deletePackage (fileName: string, callback: ppm$Callback): void;
    
    removePackage (callback: ppm$Callback): void;
    
    updatePackage (pkgFileName: string,
                   updateHandler: ppm$Callback,
                   onWrite: ppm$Callback,
                   transformPackage: Function,
                   onEnd: ppm$Callback): void;
    
    savePackage (fileName: string, json: ppm$Package, callback: ppm$Callback): void;
}

declare module '@ppm/local-storage' {
    declare export type ILocalData = ppm$ILocalData;
    declare export type IPackageStorage = ppm$IPackageStorage;
    declare export type ILocalPackageManager = ppm$ILocalPackageManager;
    
    declare class LocalDatabase<ILocalData> {
        constructor (config: ppm$Config, logger: ppm$Logger): ILocalData;
    }
    
    declare module .exports: typeof LocalDatabase
;
}

declare module '@ppm/streams' {
    declare type IUploadTarball = ppm$IUploadTarball;
    declare type IReadTarball = ppm$IReadTarball;
    
    declare class UploadTarball<ILocalData> {
        abort: Function;
        done: Function;
        constructor (options: duplexStreamOptions): ppm$IUploadTarball;
        constructor (): ppm$IUploadTarball;
    }
    
    declare class ReadTarball<ILocalData> {
        abort: Function;
        constructor (options: duplexStreamOptions): ppm$IReadTarball;
        constructor (): ppm$IReadTarball;
    }
}

declare module '@ppm/file-locking' {
    declare export type LockOptions = {
        lock?: boolean,
        parse?: boolean
    };
    
    declare export function readFile (name: string, data: any, callback: Function): void;
    
    declare export function unlockFile (name: string, callback: Function): void;
    
    declare export function lockFile (name: string, callback: Function): void;
}

declare module '@ppm/types' {
    declare export type Stdout = stream$Writable | tty$WriteStream;
    declare export type Stdin = stream$Readable | tty$ReadStream;
    declare export type Package = ppm$Package;
    declare export type MergeTags = ppm$MergeTags;
    declare export type Version = ppm$Version;
    declare export type Callback = ppm$Callback;
    declare export type Logger = ppm$Logger;
    declare export type DistFile = ppm$DistFile;
    declare export type Versions = ppm$Versions;
    declare export type Config = ppm$Config;
    declare export type ConfigFile = ppm$ConfigFile;
    declare export type LoggerConf = ppm$LoggerConf;
    declare export type WebConf = ppm$WebConf;
    declare export type AuthConf = ppm$AuthConf;
    declare export type PublishOptions = ppm$PublishOptions;
    declare export type ListenAddress = ppm$ListenAddress;
    declare export type HttpsConf = ppm$HttpsConf;
    declare export type Notifications = ppm$Notifications;
    declare export type Headers = ppm$Headers;
    declare export type LoggerConfItem = ppm$LoggerConfItem;
    declare export type LoggerLevel = ppm$LoggerLevel;
    declare export type LoggerFormat = ppm$LoggerFormat;
    declare export type LoggerType = ppm$LoggerType;
    declare export type PackageList = ppm$PackageList;
    declare export type UpLinksConfList = ppm$UpLinksConfList;
    declare export type UpLinkMetadata = ppm$UpLinkMetadata;
    declare export type ILocalStorage = ppm$ILocalStorage;
    declare export type UpLinkConf = ppm$UpLinkConf;
    declare export type PackageAccess = ppm$PackageAccess;
    declare export type StorageList = ppm$StorageList;
    declare export type LocalStorage = ppm$LocalStorage;
}