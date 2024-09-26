import React from "react";
import { Modal, Select, Form, Input, Col, Row } from "antd";
import { createStyles } from "antd-style";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query/react";
import { useUpdateEducationAndFinancialDetailsMutation } from "../../Redux/Api/profile.api";
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

interface EducationalModelProps {
  isVisible: boolean;
  onClose: () => void;
}

const ReligiouModel: React.FC<EducationalModelProps> = ({
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

  const [updateEducationAndFinancialDetails, { isLoading }] = useUpdateEducationAndFinancialDetailsMutation();


  const handleFormSubmit = async (values: any) => {
    try {
      const res = await updateEducationAndFinancialDetails(values);
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



  const { Option } = Select;

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
          <span className={styles["my-modal-title"]}>Personal Background</span>
        }
        centered
        confirmLoading={isLoading}
      >
        <Form form={form} layout="vertical" autoComplete="off" onFinish={handleFormSubmit}>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item name="qualification" label="qualification">
                <Select placeholder="Select qualification">
                  <Option value="student">Student</Option>
                  <Option value="employed">Employed</Option>
                  <Option value="unemployed">Unemployed</Option>
                  <Option value="retired">Retired</Option>
                  <Option value="other">Other</Option>
                </Select>
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item name="education" label="Education">
                <Select placeholder="Select Body Type">
                  <Option value="elementary-school">Elementary School</Option>
                  <Option value="high-school">High School</Option>
                  <Option value="graduation">Graduation</Option>
                  <Option value="post-graduation">Post Graduation</Option>
                  <Option value="other">Other</Option>
                </Select>
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item label="Income">
                <Input.Group compact>
                  <Input
                    style={{ width: "49%", marginRight: "2%" }}
                    placeholder="Starting"
                  />
                  <Input style={{ width: "49%" }} placeholder="Ends" />
                </Input.Group>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Modal>
    </div>
  );
};

export default ReligiouModel;
