import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
    <div className='container'>
        <div className="jumbotron mt-5">
            <h1 className="display-4">Welcome patients Reconr!</h1>
            <p className="lead">keeping patients record.</p>
            <hr className="my-4" />
            <p>Records.</p>
            <Link className="btn btn-primary btn-lg" to='/login' role="button">login to continue</Link>
        </div>
    </div>
);

export default Home;
