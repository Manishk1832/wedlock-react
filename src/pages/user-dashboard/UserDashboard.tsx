import React from "react";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import Header from "../../components/header-footer-profile/Header";
import Footer from "../../components/header-footer-profile/Footer";
import Plan from "../../pages/plan/Plan";
import Notification from "../../components/user-dashboard/Notification";
import Discover from "../../components/user-dashboard/Discover";

// import Favourate from "../../components/user-dashboard/Favourate";
import MyDetails from "../../components/user-dashboard/Mydetails";
// import '../../app/globals.css'

const UserDashboard: React.FC = () => {


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
        // {
        //   key: "3",
        //   label: `Favorite Profile`,
        //   children: (
        //     <div>
        //       <Favourate />
        //     </div>
        //   ),
        // },
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
              {/* <BillingInfo /> */}
            </div>
          ),
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
      <img
        src="/bigad.png"
        className="h-14 w-full"
      />
    </div>

    <div className="px-4 py-6 ">
    
      <div className="p-0 md:p-4">
        <Tabs
          defaultActiveKey="1"
          items={items}
          style={{ height: "fit-content", font: "#363636" }}
          className="ant-tabs"
        />
      </div>
    </div>
  </div>
  <Footer />


</div>

  )
}

export default UserDashboard
