import React from "react";
import { useEffect, useState } from "react";
import { Tabs } from "antd";
import { ConfigProvider } from "antd";
import type { TabsProps } from "antd";
import Header from "../../components/header-footer-profile/Header";
import Footer from "../../components/header-footer-profile/Footer";
import Plan from "../../pages/plan/Plan";
import BillingInfo from "../../components/BillingInfo/BillingInfo";
import Notification from "../../components/user-dashboard/Notification";
import { useLocation } from "react-router-dom";
import Discover from "../../components/user-dashboard/Discover";
import Favourate from "../../components/user-dashboard/Favourate";
import MyDetails from "../../components/user-dashboard/Mydetails";
import { RootState } from "./../../Redux/store";
import { useSelector } from "react-redux";

// import '../../app/globals.css'

const UserDashboard: React.FC = () => {
  const location = useLocation();
  const {user } = useSelector((state: RootState) => state.userReducer) ;

  const [isExclusive, setIsExclusive] = useState(false);

  useEffect(() => {
    const isExclusive = localStorage.getItem("isExclusive");
    if (isExclusive === "true" || user?.usertype === "Exclusive") {
      setIsExclusive(true);
    }
    [];
  });

  const params = new URLSearchParams(location.search);



  const activateKey = params.get("Notifications") || params.get("plan");




  const items: TabsProps["items"] = [
    {
      key: "1",
      label: `My Details`,
      children: (
        <div>
          <MyDetails />
        </div>
      ),
    },
    {
      key: "2",
      label: `Discover`,
      children: (
        <div>
          <Discover />
        </div>
      ),
    },
    {
      key: "3",
      label: `Favorite Profiles`,
      children: (
        <div>
          <Favourate />
        </div>
      ),
    },
    {
      key: "4",
      label: `Plan`,
      children: (
        <div>
          <Plan />
        </div>
      ),
    },
    {
      
      key: "5",
      label: `Billing`,
      children: (
        <div>
          <BillingInfo />
        </div>
      ),
      disabled: !(user?.usertype === "Exclusive" || user?.usertype === "Premium"),

    },
    {
      key: "6",
      label: `Notifications`,
      children: (
        <div>
          <Notification />
        </div>
      ),
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="flex-grow bg-[#E6F2F7]">
        <div className="flex justify-center">
          <img src="/bigad.png" className="h-14 w-full" />
        </div>

        <div className="px-4 py-6 ">
          <div className="p-0 md:p-4">
            <ConfigProvider
              theme={{
                token: {
                  colorPrimary: `${isExclusive ? "#60457E" : "#007EAF"}`,
                },
                components: {
                  Tabs: {
                    colorBgContainer: "#E6F2F7",
                    colorText: "black",
                    colorBgTextActive: "#363636",
                    colorBorder: "#E6F2F7",
                    fontSize: 14,
                    fontFamily: "Proxima-Nova-semibold",
                  },
                },
              }}
            >
              <Tabs
                defaultActiveKey="1"
                items={items}
                activeKey={activateKey ?? undefined}
                tabBarStyle={{ backgroundColor: "#E6F2F7" }}
              />
            </ConfigProvider>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UserDashboard;
