import React, {useState} from 'react'
import {RatingProps} from "./rating.props"
import StarIcon from "./star.svg"


export function Rating({isEditable = false, rating, setRating, ...props}: RatingProps): JSX.Element {

    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>))

    const constructRating = (currentRating: number) => {
        const updateArray = ratingArray.map((r: JSX.Element, i: number) => {
            return (<StarIcon
            class
            />)
        })
    }


    return (
        <div {...props}>

        </div>
    );
}

