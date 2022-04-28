import React  from 'react'

  const Launch =({launches,loading})=>{
      if(loading){
          return <h2> loading ...</h2>;
      }
    
  return (
<>
<div className="container pt-5">
{launches.map((launches) => (  
<div className="card text-center" key={launches.id} style= {{width: '18rem'}}>
  <img src={launches.links.patch.small} className="card-img-top img-fluid" alt="..."/>
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
