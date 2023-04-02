import React, { useRef, useState } from "react";
import { Form, Input, InputNumber, Space, Divider, Row, Col } from "antd";

import { Layout, Breadcrumb, Statistic, Progress, Tag } from "antd";

import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";

import { DashboardLayout } from "@/layout";
import RecentTable from "@/components/RecentTable";

export default function Dashboard() {
  const customerColumns = [
    {
      title: "Customer Name",
      dataIndex: "cName",
    },
    {
      title: "Customer Mobile Number",
      dataIndex: "cMobileNumber",
    },
  ];

  const wifiColumns = [
    {
      title: "Restaurant Name",
      dataIndex: "restaurantName",
    },

    {
      title: "Router Name",
      dataIndex: "routerName",
    },

    {
      title: "Router Password",
      dataIndex: "wifiPassword",
    },
  ];

  return (
    <DashboardLayout>
      <h2>Recent Customers</h2>
      <RecentTable entity={"customer"} dataTableColumns={customerColumns} />
      <br /><br />
      <h2>WiFi-Password</h2>
      <RecentTable entity={"wifi"} dataTableColumns={wifiColumns} />
    </DashboardLayout>
  );
}
