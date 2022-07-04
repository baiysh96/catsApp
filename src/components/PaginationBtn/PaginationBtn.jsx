import React from 'react';
import "./Pagination.css"
const PaginationBtn = ({setPage}) => {
    const handleClick = (e,idx) => {

        setPage(idx)
    }
    return (
        <div className="pagination">
            {
                Array(Math.ceil(10)).fill(0).map((buttonNum, idx) => (
                    <button onClick={(e) => handleClick(e,idx)}
                            className="pagination-btn"
                            key={idx}>
                         {idx + 1}
                    </button>
                ))
            }
        </div>
    );
};

export default PaginationBtn;