import React from 'react'

const Navbar = ({setCategory}) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><span className='badge bg-light text-dark fs-4 mx-2'>NewsMag</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
         <div className="nav-link" onClick={()=> setCategory("technology")} >Technology</div>
        </div>
      <div className="navbar-nav">
         <div className="nav-link" onClick={()=> setCategory("business")}  >Business</div>
        </div>
      <div className="navbar-nav">
         <div className="nav-link" onClick={()=> setCategory("health")} >Health</div>
        </div>
      <div className="navbar-nav">
         <div className="nav-link" onClick={()=> setCategory("sports")} >Sports</div>
        </div>
      <div className="navbar-nav">
         <div className="nav-link" onClick={()=> setCategory("entertainment")} >Entertainment</div>
        </div>
      <div className="navbar-nav">
         <div className="nav-link" onClick={()=> setCategory("science")} >Science</div>
        </div>
    </div>
  </div>
</nav>
  )
}

export default Navbar
