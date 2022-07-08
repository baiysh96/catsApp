import React, {useEffect} from 'react';
import {useState} from "react";
import axios from "axios"
import {useDispatch} from "react-redux";
import Spinner from "../../components/Spinner";
import CatCard from "../../components/CatCard";
import PaginationBtn from "../../components/PaginationBtn";
// import Limits from "../../components/Limits";

const Cats = () => {
    const [isLoading, setIsLoading] = useState(true)
    const dispatch = useDispatch()
    const [limit, setLimit] = useState(12)
    const [paginationCount, setPaginationCount] = useState(1)
    const [page, setPage] = useState("")
    const [cats, setCats] = useState([])

    const getCats = async () => {
        axios.defaults.headers.common['x-api-key'] = "19a85cd9-f626-4df1-961f-714287e6fe46"
        const takeCats = await axios(`https://api.thecatapi.com/v1/images/search?limit=${limit}&page=${+page + 1}&order=desc`)
        setCats(takeCats.data)
        setPaginationCount(takeCats.headers['pagination-count'])
        setIsLoading(false)
    }
    useEffect(() => {
        getCats()
    },[page])
    const addFavorite = (cat) => {
        dispatch({type: 'ADD_TO_FAVORITES', payload: cat})
    }
    if (isLoading) {
        return <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
            <Spinner/>
        </div>
    }
    return (
        <div className="container">
            <div>
            <div className="paginate">
                <PaginationBtn
                    setPage={setPage}
                    setLimit={setLimit}
                    paginationCount={paginationCount}
                    limit={limit}
                    page={page}
                />
                {/*<Limits*/}
                {/*limit={limit}*/}
                {/*setLimit={setLimit}*/}
                {/*/>*/}
            </div>
            </div>
            <div className="row">
                {
                    cats.map(cat => (<CatCard cat={cat} action={addFavorite} isFavorite={false}/>))
                }
            </div>
        </div>
    );
};

export default Cats;