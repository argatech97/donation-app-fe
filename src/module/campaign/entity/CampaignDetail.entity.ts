import { ICampaign } from './Campaign.entity';

export interface ICampaignDetail extends ICampaign {
  storyId: string;
  disbursmentId: string;
  ownerId: string;
  newsId: string;
  donorId: string;
  prayId: string;
}
