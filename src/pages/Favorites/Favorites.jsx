
import {useDispatch, useSelector} from "react-redux";
import 'react-toastify/dist/ReactToastify.css';

const Favorites = () => {
    const dispatch = useDispatch()
    const {favorites} = useSelector((store) => store)
    const removeFavorite = (index) => {
        dispatch({type:'REMOVE_FROM_FAVORITES',payload: index})
    }
    return (
        <div className="container">
            <div className="row">
                {
                    favorites?.map((cat,index) => (
                        <div className="col-2" key={index}>
                            <img className="cats-img" src={cat.url} alt="cat" height="300" width="300"/>
                            <div className="icon-container" onClick={() => removeFavorite(index)}/>
                        </div>
                    ))
                }
            </div>

        </div>
    );
};

export default Favorites;