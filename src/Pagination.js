import React from 'react'

 const Pagination = ({launchesPerPage, totalLaunches,paginate}) => {
     const pageNumbers =[];

     for(let i=1;i<=Math.ceil(totalLaunches/launchesPerPage);i++){
         pageNumbers.push(i);
     }
  return (
    
    <nav>
      <ul className='pagination pagination-sm justify-content-center mt-3'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <a onClick={() => paginate(number)} href='!#' className='page-link'>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
   
  );
};

export default Pagination;