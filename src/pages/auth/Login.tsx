import Input from "../../components/input/Input";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import {useLoginMutation} from "../../Redux/Api/user.api";
import {setUser} from "../../Redux/Reducers/user.reducer";
import { useDispatch } from "react-redux";
import { FetchBaseQueryError } from '@reduxjs/toolkit/query/react';
import { toast } from 'sonner'
import { useNavigate } from "react-router-dom";
import { z } from 'zod'

import { LoadingOutlined } from '@ant-design/icons';

const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(8, "Password is required"),
});

type FormData = z.infer<typeof loginSchema>;


const Login = () => {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    // const { isLocationFormFilled,isOtherFormFilled,isQualificationFormFilled,isPersonalFormFilled,isImageFormFilled } = useSelector((state: RootState) => state.userReducer);
  
  
    const [login, { isLoading }] = useLoginMutation();
  
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
      defaultValues: {
        email: "",
        password: "",
      },
      resolver: zodResolver(loginSchema),
    });
  
    type ApiResponse = {
      success: boolean;
      message: string;
      user: any;
    };
  
    type FetchBaseQueryErrorWithData = FetchBaseQueryError & {
      data: ApiResponse;
    };


    const onSubmit: SubmitHandler<FormData> = async (data) => {
      try {
        const res = await login(data);
    
        if ('error' in res && res.error) {
          const errorData = res.error as FetchBaseQueryErrorWithData;
    
          if (errorData.data?.success === false) {
            toast.error(errorData.data.message);
            return;
          }
        }
    
        dispatch(setUser(res.data));
    
        const successData = res.data as ApiResponse;
        toast.success(successData.message);

        console.log(successData.success,"successData");

      
        if (successData.success === true) {

        const isLocationFormFilled = successData?.user?.isLocationFormFilled;
        const isPersonalFormFilled = successData?.user?.isPersonalFormFilled;
        const isImageFormFilled = successData?.user?.isImageFormFilled;
        const isQualificationFormFilled = successData?.user?.isQualificationFormFilled;
        const isOtherFormFilled = successData?.user?.isOtherFormFilled;




          const allFormsFilled = isLocationFormFilled && isPersonalFormFilled && isImageFormFilled && isQualificationFormFilled && isOtherFormFilled
    
          if (allFormsFilled) {
            navigate('/user-dashboard');
          } 
          else {
            if (!isPersonalFormFilled) {
              navigate('/personal-details');
            } else if (!isQualificationFormFilled) { 
              navigate('/qualification-details');
            } else if (!isLocationFormFilled) {
              navigate('/location-details');
            } else if (!isImageFormFilled) {
              navigate('/photoupload');
            } else if (!isOtherFormFilled) {
              navigate('/other-details');
            }
          }
        }

    
      } catch (error) {
        toast.error("An error occurred");
      }
    };
    
    
    

  return (
    <div className="min-w-screen h-screen flex flex-col items-center justify-center  bg-[#007EAF] ">
    <div className="flex items-center justify-center mb-10  ">
      <img src="/logowhite.png" alt=""  className='w-48 h-24 fixed top-2' />
    </div>

    <div className="flex flex-col items-center justify-center  mt-12">
      <div className="bg-white flex items-center justify-center rounded-md w-12 h-12">
        <img src="/login.png" alt="login"  className='w-8 h-8'/>
      </div>
    </div>

     <div className="flex flex-col items-center justify-center text-white mt-2">
        <h1 className="text-2xl md:text-4xl font-bold">Log in to your account</h1>
        <p className="mt-4 md:text-lg text-center"> Welcome back! Please enter your details. </p>
      </div>

      <div  className="w-full max-w-md px-2   py-2 mt-2">
        <form  onSubmit={handleSubmit(onSubmit)}>
          <div className="rounder-[8px]">
            <Input
            {...register("email")}
            placeholder="Enter your email" label="Email"  
            />
          {errors.email && <p className="text-orange-200">{errors.email.message}</p>}

            <Input
            {...register("password")}
            type="password"
            placeholder="Enter your password" label="Password"

            />
          {errors.password && <p className="text-orange-200">{errors.password.message}</p>}

          
          </div>
          <div className="flex items-center justify-end mb-8  text-[#F9F5FF] gap-1 text-lg">
              <button>Forgot password</button>

          </div>

          
            <button type="submit" className="bg-white text-[#007EAF] w-full h-12 rounded-md">
               
              {isLoading ? <LoadingOutlined className="text-[#007EAF] animate-spin" /> : 'Confirm'}

            </button>

          </form>
            <button  className=" bg-transparent border  text-[#ffffff] mt-2 w-full h-12 rounded-md" onClick={() => navigate("/questions")} >
              Create an account
            </button>

          </div>

  </div> 
  )
}

export default Login