import React from 'react';
import login from '../img/image 1.jpg'

function Login() {
        return (
        <>
            <div className='flex justify-items-stretch'>
                <img src={login}
                     style={{width: "650px", height: "580px"}}
                     alt=""
                />
                <form action=""
                      aria-placeholder={'Имя пользователя'}
                      className=""
                >
                    Имя пользователя
                </form>
            </div>
        </>
    );
}

export default Login;