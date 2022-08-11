import React from 'react'

const Pagination = ({postsPerPage,totalPosts,paginate,currentPage}) => {
    const pageNumbers=[];
    for(let i=1;i<=Math.ceil(totalPosts/postsPerPage);i++){
        pageNumbers.push(i)
    }
  return (
    <ul className='d-flex flex-wrap gap-2 m-auto justify-content-center mt-2 p-0'>
        {pageNumbers.map((item)=>{
            return(
                <li key={item} className="list-unstyled ">
                    <button onClick={()=>paginate(item)} className={`btn border-1 border-primary number d-flex justify-content-center align-items-center ${currentPage==item && "bg-primary text-light"}`}>{item}</button>
                </li>
            )
        })}
    </ul>
  )
}

export default Pagination