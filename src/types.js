/* @flow */

declare interface fem$IUploadTarball extends stream$PassThrough {
    abort: Function;
    done: Function;
    _transform: Function;
    
    abort (): void;
    
    done (): void;
}

declare interface fem$IReadTarball extends stream$PassThrough {
    abort: Function;
    
    abort (): void;
}

declare type fem$Callback = Function;

declare type fem$StorageList = Array<string>;

declare type fem$LocalStorage = {
    list: fem$StorageList;
    secret: string;
}

declare type fem$Dist = {
    integrity?: string;
    shasum: string;
    tarball: string;
}

declare type fem$Author = {
    name: string;
    email: string;
}

declare type fem$Version = {
    name: string,
    version: string,
    devDependencies: string,
    directories: any,
    dist: fem$Dist,
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
    maintainers: Array<fem$Author>,
    repository: string | any,
    scripts: any,
    homepage: string,
    dist: fem$Dist,
    readmeFilename: string;
    etag: string;
    contributors: Array<fem$Author>,
    dependencies: any,
    keywords: string | Array<string>,
    _id: string,
    nodeVersion: string,
    _npmUser: fem$Author,
    _hasShrinkwrap: boolean
};

declare type fem$Logger = {
    child: (conf: any) => any;
    debug: (conf: any, template?: mixed) => void;
    error: (conf: any, template?: mixed) => void;
    http: (conf: any, template?: mixed) => void;
    trace: (conf: any, template?: mixed) => void;
    warn: (conf: any, template?: mixed) => void;
    info: (conf: any, template?: mixed) => void;
}

declare type fem$Versions = {
    [key: string]: fem$Version;
}

declare type fem$DistFile = {
    url: string;
    sha: string;
    registry?: string;
}

declare type fem$MergeTags = {
    [key: string]: string;
}

declare type fem$DistFiles = {
    [key: string]: fem$DistFile;
}

declare type fem$AttachMents = {
    [key: string]: fem$Version;
}

declare type fem$GenericBody = {
    [key: string]: string;
}

declare type fem$UpLinkMetadata = {
    etag: string;
    fetched: number;
}

declare type fem$UpLinks = {
    [key: string]: fem$UpLinkMetadata;
}

declare type fem$Tags = {
    [key: string]: fem$Version;
}

declare type fem$Headers = {
    [key: string]: string;
}

declare type fem$Package = {
    _id?: string;
    name: string;
    versions: fem$Versions;
    'dist-tags': fem$GenericBody;
    time?: fem$GenericBody;
    readme?: string;
    _distfiles: fem$DistFiles;
    _attachments: fem$AttachMents;
    _uplinks: fem$UpLinks;
    _rev: string;
}

declare interface fem$ILocalStorage {
    add (name: string): void;
    
    remove (name: string): void;
    
    get (): fem$StorageList;
    
    sync (): void;
}

declare type fem$UpLinkTokenConf = {
    type: 'Bearer' | 'Basic',
    token?: string,
    token_env?: boolean | string
}

declare type fem$UpLinkConf = {
    url: string;
    ca?: string;
    cache?: boolean;
    timeout?: string | void;
    maxage?: string | void;
    max_fails?: number | void;
    fail_timeout?: string | void;
    headers?: fem$Headers;
    auth?: fem$UpLinkTokenConf;
    strict_ssl?: boolean | void;
}

declare type fem$PackageAccess = {
    storage: string;
    publish: string;
    proxy: string;
    access: string;
}

declare type fem$PackageList = {
    [key: string]: fem$PackageAccess;
}

declare type fem$UpLinksConfList = {
    [key: string]: fem$UpLinkConf;
}

declare interface fem$AuthHtpasswd {
    file: string;
    max_users: string;
}

declare type fem$LoggerType = 'stdout' | 'stderr' | 'file';
declare type fem$LoggerFormat = 'pretty' | 'pretty-timestamped' | 'file';
declare type fem$LoggerLevel = 'http' | 'fatal' | 'warn' | 'info' | 'debug' | 'trace';

declare type fem$LoggerConfItem = {
    type: fem$LoggerType;
    format: fem$LoggerFormat;
    level: fem$LoggerLevel;
}

declare type fem$PublishOptions = {
    allow_offline: boolean;
}

declare interface fem$LoggerConf {
    [key: string]: fem$LoggerConfItem;
}

declare interface fem$ListenAddress {
    [key: string]: string;
}

declare interface fem$WebConf {
    enable: boolean;
    title: string;
    logo: string;
}

declare interface fem$HttpsConf {
    key?: string;
    cert?: string;
    ca?: string;
    pfx?: string;
    passphrase?: string;
}

declare type fem$AuthConf = any | fem$AuthHtpasswd;

declare type fem$Notifications = {
    method: string;
    packagePattern: RegExp;
    packagePatternFlags: string;
    headers: fem$Headers;
    endpoint: string;
    content: string;
    [key: string]: string;
}

declare type fem$ConfigFile = {
    storage: string;
    self_path: string;
    packages: fem$PackageList;
    uplinks: fem$UpLinksConfList;
    logs: Array<fem$LoggerConf>;
    web: fem$WebConf;
    auth: fem$AuthConf;
    publish?: fem$PublishOptions;
    url_prefix?: string;
    listen?: fem$ListenAddress;
    https?: fem$HttpsConf;
    http_proxy?: string;
    https_proxy?: string;
    no_proxy?: string;
    max_body_size?: string;
    notifications: fem$Notifications;
}

