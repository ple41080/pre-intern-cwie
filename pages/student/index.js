import { useState } from 'react';
import Qwe from '../Components/navM';
import { useRouter } from 'next/router';

export default function mainStudent() {

    const router = useRouter();
    return (
        <>
            <header className="bg-white shadow">

                <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
                    <Qwe className='mt-5' />
             
                </div>

            </header>

            <div className="h-full py-6 px-4 align-item-center flex justify-center bg-slate-50 pb-72 pt-32">
                <dl className="grid grid-cols-1 gap-x-40 lg:ml-20 gap-y-2 sm:grid-cols-3 lg:pt-2">
                    <div className=" ">
                        <a   onClick={()=>router.push('/student/Event')}>
                            <button type="button" className="text-white transition ease-in-out delay-150 mb-6 ml-2 mt-5 text-red shadow-2xl bg-red-500 shadow-red-300/50 focus:ring-4 focus:outline-none font-medium rounded-full text-sm w-40 h-40 hover:-translate-y-1 hover:scale-110 hover:bg-rose-500 duration-300" >
                                <svg className='w-20 h-20 ml-10' fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"></path>
                                </svg>
                            </button>
                        </a>
                        <div className='title flex justify-center text-lg'>เข้าร่วมกิจกรรม</div>
                        <p className='flex justify-center opacity-80'>รายชื่อกิจกรรมที่เปิดรับ</p>
                    </div>

                    <div className=" ">
                        <a  onClick={()=>router.push('/student/Evented')} >
                            <button type="button" className="text-white transition ease-in-out delay-150 mb-6 ml-2 mt-5 text-blue shadow-xl bg-blue-500 shadow-blue-300/50 hover:bg-gradient-to-br focus:ring-4 focus:outline-none font-medium rounded-full text-sm w-40 h-40 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
                                <svg className='w-20 h-20 ml-10' fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"></path>
                                </svg>
                            </button>
                        </a>
                        <div className='title flex justify-center text-lg'>กิจกรรมที่เข้าร่วม</div>
                        <p className='flex justify-center opacity-80'>รายชื่อกิจกรรมที่เข้าร่วมแล้ว</p>
                    </div>

                    <div className=" ">
                        <button type="button" className=" mb-6 ml-2 mt-5 text-blue cursor-not-allowed opacity-60 shadow-2xl hover:bg-gradient-to-br font-medium rounded-full text-sm w-40 h-40">
                            <svg className='w-20 h-20 ml-10' fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"></path>
                            </svg>
                        </button>
                        <div className='title flex justify-center opacity-60 text-lg'>ฝึกงาน</div>
                        <p className='flex justify-center opacity-60'>ฝึกงาน/สหกิจวิชาชีพ</p>
                    </div>
                </dl>

            </div>



            {/* <main>

                <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                    <div className=' float-right'>
                        <button type="button" onClick={''} class=" mr-5 text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2">
                            เพิ่มผู้ใช้งาน
                        </button>
                    </div>

                </div>
            </main> */}



        </>

    )
}
