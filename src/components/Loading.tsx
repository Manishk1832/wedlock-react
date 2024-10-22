import { LoadingOutlined } from "@ant-design/icons";

const Loading = () => {
  return (
    <div
      className=" h-[80vh] flex items-center justify-center w-full"
      role="status"
    >
      <LoadingOutlined style={{ color: "#007EAF", fontSize: "42px", fontWeight: "bold", transition: "none" }} />
    </div>
  );
};

export default Loading;
