import React, {useEffect} from 'react';
import {useState} from "react";
import axios from "axios"
import {useDispatch} from "react-redux";
import Spinner from "../../components/Spinner";
import CatCard from "../../components/CatCard";
import PaginationBtn from "../../components/PaginationBtn";

const Cats = () => {
    const [isLoading,setIsLoading] = useState(true)
    const dispatch = useDispatch()
    const [page,setPage] = useState(120)
    const [cats, setCats] = useState([])
    const getCats = async () => {
        const takeCats = await axios(`https://api.thecatapi.com/v1/images/search?limit=12&page=${page}&order=Desc`)
        setCats(takeCats.data)
        setIsLoading(false)
    }
    useEffect(() => {
        getCats()
    },[page])
    const addFavorite = (cat) => {
        dispatch({type:'ADD_TO_FAVORITES',payload:cat})
    }
    if(isLoading) {
        return <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
           <Spinner />
        </div>
    }
    return (
        <div className="container">
            <div className="row">
                {
                    cats.map(cat => (<CatCard cat={cat} action={addFavorite} isFavorite={false}  />))
                }
            </div>
            <div>
               <PaginationBtn setPage={setPage} />
            </div>
        </div>
    );
};

export default Cats;