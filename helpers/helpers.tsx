import {FirstLevelMenuItem} from "../interfaces/menu.inerfase"
import CoursesIcon from "./icons/courses-icon.svg"
import {TopLevelCategory} from "../interfaces/page.inerface"
import ServicesIcon from "./icons/services-icon.svg"
import BooksIcon from "./icons/books-icon.svg"
import ProductsIcon from "./icons/products-icon.svg"
import React from "react"

export const firstLevelMenu: FirstLevelMenuItem[] = [
    {route: 'courses', name: 'Курсы', icon: <CoursesIcon/>, id: TopLevelCategory.Courses},
    {route: 'services', name: 'Сервисы', icon: <ServicesIcon/>, id: TopLevelCategory.Services},
    {route: 'books', name: 'Книги', icon: <BooksIcon/>, id: TopLevelCategory.Books},
    {route: 'products', name: 'Товары', icon: <ProductsIcon/>, id: TopLevelCategory.Products},
]


export const priceRu = (price: number): string => price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ').concat(' р')