import React from 'react';

const CatCard = ({cat,action,isFavorite = false}) => {
    return (
        <>
            <div className="col-2" key={cat.id}>
                <img className="cats-img" src={cat.url} alt="cat" height="300" width="300"/>
                <div className={isFavorite?"icon-container-favorite":"icon-container"} onClick={() => action(cat)}/>
            </div>
        </>
    );
};

export default CatCard;