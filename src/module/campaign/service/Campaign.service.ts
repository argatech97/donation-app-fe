import {
  IFilter,
  IHttpClient,
  IPagination,
  IResponseDto,
  IResponseList,
} from 'src/module/common';
import { ICampaignRepository } from '../repository';
import { IURLBuilder } from 'src/module/common/entity/URLBuilder';
import { ICampaign, ICampaignDetail } from '../entity';

export class CampaignService implements ICampaignRepository {
  constructor(
    private httpClient: IHttpClient,
    private urlBuilder: IURLBuilder,
  ) {}
  getById = async (id: string) => {
    const url = await this.urlBuilder.urlById({
      url: '/api/campaign',
      id: id,
    });
    const res = await this.httpClient.request<IResponseDto<ICampaignDetail>>({
      url,
      method: 'get',
    });
    return res.data;
  };
  get = async (pagination: IPagination, filter?: IFilter) => {
    const url = await this.urlBuilder.listUrl({
      url: '/api/campaign/list',
      pagination,
      filter,
    });
    const res = await this.httpClient.request<IResponseList<ICampaign>>({
      url,
      method: 'get',
    });
    return res;
  };
}
