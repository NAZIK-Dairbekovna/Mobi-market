import React from 'react';
import login from '../img/image 1.jpg'

function Login() {
        return (
        <>
            <div className='flex justify-items-stretch'>
                <img src={login}
                     style={{width: "550px", height: "590px"}}
                     alt=""
                />
                <div className='w-22 h-20 mt-60 ml-60'>
                    <form action=""
                          aria-placeholder={'Имя пользователя'}
                          className=" text-gray-400 border-b-blue-600"
                    >
                        Имя пользователя
                    </form>
                    <form action=""
                          aria-placeholder={'Пароль'}
                          className=" text-gray-500 border-b-blue-600"
                          aria-label={'password'}
                    >
                        Пароль
                    </form>
                    <div className='flex flex-col'>
                        <button className='flex self-start text-blue-800'>
                            Забыли пароль
                        </button>
                        <button className='bg-gray-300 text-white font-bold rounded-2xl'>
                            Войти
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;