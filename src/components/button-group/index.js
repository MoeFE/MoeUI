import MoeButtonGroup from './button-group.vue';

MoeButtonGroup.install = function (Vue){
    Vue.component(MoeButtonGroup.name, MoeButtonGroup);
};

export default MoeButtonGroup;