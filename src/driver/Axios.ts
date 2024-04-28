import { IHttpClient, IHttpClientParams } from 'src/module/common';
import axios, { AxiosHeaders, AxiosInstance } from 'axios';

export class Axios implements IHttpClient {
  constructor(baseURL: string, headers: AxiosHeaders) {
    this.axios = axios.create({
      baseURL,
      headers,
      timeout: 9000,
    });
  }
  private axios!: AxiosInstance;

  request = <T>(params: IHttpClientParams) => {
    const { url, method, headers } = params;

    return this.axios
      .request<T>({
        url,
        method,
        headers: headers ? { ...headers } : undefined,
      })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw error;
      });
  };
}
