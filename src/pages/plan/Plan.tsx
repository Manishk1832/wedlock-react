import  { useState } from "react";
import FAQ from "../../components/faqs/Faqs.tsx";
import "../../font.css";
import { useGetPlansQuery } from "../../Redux/Api/plan.api";
import PlanCard from "../../components/PlanCard/PlanCard";
import Loading from "../../components/Loading";
import { FetchBaseQueryError } from '@reduxjs/toolkit/query/react';
import { useCreateCheckoutSessionMutation } from "../../Redux/Api/checkout.api";
import { toast } from 'sonner';
import { RootState } from "./../../Redux/store";
import { useSelector } from "react-redux";


const PricingPage = () => {
  const {user } = useSelector((state: RootState) => state.userReducer) ;
  const [activeTab, setActiveTab] = useState("Monthly");

  const currentPlan = user?.usertype;

  const { data: planData, isLoading, error } = useGetPlansQuery<any>();
  const [createCheckoutSession] = useCreateCheckoutSessionMutation();

  const getPlanDuration = () =>
    activeTab === "Monthly" ? "Per Month" : "Per Year";

const filteredPlans = planData?.data?.filter((plan: any) => {
  if (activeTab === "Monthly" && plan.planType !== "Monthly") return false;
  if (activeTab === "Yearly" && plan.planType !== "Yearly") return false;

  if (currentPlan === "Exclusive" && plan.planName === "Premium") return false;

  return true;
});

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
    try {
      const res = await createCheckoutSession(id);
      if ("error" in res && res.error) {
        const errorData = res.error as FetchBaseQueryErrorWithData;
        if (errorData.data?.success === false) {
          toast.error(errorData.data.message);
          return;
        }
      }
      const successData = res.data as ApiResponse;
      window.location.href = successData.url;
    } catch(error) {
      toast.error("An error occurred");
    }
  };

  return (
    <div className="space-y-20 xl:space-y-20 ">
      <div className="px-2">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="flex flex-col space-y-4 p-4 md:p-8 ">
            <h3 className="text-3xl font-semibold">Choose the Right Plan for Your Journey to Love</h3>
            <p className="mt-4 text-md text-[#061C3D] md:mt-0">
              Wedlock offers three subscription levels to suit your needs:
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

        <div className="mt-5 grid grid-cols-1 justify-items-center content-center gap-4 md:grid-cols-2 lg:gap-8 xl:gap-24">

          {filteredPlans.map((plan: any) => (
            <PlanCard
              key={plan.id}
              title={plan.planName}
              price={plan.price}
              duration={getPlanDuration()}
              isHighlighted={plan.planName === "Exclusive"}
              features={plan.featureList}
              isDisabled={plan.planName === currentPlan }
              id={plan.id}
              onClick={() => handleCheckout(plan.id)}
            />
          ))}
        </div>
      </div>

          <div>
        <FAQ />
      </div>
    </div>
  );
};

export default PricingPage;
