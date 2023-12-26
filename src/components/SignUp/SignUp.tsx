import React from 'react';
import banner from "../img/image 1.jpg";

const SignUp = () => {
    return (
        <>
            <div className='flex justify-items-stretch'>
                <img src={banner}
                     style={{width: "550px", height: "590px"}}
                     alt=""
                />
                <div className='w-22 h-20 mt-60 ml-60'>
                    <form action="text-table"
                          aria-placeholder={'Имя пользователя'}
                          className=" text-gray-500 border-b-blue-600"
                    >
                        Имя пользователя
                    </form>
                    <form action=""
                          aria-placeholder={''}
                          className=" text-gray-500 border-b-blue-600"
                    >
                        Почта
                    </form>
                    <div className='flex flex-col'>
                        <button className='w-full bg-gray-300 text-white font-bold rounded-2xl'>
                            Далее
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;