// import React from 'react'
// import Login from '../Pages/Login';
// import Register from './../Pages/Register';

// export const Modal1 = ({ismodelopen ,setmodelopen}) => {
//   if(ismodelopen) return null;
//     return (
//     <div className=' fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50'>
//         <button className='absolute top-44 right-5 text-gray-300 text-2xl mt-40' onClick={()=>{setmodelopen(true)}}>X</button>
//         <Register/>
//         </div>
//   )
// }

// export const Modal2 = ({ismodelopen ,setmodelopen}) => {
//   if(ismodelopen) return null;
//     return (
//     <div className=' fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50 '>
//         <button className='absolute top-2 right-5 text-gray-300 text-2xl' onClick={()=>{setmodelopen(true)}}>X</button>
//         <Register/>
//         </div>
//   )
// }



import React from 'react'
import Login from '../Pages/Login'

const Modal = ({open,setopen }) => {
  if(!open) return null
  return (
    <div
    class="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]">
    <div class="w-full max-w-lg bg-white shadow-lg rounded-lg p-8 relative">
        <button onClick={()=>setopen(!open)}
            class="w-3.5 cursor-pointer shrink-0 fill-gray-400 hover:fill-red-500 float-right" viewBox="0 0 320.591 320.591">
           X
        </button>

        <div class="my-8 text-center">
            <h4 class="text-3xl text-gray-800 font-extrabold">Sign In</h4>
            <p class="text-sm text-gray-500 mt-4">Login to your account to continue the process</p>
        </div>

        <form class="space-y-4">
            <div class="relative flex items-center">
                <input type="email" placeholder="Enter Email"
                    class="px-4 py-3 bg-white text-gray-800 w-full text-sm border border-gray-300 focus:border-blue-600 outline-none rounded-lg" />
                <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" class="w-[18px] h-[18px] absolute right-4"
                    viewBox="0 0 682.667 682.667">
                    <defs>
                        <clipPath id="a" clipPathUnits="userSpaceOnUse">
                            <path d="M0 512h512V0H0Z" data-original="#000000"></path>
                        </clipPath>
                    </defs>
                    <g clip-path="url(#a)" transform="matrix(1.33 0 0 -1.33 0 682.667)">
                        <path fill="none" stroke-miterlimit="10" stroke-width="40"
                            d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"
                            data-original="#000000"></path>
                        <path
                            d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z"
                            data-original="#000000"></path>
                    </g>
                </svg>
            </div>

            <div class="relative flex items-center">
                <input type="password" placeholder="Enter Password"
                    class="px-4 py-3 bg-white text-gray-800 w-full text-sm border border-gray-300 focus:border-blue-600 outline-none rounded-lg" />
                <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb"
                    class="w-[18px] h-[18px] absolute right-4 cursor-pointer" viewBox="0 0 128 128">
                    <path
                        d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
                        data-original="#000000"></path>
                </svg>
            </div>

            <div class="flex">
                <input type="checkbox" class="w-4" />
                <label class="text-sm ml-4 text-gray-500">Remember me</label>
            </div>

            <button type="button"
                class="px-5 py-2.5 !mt-8 w-full bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg tracking-wide">Sign
                in</button>
        </form>

        <a href="javascript:void(0)" class="text-sm text-blue-600 text-center mt-4 block hover:underline">Forgot Your
            Password?</a>

        <hr class="my-8 border-gray-300" />

        <p class="text-sm text-center text-gray-500">Don't Have a Account? <a href="javascript:void(0)"
            class="text-sm text-blue-600 hover:underline">Sign Up</a></p>
    </div>
</div>
  )
}

export default Modal