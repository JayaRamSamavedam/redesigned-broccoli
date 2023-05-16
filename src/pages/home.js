import React from 'react'
import { useEffect,useState } from 'react';
import Logo from "./1.png"
import im2 from "./2.png"
import im3 from "./3.png"
import im4 from "./4.png"
import './home.css';
import icon from "./left-arrow.png"
const Home = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isTrue = windowSize.width < 992;
  const isFalse = !isTrue;

  return (
    <>
    {isFalse && <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
    
          <div className="collapse navbar-collapse justify-content-between" id="navbarTogglerDemo02">
            <a className="navbar-brand" href="/">ATG.WORLD</a>
       { isFalse &&
            <form className="d-flex justify-content-center" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
}
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
              { !isTrue && <>
              <li className="nav-item">
                
                <a className="nav-link active" aria-current="page" href="/" style={{color:'blue'}}>Signup It's free</a>
              </li>
              
              </>
              }
              { isTrue && 
              <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Join the group</a>
               </li>
            }
            </ul>
          </div>
        </div>
      </nav>
    </div>}
    
    <div>
      {/* <p>{windowSize.width}</p> */}
      
      <div className="container-fluid">
      <img src={Logo} className="img-fluid" alt="..." />
      {isTrue &&
      <div style={{ position: 'absolute', top: 30, right: 40 }}>
         <button className="responsive-button">Join</button>
      </div>
      }
      {isTrue &&
      <div style={{ position: 'absolute', top: 30, left:40}}>
         <img src={icon} className="img-fluid" alt="..." style={{height:20,width:20}}/>
      </div>
      }
      </div>
        {/* <img src={Logo} className="img-fluid" alt="..."/> */}
        <div className="container-fluid">
        { isFalse &&
        <ul className="nav nav-underline justify-content-center ">
  <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="/">Posts</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="/">Article</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="/">Event</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="/">Education</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="/">Job</a>
  </li>
 
    <li className="nav-item">
    <a className="nav-link" href="/">Join</a>
  </li>
    <li className='nav-item'>
    <div className="dropdown">
  <a className="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{background: "transparent",border: "none",
    color: "black"}}>
    writepost
  </a>

  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#">Action</a></li>
    <li><a className="dropdown-item" href="#">Another action</a></li>
    <li><a className="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
    </li>
</ul> }

{isTrue && 
  <ul className="nav nav-underline justify-content-center ">
  <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="/">Posts</a>
  </li>
  </ul>
  }
<br/>
<div className="container-fluid text-center">
  <div className="row">
    <div className="col-md-6 offset-md-3">
        <div className="container-fluid card">
  <img src={im4} className="img-fluid card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="/" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
<br/>
<div className="container-fluid card">
  <img src={im2} className="img-fluid card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="/" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
<br/>
<div className="container-fluid card">
  <img src={im3} className="img-fluid card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="/" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
<br/>
<div className="container-fluid card">
  <img src={im4} className="img-fluid card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="/" className="btn btn-primary">Go somewhere</a>
  </div>
  <br/>
</div></div>
  </div>
</div>
</div>
    </div>
    </>
  )
}

export default Home