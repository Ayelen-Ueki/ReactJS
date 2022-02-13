import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useParams } from 'react-router';
import ItemDetail from '../Componentes/ItemDetail/ItemDetail';

const Categories = () => {
    const [name, setName] = useState([]);

    let login = useParams();
    let detailName = login.login;

    console.log(detailName)

    useEffect(() => {
        axios(`https://api.github.com/users/${detailName}`).then((res) => setName(res.data));
    }, [detailName])

    let mCharacters = name.find(function (character){
        return character.startsWith("m")
    })

    return (
        <div>
            {mCharacters.map((antojos) => {
                return (
                    <div key={antojos.id}>
                        <ItemDetail data={antojos} />
                    </div>
                )
            })}
        </div>
    )
}

export default Categories;