/* eslint-disable @typescript-eslint/no-unused-vars */
export interface IPagination {
  page: number;
  limit: number;
}

export interface IFilter {
  [key: string]: string;
}

export interface IFilterConstructor {
  execute: <T extends IFilter>(data: T) => Promise<IFilter>;
}
