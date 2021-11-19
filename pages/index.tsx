import type {NextPage} from 'next'
import {Button, Htag} from '../components/';


const Home: NextPage = (): JSX.Element => {
    return (
        <div>
            <Htag>Текст</Htag>
            <Button appearance='primary'>Кнопка</Button>
            <Button appearance='ghost'>Кнопка</Button>
        </div>
    )
}

export default Home
