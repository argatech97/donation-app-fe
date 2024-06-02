import enUS from './en-US';
import idIDN from './id-IDN';

export interface Ii18n {
  'en-US': typeof enUS;
  'id-IDN': typeof idIDN;
}

const i18n: Ii18n = { 'en-US': enUS, 'id-IDN': idIDN };
export default i18n;
