import { Link } from "react-router-dom";
import { Popover, Avatar,Skeleton } from 'antd';
import { IoIosLogOut } from "react-icons/io";
import { AiOutlineUserDelete } from "react-icons/ai";
import { useLogoutUserMutation,useDeleteUserMutation } from "../../Redux/Api/user.api";
import { useMyDetailsQuery } from "../../Redux/Api/profile.api";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { toast } from "sonner";
import { logout } from "../../Redux/Reducers/user.reducer";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [logoutUser] = useLogoutUserMutation();
  const [deleteUser] = useDeleteUserMutation();

  interface LogoutResponse {
     
      success: boolean;
      message: string;
  
  }

  interface DeleteResponse {
      success: boolean;
      message: string;
  }


  const handleDelete = async () => {
    try {
      const response: DeleteResponse = await deleteUser().unwrap();
      console.log(response);
      if (response?.success === true) {
        toast.success(response?.message);
        Cookies.remove("isImageFormFilled");
        Cookies.remove("isProfileFormFilled");
        Cookies.remove("isLocationFormFilled");
        Cookies.remove("isQualificationFormFilled");
        Cookies.remove("isOtherFormFilled");
        Cookies.remove("isPersonalFormFilled");
        dispatch(logout());
        navigate("/");
        window.location.reload();
      } else {
        toast.error("Logout failed. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred while logging out");
    }
  };



  const handleLogout = async () => {
    try {
      const response: LogoutResponse = await logoutUser().unwrap();
      console.log(response);
      if (response?.success === true) {
        toast.success(response?.message);
        Cookies.remove("isImageFormFilled");
        Cookies.remove("isProfileFormFilled");
        Cookies.remove("isLocationFormFilled");
        Cookies.remove("isQualificationFormFilled");
        Cookies.remove("isOtherFormFilled");
        Cookies.remove("isPersonalFormFilled");
        dispatch(logout());
        navigate("/login");
        window.location.reload();
      } else {
        toast.error("Logout failed. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred while logging out");
    }
  };

  const { data: myDetails, isLoading } = useMyDetailsQuery<any>();

  const profile = (
    <div className="flex flex-col gap-4">
      <button className="flex items-center gap-2" onClick={handleLogout}>
        <span><IoIosLogOut /></span> Logout
      </button>
      <button className="flex items-center gap-2" onClick={handleDelete}>
        <span><AiOutlineUserDelete /></span>Delete Account
      </button>
    </div>
  );

  return (
    <div className="fixed z-10 h-20 w-full bg-[#007EAF]">
      <div className="flex h-full items-center justify-between px-4 md:px-10 lg:px-20">
        <div className="">
          <Link to="/user-dashboard">
            <img
              src="/logowhite.png"
              alt="logo"
              className="h-auto w-24 md:w-36 lg:w-40"
            />
          </Link>
        </div>

        <div className="flex items-center justify-between gap-2 md:gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white md:h-12 md:w-12">
  <Popover content={profile}>
    <button>
      <Skeleton
        loading={isLoading}
        avatar={true}
        active={true}
        className="flex items-center ml-4 justify-center h-10 w-10 "
      />
      {myDetails?.data[0]?.profileImage && (
        <img
          src={
            Array.isArray(myDetails.data[0].profileImage)
              ? myDetails.data[0].profileImage[0]
              : myDetails.data[0].profileImage
          }
          alt="profile"
          className="h-10 w-10 rounded-full md:h-10 md:w-10"
        />
      )}
    </button>
  </Popover>
</div>

          <div className="">
            <button>
              <img
                src="/Aus.svg"
                alt="lang"
                className="h-5 w-5 md:h-8 md:w-8"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
