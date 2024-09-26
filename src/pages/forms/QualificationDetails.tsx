import { useForm } from "react-hook-form";
import { z } from "zod";
import {useQualificationDetailsMutation} from "../../Redux/Api/form.api";
import { FetchBaseQueryError } from '@reduxjs/toolkit/query/react';
// import { useDispatch } from "react-redux";
// import{ setUser } from "../../Redux/Reducers/user.reducer";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from 'sonner'


// Define the Zod schema for form validation
const qualificationDetailsSchema = z.object({
  qualification: z.string().min(1, { message: "Qualification is required" }),
  currentWorkingStatus: z.string().min(1, { message: "Working status is required" }),
  occupation: z.string().min(1, { message: "Occupation is required" }),
  income: z.string().min(1, { message: "Income is required" }),
});

type QualificationDetailsFormData = z.infer<typeof qualificationDetailsSchema>;

const QualificationDetails = () => {

  // const dispatch = useDispatch();
  const [ qualificationDetails] = useQualificationDetailsMutation();


  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<QualificationDetailsFormData>({
    resolver: zodResolver(qualificationDetailsSchema),
  });

    
  type ApiResponse = {
    success: boolean;
    message: string;
  };
  type FetchBaseQueryErrorWithData = FetchBaseQueryError & {
    data: ApiResponse;
  };


  const onSubmit = async (data: QualificationDetailsFormData) => {

    try {

      const res = await qualificationDetails(data);
       
      if ('error' in res && res.error) {
        const errorData = res.error as FetchBaseQueryErrorWithData;
  
        if (errorData.data?.success === false) {
          console.log(errorData.data.message);
          toast.error(errorData.data.message); 
          return;
        }
      }else{
        const successData = res.data as ApiResponse;
        console.log(successData);
        // const isQualificationDetailsFormFilled = true
        toast.success(successData.message);
        // dispatch(setUser(isQualificationDetailsFormFilled));
        navigate("/location-details");
      }
      
    }catch(error) {
      console.log(error);
      toast.error("An unexpected error occurred.");
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#007EAF] px-5 md:px-20 lg:px-40 3xl:px-60">
      <img
        src="/logowhite.png"
        alt="Wedlock Logo"
        className="w-72 h-24 mx-auto mb-2"
      />
      <div className="mt-5 w-full flex-grow xl:mt-20 2xl:mt-10">
        <div className="mb-6 text-center text-white md:mb-20">
          <h1
            className="text-xl md:mb-2 md:text-3xl 2xl:text-5xl"
            style={{ fontFamily: "Proxima-Nova-Bold, sans-serif" }}
          >
            Your Qualification details
          </h1>
          <p className="text-sm leading-6 xl:text-xl">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="md:px-30 mt-5 flex flex-col md:px-20 xl:px-40 2xl:px-60 3xl:mt-20 3xl:px-60"
        >
          <div className="mb-2">
            <label className="block text-white">Highest qualification*</label>
            <div className="">
              <select
                {...register("qualification")}
                className="w-full rounded-[0.5rem] border bg-[#F9F5FFE5] p-2 text-[#838E9E]"
              >
                <option value="" disabled selected>
                  Select your highest qualification
                </option>
                <option value="high-school">
                  High School Diploma or equivalent
                </option>
                <option value="associate">Associate&apos;s Degree</option>
                <option value="bachelor">Bachelor&apos;s Degree</option>
                <option value="master">Master&apos;s Degree</option>
                <option value="doctorate">Doctorate (Ph.D.)</option>
                <option value="professional">
                  Professional Degree (e.g., JD, MD)
                </option>
                <option value="vocational">
                  Vocational Training or Certification
                </option>
                <option value="some-college">Some College, No Degree</option>
              </select>
              {errors.qualification && (
                <p className="text-orange-200 text-sm mt-1">
                  {errors.qualification.message}
                </p>
              )}
            </div>
          </div>

          <div className="mb-2">
            <label className="block text-white">Current Working Status</label>
            <div className="">
              <select
              
                {...register("currentWorkingStatus")}
                className="w-full rounded-[0.5rem] border bg-[#F9F5FFE5] p-2 text-[#838E9E]"
              >
                <option value="" disabled selected>
                  Select your Working Status
                </option>
                <option value={"yes"}>Yes</option>
                <option value={"no"}>No</option>
              </select>
              {errors.currentWorkingStatus && (
                <p className="text-orange-200 text-sm mt-1">
                  {errors.currentWorkingStatus.message}
                </p>
              )}
            </div>
          </div>

          <div className="mb-2">
            <label className="block text-white">Occupation*</label>
            <select
              {...register("occupation")}
              className="w-full rounded-[0.5rem] border bg-[#F9F5FFE5] p-2 text-[#838E9E]"
            >
              <option value="" disabled selected>
                Select your occupation
              </option>
              <option value="student">Student</option>
              <option value="unemployed">Unemployed</option>
              <option value="employed">Employed</option>
            </select>
            {errors.occupation && (
              <p className="text-orange-200 text-sm mt-1">
                {errors.occupation.message}
              </p>
            )}
          </div>

          <div className="mb-2">
            <label className="block text-white">Income*</label>
            <select
              {...register("income")}
              className="w-full rounded-[0.5rem] border bg-[#F9F5FFE5] p-2 text-[#838E9E]"
            >
              <option value="" disabled selected >
                Select your income
              </option>
              <option value="Less than 5,000">Less than $5,000</option>
              <option value="5,000 -  10,000">$5,000 - $10,000</option>
              <option value="10,000 - 15,000">$10,000 - $15,000</option>
              <option value="15,000 - 20,000">$15,000 - $20,000</option>
              <option value="20,000 - 25,000">$20,000 - $25,000</option>
              <option value="25,000 - 30,000">$25,000 - $30,000</option>
              <option value="30,000 - 35,000">$30,000 - $35,000</option>
              <option value="35,000 - 40,000">$35,000 - $40,000</option>
              <option value="40,000 - 45,000">$40,000 - $45,000</option>
              <option value="45,000 - 50,000">$45,000 - $50,000</option>
              <option value="50,000 - 55,000">$50,000 - $55,000</option>
              <option value="55,000 - 60,000">$55,000 - $60,000</option>
            </select>
            {errors.income && (
              <p className="text-orange-200 text-sm mt-1">
                {errors.income.message}
              </p>
            )}
          </div>

          <div className="mb-5 flex w-full justify-end py-8 pb-4 xl:px-10 2xl:mb-4 2xl:px-0 3xl:mb-20 3xl:px-0">
        <button
          type="submit"
          className="w-full rounded-[0.5rem] bg-[#F9F5FFE5] px-4 py-2 text-[#007EAF] md:w-20 2xl:w-32"
        >
          Save
        </button>
      </div>
        </form>
      </div>
    </div>
  );
};

export default QualificationDetails;
