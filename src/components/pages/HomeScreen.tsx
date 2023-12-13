import { Link } from 'react-router-dom'


const SignInScreen = () => {

  return (
    <div className='w-[50%] h-[100vh] bg-white flex items-center justify-center flex-col'>
      <div className='text-[55px] font-bold'>
        <span className='text-green-600'>Food</span> Flex
      </div>
      <div className='flex justify-center items-center m-3 text-[20px]'>
                  New To Food Flex? 
                  <Link to={'/register'}>
                    <span className='text-green-400 ml-1 font-bold'>Sign up here</span>
                  </Link>
                </div>
        <div className='w-[500px] min-h-[400px]  rounded-lg  '>
            <div className='m-3'>
                <div className='w-full h-[25px] my-12 outline-green-600'>
                  <input type="Email" placeholder='Work email' className='w-full h-[45px] rounded-md p-3  text-[25px] outline-green-600 border' />
                </div>
                <div className='w-full h-[25px] my-12'>
                  <input type="password" placeholder='Password' className='w-full h-[45px] rounded-md p-3  text-[25px]  outline-green-600 border' />
                </div>

                <button type='submit' className='w-full h-[55px] text-[25px] bg-green-500  mt-6 rounded-3xl  text-white hover:bg-green-700'>
                  Log In
                </button>
                  <p className='flex justify-center items-center my-4'>or</p>

                  <div className='w-[full] h-[55px] text-[18px] bg-slate-100 border  rounded-3xl  text-black hover:bg-slate-300 flex justify-center items-center cursor-pointer'>
                  Continue with Google
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignInScreen


