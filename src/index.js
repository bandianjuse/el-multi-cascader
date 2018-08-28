import ElMultiCascader from './main.vue';

const install = (Vue) => {
  Vue.component(ElMultiCascader.name, ElMultiCascader);
}

export default {
  install
};
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}


