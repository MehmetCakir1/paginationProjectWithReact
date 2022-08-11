import React from 'react'

const Follower = ({item}) => {
const {login,avatar_url,html_url}=item;
  return (
    <div className='cardDiv col-10 col-sm-6 col-md-4 col-lg-3  m-auto  '>
      <div className='m-auto card  d-flex justify-content-center align-items-center '>
      <div className='imgDiv py-1 '>
        <img src={avatar_url} alt={login}className="rounded-circle" />
      </div>
      <h4 className='py-2 text-capitalize'>{login}</h4>
      <a className='py-2' href={html_url} target="_blank"><button className='btn border-1 border-danger text-danger fw-bold'>VIEW PROFILE</button></a> 
      </div>
    </div>
  )
}

export default Follower