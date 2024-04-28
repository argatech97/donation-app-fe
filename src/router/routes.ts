import { RouteRecordRaw } from 'vue-router';
import { i18n } from 'src/boot/i18n';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      {
        path: 'campaign-list',
        component: () => import('pages/CampaignList.vue'),
      },
    ],
  },
  {
    path: '/campaign-detail',
    component: () => import('src/layouts/DetailLayout.vue'),
    children: [
      {
        path: '',
        name: i18n().global.t('basicInfo'),
        component: () => import('pages/CampaignDetail.vue'),
      },
      {
        path: 'story',
        name: i18n().global.t('story'),
        component: () => import('pages/StoryPage.vue'),
      },
      {
        path: 'donor',
        name: i18n().global.t('donor'),
        component: () => import('pages/DonorPage.vue'),
      },
      {
        path: 'news',
        name: i18n().global.t('news'),
        component: () => import('pages/NewsPage.vue'),
      },
      {
        path: 'funding-info',
        name: i18n().global.t('fundInfo'),
        component: () => import('pages/FundingInfoPage.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
