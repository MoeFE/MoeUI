import Button from './components/button';
import ButtonGroup from './components/button-group';
import { Row, Col } from './components/grid';

const components = [
    Button,
    ButtonGroup,
    Row,
    Col,
];
    
const install = function (Vue) {
    if (install.installed) return;

    components.map(component => {
        Vue.component(component.name, component);
    });

};

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

module.exports = { // eslint-disable-line no-undef
    install,
    Button
};
