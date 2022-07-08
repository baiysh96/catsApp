import React from 'react';
import "./Pagination.css"
import Pagination from '@mui/material/Pagination';

const PaginationBtn = ({setPage,paginationCount,limit,page}) => {
    const totalPages = Math.floor(paginationCount / limit);
    let hover = "#00FFFF"
    return (
        <div className="pagination">
            <Pagination
                count={totalPages}
                page={page}
                color="primary"
                hover={hover}
                onChange={(_,num) => setPage(num)}
            />
        </div>
    );
};

export default PaginationBtn;