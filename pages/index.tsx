import type {NextPage} from 'next'
import {Button, Htag, P} from '../components/';


const Home: NextPage = (): JSX.Element => {
    return (
        <div>
            <Htag>Текст</Htag>
            <Button appearance='primary' arrow='right'>Кнопка</Button>
            <Button appearance='ghost' arrow="down">Кнопка</Button>
            <P fontSize="18">Дмитрий</P>
        </div>
    )
}

export default Home
