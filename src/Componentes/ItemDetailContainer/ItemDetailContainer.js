import React, { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { Link } from 'react-router-dom';

const ItemDetailContainer = () => {

    const [antojos, getItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        fetch('https://api.github.com/users')
            .then((response) => response.json())
            .then((json) => getItems(json));
        setTimeout(() => {
            setIsLoading(false)
        }, 2000)
    }, [])

    return (
        <div className='Cards'>
            {isLoading ? <p>Is loading...</p> : <div> {antojos.map((antojos) => {
                return (
                    <div key={antojos.id}>
                        <Link to={`/detail/${antojos.id}`} className='Link'>
                            <ItemDetail data={antojos} />
                        </Link>
                    </div>)
            })}
            </div>
            }

        </div >
    );
};

export default ItemDetailContainer;