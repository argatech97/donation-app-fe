import { RouteRecordRaw } from 'vue-router';

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
        name: 'basicInfo',
        component: () => import('pages/CampaignDetail.vue'),
      },
      {
        path: 'story',
        name: 'story',
        component: () => import('pages/StoryPage.vue'),
      },
      {
        path: 'donor',
        name: 'donor',
        component: () => import('pages/DonorPage.vue'),
      },
      {
        path: 'news',
        name: 'news',
        component: () => import('pages/NewsPage.vue'),
      },
      {
        path: 'funding-info',
        name: 'fundInfo',
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
