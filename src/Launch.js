import React  from 'react'

  const Launch =({launches,loading})=>{
      if(loading){
          return <h2> loading ...</h2>;
      }
    
  return (
<>
<div className="container mt-5 mb-5">
{launches.map((launches) => (  
<div className="card text-center bg-info" key={launches.id} style= {{width: '18rem'}}>
  <img src={launches.links.patch.small} className="card-img-top " alt="..."/>
  <div className="card-body text-dark ">
    <h5 className="card-title">{launches.name}</h5>
    <p className="card-text">{launches.details}</p>
</div>
</div>))}
</div>
</>
  )
}
export default Launch
