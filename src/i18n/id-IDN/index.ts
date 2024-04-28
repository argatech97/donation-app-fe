import {
  ICampaignDetailLang,
  ICardLang,
  ICommon,
  IHomePageLang,
  IProfileLang,
} from '../lang';

const homeLang: IHomePageLang = {
  section1: 'Rekomendasi',
  section2: 'Pilih Jenis Donasi',
  section3: 'Donasi Mendesak',
};

const profileLang: IProfileLang = {
  greeting: 'Halo',
  donateCount: 'Donasi',
};

const cardLang: ICardLang = {
  donor: 'Donasi',
  collected: 'Terkumpul',
  daysLeft: 'Hari lagi',
};

function common(): ICommon {
  return {
    seeMore: 'Lebih Banyak',
    search: 'Cari',
    notFound: 'Tidak Tersedia',
  };
}

const campaignDetail: ICampaignDetailLang = {
  basicInfo: 'Detail Campaign',
  story: 'Cerita',
  news: 'Kabar terbaru',
  authoredBy: 'Penggalang dana',
  storyDesc: 'Baca cerita lengkap campaign',
  newsEmpty: 'Tidak ada kabar terbaru',
  donationCollectedDesc: 'Donasi terkumpul hingga saat ini mencapai',
  donationTargetDesc: 'Target donasi terkumpul adalah',
  donor: 'Donantur',
  donorDesc: 'Orang telah berdonasi',
  fundInfo: 'Rincian dana',
  fundInfoDesc: 'Alokasi serta pencairan dana',
};

export default {
  ...homeLang,
  ...profileLang,
  ...cardLang,
  ...common(),
  ...campaignDetail,
};
