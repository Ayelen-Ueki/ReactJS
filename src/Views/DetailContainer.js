import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useParams } from 'react-router';
import ItemDetail from '../Componentes/ItemDetail/ItemDetail';

const DetailContainer = () => {
    const [detail, setDetail] = useState([]);

    let id = useParams();
    let detailId = id.id;
    console.log(detailId)

    useEffect(() => {
        axios(`https://api.github.com/users/${detailId}`).then((res) => setDetail(res.data));
    }, [detailId])

    return (
    <div>
        {detail.map((antojos)=>{
            return(
                <div key={antojos.id}>
                    <ItemDetail data={antojos}/>
                </div>
            )})}
    </div>
    )
}

export default DetailContainer;