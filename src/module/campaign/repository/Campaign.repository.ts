import { IFilter, IPagination, IResponseList } from 'src/module/common';
import { ICampaign, ICampaignDetail } from '../entity';

export interface ICampaignRepository {
  get: (
    pagination: IPagination,
    filter?: IFilter,
  ) => Promise<IResponseList<ICampaign>>;
  getById: (id: string) => Promise<ICampaignDetail>;
}
