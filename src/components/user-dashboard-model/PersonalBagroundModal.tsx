import React from "react";
import { Modal, Select, Form, Input, Col, Row } from "antd";
import { createStyles } from "antd-style";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query/react";
import { useUpdatePersonalBackgroundMutation } from "../../Redux/Api/profile.api";
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

interface PersonalBagroundModelProps {
  isVisible: boolean;
  onClose: () => void;
}

const ReligiouModel: React.FC<PersonalBagroundModelProps> = ({
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


  const [updatePersonalBackground, { isLoading }] = useUpdatePersonalBackgroundMutation();


  const { Option } = Select;
  const ComplexionOptions = [
    { value: "White", label: "White" },
    { value: "Black", label: "Black" },
    { value: "Asian", label: "Asian" },
    { value: "Indian", label: "Indian" },
    { value: "Others", label: "Others" },
  ];

  const classNames = {
    mask: styles["my-modal-mask"],
    header: styles["my-modal-header"],
    footer: styles["my-modal-footer"],
    content: styles["my-modal-content"],
    title: styles["my-modal-title"],
  };

  const [form] = Form.useForm();

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

  const handleFormSubmit = async (values: any) => {
    const height = `${values.feet} feet ${values.inches} inches`;
    const formData = { ...values, height }; 
    try {
      const res = await updatePersonalBackground(formData);
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
        styles={modalStyles}
        title={
          <span className={styles["my-modal-title"]}>Personal Background</span>
        }
        centered
        confirmLoading={isLoading}
      >
        <Form form={form} layout="vertical" autoComplete="off" onFinish={handleFormSubmit}
        >
          <Row gutter={16}>
          <Col span={24}>
              <Form.Item label="Height" required>
                <Input.Group compact>
                  <Form.Item
                    name="feet"
                    noStyle
                    rules={[{ required: true, message: "Please enter feet" }]}
                  >
                    <Input style={{ width: "49%", marginRight: "2%" }} placeholder="Feet" />
                  </Form.Item>
                  <Form.Item
                    name="inches"
                    noStyle
                    rules={[{ required: true, message: "Please enter inches" }]}
                  >
                    <Input style={{ width: "49%" }} placeholder="Inches" />
                  </Form.Item>
                </Input.Group>
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item name="weight" label="Weight" rules={[{ required: true,message: "Please Enter Weight" }] }>
                <Input placeholder="Enter Weight" />
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item name="language" label="Language" rules={[{ required: true,message: "Please Enter Language" }] }>
                <Select placeholder="Enter Language">
                  <Option value="english">English</Option>
                  <Option value="hindi">Hindi</Option>
                  <Option value="marathi">Marathi</Option>
                  <Option value="gujarati">Gujarati</Option>
                  <Option value="punjabi">Punjabi</Option>
                  <Option value="kannada">Kannada</Option>
                  <Option value="tamil">Tamil</Option>
                </Select>
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item name="bodyType" label="Body Type" rules={[{ required: true,message: "Please Enter Body Type" }] }>
                <Select placeholder="Select Body Type">
                  <Option value="mesomorph">Mesomorph</Option>
                  <Option value="ectomorph">Ectomorph</Option>
                  <Option value="endomorph">Endomorph</Option>
                </Select>
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item name="smokingHabbit" label="Smoking Habbit" rules={[{ required: true,message: "Please Enter Smoking Habbit" }] }>
                <Select placeholder="Select Smoking Habbit">
                  <Option value="smoker">Smoker</Option>
                  <Option value="non-smoker">Non-Smoker</Option>
                </Select>
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item name="drinkingHabbit" label="Drinking Habbit" rules={[{ required: true,message: "Please Enter Drinking Habbit" }] }>
                <Select placeholder="Select Drinking Habbit">
                  <Option value="alcoholic">Alcoholic</Option>
                  <Option value="non-alcoholic">Non-Alcoholic</Option>
                </Select>
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item name="diet" label="Diet" rules={[{ required: true,message: "Please Enter Diet" }] }>
                <Select placeholder="Select Diet">
                  <Option value="veg">Veg</Option>
                  <Option value="non-veg">Non-Veg</Option>
                </Select>
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item name="complexion" label="Complexion" rules={[{ required: true,message: "Please Enter Complexion" }] }>
                <Select placeholder="Select Complexion">
                  {ComplexionOptions.map((option) => (
                    <Option key={option.value} value={option.value}>
                      {option.label}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Modal>
    </div>
  );
};

export default ReligiouModel;
