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
                      className="w-22 h-20 mt-60 ml-40 text-gray-500 border-b-blue-600"
                >
                    Имя пользователя
                </form>
            </div>
        </>
    );
}

export default Login;