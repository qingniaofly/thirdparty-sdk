export interface IMusicService {
    getListByTag: (tag: string, page: number) => Promise<any>
    getMusicInfoById: (id: string | number) => Promise<any>
    search: (keyword, page) => Promise<any>
}

export interface INovelService {}

export interface IStoreService {}

export interface IHttpService {}

export interface IThirdPartySDK {
    musicService: IMusicService
    novelService: INovelService
    storeService: IStoreService
    httpService: IHttpService
}

declare const ThirdPartySDK: IThirdPartySDK

export default ThirdPartySDK
