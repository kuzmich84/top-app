import type {NextPage} from 'next'
import {Button, Htag, P, Rating, Tag} from '../components/'
import {useState} from "react"
import {withLayout} from "../HOC/withLayout"



const Home: NextPage = (): JSX.Element => {

    const [rating, setRating] = useState<number>(4)

    return (
        <div>
            <Htag tag='h1'>Заголовок</Htag>
            <Button appearance='primary' arrow='right'>Кнопка</Button>
            <Button appearance='ghost' arrow="down">Кнопка</Button>
            <P size="s">Кучуков</P>
            <P size="l">Дмитрий</P>
            <Tag color='green' size="s">+79215777600</Tag>
            <Tag color='red' size="m">+79215777600</Tag>
            <Tag size="s">+79215777600</Tag>
            <Rating rating={rating} isEditable={true} setRating={setRating} />
        </div>
    )
}

export default withLayout(Home)
