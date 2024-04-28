export interface IHeaders {
  [key: string]: string;
}

export type HttpMethod = 'get' | 'put' | 'post' | 'delete';
export interface IHttpClientParams {
  url: string;
  headers?: IHeaders;
  method: HttpMethod;
}

export interface IHttpClient {
  request: <T>(params: IHttpClientParams) => Promise<T>;
}
