import React, {FormEvent, useState} from 'react';
import banner from '../img/image 1.jpg'
import {loginUser} from "../../store/auth/actionCreators";
import {useAppDispatch} from "../../store";

function Login() {
    const dispatch = useAppDispatch();

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        dispatch(loginUser({ login, password }));
    };

        return (
        <>
            <div className='flex justify-items-center'>
                <img src={banner}
                     style={{width: "550px", height: "590px"}}
                     alt="banner"
                />
                <div className='w-200 h-50 mt-60 ml-60'>
                    <form
                          onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="login"></label>
                            <input
                                type="text"
                                name='login'
                                value={login}
                                placeholder='Имя пользователя'
                                onChange={(e) => setLogin(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="password"></label>
                            <input
                                type="password"
                                name='password'
                                value={password}
                                placeholder='Пароль'
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </form>
                    <div className='flex flex-col w-full'>
                        <button className='flex self-start text-blue-800'>
                            Забыли пароль
                        </button>
                        <button className='bg-gray-300 w-full h-8 text-white font-bold rounded-2xl'>
                            Войти
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;