import React, { useEffect, useState } from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import "./index.scss";
import API from "../../api";
import {
  Col,
  Form,
  Collapse,
  Row,
  Table,
  Input,
  Button,
  Space,
  Select,
} from "antd";
import ProductModal from "./component/modal";
const { Panel } = Collapse;
const { Option } = Select;
const Product = () => {
  const [listProduct, setListProduct] = useState([]);
  const [isVisibleModal, setIsVisibleModal] = useState({
    type: false,
    action: "create",
  });
  const columns = [
    {
      title: "Mã sản phẩm",
      dataIndex: "productCd",
      key: "productCd ",
    },
    {
      title: "Tên sản phẩm",
      dataIndex: "productName",
      key: "productName",
    },
    {
      title: "Ngày tạo",
      dataIndex: "startDate",
      key: "startDate",
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Thao tác",
      key: "action",
      render: (text) => (
        <Space size="middle">
          <a
            onClick={() =>
              setIsVisibleModal({
                type: true,
                action: "edit",
                id: text.productId,
              })
            }
          >
            <EditOutlined />
          </a>
          <a>
            <DeleteOutlined />
          </a>
        </Space>
      ),
    },
  ];

  return (
    <>
      <div className="container">
        <Row className="product">
          <Col span={24} className="title">
            Quản lý loại sản phẩm
          </Col>
          <Col span={24} className="product-search">
            <Form layout="vertical" autoComplete="off">
              <Collapse>
                <Panel header="Tìm" key="1">
                  <Row span={24} className="subject-filter">
                    <Col span={5} className="filter">
                      <Form.Item
                        label="Tên sản phẩm"
                        style={{ paddingRight: 20 }}
                      >
                        <Input placeholder="Tên sản phẩm" />
                      </Form.Item>
                    </Col>
                  </Row>
                </Panel>
              </Collapse>
            </Form>
          </Col>
          <Col span={24} className="product-action">
            <Button
              onClick={() =>
                setIsVisibleModal({ type: true, action: "create" })
              }
              type="primary "
            >
              Thêm mới
            </Button>
            <Col className="sort-filter">
              <Select style={{ width: "200px" }} defaultValue="Bộ lọc">
                <Option value="10">10</Option>
                <Option value="15">15</Option>
              </Select>
            </Col>
          </Col>

          <Col span={24}>
            <Table
              dataSource={listProduct}
              columns={columns}
              // loading={loading}
              pagination={{
                pageSize: 10,
                showTotal: (total, range) =>
                  `${range[0]}-${range[1]} của ${total}`,
              }}
            />
          </Col>
        </Row>
      </div>
      <ProductModal
        setIsVisible={setIsVisibleModal}
        isVisible={isVisibleModal}
      />
    </>
  );
};
export default Product;
