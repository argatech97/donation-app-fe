import { IFilter, IPagination, IResponseList } from 'src/module/common';
import { ICampaign, ICampaignDetail } from '../entity';
import { ICampaignRepository } from '../repository';

export interface ICampaignUC {
  getCampaign: (
    pagination: IPagination,
    filter?: IFilter,
  ) => Promise<IResponseList<ICampaign>>;
  getCampaignDetail: (id: string) => Promise<ICampaignDetail>;
}

export class CampaignUC implements ICampaignUC {
  constructor(private repo: ICampaignRepository) {}
  getCampaignDetail = async (id: string) => {
    return this.repo.getById(id);
  };
  getCampaign = async (
    pagination: IPagination,
    filter?: IFilter | undefined,
  ) => {
    return this.repo.get(pagination, filter);
  };
}
