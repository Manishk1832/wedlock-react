
import ProfileCard from "./ProfileCard";

const Favourate = () => {
  interface CardData {
    id: string;
    member: string;
    name: string;
    GA: string;
    occ: string;
    cast: string;
    verified: boolean;
    mstatus: string;
    place: string;
  }
 const  CardData : CardData[] = [
    {
      id: "1",
      member: "Member1",
      name: "John Doe",
      GA: "30",
      occ: "Engineer",
      cast: "General",
      verified: true,
      mstatus: "Single",
      place: "New York",
    },
 ]

  return (
    <div>
      {/* <div className="flex items-center justify-between">
        <h1 className="font-semibold">Discover your matches</h1>
        <div className="flex items-center gap-10 ">
          <h1 className="text-[#475467]">Filter by your preference</h1>
          <PiSlidersLight className="text-[#061C3D] text-2xl" />
        </div>
      </div> */}
      <div className="mt-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {CardData.map((data) => (
            <ProfileCard key={data.id} profiles={[] } />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Favourate;
