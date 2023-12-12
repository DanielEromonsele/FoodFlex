import { Link } from 'react-router-dom'


const Register = () => {

  return (
    <div className='w-full h-[100vh] bg-white flex items-center justify-center'>
        <div className='w-[500px] min-h-[400px] border rounded-lg  '>
            <div className='text-[40px] text-yellow-600 m-3'>Register</div>

            <div className='m-3'>
                <div className='w-full h-[25px] my-12 outline-yellow-600'>
                  <input type="Email" placeholder='Email' className='w-full h-[45px] rounded-md p-3  text-[25px] outline-yellow-600 border' />
                </div>
                <div className='w-full h-[25px] my-12'>
                  <input type="password" placeholder='Password' className='w-full h-[45px] rounded-md p-3  text-[25px]  outline-green-600 border' />
                </div>

                <button type='submit' className='w-full h-[45px] text-[25px] bg-green-600  mt-6 rounded-md  text-white'>
                 Register
                </button>
                <div className='flex justify-center items-center m-3 text-[20px]'>
                 Already Have An Account? 
                  <Link to={'/signIn'}>
                    <span className='text-green-400 ml-1 font-bold'>Sign in here</span>
                  </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register


