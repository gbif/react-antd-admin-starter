import axios from 'axios';
const rtlLocale = {
  'ar': true,
  'dv': true,
  'he': true,
  'ku': true,
  'fa': true,
  'ur': true
};
function getMessages(locale) {
  return axios.get(`/_translations/${locale}.json`);
}

function isRtlLocale(locale) {
  return Boolean(rtlLocale[locale]);
}

export default {
  getMessages: getMessages,
  isRtlLocale: isRtlLocale
}