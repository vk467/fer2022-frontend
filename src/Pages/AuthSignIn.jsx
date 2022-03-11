import React from 'react';
import SignIn from '../Components/Auth/SignIn';

const AuthSignIn = () => {
   return(
    <div className='mt-5'>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="d-flex justify-content-around">
                        <div className="card px-4 py-3 sm-w-20 w-50 login-bg">
                            <div className="text-center h4 text-b">SignIn</div>
                            <SignIn/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
   );
}

export default AuthSignIn;