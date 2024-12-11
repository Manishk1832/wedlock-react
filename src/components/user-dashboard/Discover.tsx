import { useState, useEffect } from "react";
import { PiSlidersLight } from "react-icons/pi";
import ProfileCard from "./ProfileCard";
import DiscoverModal from "../DiscoverPageModal/DiscoverModal";
import { useGetProfilesQuery, useFilterProflesMutation } from "../../Redux/Api/profile.api";
import { useToggleFavMutation } from "../../Redux/Api/fav.api";
import { useGetFavQuery } from "../../Redux/Api/fav.api";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query/react";
import Pagination from "./Pagination";
import SkeletonCard from "../SkeletonCard/SkeletonCard";
import { toast } from "sonner";

const Discover = () => {
  const [filterModelOpen, setFilterModelOpen] = useState(false);
  const skeletonArray = new Array(3).fill(0);
  const [filterData, setFilterData] = useState<any[]>([]); // Store the filtered profiles data
  const [toggle] = useToggleFavMutation();

  const { data, isLoading } = useGetProfilesQuery({});
  const [filterProfles, { isLoading: filterLoading }] = useFilterProflesMutation();

  const { data: favData, refetch } = useGetFavQuery({});

  useEffect(() => {
    refetch();
  }, [refetch]);

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
    (profile: any) =>
      profile.firstName !== null &&
      profile.age !== null &&
      profile.occupation !== null
  );

  type ApiResponse = {
    success: boolean;
    message: string;
    data?: any;
  };
  type FetchBaseQueryErrorWithData = FetchBaseQueryError & {
    data: ApiResponse;
  };

  const handleFormData = async (data: any) => {
    const res = await filterProfles(data);
    try {
      if (res?.error) {
        const errorData = res.error as FetchBaseQueryErrorWithData;
        if (errorData.data?.success === false) {
          toast.error(errorData.data.message);
          return;
        }
      } else {
        const successData = res.data as ApiResponse;
        const profiles = successData?.data?.profiles;
        setFilterData(profiles || []); // Set the filtered profiles data in the state
      }
    } catch (error) {
      toast.error("An unexpected error occurred.");
    }
  };

  const handleToggleFav = async (userId: string) => {
    try {
      const response = await toggle(userId).unwrap();
      if (response.error) {
        const errorData = response.error as FetchBaseQueryErrorWithData;
        toast.error(errorData.data.message);
        return;
      }
      toast.success(response.message);
      refetch();
    } catch (error) {
      toast.error("Failed to add to favorites. Please try again later.");
    }
  };

  const isFavourite = (userId: string) => {
    return favData?.data?.some((fav: any) => fav.userId === userId);

  };

  // Decide which profiles to display: filtered data or default data
  const profilesToDisplay = filterData.length > 0 ? filterData : filteredProfiles;

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="font-semibold">Discover your matches</h1>
        <div className="flex items-center gap-10">
          <h1 className="text-[#475467]">Filter by your preference</h1>
          <button onClick={openFilterModel}>
            <PiSlidersLight className="text-2xl text-[#061C3D]" />
          </button>
          <DiscoverModal
            isVisible={filterModelOpen}
            onClose={closeFilterModel}
            onFormSubmit={handleFormData}
          />
        </div>
      </div>

      <div className="mt-10 flex items-center justify-center">
        <div className="grid gap-10 lg:gap-40 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4">
          {isLoading || filterLoading ? (
            skeletonArray.map((_, index) => <SkeletonCard key={index} />)
          ) : profilesToDisplay && profilesToDisplay.length > 0 ? (
            profilesToDisplay.map((profile: any) => (
              <ProfileCard
                key={profile.id}
                profiles={[profile]}
                isFavourite={isFavourite(profile.userId)}
                handleFavouriteToggle={handleToggleFav}
              />
            ))
          ) : (
            <div className="col-span-full h-[60vh] flex items-center justify-center text-center text-gray-500">
              No profile match found
            </div>
          )}
        </div>
      </div>

      <div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default Discover;
