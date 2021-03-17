import Link from './Link';

const config = {
    title: 'component/Link'
}

export default config;

const Default = () => <Global><link url="/test">Click me!</link></Global>;
const full = () => <Global><link url="/test" fullWidth>Click me!</link></Global>;
const Disable = () => <Global><link disabled url="/test">Click me!</link></Global>;

export {
    Default,
    full,
    Disable
};