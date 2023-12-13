import { Link } from "react-router-dom";
import pix from "../../../assets/q.jpg";


const SignInScreen = () => {
 return(
    <div className="w-full h-[100vh] flex justify-center items-center bg-purple-900">
        <div className='w-[50%] h-[100vh] flex items-center justify-center flex-col S320:w-full S375:w-full S425:w-full S768:full'>
      <div className='text-[55px] font-bold text-white S320:text-[30px] S375:text-[35px]'>Eat
        <span className='text-orange-600'>Easy</span> 
      </div>
      <div className='flex justify-center items-center m-3 text-[20px]'>
                  New To Food Flex? 
                  <Link to={'/register'}>
                    <span className='text-orange-600 ml-1 font-bold'>Sign up here</span>
                  </Link>
                </div>
        <div className='w-[500px] min-h-[400px]  rounded-lg S320:w-full S375:w-full S425:w-[100%] S768:full'>
            <div className='m-3'>
                <div className='w-full h-[25px] my-12 outline-orange-600'>
                  <input type="Email" placeholder='Work email' className='w-full h-[45px] rounded-md p-3  text-[25px] outline-orange-600 border' />
                </div>
                <div className='w-full h-[25px] my-12'>
                  <input type="password" placeholder='Password' className='w-full h-[45px] rounded-md p-3  text-[25px]  outline-orange-600 border' />
                </div>

                <button type='submit' className='w-full h-[55px] text-[25px] bg-orange-600  mt-6 rounded-3xl  text-white hover:bg-orange-700'>
                  Log In
                </button>
                  <p className='flex justify-center items-center my-4'>or</p>

                  <div className='w-[full] h-[55px] text-[18px] bg-slate-100 border  rounded-3xl  text-black hover:bg-slate-300 flex justify-center items-center cursor-pointer'>
                  Continue with Google
                </div>
            </div>
        </div>
    </div>




          <div className="w-[45%] h-[95%]  m-4 mr-0 flex items-center justify-center bg-purple-600 rounded-2xl shadow-md flex-col S320:hidden S375:hidden S425:hidden S768:hidden  ">
                <div  className="w-[600px] h-[600px] rounded-[50%] border m-6 flex items-center justify-center  border-orange-200">
                    <div  className="w-[450px] h-[450px] rounded-[50%] border flex justify-center items-center border-orange-200 ">
                     <div className="w-[350px] h-[350px] rounded-[50%] border ">
                        <img src={pix} className= "object-cover w-full h-[100%] rounded-[50%]" />
                     </div>
                    </div>
                </div>
                <div className="w-full flex items-center flex-col">
          <div className="mt-4 font-bold relative flex justify-center items-center">
            <div className="w-[60px] h-1 rounded-sm bg-orange-600 absolute right-0 top-0" />

            <div className="w-[90px] h-1 rounded-sm bg-purple-900 absolute left-0 top-0 " />
          </div>
          <div className="px-4 text-center mt-3 font-bold text-[25px] text-white">
            Full Contactless Experience
          </div>
          <div className=" text-center font-medium text-[12px] text-white ">
            From ordering to paying, that's all contactless
          </div>
          <div className="font-bold mt-6  text-[30px] text-orange-600"><span className="text-black">Eat</span>Easy</div>
        </div> 
          </div>
          

    </div>
 )
};

export default SignInScreen;