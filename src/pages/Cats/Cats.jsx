import React, {useEffect} from 'react';
import {useState} from "react";
import axios from "axios"

const Cats = () => {
    const [cats, setCats] = useState([])
    const getCats = async () => {
        const takeCats = await axios(`https://api.thecatapi.com/v1/images/search?limit=12&page=10&order=Desc`)
        setCats(takeCats.data)
    }
    useEffect(() => {
        getCats()
    }, [])
    const handleClick = (e) => {
        e.preventDefault()
        getCats()
    }
    const clickFavorite = () => {

    }
    return (
        <div className="container">
            <div className="row">
                {
                    cats.map((cat) => (
                        <div className="col-2" key={cat.id}>
                            <img className="cats-img" src={cat.url} alt="cat" height="300" width="300"/>
                            <div className="icon-container" onClick={clickFavorite}/>
                        </div>
                    ))
                }
            </div>
            <div className="catsBtn_container">
                <button className="catsBtn" onClick={(e) => handleClick(e)}>....Загружаем еще котиков.....</button>
            </div>
        </div>
    );
};

export default Cats;