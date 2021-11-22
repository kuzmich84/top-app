import type {GetStaticProps, NextPage} from 'next'
import {Button, Htag, P, Rating, Tag} from '../components/'
import {useState} from "react"
import {withLayout} from "../HOC/withLayout"
import axios from "axios"
import {MenuItem} from "../interfaces/menu.inerfase"


const Home = ({menu, firstCategory}: HomeProps): JSX.Element => {

    const [rating, setRating] = useState<number>(4)

    return (
        <div>
            <Htag tag="h1">Заголовок</Htag>
            <Button appearance="primary" arrow="right">Кнопка</Button>
            <Button appearance="ghost" arrow="down">Кнопка</Button>
            <P size="s">Кучуков</P>
            <P size="l">Дмитрий</P>
            <Tag color="green" size="s">+79215777600</Tag>
            <Tag color="red" size="m">+79215777600</Tag>
            <Tag size="s">+79215777600</Tag>
            <Rating rating={rating} isEditable={true} setRating={setRating}/>
            <ul>
                {menu.map((m) => (<li key={m._id.secondCategory}>{m._id.secondCategory}</li>))}
            </ul>

        </div>
    )
}

export default withLayout(Home)

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
    const firstCategory = 0
    const {data: menu} = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
        firstCategory
    })
    return {
        props: {
            menu,
            firstCategory
        }
    }
}

interface HomeProps extends Record<string, unknown> {
    menu: MenuItem[];
    firstCategory: number;
}
