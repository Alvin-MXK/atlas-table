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
        supported={[
          FeatureList.pagination,
          FeatureList.column_sorting,
          FeatureList.search_and_filter_within_columns,
          FeatureList.bulk_selection_and_editing,
          FeatureList.customize_style,
          FeatureList.column_pinning,
          FeatureList.switch_view_mode,
          FeatureList.hover_highlight,
          FeatureList.inline_editing,
        ]}
        develop_low={[
          FeatureList.download,
          FeatureList.global_search,
          FeatureList.arranging_and_customizing_columns,
        ]}
        develop_medium={[
          FeatureList.adjust_column_width,
          FeatureList.group,
          FeatureList.support_keyboard_control,
          FeatureList.show_detail_information_by_sideView,
        ]}
        develop_hight={[FeatureList.customize_group]}
        develop_experience={
          <>
            <div>优势</div>
            <ul>
              <li>
                1. 不需要引入新的Table库，在我们项目中已经引入了Ant design
              </li>
              <li>2. 社区活跃稳定</li>
              <li>3. 文档健全，也有很多demo，在网上也能找到很多相关的文档</li>
              <li>4. TypeScript支持程度高</li>
              <li>5. 支持我们需要的大多数功能，基础功能基本都支持</li>
              <li>6. 支持自定义样式</li>
            </ul>
            <div>不足</div>
            <ul>
              <li>1. 相比较antd pro,有些功能不支持，需要我们再做开发</li>
              <li>2. 没有React Table灵活，可扩展性高</li>
              <li>3. 有些功能，在和设计保持一致上，处理会比较麻烦</li>
            </ul>
          </>
        }
        summary={
          <div>
            它符合我们绝大数功能，除却一些和后端依赖性比较高的功能比如，download,global
            search, 还有一些并非Table组件需要提供的功能，比如Show detail
            information by SideView，我们需要开发的功能有五个，相比较antd
            pro只相差一个功能(Arranging and Customizing columns),相比较于React
            Table，工作量更少，相比较于Antd Pro
            Table更加灵活，反而言之，不如React Table灵活，不如Antd Pro
            Table功能强大，但是综合来看，是一个更好的选择。
          </div>
        }
      />
      <ul>
        <li>
          <a href="https://ant.design/components/table-cn/#components-table-demo-custom-filter-panel">
            1. search/filter支持自定义
          </a>
        </li>
        <li>2. 可以批量选中，会返回相应的数据，编辑功能需要结合使用场景</li>
        <li>
          3.
          自定义样式提供了一些能力，比如控制行样式，列样式，但是对于一些功能，比如filter,search,checkbox，以及固定列这些，需要我们去特殊处理
        </li>
        <li>
          <a href="https://blog.csdn.net/Sponge_bob_/article/details/120906278">
            4.调整列宽
          </a>
        </li>
        <li>
          <a href="https://ant.design/components/table-cn/#components-table-demo-edit-row">
            5.行内编辑
          </a>
        </li>
      </ul>
    </Fragment>
  );
}
