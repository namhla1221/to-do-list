import Layout from './Layout';
import faker from 'faker';

const config = {
    title: 'component/Layout'
}

export default config;



const Default = () => <layout>{faker.lorem.paragraphs}</layout>

export {
    Default
}