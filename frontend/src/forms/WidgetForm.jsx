import React, { useRef, useState } from "react";
import { Button, Divider, Form, Input, Radio, Select, Space } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const { TextArea } = Input;

export default function WidgetForm({ isUpdateForm = false }) {
  /* Dropdown Button to Select Category */
  const [widgetCategory, setWidgetCategory] = useState([
    "WIDGET OF THE WEEK"
  ]);
  const [name, setName] = useState("");
  const inputRef = useRef(null);
  const onNameChange = (event) => {
    setName(event.target.value);
  };
  const addItem = (e) => {
    e.preventDefault();
    setRestaurant([...restaurants, name || `New item ${index++}`]);
    setName("");
    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  };
  /* Dropdown Button Ends */

  return (
    <>
      <Form.Item label="Widget Name" name="widgetName">
        <Input />
      </Form.Item>
      <Form.Item
        label="Widget Category"
        name="widgetCategory"
        rules={[
          {
            required: true,
          },
        ]}>
        <Select
          placeholder="Select Restaurant"
          dropdownRender={(menu) => (
            <>
              {menu}
              <Divider
                style={{
                  margin: "8px 0",
                }}
              />
              <Space
                style={{
                  padding: "0 8px 4px",
                }}>
                <Input
                  placeholder=""
                  ref={inputRef}
                  value={name}
                  onChange={onNameChange}
                />
                <Button icon={<PlusOutlined />} onClick={addItem}>
                  Add New Category
                </Button>
              </Space>
            </>
          )}
          options={widgetCategory.map((item) => ({
            label: item,
            value: item,
          }))}
        />
      </Form.Item>
      
      <Form.Item label="Widget Description" name="widgetDescription">
        <TextArea rows={4} />
      </Form.Item>

      <Form.Item label="Widget Code" name="widgetCode">
        <TextArea rows={14} />
      </Form.Item>

      <Form.Item label="Widget YouTube URL" name="widgetURL">
        <Input />
      </Form.Item>
    </>
  );
}
