import React from "react";
import Header from "../../components/header-footer-profile/Header";
import Footer from "../../components/header-footer-profile/Footer";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import Discover from "../../components/user-dashboard/Discover";
import Favourate from "../../components/user-dashboard/Favourate";
import Notification from "../../components/user-dashboard/Notification";
import { useParams } from "react-router-dom";

import Match from "../../components/match/Match";

const Profile: React.FC = () => {
  const { userId } = useParams<{ userId: string }>(); 

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: `Matches`,
      children: (
        <div>
          <Match userId={userId!} /> 
        </div>
      ),
    },
    {
      key: "2",
      label: `Discover`,
      children:
       <div><Discover /></div>,
    },
    {
      key: "3",
      label: `Favorite Profile`,
      children: 
      <div>
        <Favourate />

      </div>,
    },
    {
      key: "4",
      label: `Notifications`,
      children: <div><Notification /></div>,
    },
  ];

  return (
    <div className="min-w-screen flex min-h-screen flex-col">
      <Header />
      <div className="flex-grow bg-[#E6F2F7] mt-10">
        <div className="px-4  ">
          <h1 className="mb-2 text-xl font-semibold md:text-2xl lg:text-3xl">
            User Profile
          </h1>
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
  );
};

export default Profile;
