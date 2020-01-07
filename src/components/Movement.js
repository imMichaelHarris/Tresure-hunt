import React, {useEffect, useState} from 'react';
import axios from "axios"
import {token} from "../util/token"

const Movement = ({map}) => {
    const [worldMap, setWorldMap] = useState({})

    // const move = (direction) => {
    //     axios.get("https://lambda-treasure-hunt.herokuapp.com/api/adv/move/", {
    //         headers: {
    //             Authorization: token
    //         }
    //     }, direction).then(res => {
    //         console.log(res.data)
    //         window.localStorage
    //     }).catch(err => {
    //         console.log(err.response)
    //     })
    // }

    const chooseDirection = (exits) => {

    }

    return (
        <div>
            
        </div>
    );
};

export default Movement;