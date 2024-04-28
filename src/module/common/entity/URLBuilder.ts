import { IFilter, IPagination } from './Pagination.entity';

interface IListUrl {
  url: string;
  pagination: IPagination;
  filter?: IFilter;
}

interface IUrlById {
  url: string;
  id: string;
}

export interface IURLBuilder {
  listUrl: (data: IListUrl) => Promise<string>;
  urlById: (data: IUrlById) => Promise<string>;
}

export class URLBuilder implements IURLBuilder {
  urlById = async (data: IUrlById) => {
    const { url, id } = data;
    return `${url}/${id}`;
  };
  listUrl = async (data: IListUrl) => {
    const { url, pagination, filter } = data;
    const { page, limit } = pagination;
    const f = filter
      ? Object.keys(filter)
          .filter((el) => filter[el] !== undefined)
          .map((el) => `${el}=${filter[el]}`)
          .join('&')
      : '';
    return `${url}?page=${page}&limit=${limit}&${f}`;
  };
}
