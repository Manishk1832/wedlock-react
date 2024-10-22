import React, { useState } from "react";
import FAQ from "../../components/faqs/Faq3";
import Subscription from "../../components/Subscription/Subscription";
import "../../font.css";
import { useGetPlansQuery } from "../../Redux/Api/plan.api";
import PlanCard from "../../components/PlanCard/PlanCard";
import Loading from "../../components/Loading";
import { FetchBaseQueryError } from '@reduxjs/toolkit/query/react';
import {useCreateCheckoutSessionMutation} from "../../Redux/Api/checkout.api";
import { toast } from 'sonner'

const PricingPage = () => {
  const [activeTab, setActiveTab] = useState("Monthly");

  const { data: planData, isLoading, error } = useGetPlansQuery<any>();

  const [createCheckoutSession, { isLoading: isSessionLoading }] = useCreateCheckoutSessionMutation();


  const getPlanDuration = () =>
    activeTab === "Monthly" ? "Per Month" : "Per Year";

  // Filter plans based on activeTab (either 'Monthly' or 'Yearly')
  const filteredPlans = planData?.data?.filter((plan: any) =>
    activeTab === "Monthly"
      ? plan.planName.includes("Monthly")
      : plan.planName.includes("Yearly")
  );

  if (isLoading) return <div><Loading /></div>;
  if (error || !planData?.data) return <div>Error loading plans</div>;

  type ApiResponse = {
    success: boolean;
    message: string;
    url: string;
  };

  
  type FetchBaseQueryErrorWithData = FetchBaseQueryError & {
    data: ApiResponse;
  };


  const handleCheckout = async(id: string) => {
    try{
      const planId = id;

      const res = await createCheckoutSession(planId);
      if("error" in res && res.error){
        const errorData = res.error as FetchBaseQueryErrorWithData;
        if (errorData.data?.success === false) {
          toast.error(errorData.data.message);
          return;
        }
      }
      const successData = res.data as ApiResponse;
      window.location.href = successData.url;

    }
    catch(error){
      toast.error("An error occurred");
    }
  };

  return (
    <div className="space-y-20 xl:space-y-20">
      <div className="px-2">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="flex flex-col space-y-4 p-4 md:p-8">
            <h3 className="text-3xl font-semibold">Our pricing plan</h3>
            <p className="mt-4 text-md text-[#061C3D] md:mt-0">
              Donec ligula ligula, porta at urna non, faucibus congue urna.
              Nullam nulla purus, facilisis vitae odio ac, tempus aliquet dolor.
            </p>
          </div>

          <div className="mt-5 flex h-16 w-60 items-center gap-8 rounded-full bg-[#FFF9EE] p-3 xl:mt-0">
            <button
              className={`flex h-10 w-32 items-center justify-center p-2 rounded-full transition-all duration-300 ${
                activeTab === "Monthly" ? "bg-[#FFC759] w-52" : "bg-transparent"
              }`}
              onClick={() => setActiveTab("Monthly")}
            >
              <h1
                className={`font-semibold transition-colors duration-300 ${
                  activeTab === "Monthly" ? "text-white" : "text-[#42526B]"
                }`}
              >
                Monthly
              </h1>
            </button>

            <button
              className={`flex h-10 w-32 items-center justify-center p-2 rounded-full transition-all duration-300 ${
                activeTab === "Yearly" ? "bg-[#FFC759] w-52" : "bg-transparent"
              }`}
              onClick={() => setActiveTab("Yearly")}
            >
              <h1
                className={`font-semibold transition-colors duration-300 ${
                  activeTab === "Yearly" ? "text-white" : "text-[#42526B]"
                }`}
              >
                Yearly
              </h1>
            </button>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-3 md:px-5 lg:gap-8 xl:mt-4 xl:gap-24 2xl:gap-32 3xl:gap-36 3xl:px-60">
          <PlanCard
            title="Standard"
            price="Free"
            duration={getPlanDuration()}
            features={[
              "Unlimited likes",
              "Unlimited Rewinds",
              "Passport™ to any location",
              "Hide advertisements",
              "Go Incognito",
            ]}
            id=""
            onClick={() => handleCheckout}
          />
          {filteredPlans.map((plan: any) => (
            <PlanCard
              key={plan.id}
              title={plan.planName.split(" ")[0]}
              price={plan.price}
              duration={getPlanDuration()}
              isHighlighted={plan.planName.includes("Exclusive")} 

              features={[
                "See who likes you",
                "New Top Picks every day",
                "Weekly Super Likes",
                "1 Free Boost a month",
                "And everything from Wedlock Basic",
              ]}
              id={plan.id}
              onClick={handleCheckout}
            />
          ))}
        </div>
      </div>

      <div className="md:px-10">
        <Subscription />
      </div>
      <div>
        <FAQ />
      </div>
    </div>
  );
};

export default PricingPage;
