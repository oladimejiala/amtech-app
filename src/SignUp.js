import React from "react";
import "./index.css"

function SignUp () {
    const Register = () => {
        console.log("Registration successful");
    };

    return (
        <div className="form-group">
            <h1>Welcome to AMTECH Benin</h1>
            <p>Create an account or <a href=""><i class="fa fa-sign-in" aria-hidden="true">Sign in</i></a>below</p>
            <input type="email" placeholder="Enter your email here" />
            <input type="password" placeholder="Enter your password" />
            <a name="sign-up" id="btn sign-up" class="btn btn-secondary" href="#" role="button"></a>

        </div>

    );
}



export default SignUp;