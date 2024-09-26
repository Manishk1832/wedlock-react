import React from "react";
import { Modal, Select, Form, Input, Col, Row } from "antd";
import { createStyles } from "antd-style";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query/react";
import { useUpdateLocationDetailsMutation } from "../../Redux/Api/profile.api";
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

interface LocationBagroundModelProps {
  isVisible: boolean;
  onClose: () => void;
}

const LocationBackgroundModal: React.FC<LocationBagroundModelProps> = ({
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

  const [updateLocationDetails, { isLoading }] = useUpdateLocationDetailsMutation();


  const { Option } = Select;
  
  

  const classNames = {
    mask: styles["my-modal-mask"],
    header: styles["my-modal-header"],
    footer: styles["my-modal-footer"],
    content: styles["my-modal-content"],
    title: styles["my-modal-title"],
  };


   const handleFormSubmit = async (values: any) => {
    try {
      const res = await updateLocationDetails(values);

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
        onOk={()=>form.submit()}
        wrapClassName="my-modal-content"
        classNames={classNames}
        styles={modalStyles}
        title={
          <span className={styles["my-modal-title"]}>Location Background</span>
        }
        centered
        confirmLoading={isLoading}

      >
        <Form form={form} layout="vertical" autoComplete="off" onFinish={handleFormSubmit}>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item name="currentLocation" label="Current Location">
                <Input placeholder="Enter Current Location" />
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item name="cityOfResidence" label="City of Residence">
                <Input placeholder="Enter City of Residence" />
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item name="nationality" label="Nationality">
                <Select placeholder="Select Nationality">
                  <Option value="indian">Indian</Option>
                  <Option value="australian">Australian</Option>
                  <Option value="american">American</Option>
                  <Option value="others">Others</Option>
                </Select>
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item name="citizenShip" label="Citizenship">
                <Input placeholder="Enter Citizenship" />
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item
                name="residencyVisaStatus"
                label="Residency Visa Status"
              >
                <Select placeholder="Select Residency Visa Status">
                  <Option value="yes">Yes</Option>
                  <Option value="No">No</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Modal>
    </div>
  );
};

export default LocationBackgroundModal;
