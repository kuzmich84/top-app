import React, {useEffect, useState, KeyboardEvent} from 'react'
import {RatingProps} from "./rating.props"
import StarIcon from "./star.svg"
import styles from "./rating.module.css"
import cn from "classnames"


export function Rating({isEditable = false, rating, setRating, ...props}: RatingProps): JSX.Element {

    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>))

    const changeDisplay = (i: number) => {
        if (!isEditable) return
        constructRating(i)
    }

    const handlerClick = (i: number) => {
        if (!isEditable || !setRating) return
        setRating(i)
    }

    const handleSpace = (i: number, e: KeyboardEvent<SVGElement>) => {
        if (e.code != 'Space' || !setRating) return
        setRating(i)
    }

    const constructRating = (currentRating: number) => {
        const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
            return (
                <span
                    className={cn(styles.star, {
                        [styles.filled]: i < currentRating,
                        [styles.editable]: isEditable

                    })}
                    onMouseEnter={() => changeDisplay(i + 1)}
                    onMouseLeave={() => changeDisplay(rating)}
                    onClick={() => handlerClick(i + 1)} key={i}>

                    <StarIcon


                        tabIndex={isEditable ? 0 : -1}
                        onKeyDown={(e: KeyboardEvent<SVGElement>) => isEditable && handleSpace(i + 1, e)}
                    />
                </span>
            )
        })

        setRatingArray(updatedArray)
    }

    useEffect(() => {
        constructRating(rating)
    }, [rating])


    return (
        <div {...props}>
            {ratingArray.map((r, i) => <span key={i}>{r}</span>)}
        </div>
    )
}

