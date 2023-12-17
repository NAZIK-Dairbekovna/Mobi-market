import React from 'react';
import login from '../img/image 1.jpg'

function Login() {
    return (
        <>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <img src={login}
                     style={{width: "720px", height: "1024px", flexShrink: "0"}}
                     alt=""
                />
            </div>
        </>
    );
}

export default Login;