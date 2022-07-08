
import {useDispatch, useSelector} from "react-redux";
import 'react-toastify/dist/ReactToastify.css';
import CatCard from "../../components/CatCard";

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
                    favorites.length?
                        favorites.map((cat) => (
                           <CatCard cat={cat} action={removeFavorite} isFavorite={true} />
                        )):<div className="message-favorite">Нет любимых котиков</div>
                }
            </div>

        </div>
    );
};

export default Favorites;