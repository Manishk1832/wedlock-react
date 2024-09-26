import { PiWarningCircleBold, PiWarningBold } from "react-icons/pi";
import { MdOutlineVerified } from "react-icons/md";

const Notification = () => {
  return (
    <div className="space-y-5">
      <div className="space-y-4 rounded-xl bg-white p-4 shadow-lg">
        <div className="flex items-center gap-4">
          <PiWarningCircleBold className="text-5xl text-[#0B63E5]" />
          <h1 className="font-semibold">
            The page you’re looking for is password <br /> protected.
          </h1>
        </div>
        <div>
          <p className="text-sm text-[#6A778B]">
            Vivamus gravida iaculis nulla, vel varius est facilisis eget.
            Suspendisse fermentum a nisl a sodales. Aliquam mi metus, lobortis
            pulvinar pulvinar qui
          </p>
        </div>
      </div>
      <div className="space-y-4 rounded-xl bg-white p-4 shadow-lg">
        <div className="flex items-center gap-4">
          <PiWarningCircleBold className="text-5xl text-[#E54545]" />
          <h1 className="font-semibold">
            The page you’re looking for is password <br /> protected.
          </h1>
        </div>
        <div>
          <p className="text-sm text-[#6A778B]">
            Vivamus gravida iaculis nulla, vel varius est facilisis eget.
            Suspendisse fermentum a nisl a sodales. Aliquam mi metus, lobortis
            pulvinar pulvinar qui
          </p>
        </div>
      </div>
      <div className="space-y-4 rounded-xl bg-white p-4 shadow-lg">
        <div className="flex items-center gap-4">
          <MdOutlineVerified className="text-5xl text-[#0F9918]" />
          <h1 className="font-semibold">
            The page you’re looking for is password <br /> protected.
          </h1>
        </div>
        <div>
          <p className="text-sm text-[#6A778B]">
            Vivamus gravida iaculis nulla, vel varius est facilisis eget.
            Suspendisse fermentum a nisl a sodales. Aliquam mi metus, lobortis
            pulvinar pulvinar qui
          </p>
        </div>
        <div className="text-sm text-[#6A778B]">
          <ul className="relative left-4 list-disc">
            <li>Morbi condimentum vulputate augue sit amet faucibus.</li>
            <li>
              Vel varius est facilisis eget. Suspendisse fermentum a nisl a{" "}
              <br /> sodales.
            </li>
            <li>Vivamus gravida iaculis nulla</li>
          </ul>
        </div>
      </div>
      <div className="space-y-4 rounded-xl bg-white p-4 shadow-lg">
        <div className="flex items-center gap-4">
          <PiWarningBold className="text-5xl text-[#FF8800]" />
          <h1 className="font-semibold">
            The page you’re looking for is password <br /> protected.
          </h1>
        </div>
        <div>
          <p className="text-sm text-[#6A778B]">
            Vivamus gravida iaculis nulla, vel varius est facilisis eget.
            Suspendisse fermentum a nisl a sodales. Aliquam mi metus, lobortis
            pulvinar pulvinar qui
          </p>
        </div>
      </div>
    </div>
  );
};

export default Notification;
