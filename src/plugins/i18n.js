import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n);

/* 语言环境信息 */
const messages = {
  en: {
    hello: 'hello world',
    intro : 'My name is koshousin , I come from China,and I am studying Frontend...'
  },
  ja: {
    hello: 'こんにちは、世界',
    intro:'koshousin と申します、中国出身ですが、今Frontend を学んでいます．．．'
  }
}

export default new VueI18n({
  locale: 'ja',
  messages
})