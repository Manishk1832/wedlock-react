import React, { useState,useEffect } from "react";
import {
  Modal,
  Form,
  Select,
  Radio,
  Checkbox,
  Button,
  Row,
  Col,
} from "antd";
import { createStyles } from "antd-style";
import { TbUsersPlus } from "react-icons/tb";
import "../../font.css";
import { RootState } from "./../../Redux/store";
import { useSelector } from "react-redux";


const useStyle = createStyles(({ token }) => ({
  "my-modal-body": {
    background: token.blue1,
    padding: token.paddingLG,
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
    color: "black",
  },
}));

interface DiscoverModalProps {
  isVisible: boolean;
  onClose: () => void;
  onFormSubmit: (data: any) => void;
}

const DiscoverModal: React.FC<DiscoverModalProps> = ({
  isVisible,
  onClose,
  onFormSubmit,
}) => {
  const { styles } = useStyle();
  const [checkedValues, setCheckedValues] = useState<any[]>([]);
  const [selectedRadio, setSelectedRadio] = useState(null);
  const {user } = useSelector((state: RootState) => state.userReducer) ;


  const [isExclusive, setIsExclusive] = useState(false);

  useEffect(() => {
    const isExclusive = localStorage.getItem("isExclusive");
    if (isExclusive === "true" || user?.usertype === "Exclusive") {
      setIsExclusive(true);
    }
    [];
  });

  

  const handleCheckboxChange = (checkedValues: any[]) => {
    setCheckedValues(checkedValues);
  };

  const handleRadioChange = (e: any) => {
    setSelectedRadio(e.target.value);
  };


  const classNames = {
    mask: styles["my-modal-mask"],
    header: styles["my-modal-header"],
    footer: styles["my-modal-footer"],
    content: styles["my-modal-content"],
    title: styles["my-modal-title"],
  };

  

  const [form] = Form.useForm();



  const handleFormSubmit = async (values: any) => {

  const data = {
    ageRange: `${values.ageMin} - ${values.ageMax}`,
    heightRange: `${values.heightMin} - ${values.heightMax}`,
    income: values.income,
    religion: values.religion,
    ethnicity: values.ethnicity,
    highestQualification: values.highestQualification,
    smokingHabbit: values.smokingHabits,
    workingWith: values.workingWith,
    maritalStatus: values.maritalStatus,
    eatingHabbits: values.eatingHabits,
    community: values.community,
  };
  
   onFormSubmit(data);
   onClose();
  
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
    <Modal
      open={isVisible}
      onCancel={onClose}
      wrapClassName="my-modal-content"
      width={1200}
      classNames={classNames}
      styles={modalStyles}
      title={
        <div className="flex justify-start">
          <span className="rounded-lg border p-2">
            <TbUsersPlus className="text-2xl" />
          </span>
        </div>
      }
      centered
      footer={
        <div className="flex justify-end">
          <Button
            onClick={onClose}
            style={{ marginRight: "8px" }}
            className="w-44"
          >
            Cancel
          </Button>
          <Button onClick={() => form.submit()} className={`w-44 ${isExclusive? 'bg-[#60457E]': 'bg-[#007EAF]'} text-white`}>
          Find Members
         </Button>
        </div>
      }
    >
      <div className="mb-4">
        <h2
          className="text-lg"
          style={{ fontFamily: "Proxima-Nova-Semibold, sans-serif" }}
        >
          Filter as per your preference
        </h2>
        <p className="text-sm">
          The following users have access to this project:
        </p>
      </div>

      <Form form={form} onFinish={handleFormSubmit} layout="vertical">
        <Form.Item
          label={
            <label
              style={{
                color: `${isExclusive ? "#60457E" : "#007EAF"}`,
                fontStyle: "Proxima-Nova-Semibold",
                fontWeight: "bold",
              }}
            >
              Age
            </label>
          }
          style={{ marginBottom: 0 }}
        >
          <Row gutter={2}>
            <Col span={12}>
              <Form.Item name="ageMin">
                <Select defaultValue="18">
                  <Select.Option value="18">18</Select.Option>
                  <Select.Option value="19">19</Select.Option>
                  <Select.Option value="20">20</Select.Option>
                </Select>
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item name="ageMax">
                <Select defaultValue="18" className="w-full">
                  <Select.Option value="18">18</Select.Option>
                  <Select.Option value="19">19</Select.Option>
                  <Select.Option value="20">20</Select.Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
        </Form.Item>

        <Form.Item
          label={
            <label
              style={{
                color: `${isExclusive ? "#60457E" : "#007EAF"}`,
                fontStyle: "Proxima-Nova-Semibold",
                fontWeight: "bold",
              }}
            >
              Height
            </label>
          }
          style={{ marginBottom: 0 }}
        >
          <Row gutter={2} className="w-full">
            <Col span={12}>
              <Form.Item name="heightMin">
                <Select defaultValue="18" className="w-full">
                  <Select.Option value="18">18</Select.Option>
                  <Select.Option value="19">19</Select.Option>
                  <Select.Option value="20">20</Select.Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="heightMax">
                <Select defaultValue="18" className="w-full">
                  <Select.Option value="18">18</Select.Option>
                  <Select.Option value="19">19</Select.Option>
                  <Select.Option value="20">20</Select.Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
        </Form.Item>

        <Form.Item
        name={"income"}
          label={
            <label
              style={{
                color: `${isExclusive ? "#60457E" : "#007EAF"}`,
                fontStyle: "Proxima-Nova-Semibold",
                fontWeight: "bold",
              }}
            >
              Income
            </label>
          }
        >
          <Select>
            <Select.Option value="any">Any</Select.Option>
            <Select.Option value="low">Low</Select.Option>
            <Select.Option value="medium">Medium</Select.Option>
            <Select.Option value="high">High</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="hasChildren"
          label={
            <label
              style={{
                color: `${isExclusive ? "#60457E" : "#007EAF"}`,
                fontStyle: "Proxima-Nova-Semibold",
                fontWeight: "bold",
              }}
            >
              Has Children
            </label>
          }
          className="h-auto rounded bg-[#EAF2FF] p-4"
        >
          <Radio.Group className="space-y-2" onChange={handleRadioChange}>
            <Radio
              value="no"
              style={{ flexDirection: "row-reverse", alignItems: "center" }}
              className={`rounded-md bg-[#ffff] p-1 text-[#344054] ${
                selectedRadio === "no"
                  ? "border border-[#007EAF] text-[#53389E]"
                  : ""
              }`}
            >
              I don&apos;t mind
            </Radio>
            <Radio
              value="yes"
              style={{ flexDirection: "row-reverse", alignItems: "center" }}
              className={`rounded-md bg-[#ffff] p-1 text-[#344054] ${
                selectedRadio === "yes"
                  ? "border border-[#007EAF] text-[#53389E]"
                  : ""
              }`}
            >
              No, matches shouldn&apos;t have children
            </Radio>
            <Radio
              value="dontMind"
              style={{ flexDirection: "row-reverse", alignItems: "center" }}
              className={`rounded-md bg-[#ffff] p-1 text-[#344054] ${
                selectedRadio === "dontMind"
                  ? "border border-[#007EAF] text-[#53389E]"
                  : ""
              }`}
            >
              I don&apos;t mind as long as the children don&apos;t live in the
              household
            </Radio>
            <Radio
              value="notInHousehold"
              style={{ flexDirection: "row-reverse", alignItems: "center" }}
              className={`rounded-md bg-[#ffff] p-1 text-[#344054] ${
                selectedRadio === "notInHousehold"
                  ? "border border-[#007EAF] text-[#53389E]"
                  : ""
              }`}
            >
              Yes, matches should have children
            </Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          name="religion"
          label={
            <label
              style={{
                color: `${isExclusive ? "#60457E" : "#007EAF"}`,
                fontStyle: "Proxima-Nova-Semibold",
                fontWeight: "bold",
              }}
            >
              Religion
            </label>
          }
          className="h-auto rounded bg-[#EAF2FF] p-4"
        >
          <Checkbox.Group
            className="space-x-2 space-y-2"
            onChange={handleCheckboxChange}
          >
            <Checkbox
              value="all"
              style={{ flexDirection: "row-reverse", alignItems: "center" }}
              className={`rounded-md bg-[#ffff] p-1 text-[#344054] ${
                checkedValues.includes("all")
                  ? "border border-[#007EAF] text-[#53389E]"
                  : ""
              }`}
            >
              All
            </Checkbox>

            <Checkbox
              value="hinduism"
              style={{ flexDirection: "row-reverse", alignItems: "center" }}
              className={`rounded-md bg-[#ffff] p-1 text-[#344054] ${
                checkedValues.includes("hinduism")
                  ? "border border-[#007EAF] text-[#53389E]"
                  : ""
              }`}
            >
              Hinduism(1637)
            </Checkbox>

            <Checkbox
              style={{ flexDirection: "row-reverse", alignItems: "center" }}
              value={"islamic"}
              className={`rounded-md bg-[#ffff] p-1 text-[#344054] ${
                checkedValues.includes("islamic")
                  ? "border border-[#007EAF] text-[#53389E]"
                  : ""
              }`}
            >
              Islamic(441)
            </Checkbox>

            <Checkbox
              style={{ flexDirection: "row-reverse", alignItems: "center" }}
              value={"buddhism"}
              className={`rounded-md bg-[#ffff] p-1 text-[#344054] ${
                checkedValues.includes("buddhism")
                  ? "border border-[#007EAF] text-[#53389E]"
                  : ""
              }`}
            >
              Buddhism(412)
            </Checkbox>
            <Checkbox
              style={{ flexDirection: "row-reverse", alignItems: "center" }}
              value={"Christianity"}
              className={`rounded-md bg-[#ffff] p-1 text-[#344054] ${
                checkedValues.includes("Christianity")
                  ? "border border-[#007EAF] text-[#53389E]"
                  : ""
              }`}
            >
              Christianity(397)
            </Checkbox>
            <Checkbox
              style={{ flexDirection: "row-reverse", alignItems: "center" }}
              value={"judaism"}
              className={`rounded-md bg-[#ffff] p-1 text-[#344054] ${
                checkedValues.includes("judaism")
                  ? "border border-[#007EAF] text-[#53389E]"
                  : ""
              }`}
            >
              Judaism(57)
            </Checkbox>
          </Checkbox.Group>
        </Form.Item>
        <Row gutter={14}>
          <Col span={12}>
            <Form.Item
            name={"ethnicity"}
              label={
                <label
                  style={{
                    color: `${isExclusive ? "#60457E" : "#007EAF"}`,
                    fontStyle: "Proxima-Nova-Semibold",
                    fontWeight: "bold",
                  }}
                >
                  Ethnicity
                </label>
              }
              className="h-auto rounded bg-[#EAF2FF] p-4"
            >
              <Checkbox.Group
                className="gap-4"
                onChange={handleCheckboxChange}
              >
                <Checkbox
                  value={"all-ethnic"}
                  style={{ flexDirection: "row-reverse", alignItems: "center" }}
                  className={`rounded-md bg-[#ffff] p-1 text-[#344054] ${
                    checkedValues.includes("all-ethnic")
                      ? "border border-[#007EAF] text-[#53389E]"
                      : ""
                  }`}
                >
                  All
                </Checkbox>
                <Checkbox
                  style={{ flexDirection: "row-reverse", alignItems: "center" }}
                  value={"indian"}
                  className={`rounded-md bg-[#ffff] p-1 text-[#344054] ${
                    checkedValues.includes("indian")
                      ? "border border-[#007EAF] text-[#53389E]"
                      : ""
                  }`}
                >
                  Indian
                </Checkbox>
                <Checkbox
                  value={"american"}
                  style={{ flexDirection: "row-reverse", alignItems: "center" }}
                  className={`rounded-md bg-[#ffff] p-1 text-[#344054] ${
                    checkedValues.includes("american")
                      ? "border border-[#007EAF] text-[#53389E]"
                      : ""
                  }`}
                >
                  American
                </Checkbox>
                <Checkbox
                  style={{ flexDirection: "row-reverse", alignItems: "center" }}
                  value={"afrikaners"}
                  className={`rounded-md bg-[#ffff] p-1 text-[#344054] ${
                    checkedValues.includes("afrikaners")
                      ? "border border-[#007EAF] text-[#53389E]"
                      : ""
                  }`}
                >
                  Afrikaners
                </Checkbox>

                <Checkbox
                  style={{ flexDirection: "row-reverse", alignItems: "center" }}
                  value={"japanese"}
                  className={`rounded-md bg-[#ffff] p-1 text-[#344054] ${
                    checkedValues.includes("japanese")
                      ? "border border-[#007EAF] text-[#53389E]"
                      : ""
                  }`}
                >
                  Japanese
                </Checkbox>
              </Checkbox.Group>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
            name={"highestQualification"}
              label={
                <label
                  style={{
                    color: `${isExclusive ? "#60457E" : "#007EAF"}`,
                    fontStyle: "Proxima-Nova-Semibold",
                    fontWeight: "bold",
                  }}
                >
                  Highest Qualification
                </label>
              }
              className="h-auto rounded bg-[#EAF2FF] p-4"
            >
              <Checkbox.Group
                className="gap-4"
                onChange={handleCheckboxChange}
              >
                <Checkbox
                  value={"all-qualification"}
                  style={{ flexDirection: "row-reverse", alignItems: "center" }}
                  className={`rounded-md bg-[#ffff] p-1 text-[#344054] ${
                    checkedValues.includes("all-qualification")
                      ? "border border-[#007EAF] text-[#53389E]"
                      : ""
                  }`}
                >
                  All
                </Checkbox>
                <Checkbox
                  style={{ flexDirection: "row-reverse", alignItems: "center" }}
                  value={"bachelor"}
                  className={`rounded-md bg-[#ffff] p-1 text-[#344054] ${
                    checkedValues.includes("bachelor")
                      ? "border border-[#007EAF] text-[#53389E]"
                      : ""
                  }`}
                >
                  Bachelor&apos;s
                </Checkbox>
                <Checkbox
                  value={"master"}
                  style={{ flexDirection: "row-reverse", alignItems: "center" }}
                  className={`rounded-md bg-[#ffff] p-1 text-[#344054] ${
                    checkedValues.includes("master")
                      ? "border border-[#007EAF] text-[#53389E]"
                      : ""
                  }`}
                >
                  Master&apos;s
                </Checkbox>
                <Checkbox
                  value={"10th"}
                  style={{ flexDirection: "row-reverse", alignItems: "center" }}
                  className={`rounded-md bg-[#ffff] p-1 text-[#344054] ${
                    checkedValues.includes("10th")
                      ? "border border-[#007EAF] text-[#53389E]"
                      : ""
                  }`}
                >
                  10th
                </Checkbox>

                <Checkbox
                  value={"12th"}
                  style={{ flexDirection: "row-reverse", alignItems: "center" }}
                  className={`rounded-md bg-[#ffff] p-1 text-[#344054] ${
                    checkedValues.includes("12th")
                      ? "border border-[#007EAF] text-[#53389E]"
                      : ""
                  }`}
                >
                  12th
                </Checkbox>
              </Checkbox.Group>
            </Form.Item>
          </Col>
        </Row>

        <Form.Item
          name={"smokingHabits"}
          label={
            <label
              style={{
                color: `${isExclusive ? "#60457E" : "#007EAF"}`,
                fontStyle: "Proxima-Nova-Semibold",
                fontWeight: "bold",
              }}
            >
              Smoking Habits
            </label>
          }
          className="h-auto rounded bg-[#EAF2FF] p-4"
        >
          <Radio.Group className="space-y-2" onChange={handleRadioChange}>
            <Radio
              value="nonSmoker"
              style={{ flexDirection: "row-reverse", alignItems: "center" }}
              className={`rounded-md bg-[#ffff] p-1 text-[#344054] ${
                selectedRadio === "nonSmoker"
                  ? "border border-[#007EAF] text-[#53389E]"
                  : ""
              }`}
            >
              Non-Smoker
            </Radio>
            <Radio
              value="occasionalSmoker"
              style={{ flexDirection: "row-reverse", alignItems: "center" }}
              className={`rounded-md bg-[#ffff] p-1 text-[#344054] ${
                selectedRadio === "occasionalSmoker"
                  ? "border border-[#007EAF] text-[#53389E]"
                  : ""
              }`}
            >
              Occasional Smoker
            </Radio>
            <Radio
              value="smoker"
              style={{ flexDirection: "row-reverse", alignItems: "center" }}
              className={`rounded-md bg-[#ffff] p-1 text-[#344054] ${
                selectedRadio === "smoker"
                  ? "border border-[#007EAF] text-[#53389E]"
                  : ""
              }`}
            >
              Smoker
            </Radio>
          </Radio.Group>
        </Form.Item>
        <Row gutter={20} style={{ display: "flex", flexWrap: "wrap" }}>
          <Col
            xs={24}
            sm={12}
            md={8}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <Form.Item
              name={"workingWith"}
              label={
                <label
                  style={{
                    color: `${isExclusive ? "#60457E" : "#007EAF"}`,
                    fontStyle: "Proxima-Nova-Semibold",
                    fontWeight: "bold",
                  }}
                >
                  Working With
                </label>
              }
              className="h-full flex-grow rounded bg-[#EAF2FF] p-4"
            >
              <Checkbox.Group
                className="gap-4"
                onChange={handleCheckboxChange}
              >
                <Checkbox
                  style={{ flexDirection: "row-reverse", alignItems: "center" }}
                  className="rounded-md bg-[#ffff] p-1 text-[#344054]"
                  value={"all"}
                >
                  All
                </Checkbox>
                <Checkbox
                  style={{ flexDirection: "row-reverse", alignItems: "center" }}
                  value={"privateCompanies"}
                  className={`rounded-md bg-[#ffff] p-1 text-[#344054] ${
                    checkedValues.includes("privateCompanies")
                      ? "border border-[#007EAF] text-[#53389E]"
                      : ""
                  }`}
                >
                  Private Companies(2000+)
                </Checkbox>
                <Checkbox
                  value={"nonWorking"}
                  style={{ flexDirection: "row-reverse", alignItems: "center" }}
                  className={`rounded-md bg-[#ffff] p-1 text-[#344054] ${
                    checkedValues.includes("nonWorking")
                      ? "border border-[#007EAF] text-[#53389E]"
                      : ""
                  }`}
                >
                  Non Working(200)
                </Checkbox>
                <Checkbox
                  style={{ flexDirection: "row-reverse", alignItems: "center" }}
                  value={"business"}
                  className={`rounded-md bg-[#ffff] p-1 text-[#344054] ${
                    checkedValues.includes("business")
                      ? "border border-[#007EAF] text-[#53389E]"
                      : ""
                  }`}
                >
                  Business / selfemployed(192)
                </Checkbox>
                <Checkbox
                  style={{ flexDirection: "row-reverse", alignItems: "center" }}
                  value={"government"}
                  className={`rounded-md bg-[#ffff] p-1 text-[#344054] ${
                    checkedValues.includes("government")
                      ? "border border-[#007EAF] text-[#53389E]"
                      : ""
                  }`}
                >
                  Government / Public Sector(89)
                </Checkbox>
                <Checkbox
                  style={{ flexDirection: "row-reverse", alignItems: "center" }}
                  value={"defenseCivilServices"}
                  className={`rounded-md bg-[#ffff] p-1 text-[#344054] ${
                    checkedValues.includes("defenseCivilServices")
                      ? "border border-[#007EAF] text-[#53389E]"
                      : ""
                  }`}
                >
                  Defense / Civil Services(2)
                </Checkbox>
              </Checkbox.Group>
            </Form.Item>
          </Col>
          <Col
            xs={24}
            sm={12}
            md={8}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <Form.Item
              name={"maritalStatus"}
              label={
                <label
                  style={{
                    color: `${isExclusive ? "#60457E" : "#007EAF"}`,
                    fontStyle: "Proxima-Nova-Semibold",
                    fontWeight: "bold",
                  }}
                >
                  Martial Status
                </label>
              }
              className="h-full flex-grow rounded bg-[#EAF2FF] p-4"
            >
              <Checkbox.Group
                className="gap-4"
                onChange={handleCheckboxChange}
              >
                <Checkbox
                  style={{ flexDirection: "row-reverse", alignItems: "center" }}
                  value={"all-maritalStatus"}
                  className={`rounded-md bg-[#ffff] p-1 text-[#344054] ${
                    checkedValues.includes("all-maritalStatus")
                      ? "border border-[#007EAF] text-[#53389E]"
                      : ""
                  }`}
                >
                  All
                </Checkbox>
                <Checkbox
                  style={{ flexDirection: "row-reverse", alignItems: "center" }}
                  value={"neverMarried"}
                  className={`rounded-md bg-[#ffff] p-1 text-[#344054] ${
                    checkedValues.includes("neverMarried")
                      ? "border border-[#007EAF] text-[#53389E]"
                      : ""
                  }`}
                >
                  Never Married(2000+)
                </Checkbox>
                <Checkbox
                  style={{ flexDirection: "row-reverse", alignItems: "center" }}
                  value={"divorced"}
                  className={`rounded-md bg-[#ffff] p-1 text-[#344054] ${
                    checkedValues.includes("divorced")
                      ? "border border-[#007EAF] text-[#53389E]"
                      : ""
                  }`}
                >
                  Divorced(88)
                </Checkbox>
                <Checkbox
                  style={{ flexDirection: "row-reverse", alignItems: "center" }}
                  value={"widowed"}
                  className={`rounded-md bg-[#ffff] p-1 text-[#344054] ${
                    checkedValues.includes("widowed")
                      ? "border border-[#007EAF] text-[#53389E]"
                      : ""
                  }`}
                >
                  Widowed(7)
                </Checkbox>
                <Checkbox
                  style={{ flexDirection: "row-reverse", alignItems: "center" }}
                  value={"Awaiting-Divorce"}
                  className={`rounded-md bg-[#ffff] p-1 text-[#344054] ${
                    checkedValues.includes("Awaiting-Divorce")
                      ? "border border-[#007EAF] text-[#53389E]"
                      : ""
                  }`}
                >
                  Awaiting Divorce(21)
                </Checkbox>
                <Checkbox
                  style={{ flexDirection: "row-reverse", alignItems: "center" }}
                  value={"annulled"}
                  className={`rounded-md bg-[#ffff] p-1 text-[#344054] ${
                    checkedValues.includes("annulled")
                      ? "border border-[#007EAF] text-[#53389E]"
                      : ""
                  }`}
                >
                  Annulled(21)
                </Checkbox>
              </Checkbox.Group>
            </Form.Item>
          </Col>
          <Col
            xs={24}
            sm={12}
            md={8}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <Form.Item
            name={"eatingHabits"}
              label={
                <label
                  style={{
                    color: `${isExclusive ? "#60457E" : "#007EAF"}`,
                    fontStyle: "Proxima-Nova-Semibold",
                    fontWeight: "bold",
                  }}
                >
                  Eating Habits
                </label>
              }
              className="h-full flex-grow rounded bg-[#EAF2FF] p-4"
            >
              <Checkbox.Group
                className="gap-4"
                onChange={handleCheckboxChange}
              >
                <Checkbox
                  style={{ flexDirection: "row-reverse", alignItems: "center" }}
                  value={"all-eatingHabits"}
                  className={`rounded-md bg-[#ffff] p-1 text-[#344054] ${
                    checkedValues.includes("all-eatingHabits")
                      ? "border border-[#007EAF] text-[#53389E]"
                      : ""
                  }`}
                >
                  All
                </Checkbox>
                <Checkbox
                  style={{ flexDirection: "row-reverse", alignItems: "center" }}
                  value={"veg"}
                  className={`rounded-md bg-[#ffff] p-1 text-[#344054] ${
                    checkedValues.includes("veg")
                      ? "border border-[#007EAF] text-[#53389E]"
                      : ""
                  }`}
                >
                  Veg(2000+)
                </Checkbox>
                <Checkbox
                  value={"eggetarian"}
                  style={{ flexDirection: "row-reverse", alignItems: "center" }}
                  className={`rounded-md bg-[#ffff] p-1 text-[#344054] ${
                    checkedValues.includes("eggetarian")
                      ? "border border-[#007EAF] text-[#53389E]"
                      : ""
                  }`}
                >
                  Eggetarian(66)
                </Checkbox>
                <Checkbox
                  style={{ flexDirection: "row-reverse", alignItems: "center" }}
                  value={"non-veg"}
                  className={`rounded-md bg-[#ffff] p-1 text-[#344054] ${
                    checkedValues.includes("non-veg")
                      ? "border border-[#007EAF] text-[#53389E]"
                      : ""
                  }`}
                >
                  Non-Veg(48)
                </Checkbox>
                <Checkbox
                  style={{ flexDirection: "row-reverse", alignItems: "center" }}
                  value={"jain"}
                  className={`rounded-md bg-[#ffff] p-1 text-[#344054] ${
                    checkedValues.includes("jain")
                      ? "border border-[#007EAF] text-[#53389E]"
                      : ""
                  }`}
                >
                  Jain(22)
                </Checkbox>
                <Checkbox
                  style={{ flexDirection: "row-reverse", alignItems: "center" }}
                  className={`rounded-md bg-[#ffff] p-1 text-[#344054] ${
                    checkedValues.includes("Vegan")
                      ? "border border-[#007EAF] text-[#53389E]"
                      : ""
                  }`}
                >
                  Vegan(11)
                </Checkbox>
              </Checkbox.Group>
            </Form.Item>
          </Col>
        </Row>

        <Form.Item
          name={"community"}
          label={
            <label
              style={{
                color: `${isExclusive ? "#60457E" : "#007EAF"}`,
                fontStyle: "Proxima-Nova-Semibold",
                fontWeight: "bold",
              }}
            >
              Community
            </label>
          }
          className="h-auto rounded bg-[#EAF2FF] p-4"
        >
          <Checkbox.Group className=" gap-4" onChange={handleCheckboxChange}>
            <Checkbox
              style={{ flexDirection: "row-reverse", alignItems: "center" }}
              className="rounded-md bg-[#ffff] p-1 text-[#344054]"
              value={"all"}
            >
              All
            </Checkbox>
            <Checkbox
              style={{ flexDirection: "row-reverse", alignItems: "center" }}
              value={"gujrati"}
              className={`rounded-md bg-[#ffff] p-1 text-[#344054] ${
                checkedValues.includes("gujrati")
                  ? "border border-[#007EAF] text-[#53389E]"
                  : ""
              }`}
            >
              Gujrati(37)
            </Checkbox>
            <Checkbox
              style={{ flexDirection: "row-reverse", alignItems: "center" }}
              value={"vaishnav"}
              className={`rounded-md bg-[#ffff] p-1 text-[#344054] ${
                checkedValues.includes("vaishnav")
                  ? "border border-[#007EAF] text-[#53389E]"
                  : ""
              }`}
            >
              Vaishnav - Van...(441)
            </Checkbox>
            <Checkbox
              style={{ flexDirection: "row-reverse", alignItems: "center" }}
              value={"Brahmin"}
              className={`rounded-md bg-[#ffff] p-1 text-[#344054] ${
                checkedValues.includes("Brahmin")
                  ? "border border-[#007EAF] text-[#53389E]"
                  : ""
              }`}
            >
              Brahmin - Audi...(412)
            </Checkbox>
            <Checkbox
              style={{ flexDirection: "row-reverse", alignItems: "center" }}
              value={"patel"}
              className={`rounded-md bg-[#ffff] p-1 text-[#344054] ${
                checkedValues.includes("patel")
                  ? "border border-[#007EAF] text-[#53389E]"
                  : ""
              }`}
            >
              Patel - Leva(397)
            </Checkbox>
            <Checkbox
              style={{ flexDirection: "row-reverse", alignItems: "center" }}
              value={"lohana"}
              className={`rounded-md bg-[#ffff] p-1 text-[#344054] ${
                checkedValues.includes("lohana")
                  ? "border border-[#007EAF] text-[#53389E]"
                  : ""
              }`}
            >
              Lohana(385)
            </Checkbox>

            <Checkbox
              style={{ flexDirection: "row-reverse", alignItems: "center" }}
              value={"Vania"}
              className={`rounded-md bg-[#ffff] p-1 text-[#344054] ${
                checkedValues.includes("Vania")
                  ? "border border-[#007EAF] text-[#53389E]"
                  : ""
              }`}
            >
              Vania(100)
            </Checkbox>
            
            <Checkbox
              style={{ flexDirection: "row-reverse", alignItems: "center" }}
              value={"suthar"}
              className={`rounded-md bg-[#ffff] p-1 text-[#344054] ${
                checkedValues.includes("suthar")
                  ? "border border-[#007EAF] text-[#53389E]"
                  : ""
              }`}
            >
              Suthar(32)
            </Checkbox>
          </Checkbox.Group>
        </Form.Item>
        {/* <Form.Item className="rounded-md border border-[#E4E7EC] p-4">
          <Row align="middle" justify="space-between">
            <Col className="flex items-center">
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#F4EBFF] p-4 text-[#007EAF]">
                <span>
                  <FiLayers className="text-2xl" />
                </span>
              </div>
              <span
                className={`rounded-md bg-[#ffff] p-1 text-[#344054] ${
                  selectedRadio === "relative"
                    ? "border border-[#007EAF] text-[#53389E]"
                    : ""
                }`}
              >
                Relative
              </span>
            </Col>
            <Col>
              <Radio
                onChange={handleRadioChange}
                value="relative"
                style={{ marginLeft: "auto" }}
              />
            </Col>
          </Row>
        </Form.Item> */}
      </Form>
    </Modal>
  );
};

export default DiscoverModal;
