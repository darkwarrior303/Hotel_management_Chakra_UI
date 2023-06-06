import { Icon } from "@chakra-ui/icons";
import React, { useEffect, useState } from 'react'

import { AiFillStar } from "react-icons/ai";

const Rating = (props) => {

    const [starArr, setStarArr] = useState([])

    useEffect(() => {
        const arr = []
        for (let i = 1; i <= 5; i++) {
            if (i <= props.value) {
                arr.push("fill")
            } else {
                arr.push("outline")
            }
        }
        setStarArr(arr)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <ul style={{ listStyle: "none", display: "flex" }}>
            {
                starArr.map((item, i) => {
                    return (
                        <li key={i}>{item === "fill" ? <Icon as={AiFillStar} color="orange" /> : <Icon as={AiFillStar} color="gray.100" />}</li>
                    )
                })
            }
        </ul>
    )
}

export default Rating