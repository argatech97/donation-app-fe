import { IPagination, IResponseList } from 'src/module/common';
import { ICampaign, ICampaignDetail, ICampaignFilter } from '../entity';
import { ICampaignUC } from '../usecase';

export interface ICampaignController {
  getCampaign: (
    pagination: IPagination,
    filter?: ICampaignFilter,
  ) => Promise<IResponseList<ICampaign>>;
  getCampaignDetail: (id: string) => Promise<ICampaignDetail>;
}

export class CampaignController implements ICampaignController {
  constructor(private uc: ICampaignUC) {}
  getCampaign = async (pagination: IPagination, filter?: ICampaignFilter) => {
    return this.uc.getCampaign(pagination, { ...filter });
  };
  getCampaignDetail = async (id: string) => {
    return this.uc.getCampaignDetail(id);
  };
}
