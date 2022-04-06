import React, { Fragment, useState } from "react";
import { DevelopExperienceComponent } from "../../components/DevelopExperienceComponent";
import { FeatureList } from "../../constants";
// import { ColumnsType } from "antd/es/table";
import "./index.css";
import { Radio, Table } from "antd";
import { UserDTO } from "../../types";
import { users } from "../../constants";
import { ColumnsType } from "antd/lib/table/interface";
import { SizeType } from "antd/lib/config-provider/SizeContext";

const columnConfig: ColumnsType<UserDTO> = [
  {
    dataIndex: "id",
    title: "Id",
    width: 60,
    align: "center",
    fixed: "left",
    className: "column_id",
  },
  {
    dataIndex: "firstName",
    title: "First Name",
    width: 200,
    fixed: "left",
  },
  {
    dataIndex: "lastName",
    title: "Last Name",
    width: 200,
    render: (props) => {
      return <div>123</div>;
    },
  },
  {
    dataIndex: "city",
    title: "City",
    width: 200,
    filters: [
      {
        text: "New Gust",
        value: "New Gust",
      },
      {
        text: "New Amieshire",
        value: "New Amieshire",
      },
      {
        text: "Lefflerstad",
        value: "Lefflerstad",
      },
    ],
    filterSearch: true,
    onFilter: (value, record) => record.city.indexOf(value as string) === 0,
  },
  {
    dataIndex: "street",
    title: "Street",
    width: 200,
  },
  {
    dataIndex: "companyName",
    title: "Company Name",
    width: 200,
    ellipsis: true,
  },
  {
    dataIndex: "email",
    title: "Email",
    width: 200,
    ellipsis: true,
  },
  {
    dataIndex: "zipCode",
    title: "Zip Code",
    width: 200,
  },
  {
    dataIndex: "stars",
    title: "Stars",
    width: 200,
    sorter: (a, b) => a.stars - b.stars,
  },
  {
    dataIndex: "followers",
    title: "Followers",
    width: 200,
  },
  {
    dataIndex: "",
    title: "Action",
    width: 200,
    fixed: "right",
    render: (rowData: UserDTO) => {
      function handleAction() {
        alert(`${JSON.stringify(rowData, null, 4)}`);
      }
      return (
        <span>
          <a onClick={handleAction}> Edit </a> |{" "}
          <a onClick={handleAction}> Remove </a>
        </span>
      );
    },
  },
];

export function AntdTable() {
  const [selectedRowKeys, setSelectedRowKeys] = useState<string[]>([]);
  const [size, setSize] = useState<SizeType>("large");

  const onSelectChange = (selectedRowKeys: any) => {
    setSelectedRowKeys(selectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  return (
    <Fragment>
      <div className="table">
        <h3>Overall: 这是一个集成程度中等，定制化中等的Table组件</h3>
        {selectedRowKeys.length > 0 && (
          <div>已选中id为：{selectedRowKeys.join(",")}数据</div>
        )}
        <div style={{ padding: "10px 0" }}>
          Switch view mode{`  `}
          <Radio.Group value={size} onChange={(e) => setSize(e.target.value)}>
            <Radio.Button value="large">Default</Radio.Button>
            <Radio.Button value="middle">Middle</Radio.Button>
            <Radio.Button value="small">Small</Radio.Button>
          </Radio.Group>
        </div>
        <Table
          columns={columnConfig}
          dataSource={users}
          scroll={{ x: 1200 }}
          pagination={{
            pageSize: 5,
          }}
          rowKey="id"
          rowSelection={rowSelection}
          rowClassName={(record, index) => {
            return index === 0 ? "row" : "";
          }}
          size={size}
        />
      </div>
      <DevelopExperienceComponent
        develop_low={[
          FeatureList.bulk_selection_and_editing,
          FeatureList.column_sorting,
          FeatureList.customize_style,
          FeatureList.pagination,
          FeatureList.search_and_filter_within_columns,
          FeatureList.column_pinning,
          FeatureList.hover_highlight,
          FeatureList.switch_view_mode,
        ]}
        develop_medium={[FeatureList.inline_editing]}
        develop_hight={[
          FeatureList.adjust_column_width,
          FeatureList.arranging_and_customizing_columns,
          FeatureList.customize_group,
          FeatureList.group,
          FeatureList.global_search,
          FeatureList.support_keyboard_control,
        ]}
        develop_hight_cost={["high", "medium", "medium", "low", "low", "low"]}
        develop_experience={
          <>
            <h3>优势</h3>
            <ul>
              <div>
                1.支持我们需要的大多数功能，支持样式自定义，可快速实现我们需要的大多数功能。
              </div>
              <div>
                2. 从开发成本，扩展性，和设计保持一致性上去考虑，更加均衡
              </div>
              <div>
                3. 在我们项目中已经引入了Ant design UI
                框架，不需要引入新的Table库
              </div>
              <div>4. 社区活跃稳定，文档健全，也有很多demo，网上相关文档多</div>
              <div>5. TypeScript支持程度高</div>
            </ul>
            <h3>劣势</h3>
            <ul>
              <div>1. 相比较antd pro,有些功能不支持，需要我们再做开发</div>
              <div>2. 没有React Table灵活，可扩展性高</div>
              <div>3. 有些功能，在和设计保持一致上，处理会比较麻烦</div>
            </ul>
          </>
        }
      />
      {/* <ul>
        <div>
          <a href="https://ant.design/components/table-cn/#components-table-demo-custom-filter-panel">
            1. search/filter支持自定义
          </a>
        </div>
        <div>2. 可以批量选中，会返回相应的数据，编辑功能需要结合使用场景</div>
        <div>
          3.
          自定义样式提供了一些能力，比如控制行样式，列样式，但是对于一些功能，比如filter,search,checkbox，以及固定列这些，需要我们去特殊处理
        </div>
        <div>
          <a href="https://blog.csdn.net/Sponge_bob_/article/details/120906278">
            4.调整列宽
          </a>
        </div>
        <div>
          <a href="https://ant.design/components/table-cn/#components-table-demo-edit-row">
            5.行内编辑
          </a>
        </div>
      </ul> */}
    </Fragment>
  );
}
