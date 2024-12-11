import { useEffect,useState } from "react";
import {useResetpasswordMutation} from "../../Redux/Api/user.api";
import { FetchBaseQueryError } from '@reduxjs/toolkit/query/react';
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import Cookies from 'js-cookie';
import Input from '../../components/input/Input';
import { Link } from "react-router-dom";
import { LoadingOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";


import { z } from 'zod';
import { toast } from 'sonner'

const ChangePassword = () => {
  const [isExclusive, setExclusive] = useState(false);

  useEffect(()=>{
    const isExclusive = localStorage.getItem("isExclusive");
    if(isExclusive){
      setExclusive(true)
    }
  },[])

    const navigate = useNavigate();
    const [resetpassword, { isLoading }] = useResetpasswordMutation();

  const createPasswordSchema = z.object({
    password: z.string().min(8, "Password must be at least 8 characters long"),
    confirmPassword: z.string().min(8, "Password must be at least 8 characters long"),
  }).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

  type CreatePasswordInputs = z.infer<typeof createPasswordSchema>;

  const { register, handleSubmit, formState: { errors } } = useForm<CreatePasswordInputs>({
    resolver: zodResolver(createPasswordSchema),
  });

  type ApiResponse = {
    success: boolean;
    message: string;
  };

  type FetchBaseQueryErrorWithData = FetchBaseQueryError & {
    data: ApiResponse;
  };

  const onSubmit: SubmitHandler<CreatePasswordInputs> = async (data) => {
    const { password: confirmPassword } = data;
    
  
    try {
      const res = await resetpassword({ password: confirmPassword});
      
      if ('error' in res && res.error) {  
        const errorData = res.error as FetchBaseQueryErrorWithData;
        
        if (errorData.data?.success === false) {
          toast.error(errorData.data.message);
          return;
        }
      } else {
        const successData = res.data as ApiResponse;
        toast.success(successData.message);
        Cookies.remove("answers");
        navigate("/personal-details");
      }
  
    } catch (error) {
      toast.error("An unexpected error occurred.");
      console.error(error);
    }
  };
  return (
    <div className={`min-w-screen h-screen flex flex-col items-center justify-center ${isExclusive? 'bg-[#60457E]': 'bg-[#007EAF]'}`}>
    <div className="flex items-center justify-center mb-2 md:mb-10">
      <Link to={"/"} className="fixed top-10">
      <img src="/logowhite.png" alt=""  className='w-72 h-24 ' />
      </Link>
    </div>
    <div className="flex flex-col items-center justify-center mt-4">
      <div className="bg-white flex items-center justify-center rounded-full w-12 h-12">
        <div className="bg-[#D1FADF] rounded-full w-9 h-9 flex items-center justify-center">
          <img src="/confirm.png" alt="Star" className="w-6 h-6" />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center text-white mt-2">
        <h1 className="text-3xl font-bold">Change Your Password</h1>
        <p className="mt-4 md:text-lg text-center">
          This blog post has been published. Team members <br /> will be able to edit this post and republish changes.
        </p>
      </div>
    </div>
    <div className="w-full max-w-md px-2 py-4 mt-4">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <Input
            label="Enter new password"
            placeholder="password"
            type="password"
            {...register('password')}
            className={`w-full rounded-md border-2 p-2 ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.password && (
            <p className="text-orange-200 text-sm">{errors.password.message}</p>
          )}
        </div>

        <div className="mb-4">
          <Input
            label="Re-enter password"
            placeholder="Re-enter password"
            type="password"
            {...register('confirmPassword')}
            className={`w-full rounded-md border-2 p-2 ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.confirmPassword && (
            <p className="text-orange-200 text-sm">{errors.confirmPassword.message}</p>
          )}
        </div>

        <button type="submit" className={`bg-white ${isExclusive? 'text-[#60457E]': 'text-[#007EAF]'} w-full h-10 rounded-md mt-4`}>
          {isLoading ? <LoadingOutlined className={`${isExclusive? 'text-[#60457E]': 'text-[#007EAF]'} animate-spin`} /> : 'Change Password'}
        </button>
      </form>
    </div>
  </div>
  )
}

export default ChangePassword
