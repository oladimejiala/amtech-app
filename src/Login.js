import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "./css/bootstrap.min.css";


// const Email = [];
// const Password = [];




function App({Email,Password}) {

  return (
    <div className="content-wrapper">
      <div className="card-header">
        <img src="./macbook-apple-imac-computer-39284.jpeg" alt="AMTECH temp Logo" />
       <span ><h1>AMTECH APP</h1></span>
      </div>
      <img src="" alt="AMTECH Large logo" />
      <p>Create an account by Signing Up <a href="./Menulist.js">here</a> below</p>

      <form action="POST" method="POST" className="form-group" >
        <div className="row">
          <div className="col-sm-10">
          <input id="Email" type="email" className="form-control" placeholder="Enter your email here" />
          <input id="Password" type="password" className="form-control" placeholder="Enter your password here" />
               
               
               <button type="submit" className="btn btn-secondary form-control">Login</button>
          
            <p><b>or</b></p>

            <a href="https://www.gmail.com/sign-in" className="btn btn-primary form-control">Continue with Gmail</a>

            <a href="https://www.linkedin.com/sign-in" className="btn btn-secondary form-control">Continue with Linkedin</a>

            <a href="https://www.facebook.com/sign-in" className="btn btn-primary form-control">Continue with Facebook</a>


            <p>&copy;<a href="https://amtech-bj.netlify.app">AMTECH 2021</a></p>
        </div>
        </div>
        
      </form>
      
    </div>
  );

}



ReactDOM.render(
  <nav/>,
  <App />,
  document.getElementById("root")
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

