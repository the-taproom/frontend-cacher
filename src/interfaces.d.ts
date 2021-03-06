export interface CacherConfig {
  storage?: StorageLike
  expiration?: IExpirationSettings
  archiveIfExpired ?: boolean
  key: string
}

export interface IExpirationSettings {
  unit?: string
  amount?: number
  neverExpire?: boolean
}

export interface IResource {
  expiresAt: number
  neverExpire?: boolean
  expiration?: IExpirationSettings
  value: any
}

export interface StorageLike {
  clear(): void;
  getItem(key: string): string | null;
  removeItem(key: string, expiration?: IExpirationSettings): void;
  setItem(key: string, value: string): void;
  [name: string]: any;
}

export interface ArchiveKeys {
  [name: string]: string[];
}

export interface ArchiveMap {
  keys: ArchiveKeys
}

export interface StorageLikeAsync {
  clear(): Promise<void> | void;
  getItem(key: string): Promise<string | null> | string | null;
  removeItem(key: string, expiration?: IExpirationSettings): Promise<void> | void;
  setItem(key: string, value: string, expiration?: IExpirationSettings): Promise<void> | void;
  [name: string]: any;
}

export interface Cacher {
  new(config: CacherConfig): StorageLike
}

export interface Promisified {
  (...args: any): Promise<any> | any
}