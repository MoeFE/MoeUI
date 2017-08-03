import MoeButton from './button.vue';

MoeButton.install = function (Vue){
    Vue.component(MoeButton.name, MoeButton);
};

export default MoeButton;