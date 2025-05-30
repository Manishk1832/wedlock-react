import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense, useState } from "react";
import "./App.css";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { RootState } from "./Redux/store";
import {messaging} from "../utils/firebaseConfig";
import { getToken } from "firebase/messaging";
import Footer from "./components/home/Footer";
import {useUpdateFcmTokenMutation} from "./Redux/Api/user.api";
import Navbar from "./components/home/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import Loading from "./components/Loading";
import { connectSocket,disconnectSocket } from "./services/socketservice";
import { useGetUserSubscriptionStatusQuery } from "./Redux/Api/checkout.api";
import { setUserType } from "./Redux/Reducers/user.reducer";
import { useDispatch } from "react-redux";
import ScrollToTop from "./components/ScrollTop/ScrollToTop";



const Home = lazy(() => import("./pages/home/Home"));
const Mission = lazy(() => import("./pages/mission/Mission"));
const Advice = lazy(() => import("./pages/advice/Advice"));
const Help = lazy(() => import("./pages/help/Help"));
const Cookies_Policy = lazy(() => import("./pages/cookies-policy/Cookies"));
const Privacy_Policy = lazy(() => import("./pages/privacy-policy/Privacy"));
const Terms_Conditions = lazy(() => import("./pages/terms-conditions/Terms"));
const Community_Guidelines = lazy(() => import("./pages/community-guidelines/Community"));
const Login = lazy(() => import("./pages/auth/Login"));
const Register = lazy(() => import("./pages/auth/Register"));
const Faqs = lazy(() => import("./pages/faqs/Faqs"));
const Comparison = lazy(() => import("./pages/comparsion/comparison"));
const Questions = lazy(() => import("./pages/questionare/Questionare"));
const CreatePassword = lazy(() => import("./pages/auth/CreatePassword"));
const ForgotPassword = lazy(() => import("./pages/auth/ForgotPassword"))
const ChangePassword = lazy(() => import("./pages/auth/ChangePassword"))
const Verification = lazy(() => import("./pages/auth/Verification"))
const VerifyOtp = lazy(() => import("./pages/auth/Verify-otp"))
const Contact = lazy(() => import("./pages/contact/Contact"))
const About = lazy(() => import("./pages/about/About"))
const Services = lazy(() => import("./pages/services/Service"))
const Plan = lazy(() => import("./pages/plan/Plan"))
const Photoupload = lazy(() => import("./pages/forms/PhotoUpload"))
const Personal = lazy(() => import("./pages/forms/PersonalDetails"))
const Location = lazy(() => import("./pages/forms/LocationDetails"))
const Other = lazy(() => import("./pages/forms/OtherDetails"))
const Qualification = lazy(() => import("./pages/forms/QualificationDetails"))
const Success = lazy(() => import("./pages/forms/SuccessPage"))
const UserDashboard = lazy(() => import("./pages/user-dashboard/UserDashboard"))
const Profile = lazy(() => import("./pages/profile/Profile"))
const Sucessfull = lazy(() => import("./pages/sucessfull/Sucessfull"))
const Exclusive = lazy(()=>import("./pages/exclusive-matching/exclusive"))
const Cancel = lazy(() => import("./pages/paymentCancelPage/PaymentCancelPage"))
const ChildSafety = lazy(()=> import("./pages/child-safefty/ChildSafety"));
const DeleteAccount = lazy(() => import("./pages/delete-account/DeleteAccount"));

const App = () => {
  const { accessToken,refreshToken ,user  } = useSelector((state: RootState) => state.userReducer) ;
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(!!accessToken || !!refreshToken);

  const dispatch = useDispatch();


  const { data } = useGetUserSubscriptionStatusQuery(null);

 
  useEffect(() => {
    if (data?.usertype) {
      const userType = data.usertype; 
     
      dispatch(setUserType(userType));
    }
  }, [data, dispatch]);


  useEffect(() => {
    if (!accessToken && !refreshToken) {
      localStorage.clear();
      setIsAuthenticated(false);
    } else {
      setIsAuthenticated(true);
    }
  }, [accessToken, refreshToken]);

  useEffect(() => {
    if (accessToken) {
      connectSocket();
    } else {
      disconnectSocket();
    }
  }, [accessToken]);






  
  


  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/firebase-messaging-sw.js')
      .then((registration) => {
        console.log('Service Worker registered with scope:', registration.scope);
      })
      .catch((error) => {
        console.error('Service Worker registration failed:', error);
      });
  }
  


  const [updateFcmToken] = useUpdateFcmTokenMutation();

  async function requestPermission() {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      const token = await getToken(messaging,{
        vapidKey:'BDMJ1bttVFT8x_Im4tTOPjWMXR4lqlb193pBRAfRYPWx2JkkvSk9eZkjf3d0dfDPlMfcwawtCd21WTMPq_0x2_w'
      });
      
      localStorage.setItem("fcmToken",token!);

    } else {
       alert("You denied for notification");
    }
  }



useEffect(() => {
  const useruid = user?.uid;

  const fcmToken = localStorage.getItem("fcmToken");
  const uid = localStorage.getItem("uid") || useruid ;
  const userStatus = "false";

  const data = {
    fcmToken,
    uid,
    userStatus
  }
  if(fcmToken){
    updateFcmToken(data);
  }
  
},[])

  useEffect(() => {
    requestPermission();
  },[])

  return  (
    <Router>
       <ScrollToTop />
     
      <Navbar />
      <Suspense fallback={<div className="flex justify-center items-center min-h-screen"><Loading /></div>}>
        <Routes>
          <Route path="/" element={isAuthenticated ? <Navigate to="/user-dashboard" replace /> : <Home />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/advice" element={<Advice />} />
          <Route path="/help" element={<Help />} />
          <Route path="/login" element={<Login />} />
          <Route path="/subscription-tiers" element={<Comparison />} />
          <Route path="/cookies-policy" element={<Cookies_Policy />} />
          <Route path="/privacy-policy" element={<Privacy_Policy />} />
          <Route path="/delete-account" element={<DeleteAccount />} />
          <Route path="/terms-conditions" element={<Terms_Conditions />} />
          <Route path="/community-guidelines" element={<Community_Guidelines />} />
          <Route path="/child-safety-policy" element={<ChildSafety/>} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/sucessfull" element={<Sucessfull />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/plan" element={<Plan />} />
          <Route path="/services" element={<Services />} />
          <Route path="/exclusive" element={<Exclusive />} />

          <Route element={<ProtectedRoute isAuthenticated={!accessToken} />}>
            <Route path="/questions" element={<Questions />} />
            <Route path="/register" element={<Register />} />
            <Route path="/create-password" element={<CreatePassword />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/change-password" element={<ChangePassword />} />
            <Route path="/verification" element={<Verification />} />
            <Route path="/verify-otp" element={<VerifyOtp />} />
          </Route>

          <Route element={<ProtectedRoute isAuthenticated={!!accessToken}  />}>
            <Route path="/user-dashboard" element={<UserDashboard />} />
            <Route path="/photoupload" element={<Photoupload />} />
            <Route path="/profile/:name/:userId" element={<Profile />} />
            <Route path="/personal-details" element={<Personal />} />
            <Route path="/location-details" element={<Location />} />
            <Route path="/other-details" element={<Other />} />
            <Route path="/cancel" element={<Cancel />} />
            <Route path="/qualification-details" element={<Qualification />} />
            <Route path="/success" element={<Success />} />
            <Route path="/Payment-Success" element={<Sucessfull />} />
          </Route>
        </Routes>
      </Suspense>
      <Footer />
    </Router>

  );
};

export default App;