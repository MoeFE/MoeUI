import Row from './row.vue';
import Col from './col.vue';

Row.install = function (Vue){
    Vue.component(Row.name, Row);
};

Col.install = function (Vue){
    Vue.component(Col.name, Col);
};

export {
    Row, Col
};