import React from "react";
// import { IoIosCheckmark } from "react-icons/io";
// import { RxCross1 } from "react-icons/rx";

const Subscription: React.FC = () => {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-semibold text-center mb-4">
        Subscription Plan Comparison
      </h2>

      <hr className="my-4" />

      <div>
        <div className="overflow-x-auto">
          <table className="w-full  table-fixed border-collapse">
            <thead className="border-b-2">
              <tr className="border-b-2 text-md text-left  md:text-2xl">
                <th className="text-left">
                  <div className="pt-5 pb-5">Features</div>
                </th>
                <th>
                  <div className="pt-5 pb-5">Explorer</div>
                </th>
                <th>
                  <div className="pt-5 pb-5">Advanced ($9.99/month)</div>
                </th>
                <th>
                  <div className="pt-5 pb-5">Elite ($29.99/month)</div>
                </th>
              </tr>
            </thead>
            <tbody className="text-left">
              <tr className="border-b-2 ">
                <td className="font-normal text-xl font-[Proxima-Nova-bold]  text-left pt-5 pb-5 ">
                  Price
                </td>
                <td className="font-normal pt-5 pb-5">Free</td>
                <td className="font-normal pt-5 pb-5">$9.99 per month</td>
                <td className="font-normal pt-5 pb-5">$29.99 per month</td>
              </tr>

              <tr className="border-b-2">
                <td className="pt-5 pb-5 text-xl font-[Proxima-Nova-bold]">Match Access </td>
                <td className="pt-5 pb-5 text-md">
                  Limited matches
                </td>
                <td className="pt-5 pb-5 text-md">
                  Unlimited matches
                </td>
                <td className="pt-5 pb-5 ttext-md ">
                  Personalised matchmaking
                </td>
              </tr>

              <tr className="border-b-2 ">
                <td className="text-xl font-[Proxima-Nova-bold]">Search Filters</td>
                <td className="pt-5 pb-5  text-md   ">
                  {" "}
                  Basic filters
                </td>
                <td className="pt-5 pb-5 text-md">
                  Advanced search filters
                </td>
                <td className="pt-5 pb-5 text-md">
                  {" "}
                  Advanced + Exclusive matchmaking filters
                </td>
              </tr>

              <tr className="border-b-2">
                <td className="text-xl font-[Proxima-Nova-bold]">Visibility</td>
                <td className="pt-5 pb-5 pt-5 pb-5 text-md  ">
                  {" "}
                  Standard visibility
                </td>
                <td className="pt-5 pb-5 text-md ">
                  {" "}
                  Visibility boosts
                </td>
                <td className="pt-5 pb-5 text-md ">
                  {" "}
                  Top-tier profile visibility
                </td>
              </tr>

              <tr className="border-b-2">
                <td className="text-xl font-[Proxima-Nova-bold]">Events/Workshops</td>
                <td className="pt-5 pb-5  text-md ">
                  {" "}
                  Community forums only
                </td>
                <td className="pt-5 pb-5 text-md ">
                  {" "}
                  Monthly webinars
                </td>
                <td className="pt-5 pb-5 text-md ">
                  {" "}
                  Exclusive events + workshops
                </td>
              </tr>
              <tr className="border-b-2">
                <td className="text-xl font-[Proxima-Nova-bold]">Customer Support</td>
                <td className="pt-5 pb-5 text-md  ">
                  {" "}
                  Basic support
                </td>
                <td className="pt-5 pb-5 text-md  ">
                  {" "}
                  Priority customer support
                </td>
                <td className="pt-5 pb-5 text-md ">
                  {" "}
                  24/7 VIP support + dedicated relationship manager
                </td>
              </tr>
              <tr className="border-b-2">
                <td className="text-xl font-[Proxima-Nova-bold]">Privacy Settings</td>
                <td className="pt-5 pb-5 text-md  ">
                  {" "}
                  Basic privacy
                </td>
                <td className="pt-5 pb-5 text-md  ">
                  {" "}
                  Enhanced privacy
                </td>
                <td className="pt-5 pb-5 text-md ">
                  {" "}
                  Ultimate control over privacy and visibility
                </td>
              </tr>

              <tr className="border-b-2">
                <td className="text-xl font-[Proxima-Nova-bold]">Additional Benefits</td>
                <td className="pt-5 pb-5 text-md ">
                  {" "}
                  N/A
                </td>
                <td className="pt-5 pb-5  text-md  ">
                  {" "}
                  Monthly relationship webinars
                </td>
                <td className="pt-5 pb-5 text-md ">
                  {" "}
                  Personality assessments + VIP networking events
                </td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
