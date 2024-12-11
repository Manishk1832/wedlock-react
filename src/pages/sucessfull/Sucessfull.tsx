// import { Link } from "react-router-dom";
import "../../font.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserType } from "../../Redux/Reducers/user.reducer";
import { RootState } from "./../../Redux/store";
import { useSelector } from "react-redux";


import { useEffect,useState } from "react";
import { usePaymentSuccessQuery } from "../../Redux/Api/checkout.api";

const Successful = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isExclusive, setExclusive] = useState(false);
  const queryParams = new URLSearchParams(location.search);


  const {user } = useSelector((state: RootState) => state.userReducer) ;


  useEffect(() => {
    const isExclusive = localStorage.getItem("isExclusive");
    if (isExclusive === "true" || user?.usertype === "Exclusive") {
      setExclusive(true);
    }
    [];
  });
  


  const session_id = queryParams.get("session_id");



  const { data, error, isLoading } = usePaymentSuccessQuery(session_id ? session_id.toString() : '', {
    skip: !session_id,
  });

  useEffect(() => {
    if(data){
      dispatch(setUserType(data?.usertype));
    }
    [data]
  })


    

  

  
  return (
    <div className={`flex min-h-screen flex-col items-center ${isExclusive? 'bg-[#8E69B4]': 'bg-[#007EAF]'} px-5 md:px-20 lg:px-40 3xl:px-60`}>
      <img
        src="/logowhite.png"
        alt="logo"
        className="mb-10 mt-10 h-auto w-40 md:w-36 lg:w-60"
      />

      <div className="flex flex-grow flex-col items-center justify-start text-center md:flex-grow-0 md:justify-center">
        {isLoading ? (
          <p className="text-xl text-[#F9F5FFE5]">Processing your payment...</p>
        ) : error ? (
          <p className="text-xl text-red-500">Payment verification failed.</p>
        ) : (
          <>
          
            <img
              src="/confirm.png"
              alt="verified"
              className="mb-10 mt-10 h-auto w-10 md:w-20 lg:w-20"
            />
            <div className="text-center">
              <h1
                className="mb-6 text-xl font-semibold text-[#F9F5FFE5] md:text-3xl lg:text-4xl 3xl:text-5xl"
                style={{ fontFamily: "Proxima-Nova-Bold, sans-serif" }}
              >
                Payment Successfully Completed

              </h1>
              <p className="md:text-md text-sm text-[#F9F5FFE5] 3xl:text-lg">
                You are now a member of our community. 
                <br className="hidden md:block" />
                Thank you for joining us! 
              </p>
            </div>
            <div className="mb-5 mt-auto flex w-full justify-end py-8 pb-4 md:mt-0 xl:px-80 2xl:mb-4 2xl:px-0 3xl:mb-20 3xl:px-0">
                <button onClick={()=>{ navigate("/user-dashboard")}} className={`mt-10 w-full rounded-[0.5rem] bg-[#F9F5FFE5] px-4 py-2 ${isExclusive? 'text-[#60457E]': 'text-[#007EAF]'}`}>
                  
                  Go to Dashboard
                </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Successful;
