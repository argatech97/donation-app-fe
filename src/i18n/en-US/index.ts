import {
  ICampaignDetailLang,
  ICardLang,
  ICommon,
  IHomePageLang,
  IProfileLang,
} from '../lang';

const homeLang: IHomePageLang = {
  section1: 'Recomendation',
  section2: 'Pick Donation Type',
  section3: 'Urgent Donation',
};

const profileLang: IProfileLang = {
  greeting: 'Hello',
  donateCount: 'Donation',
};

const cardLang: ICardLang = {
  collected: 'Collected',
  donor: 'Donor',
  daysLeft: 'Days left',
};

const campaignDetail: ICampaignDetailLang = {
  basicInfo: 'Campaign Detail',
  story: 'Story',
  news: 'News',
  authoredBy: 'Fundraiser',
  storyDesc: 'Read campaign full story',
  newsEmpty: 'No updated news',
  donationCollectedDesc: 'Donations collected to date reach was',
  donationTargetDesc: 'The target of collecting donations is',
  donor: 'Donor',
  donorDesc: 'People have donated',
  fundInfo: 'Budget breakdown',
  fundInfoDesc: 'Allocation and disbursement',
};

function commonLang(): ICommon {
  return {
    seeMore: 'See More',
    search: 'Search',
    notFound: 'Not Found',
  };
}

export default {
  ...homeLang,
  ...profileLang,
  ...cardLang,
  ...commonLang(),
  ...campaignDetail,
};
