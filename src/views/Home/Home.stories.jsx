import Home from './Home';
import faker from 'faker';
import Global from '../../components/Global/Global'

const config = {
    title: 'Home',
}

export default config;

const MOCK_LIST = new Array(20).fill(null).map(() => ({
    id: faker.random.uuid(),
    name: faker.lorem.words(),
    checked: faker.random.boolean(),

}))

const Default = () => <Global><Home list={MOCK_LIST}/></Global>

export{
    Default
}