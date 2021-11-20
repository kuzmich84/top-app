import type {NextPage} from 'next'
import {Button, Htag, P, Tag} from '../components/'
import {useEffect, useState} from "react"


const Home: NextPage = (): JSX.Element => {

    const [counter, setCounter] = useState<number>(0)
    useEffect(()=>{
        console.log(`counter`, counter)
        return function cleanup(){
            console.log(`Unmount`, counter)
        }
    },[counter])

    return (
        <div>
            <Htag>{counter}</Htag>
            <Button appearance='primary' arrow='right' onClick={() => setCounter(x => x + 1)}>Кнопка</Button>
            <Button appearance='ghost' arrow="down">Кнопка</Button>
            <P size="s">Кучуков</P>
            <P size="l">Дмитрий</P>
            <Tag color='green' size="s">+79215777600</Tag>
            <Tag color='red' size="m">+79215777600</Tag>
            <Tag size="s">+79215777600</Tag>
        </div>
    )
}

export default Home
