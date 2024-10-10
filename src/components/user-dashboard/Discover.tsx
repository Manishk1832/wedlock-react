import { useState } from "react";
import { PiSlidersLight } from "react-icons/pi";
import ProfileCard from "./ProfileCard";
import DiscoverModal from "../DiscoverPageModal/DiscoverModal";
import { useGetProfilesQuery } from "../../Redux/Api/profile.api";
import Pagination from "./Pagination";
import SkeletonCard from "../SkeletonCard/SkeletonCard";

const Discover = () => {
  const [filterModelOpen, setFilterModelOpen] = useState(false);
  const skeletonArray = new Array(6).fill(0);
  

  const { data, isLoading } = useGetProfilesQuery({});
  console.log(data, "data");

  const openFilterModel = () => {
    setFilterModelOpen(true);
  };

  const closeFilterModel = () => {
    setFilterModelOpen(false);
  };

  const [currentPage, setCurrentPage] = useState(2);
  const totalPages = 5;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // Filter out profiles with null values in required fields
  const filteredProfiles = data?.profiles?.filter(
    (profile :any) =>
      profile.firstName !== null &&
      profile.age !== null &&
      profile.occupation !== null // Add any other required fields to check here
  );

  return (
    <div>
      <div className="flex items-center justify-between ">
        <h1 className="font-semibold">Discover your matches</h1>
        <div className="flex items-center gap-10">
          <h1 className="text-[#475467]">Filter by your preference</h1>
          <button onClick={openFilterModel}>
            <PiSlidersLight className="text-2xl text-[#061C3D]" />
          </button>
          <DiscoverModal isVisible={filterModelOpen} onClose={closeFilterModel} />
        </div>
      </div>

      <div className="mt-10 flex items-center justify-center">
        <div className="grid gap-10 lg:gap-40  md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4">
          {isLoading ? (
            skeletonArray.map((_, index) => <SkeletonCard key={index} />)
          ) : filteredProfiles?.length > 0 ? (
            filteredProfiles.map((profile:any) => (
              <ProfileCard key={profile.id} profiles={[profile]} />
            ))
          ) : (
            <div className="col-span-full h-[60vh] flex items-center justify-center text-center text-gray-500">
              No profile match found
            </div>
          )}
        </div>
      </div>

      <div>
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
      </div>
    </div>
  );
};

export default Discover;
