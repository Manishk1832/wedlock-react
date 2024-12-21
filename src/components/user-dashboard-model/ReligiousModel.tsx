import { Modal} from "antd";
import { createStyles} from "antd-style";
import { Form, Input } from "antd";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query/react";
import { useUpdateReligiousBackgroundMutation } from "../../Redux/Api/profile.api";
import { toast } from "sonner";


const useStyle = createStyles(({ token }) => ({
  "my-modal-body": {
    background: token.blue1,
    padding: token.paddingSM,
  },
  "my-modal-mask": {
    boxShadow: `inset 0 0 15px #fff`,
  },
  "my-modal-header": {
    borderBottom: `1px dotted ${token.colorPrimary}`,
  },
  "my-modal-footer": {
    color: token.colorPrimary,
  },
  "my-modal-content": {
    border: "1px solid #333",
  },
  "my-modal-title": {
    color: "#007EAF",
  },
}));

interface ReligiousModalProps {
  isVisible: boolean;
  onClose: () => void;
}

const ReligiousModel: React.FC<ReligiousModalProps> = ({
  isVisible,
  onClose,
}) => {
  const { styles } = useStyle();


  
  type ApiResponse = {
    success: boolean;
    message: string;
  };
  type FetchBaseQueryErrorWithData = FetchBaseQueryError & {
    data: ApiResponse;
  };

  const [form] = Form.useForm();


  const [updateReligiousBackground, { isLoading }] = useUpdateReligiousBackgroundMutation();

  const handleFormSubmit = async (values: any) => {
    try {
      const res = await updateReligiousBackground(values);
      console.log(res);

      if ("error" in res && res.error) {
        const errorData = res.error as FetchBaseQueryErrorWithData;

        if (errorData.data?.success === false) {
          toast.error(errorData.data.message);
          return;
        }
      }
      const successData = res.data as ApiResponse;
      toast.success(successData.message);
      onClose();

    } catch (error) {
      toast.error("An unexpected error occurred.");
    }
  };

  const classNames = {
    mask: styles["my-modal-mask"],
    header: styles["my-modal-header"],
    footer: styles["my-modal-footer"],
    content: styles["my-modal-content"],
    title: styles["my-modal-title"],
  };

  const modalStyles = {
    header: {
      borderRadius: 0,
    },

    mask: {
      backdropFilter: "blur(10px)",
    },

    content: {
      boxShadow: "0 0 30px #999",
    },
  };

  return (
    <div className="flex items-center">
      <Modal
        open={isVisible}
        onCancel={onClose}
        onOk={() => form.submit()}        
        wrapClassName="my-modal-content"
        classNames={classNames}
        styles={modalStyles}
        title={
          <span className={styles["my-modal-title"]}>Religious Background</span>
        }
        centered
        confirmLoading={isLoading}
      >
        <Form form={form} layout="vertical" autoComplete="off" onFinish={handleFormSubmit}>
          <Form.Item name="religion" label="Religion" rules={[{ required: false , message: "Please enter your religion"}]}  >
            <Input placeholder="Enter Religion" />
          </Form.Item>


          <Form.Item name="subCommunity" label="Sub Community"  rules={[{ required: false , message: "Please enter your sub community"}]}>
            <Input placeholder="Enter Sub Community" />
          </Form.Item>
          <Form.Item name="community" label="Community" rules={[{ required: false , message: "Please enter your community"}]}>
            <Input placeholder="Enter Community" />
          </Form.Item>
          <Form.Item name="gothra" label="Gothra/Gothram" rules={[{ required: false , message: "Please enter your Gothra"}]}>
            <Input placeholder="Enter Gothra" />
          </Form.Item>
          <Form.Item name="dateOfBirth" label="Date of Birth" rules={[{ required: false , message: "Please enter your date of birth"}]}>
            <Input placeholder="Enter Date of Birth" />
          </Form.Item>
          <Form.Item name="timeOfBirth" label="Time of Birth" rules={[{ required: false , message: "Please enter your time of birth"}]}>
            <Input placeholder="Enter Time of Birth" />
          </Form.Item>
          <Form.Item name="placeOfBirth" label="Place of Birth" rules={[{ required: false , message: "Please enter your place of birth"}]}>
            <Input placeholder="Enter Place of Birth" />
          </Form.Item>

          <Form.Item name="motherTongue" label="Mother Tongue" rules={[{ required: false , message: "Please enter your mother tongue"}]}>
            <Input placeholder="Enter Place of Birth" />
          </Form.Item>
          
        </Form>
      </Modal>
    </div>
  );
};

export default ReligiousModel;
