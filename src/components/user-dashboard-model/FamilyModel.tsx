import { Modal, Select, Form, Input } from "antd";
import { createStyles} from "antd-style";
import { useUpdateFamilyDetailsMutation } from "../../Redux/Api/profile.api";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query/react";
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

interface FamilyModelProps {
  isVisible: boolean;
  onClose: () => void;
}

const FamilyModel: React.FC<FamilyModelProps> = ({ isVisible, onClose }) => {
  const [updateFamilyDetails, { isLoading }] = useUpdateFamilyDetailsMutation();

  const { styles } = useStyle();
  const { Option } = Select;

  const classNames = {
    mask: styles["my-modal-mask"],
    header: styles["my-modal-header"],
    footer: styles["my-modal-footer"],
    content: styles["my-modal-content"],
    title: styles["my-modal-title"],
  };

  const [form] = Form.useForm();

  const siblingCounts = [0, 1, 2, 3, 4, 5];
  type ApiResponse = {
    success: boolean;
    message: string;
  };
  type FetchBaseQueryErrorWithData = FetchBaseQueryError & {
    data: ApiResponse;
  };

  const handleFormSubmit = async (values: any) => {
    try {
      const res = await updateFamilyDetails(values);
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

  return (
    <div className="flex items-center">
      <Modal
        open={isVisible}
        onCancel={onClose}
        onOk={() => form.submit()}        
        wrapClassName="my-modal-content"
        classNames={classNames}
        title={
          <span className={styles["my-modal-title"]}>Family Background</span>
        }
        centered
        confirmLoading={isLoading}
        
      >
        <Form
          form={form}
          layout="vertical"
          autoComplete="off"
          onFinish={handleFormSubmit}
        >
          <Form.Item
            name="fatherOccupation"
            label="Father's Occupation"
            rules={[{ required: true, message: "Please enter father's occupation" }]}
          >
            <Input placeholder="Enter Father's Occupation" />
          </Form.Item>

          <Form.Item
            name="motherOccupation"
            label="Mother's Occupation"
            rules={[{ required: true, message: "Please enter mother's occupation" }]}
          >
            <Input placeholder="Enter Mother's Occupation" />
          </Form.Item>

          <Form.Item
            name="numberOfSiblings"
            label="Number of Siblings"
            rules={[{ required: true, message: "Please select number of siblings" }]}
          >
            <Select placeholder="Select Number of Siblings">
              {siblingCounts.map((siblingCount) => (
                <Option key={siblingCount} value={siblingCount}>
                  {siblingCount}
                </Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item
            name="livingWithFamily"
            label="Living with Family"
            rules={[{ required: true, message: "Please select an option" }]}
          >
            <Select placeholder="Select Living with Family">
              <Option value="Yes">Yes</Option>
              <Option value="No">No</Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default FamilyModel;