declare type fem$Config = {
    user_agent: string;
    server_id: any;
    _debug?: boolean;
    storage: string;
    secret: string;
    self_path: string;
    packages: fem$PackageList;
    uplinks: fem$UpLinksConfList;
    logs: Array<fem$LoggerConf>;
    web: fem$WebConf;
    auth: fem$AuthConf;
    publish?: fem$PublishOptions;
    url_prefix?: string;
    store?: any;
    listen?: fem$ListenAddress;
    https?: fem$HttpsConf;
    http_proxy?: string;
    https_proxy?: string;
    no_proxy?: string;
    max_body_size?: string;
    notifications: fem$Notifications;
    middlewares?: any;
    checkSecretKey: (token: string) => string;
    hasProxyTo (pkg: string, upLink: string): boolean;
    getMatchedPackagesSpec?: (storage: string) => fem$PackageAccess;
}

declare type fem$SyncReturn = Error | void;
declare type fem$IPackageStorage = fem$ILocalPackageManager | void;

declare interface fem$ILocalData {
    add (name: string, callback: fem$Callback): void;
    
    remove (name: string, callback: fem$Callback): void;
    
    get (callback: fem$Callback): void;
    
    getSecret (): Promise<string>;
    
    setSecret (secret: string): Promise<any>;
    
    getPackageStorage (packageInfo: string): fem$IPackageStorage;
}

declare interface fem$ILocalPackageManager {
    writeTarball (name: string): fem$IUploadTarball;
    
    readTarball (name: string): fem$IReadTarball;
    
    readPackage (fileName: string, callback: fem$Callback): void;
    
    createPackage (name: string, value: fem$Package, cb: fem$Callback): void;
    
    deletePackage (fileName: string, callback: fem$Callback): void;
    
    removePackage (callback: fem$Callback): void;
    
    updatePackage (pkgFileName: string,
                   updateHandler: fem$Callback,
                   onWrite: fem$Callback,
                   transformPackage: Function,
                   onEnd: fem$Callback): void;
    
    savePackage (fileName: string, json: fem$Package, callback: fem$Callback): void;
}

declare module '@fem/local-storage' {
    declare export type ILocalData = fem$ILocalData;
    declare export type IPackageStorage = fem$IPackageStorage;
    declare export type ILocalPackageManager = fem$ILocalPackageManager;
    
    declare class LocalDatabase<ILocalData> {
        constructor (config: fem$Config, logger: fem$Logger): ILocalData;
    }
    
    declare module .exports: typeof LocalDatabase
;
}

declare module '@fem/streams' {
    declare type IUploadTarball = fem$IUploadTarball;
    declare type IReadTarball = fem$IReadTarball;
    
    declare class UploadTarball<ILocalData> {
        abort: Function;
        done: Function;
        constructor (options: duplexStreamOptions): fem$IUploadTarball;
        constructor (): fem$IUploadTarball;
    }
    
    declare class ReadTarball<ILocalData> {
        abort: Function;
        constructor (options: duplexStreamOptions): fem$IReadTarball;
        constructor (): fem$IReadTarball;
    }
}

declare module '@fem/file-locking' {
    declare export type LockOptions = {
        lock?: boolean,
        parse?: boolean
    };
    
    declare export function readFile (name: string, data: any, callback: Function): void;
    
    declare export function unlockFile (name: string, callback: Function): void;
    
    declare export function lockFile (name: string, callback: Function): void;
}

declare module '@fem/types' {
    declare export type Stdout = stream$Writable | tty$WriteStream;
    declare export type Stdin = stream$Readable | tty$ReadStream;
    declare export type Package = fem$Package;
    declare export type MergeTags = fem$MergeTags;
    declare export type Version = fem$Version;
    declare export type Callback = fem$Callback;
    declare export type Logger = fem$Logger;
    declare export type DistFile = fem$DistFile;
    declare export type Versions = fem$Versions;
    declare export type Config = fem$Config;
    declare export type ConfigFile = fem$ConfigFile;
    declare export type LoggerConf = fem$LoggerConf;
    declare export type WebConf = fem$WebConf;
    declare export type AuthConf = fem$AuthConf;
    declare export type PublishOptions = fem$PublishOptions;
    declare export type ListenAddress = fem$ListenAddress;
    declare export type HttpsConf = fem$HttpsConf;
    declare export type Notifications = fem$Notifications;
    declare export type Headers = fem$Headers;
    declare export type LoggerConfItem = fem$LoggerConfItem;
    declare export type LoggerLevel = fem$LoggerLevel;
    declare export type LoggerFormat = fem$LoggerFormat;
    declare export type LoggerType = fem$LoggerType;
    declare export type PackageList = fem$PackageList;
    declare export type UpLinksConfList = fem$UpLinksConfList;
    declare export type UpLinkMetadata = fem$UpLinkMetadata;
    declare export type ILocalStorage = fem$ILocalStorage;
    declare export type UpLinkConf = fem$UpLinkConf;
    declare export type PackageAccess = fem$PackageAccess;
    declare export type StorageList = fem$StorageList;
    declare export type LocalStorage = fem$LocalStorage;
}