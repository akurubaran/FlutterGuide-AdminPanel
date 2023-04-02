import React from "react";

import CrudModule from "@/modules/CrudModule";
import WidgetForm from "@/forms/WidgetForm";

function Widget() {
  const entity = "widget";
  const searchConfig = {
    displayLabels: ["widgetName"],
    searchFields: "widgetName",
    outputValue: "_id",
  };

  const panelTitle = "Widget Panel";
  const dataTableTitle = "Widget List";
  const entityDisplayLabels = ["widgetName"];

  const readColumns = [
    {
      title: "Widget Name",
      dataIndex: "widgetName",
    },
    {
      title: "Widget Category",
      dataIndex: "widgetCategory",
    },
    {
      title: "Widget Description",
      dataIndex: "widgetDescription",
    },
  ];
  const dataTableColumns = [
    {
      title: "Widget Name",
      dataIndex: "widgetName",
    },
    {
      title: "Widget Category",
      dataIndex: "widgetCategory",
    },
    {
      title: "Widget Description",
      dataIndex: "widgetDescription",
    },
  ];

  const ADD_NEW_ENTITY = "Add New Widget";
  const DATATABLE_TITLE = "widget List";
  const ENTITY_NAME = "widget";
  const CREATE_ENTITY = "Create widget";
  const UPDATE_ENTITY = "Update widget";
  const config = {
    entity,
    panelTitle,
    dataTableTitle,
    ENTITY_NAME,
    CREATE_ENTITY,
    ADD_NEW_ENTITY,
    UPDATE_ENTITY,
    DATATABLE_TITLE,
    readColumns,
    dataTableColumns,
    searchConfig,
    entityDisplayLabels,
  };
  return (
    <CrudModule
      createForm={<WidgetForm />}
      updateForm={<WidgetForm isUpdateForm={true} />}
      config={config}
    />
  );
}

export default Widget;
