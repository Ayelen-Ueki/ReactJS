import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useParams } from 'react-router';
import ItemDetail from '../Componentes/ItemDetail/ItemDetail';

const DetailContainer = () => {
    const [detail, setDetail] = useState({});

    let login = useParams();
    let detailLogin = login.login;

    console.log(login)

    useEffect(() => {
        axios(`https://api.github.com/users/${detailLogin}`).then((res) => setDetail(res.data));
    }, [detailLogin])

    return (
        <div>
            <ItemDetail data={detail} />
        </div>
    )
}

export default DetailContainer;