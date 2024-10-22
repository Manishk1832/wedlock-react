import  { useState } from "react";
import { Gauge } from "@mui/x-charts/Gauge";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Switch } from "antd";
import { CiMap } from "react-icons/ci";
import { IoLanguage } from "react-icons/io5";
import { FaSmoking } from "react-icons/fa";
import { FaWineGlassAlt } from "react-icons/fa";
import Loading from "../Loading";
import { FaUserGraduate } from "react-icons/fa";
import { useMyDetailsQuery } from "../../Redux/Api/profile.api";
import "../../font.css";
import ReligiouModel from "../user-dashboard-model/ReligiousModel";
import FamilyModel from "../user-dashboard-model/FamilyModel";
import PersonalBagroundModal from "../user-dashboard-model/PersonalBagroundModal";
import EducationFinancialModal from "../user-dashboard-model/EducationFinancialModal";
import LocationBackgroundModal from "../user-dashboard-model/LocationBackgroundModal";
// import InterestHobbiesModal from "../user-dashboard-model/InterestHobbiesModal";
import LifestyleModel from "../user-dashboard-model/LifestyleModal";
// import '../app/globals.css'

const MyDetails = () => {
  const { data: myDetails ,isLoading:isLoading} = useMyDetailsQuery<any>();

  const [religiousModelOpen, setReligiousModelOpen] = useState(false);
  const [familyModelOpen, setFamilyModelOpen] = useState(false);
  const [personalBagroundModalOpen, setPersonalBagroundModalOpen] =
    useState(false);
  const [educationFinancialModalOpen, setEducationFinancialModalOpen] =
    useState(false);
  const [locationBackgroundModalOpen, setLocationBackgroundModalOpen] =
    useState(false);
  // const [interestHobbiesModalOpen, setInterestHobbiesModalOpen] =
  //   useState(false);
  const [lifestyleModelOpen, setLifestyleModelOpen] = useState(false);

  const openReligiousModel = () => {
    setReligiousModelOpen(true);
  };

  const closeReligiousModel = () => {
    setReligiousModelOpen(false);
  };

  const openFamilyModel = () => {
    setFamilyModelOpen(true);
  };

  const closeFamilyModel = () => {
    setFamilyModelOpen(false);
  };

  const openPersonalBagroundModal = () => {
    setPersonalBagroundModalOpen(true);
  };

  const closePersonalBagroundModal = () => {
    setPersonalBagroundModalOpen(false);
  };

  const openEducationFinancialModal = () => {
    setEducationFinancialModalOpen(true);
  };

  const closeEducationFinancialModal = () => {
    setEducationFinancialModalOpen(false);
  };

  const openLocationBackgroundModal = () => {
    setLocationBackgroundModalOpen(true);
  };
  const closeLocationBackgroundModal = () => {
    setLocationBackgroundModalOpen(false);
  };

  // const openInterestHobbiesModal = () => {
  //   setInterestHobbiesModalOpen(true);
  // };
  // const closeInterestHobbiesModal = () => {
  //   setInterestHobbiesModalOpen(false);
  // };

  const openLifestyleModel = () => {
    setLifestyleModelOpen(true);
  };

  const closeLifestyleModel = () => {
    setLifestyleModelOpen(false);
  };

  return (
    
    <div>
      {isLoading ? (
        <div className="flex items-center justify-center">
        <Loading />
        </div>
      ) : (
      <div className="min-w-screen flex min-h-screen flex-col gap-4 md:gap-10 lg:flex-row">
        <div className="mb-4 md:grid grid-cols-1 gap-2 md:mb-0  auto-rows-[10rem] ">
          {myDetails?.data[0]?.profileImage.map(
            (imageUrl: string, index: number) => (
              <img
                key={index}
                src={imageUrl}
                alt="profile image"
                className="object-cover w-full h-full rounded-md"
              />
            )
          )}
        </div>

        <div className="col-span-1 xl:grid w-full md:col-span-2 gap-10">
          <div className="col-span-1 mb-4 xl:mb-0 rounded-xl bg-white p-6 md:col-span-2   md:w-auto  xl:h-[29rem]">
            <div className="flex w-full flex-col  items-center justify-between gap-10 xl:flex-row">
              <div className=" xl:w-[70%] w-full ">
                <div className="flex items-center justify-between self-start  text-xl font-semibold leading-5 text-zinc-900">
                  Basic & Lifestyle
                  <div className="flex gap-4 text-cyan-600">
                    <button
                      className="w-2 text-2xl"
                      onClick={openLifestyleModel}
                    >
                      <FaEdit />
                    </button>
                    <LifestyleModel
                      isVisible={lifestyleModelOpen}
                      onClose={closeLifestyleModel}
                    />

                    <div>
                      <Switch defaultChecked />
                    </div>
                  </div>
                </div>
                <div className="mt-2.5 flex flex-wrap py-6 items-center gap-2.5 self-start text-base font-medium  leading-4 text-slate-900">
                  <div className="self-stretch text-xl font-bold leading-10 text-cyan-600 lg:text-3xl">
                    {myDetails?.data[0]?.basic_and_lifestye?.firstName +
                      " " +
                      myDetails?.data[0]?.basic_and_lifestye?.lastName}
                  </div>
                  <div className="my-auto justify-center self-stretch whitespace-nowrap rounded-[100px] bg-orange-100 px-3 py-1.5 text-center capitalize tracking-normal">
                    {myDetails?.data[0]?.basic_and_lifestye?.gender}
                  </div>
                  <div className="my-auto justify-center self-stretch whitespace-nowrap rounded-[100px] bg-orange-100 px-3 py-1.5 text-center capitalize tracking-normal">
                    {myDetails?.data[0]?.basic_and_lifestye?.age}
                  </div>
                </div>
                <div className="mt-6 flex flex-col rounded-xl bg-cyan-600 bg-opacity-20 px-6 py-3 max-md:max-w-full max-md:px-5">
                  <div className="text-base font-bold leading-6 tracking-wide text-gray-900 text-opacity-90 max-md:max-w-full">
                    About{" "}
                    {myDetails?.data[0]?.basic_and_lifestye?.firstName +
                      " " +
                      myDetails?.data[0]?.basic_and_lifestye?.lastName}
                  </div>
                  <div className="mt-4 text-sm leading-7 tracking-wide text-slate-600 max-md:max-w-full md:text-lg">
                    {myDetails?.data[0].basic_and_lifestye?.about}
                  </div>
                </div>
                <div className="mt-4 flex flex-col px-2 max-md:max-w-full max-md:px-5 gap-3">
                  <div className="flex justify-between gap-0 max-md:flex-wrap">
                    <div className="flex-1 text-lg leading-8 tracking-wide text-gray-900 text-opacity-90 max-md:max-w-full">
                      Religion
                    </div>
                    <div className="justify-center self-start whitespace-nowrap rounded-[100px] bg-blue-50 px-3 py-1.5 text-center text-base font-medium capitalize leading-4 tracking-normal text-blue-600">
                      {myDetails?.data[0].basic_and_lifestye?.religion}
                    </div>
                  </div>

                  <div className="mt-2 flex justify-between gap-0 max-md:flex-wrap">
                    <div className="flex-1 text-lg leading-8 tracking-wide text-gray-900 text-opacity-90 max-md:max-w-full">
                      Marital status
                    </div>
                    <div className="justify-center self-start rounded-[100px] bg-orange-100 px-3 py-1.5 text-center text-base font-medium capitalize leading-4 tracking-normal text-slate-900">
                      {myDetails?.data[0].basic_and_lifestye?.maritalStatus}
                    </div>
                  </div>

                  <div className="mt-2 flex justify-between gap-0 max-md:flex-wrap">
                    <div className="flex-1 text-lg leading-8 tracking-wide text-gray-900 text-opacity-90 max-md:max-w-full">
                      Posted by{" "}
                    </div>
                    <div className="justify-center self-start rounded-[100px] bg-purple-100 px-3 py-1.5 text-center text-base font-medium capitalize leading-4 tracking-normal text-violet-600">
                      {myDetails?.data[0].basic_and_lifestye?.postedBy}
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[28rem] xl:w-[30%]  w-auto rounded-lg bg-[#FEE7BD]  md:p-5 md:h-[26rem]">
                <h2 className="font-[Proxima-Nova-Semibold] text-xl md:text-2xl text-center mt-2 md:text-start">Complete your profile</h2>
                <div className="flex flex-col items-center justify-center p-5">
                  <Gauge
                    width={230}
                    height={150}
                    value={40}
                    startAngle={-90}
                    endAngle={90}
                    text={({ valueMax }) =>
                      `Completed  ${(40 / valueMax) * 100}%`
                    }
                    sx={{ color: "#007EAF", fontSize: 20, fontWeight: "bold" }}
                  />
                </div>

                <p className="text-lg font-[Proxima-Nova-Regular] text-center">
                  Complete at least 50% of your profile to unlock messaging. Our
                  tip: Answer more profile questions.
                </p>
                <div className="mt-2 text-center text-lg text-[#007EAF] underline">
                  <Link to={"/questions"}> Click to complete profile</Link>
                </div>
              </div>
            </div>
          </div>

          {/* Family details */}

          <div className="w-75% mb-4  xl:mb-0 flex flex-col rounded-xl bg-white md:w-auto h-[17rem]">
            {/* <div className="flex flex-col pb-6 bg-white rounded-xl shadow-sm max-md:max-w-full"> */}
            <div
              className="w-full justify-center border-b border-solid border-zinc-300 px-6 py-4 text-lg leading-6 tracking-wide text-cyan-600 max-md:max-w-full max-md:px-5 md:text-xl"
              style={{ fontFamily: "Proxima-Nova-Bold, sans-serif" }}
            >
              <div className="flex items-center justify-between">
                Family details
                <div className="flex gap-4">
                  <button className="w-2 text-2xl" onClick={openFamilyModel}>
                    <FaEdit />
                  </button>
                  <FamilyModel
                    isVisible={familyModelOpen}
                    onClose={closeFamilyModel}
                  />

                  <div>
                    <Switch defaultChecked />
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-6  mt-6 flex flex-col px-6 max-md:max-w-full max-md:px-5  md:mb-0">
              <div className="flex  justify-between gap-0 max-md:flex-wrap">
                <div className="text-md flex-1 font-normal leading-8 tracking-wide text-slate-600 md:text-xl">
                  Father occupation
                </div>
                <div className="justify-center self-start whitespace-nowrap rounded-[100px] bg-blue-50 px-3 py-1.5 text-center text-base font-medium capitalize leading-4 tracking-normal text-blue-600">
                  {myDetails?.data[0]?.family_details?.fatherOccupation}
                </div>
              </div>
              <div className="mt-4 flex justify-between gap-0 max-md:flex-wrap">
                <div className="text-md flex-1 font-normal leading-8 tracking-wide text-slate-600 md:text-xl">
                  Mother occupation
                </div>
                <div className="justify-center self-start rounded-[100px] bg-neutral-100 px-3 py-1.5 text-center text-base font-medium capitalize leading-4 tracking-normal text-slate-900">
                  {myDetails?.data[0]?.family_details?.motherOccupation}
                </div>
              </div>
              <div className="mt-4 flex justify-between gap-0 max-md:flex-wrap">
                <div className="text-md flex-1 font-normal leading-8 tracking-wide text-slate-600 md:text-xl">
                  Number of siblings
                </div>
                <div className="justify-center self-start rounded-[100px] bg-orange-100 px-3 py-1.5 text-center text-base font-medium capitalize leading-4 tracking-normal text-slate-900">
                  {myDetails?.data[0]?.family_details?.numberOfSiblings}
                </div>
              </div>
              <div className="mt-4 flex justify-between gap-4 max-md:max-w-full max-md:flex-wrap">
                <div className="text-md font-normal leading-8 tracking-wide text-slate-600 md:text-xl">
                  Living with family
                </div>
                <div className="justify-center self-start rounded-[100px] bg-purple-100 px-3 py-1.5 text-center text-base font-medium capitalize leading-4 tracking-normal text-violet-600">
                  {myDetails?.data[0]?.family_details?.livingWithFamily}
                </div>
              </div>
              {/* </div> */}
            </div>
          </div>
          {/* Personal Background */}

          <div className="row-span-3 lg:row-span-3 mb-4  xl:mb-0 rounded-xl bg-white ">
            <div className="flex flex-col rounded-xl bg-white pb-6 shadow-sm">
              <div
                className="justify-center border-b border-solid border-zinc-300 px-6 py-4 text-lg leading-6 tracking-wide text-cyan-600 max-md:px-5 md:text-xl"
                style={{ fontFamily: "Proxima-Nova-Bold, sans-serif" }}
              >
                <div className="flex items-center justify-between">
                  Personal Background
                  <div className="flex gap-4">
                    <button
                      className="w-2 text-2xl"
                      onClick={openPersonalBagroundModal}
                    >
                      <FaEdit />
                    </button>
                    <PersonalBagroundModal
                      isVisible={personalBagroundModalOpen}
                      onClose={closePersonalBagroundModal}
                    />
                    <div>
                      <Switch defaultChecked />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex flex-col px-6 max-md:px-5 xl:gap-3 ">
                <div className="flex items-center gap-1 whitespace-nowrap">
                  <div className="text-xl leading-8 text-cyan-600 md:text-3xl">
                    <CiMap />
                  </div>
                  <div className="text-lg leading-8 text-slate-600 md:text-xl">
                    Height
                  </div>
                </div>
                <div className="text-md ml-8 mt-2 justify-center self-start rounded-[100px] bg-blue-50 px-3 py-1.5 text-center font-medium capitalize leading-7 text-cyan-600 max-md:ml-2.5 md:text-xl">
                  {myDetails?.data[0]?.personal_background?.height}
                </div>
                <div className="mt-6 flex items-center gap-1 whitespace-nowrap">
                  <div className="text-xl leading-8 text-cyan-600 md:text-3xl">
                    <CiMap />
                  </div>
                  <div className="text-lg leading-8 tracking-wide text-slate-600 md:text-xl">
                    Weight
                  </div>
                </div>
                <div className="text-md ml-8 mt-2 justify-center self-start rounded-[100px] bg-blue-50 px-3 py-1.5 text-center font-medium capitalize leading-7 text-cyan-600 max-md:ml-2.5 md:text-md">
                  {myDetails?.data[0]?.personal_background?.weight}
                </div>
                <div className="mt-6 flex items-center gap-1">
                  <div className="text-xl leading-8 text-cyan-600 md:text-3xl">
                    <CiMap />
                  </div>
                  <div className="text-lg leading-8 tracking-wide text-slate-600 md:text-xl">
                    Body Type
                  </div>
                </div>
                <div className="text-md ml-8 mt-2 flex justify-center gap-1.5 self-start rounded-[100px] border border-solid border-gray-200 bg-blue-50 bg-opacity-50 px-5 py-2 font-medium capitalize leading-7 text-cyan-600 max-md:ml-2.5 md:py-4 md:text-md">
                  {myDetails?.data[0]?.personal_background?.bodyType}
                </div>
                <div className="mt-6 flex items-center gap-1 whitespace-nowrap text-xl leading-8 tracking-wide text-slate-600">
                  <div className="text-xl leading-8 text-cyan-600 md:text-3xl">
                    <IoLanguage />
                  </div>

                  <div className="text-lg leading-8 text-slate-600 md:text-xl">
                    Language
                  </div>
                </div>
                <div className="text-md ml-8 mt-2 justify-center self-start rounded-[100px] bg-pink-50 px-3 py-1.5 text-center font-medium capitalize leading-7 text-pink-400 max-md:ml-2.5 md:text-md">
                  {myDetails?.data[0]?.personal_background?.language}
                </div>
                <div className="mt-6 flex items-center gap-1 text-xl leading-8 tracking-wide text-slate-600">
                  <div className="text-xl leading-8 text-cyan-600 md:text-3xl">
                    {" "}
                    <FaSmoking />
                  </div>

                  <div className="text-lg leading-8 text-slate-600 md:text-xl">
                    Smoking habbits
                  </div>
                </div>
                <div className="text-md ml-9 mt-2 justify-center self-start rounded-[100px] bg-green-100 px-3 py-1.5 text-center font-medium capitalize leading-7 text-green-700 max-md:ml-2.5 md:text-md">
                  {myDetails?.data[0]?.personal_background?.smokingHabbit}
                </div>
                <div className="mt-6 flex items-center gap-1 text-xl leading-8 tracking-wide text-slate-600">
                  <div className="text-xl leading-8 text-cyan-600 md:text-3xl">
                    {" "}
                    <FaWineGlassAlt />{" "}
                  </div>

                  <div className="text-lg leading-8 text-slate-600 md:text-xl">
                    {" "}
                    Drinking habbit
                  </div>
                </div>
                <div className="text-md ml-7 mt-2 justify-center self-start rounded-[100px] bg-gray-200 px-3 py-1.5 text-center font-medium capitalize leading-7 text-slate-900 max-md:ml-2.5 md:text-md">
                  {myDetails?.data[0]?.personal_background?.drinkingHabbit}
                </div>
                <div className="mt-6 flex items-center gap-1 whitespace-nowrap">
                  <div className="text-xl leading-8 text-cyan-600 md:text-3xl">
                    <CiMap />
                  </div>
                  <div className="text-lg leading-8 tracking-wide text-slate-600 md:text-xl">
                    Diet
                  </div>
                </div>
                <div className="text-md ml-8 mt-2 justify-center self-start whitespace-nowrap rounded-[100px] bg-neutral-100 px-3 py-1.5 text-center font-medium capitalize leading-7 text-slate-900 max-md:ml-2.5 md:text-md">
                  {myDetails?.data[0]?.personal_background?.diet}
                </div>
                <div className="mt-6 flex items-center gap-2 whitespace-nowrap">
                  <div className="text-xl leading-8 text-cyan-600 md:text-3xl">
                    <CiMap />
                  </div>
                  <div className="text-lg leading-8 tracking-wide text-slate-600 md:text-xl">
                    Complexion
                  </div>
                </div>
                <div className="text-md ml-8 mt-2 justify-center self-start rounded-[100px] bg-neutral-100 px-3 py-1.5 text-center font-medium capitalize leading-7 text-slate-900 max-md:ml-2.5 md:text-md">
                  {myDetails?.data[0]?.personal_background?.complexion}
                </div>
              </div>
            </div>
          </div>
          {/* Religious Background */}

          <div className="h-[31rem] md:h-[28rem] mb-4 xl:mb-0 rounded-xl bg-white">
            <div className="flex h-[28rem] flex-col rounded-xl bg-white pb-6 shadow-sm max-md:max-w-full">
              <div
                className="justify-center border-b border-solid border-zinc-300 px-6 py-4 text-lg leading-6 tracking-wide text-cyan-600 max-md:max-w-full max-md:px-5 md:text-xl"
                style={{ fontFamily: "Proxima-Nova-Bold, sans-serif" }}
              >
                <div className="flex items-center justify-between">
                  Religious Background
                  <div className="flex gap-4">
                    <button
                      className="w-2 text-2xl"
                      onClick={openReligiousModel}
                    >
                      <FaEdit />
                    </button>
                    <ReligiouModel
                      isVisible={religiousModelOpen}
                      onClose={closeReligiousModel}
                    />

                    <div>
                      <Switch defaultChecked />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex flex-col px-6 max-md:max-w-full max-md:px-5">
                <div className="flex justify-between gap-0 max-md:flex-wrap">
                  <div className="text-md flex-1 font-normal leading-8 tracking-wide text-slate-600 md:text-xl">
                    Religion
                  </div>
                  <div className="justify-center self-start whitespace-nowrap rounded-[100px] bg-blue-50 px-3 py-1.5 text-center text-base font-medium capitalize leading-4 tracking-normal text-blue-600">
                    {myDetails?.data[0]?.religious_background?.religion}
                  </div>
                </div>
                <div className="mt-4 flex justify-between gap-0 max-md:flex-wrap">
                  <div className="text-md flex-1 font-normal leading-8 tracking-wide text-slate-600 md:text-xl">
                    Sub community
                  </div>
                  <div className="justify-center self-start rounded-[100px] bg-orange-100 px-3 py-1.5 text-center text-base font-medium capitalize leading-4 tracking-normal text-slate-900">
                    {myDetails?.data[0]?.religious_background?.subCommunity}
                  </div>
                </div>
                <div className="mt-4 flex justify-between gap-0 font-normal max-md:flex-wrap">
                  <div className="text-md flex-1 leading-8 tracking-wide text-slate-600 md:text-xl">
                    Community
                  </div>
                  <div className="justify-center self-start rounded-[100px] bg-purple-100 px-3 py-1.5 text-center text-base font-medium capitalize leading-4 tracking-normal text-violet-600">
                    {myDetails?.data[0]?.religious_background?.community}
                  </div>
                </div>

                <div className="mt-4 flex justify-between gap-0 font-normal max-md:flex-wrap">
                  <div className="text-sm font-normal leading-8 tracking-wide text-slate-600 md:text-xl">
                    Gothra/Gothram
                  </div>
                  <div className="justify-center self-start rounded-[100px] bg-pink-50 px-3 py-1.5 text-center text-base font-medium capitalize leading-4 tracking-normal text-pink-400 ">
                    {myDetails?.data[0]?.religious_background?.gothra}
                  </div>
                </div>

                <div className="mt-4 flex justify-between gap-4 max-md:max-w-full max-md:flex-wrap">
                  <div className="text-md font-normal leading-8 tracking-wide text-slate-600 md:text-xl">
                    Time of Birth
                  </div>
                  <div className="justify-center self-start rounded-[100px] bg-pink-50 px-3 py-1.5 text-center text-base font-medium capitalize leading-4 tracking-normal text-pink-400">
                    {myDetails?.data[0]?.religious_background?.timeOfBirth}
                  </div>
                </div>

                <div className="mt-4 flex justify-between gap-4 max-md:max-w-full max-md:flex-wrap">
                  <div className="text-md font-normal leading-8 tracking-wide text-slate-600 md:text-xl">
                    Date of Birth
                  </div>
                  <div className="justify-center self-start rounded-[100px] bg-pink-50 px-3 py-1.5 text-center text-base font-medium capitalize leading-4 tracking-normal text-pink-400">
                    {myDetails?.data[0]?.religious_background?.dateOfBirth}
                  </div>
                </div>

                <div className="mt-4 flex justify-between gap-4 max-md:max-w-full max-md:flex-wrap">
                  <div className="text-md font-normal leading-8 tracking-wide text-slate-600 md:text-xl">
                    Place of Birth
                  </div>
                  <div className="justify-center self-start rounded-[100px] bg-pink-50 px-3 py-1.5 text-center text-base font-medium capitalize leading-4 tracking-normal text-pink-400">
                    {myDetails?.data[0]?.religious_background?.placeOfBirth}
                  </div>
                </div>

                <div className="mt-4 flex justify-between gap-4 max-md:max-w-full max-md:flex-wrap mb-4">
                  <div className="text-md font-normal leading-8 tracking-wide text-slate-600 md:text-xl">
                    Mother Tongue
                  </div>
                  <div className="justify-center self-start whitespace-nowrap rounded-[100px] bg-green-100 px-3 py-1.5 text-center text-base font-medium capitalize leading-4 tracking-normal text-green-700">
                    {myDetails?.data[0]?.religious_background?.motherTongue}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Location Background */}

          <div className="h-auto py-4  rounded-xl mb-4 xl:mb-0 bg-white">
            <div
              className="justify-center border-b border-solid border-zinc-300 px-6 py-4 text-lg leading-6 tracking-wide text-cyan-600 max-md:max-w-full max-md:px-5 md:text-xl"
              style={{ fontFamily: "Proxima-Nova-Bold, sans-serif" }}
            >
              <div className="flex items-center justify-between">
                Location Background
                <div className="flex gap-4">
                  <button
                    className="w-2 text-2xl"
                    onClick={openLocationBackgroundModal}
                  >
                    <FaEdit />
                  </button>
                  <LocationBackgroundModal
                    isVisible={locationBackgroundModalOpen}
                    onClose={closeLocationBackgroundModal}
                  />
                  <div>
                    <Switch defaultChecked />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 flex flex-col px-6 max-md:max-w-full max-md:px-5">
              <div className="flex justify-between gap-0 max-md:flex-wrap">
                <div className="text-md flex-1 font-normal leading-8 tracking-wide text-slate-600 md:text-xl">
                  Current location
                </div>
                <div className="justify-center self-start whitespace-nowrap rounded-[100px] bg-blue-50 px-3 py-1.5 text-center text-base font-medium capitalize leading-4 tracking-normal text-blue-600">
                  {myDetails?.data[0]?.location_background?.currentLocation}
                </div>
              </div>
              <div className="mt-4 flex justify-between gap-0 max-md:flex-wrap">
                <div className="text-md flex-1 font-normal leading-8 tracking-wide text-slate-600 md:text-xl">
                  City of residence
                </div>
                <div className="justify-center self-start rounded-[100px] bg-purple-100 px-3 py-1.5 text-center text-base font-medium capitalize leading-4 tracking-normal text-violet-600">
                  {myDetails?.data[0]?.location_background?.cityOfResidence ||
                    "Not Specified"}
                </div>
              </div>
              <div className="mt-4 flex justify-between gap-0 max-md:flex-wrap">
                <div className="text-md flex-1 font-normal leading-8 tracking-wide text-slate-600 md:text-xl">
                  Nationality
                </div>
                <div className="justify-center self-start rounded-[100px] bg-orange-100 px-3 py-1.5 text-center text-base font-medium capitalize leading-4 tracking-normal text-slate-900">
                  {myDetails?.data[0]?.location_background?.nationality}
                </div>
              </div>
              <div className="mt-4 flex justify-between gap-4 max-md:max-w-full max-md:flex-wrap">
                <div className="text-md font-normal leading-8 tracking-wide text-slate-600 md:text-xl">
                  Citizenship
                </div>
                <div className="justify-center self-start rounded-[100px] bg-pink-50 px-3 py-1.5 text-center text-base font-medium capitalize leading-4 tracking-normal text-pink-400">
                  {myDetails?.data[0]?.location_background?.citizenShip}
                </div>
              </div>
              <div className="mt-4 flex justify-between gap-4 max-md:max-w-full max-md:flex-wrap">
                <div className="text-md font-normal leading-8 tracking-wide text-slate-600 md:text-xl">
                  Residency visa status
                </div>
                <div className="justify-center self-start whitespace-nowrap rounded-[100px] bg-green-100 px-3 py-1.5 text-center text-base font-medium capitalize leading-4 tracking-normal text-green-700">
                  {myDetails?.data[0]?.location_background?.residencyVisaStatus}
                </div>
              </div>
            </div>
          </div>

          {/* Interest and hobbies */}
          <div className="h-auto py-4 rounded-xl">
            <div className=" flex max-w-[499px] flex-col pb-9 leading-8 text-slate-900">
              <div className="flex items-center justify-between text-lg font-semibold leading-[110%] text-cyan-600 md:text-xl">
                Interest and hobbies
                {/* <div className="flex gap-4 text-cyan-600">
                  <button
                    className="w-2 text-2xl"
                    onClick={openInterestHobbiesModal}
                  >
                    <FaEdit />
                  </button>
                  <InterestHobbiesModal
                    isVisible={interestHobbiesModalOpen}
                    onClose={closeInterestHobbiesModal}
                  />
                  <div>
                    <Switch defaultChecked />
                  </div>
                </div> */}
              </div>

              <div className="mt-4 flex  gap-2.5 whitespace-nowrap  capitalize tracking-wide max-md:pr-5 flex-wrap">
                {myDetails?.data[0]?.interest_and_hobbies?.map(
                  (interest: string) => (
                    <div
                      key={interest}
                      className="justify-center rounded-[100px] bg-gray-200 px-3 py-1.5"
                    >
                      {interest}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>

          {/* education and finacial */}
          <div className="h-auto  rounded-xl bg-white">
            <div className="flex flex-col rounded-xl border border-solid border-gray-200 bg-white pb-6 shadow-sm">
              <div
                className="justify-center border-b border-solid border-zinc-300 px-6 py-4 text-lg leading-6 tracking-wide text-cyan-600 max-md:px-5 md:text-xl"
                style={{ fontFamily: "Proxima-Nova-Bold, sans-serif" }}
              >
                <div className="flex items-center justify-between">
                  Education and financial
                  <div className="flex gap-4">
                    <button
                      className="w-2 text-2xl"
                      onClick={openEducationFinancialModal}
                    >
                      <FaEdit />
                    </button>
                    <EducationFinancialModal
                      isVisible={educationFinancialModalOpen}
                      onClose={closeEducationFinancialModal}
                    />

                    <div>
                      <Switch defaultChecked />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex flex-col px-6 max-md:px-5">
                <div className="flex justify-between gap-2 whitespace-nowrap pr-8 max-md:pr-5">
                  <div className="text-md flex items-center justify-between gap-2 self-start leading-8 tracking-wide text-slate-600 md:text-xl">
                    <span className="text-[#007EAF]">
                      <FaUserGraduate />
                    </span>
                    <div>Qualification</div>
                  </div>
                  <div className="justify-center rounded-[100px] bg-orange-100 px-3 py-1.5 text-center text-[12px] font-medium capitalize leading-7 text-slate-900 md:text-md">
                    {myDetails?.data[0]?.education_and_financial?.qualification}
                  </div>
                </div>

                <div className="mt-4 flex justify-between gap-2 whitespace-nowrap pr-8 max-md:pr-5">
                  <div className="text-md flex items-center justify-between gap-2 self-start leading-8 tracking-wide text-slate-600 md:text-xl">
                    <span className="text-[#007EAF]">
                      <FaUserGraduate />
                    </span>
                    <div>Education</div>
                  </div>
                  <div className="justify-center rounded-[100px] bg-orange-100 px-3 py-1.5 text-center text-[12px] font-medium capitalize leading-7 text-slate-900 md:text-md">
                    {myDetails?.data[0]?.education_and_financial?.education}
                  </div>
                </div>

                <div className="mt-4 flex justify-between gap-2 whitespace-nowrap pr-8 max-md:pr-5">
                  <div className="text-md flex items-center justify-between gap-2 self-start leading-8 tracking-wide text-slate-600 md:text-xl">
                    <span className="text-[#007EAF]">
                      <FaUserGraduate />
                    </span>
                    <div>Working Status</div>
                  </div>
                  <div className="justify-center rounded-[100px] bg-orange-100 px-3 py-1.5 text-center text-[12px] font-medium capitalize leading-7 text-slate-900 md:text-md">
                    {myDetails?.data[0]?.education_and_financial?.workingStatus}
                  </div>
                </div>

                <div className="mt-4 flex justify-between gap-2 pr-8 max-md:pr-5">
                  <div className="text-md flex items-center justify-around gap-2 self-start whitespace-nowrap leading-8 tracking-wide text-slate-600 md:text-xl">
                    <span className="text-[#007EAF]">
                      <FaUserGraduate />
                    </span>
                    <div>Income</div>
                  </div>
                  <div className="justify-center rounded-[100px] bg-orange-100 px-3 py-1.5 text-center text-[12px] font-medium capitalize leading-7 text-slate-900 md:text-md">
                    
                    <span className="">
                      {myDetails?.data[0]?.education_and_financial?.income}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     )}

    </div>
  );
};

export default MyDetails;
