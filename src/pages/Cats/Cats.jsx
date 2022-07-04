import React, {useEffect} from 'react';
import {useState} from "react";
import axios from "axios"
import {useDispatch} from "react-redux";

const Cats = () => {
    const dispatch = useDispatch()
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
    const addFavorite = (cat) => {
        dispatch({type:'ADD_TO_FAVORITES',payload:cat})
    }
    return (
        <div className="container">
            <div className="row">
                {
                    cats.map((cat) => (
                        <div className="col-2" key={cat.id}>
                            <img className="cats-img" src={cat.url} alt="cat" height="300" width="300"/>
                            <div className="icon-container" onClick={() => addFavorite(cat)}/>
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