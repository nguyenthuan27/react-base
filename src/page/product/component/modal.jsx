import { useEffect, useState } from "react";
import {
  Button,
  Form,
  Input,
  InputNumber,
  Modal,
  Radio,
  Row,
  Col,
  Select,
  DatePicker,
} from "antd";
import API from "../../../api";
import { async } from "q";
import moment from "moment/moment";
const { Option } = Select;
const ProductModal = (props) => {
  const { isVisible, setIsVisible } = props;
  const [form] = Form.useForm();
  const layout = {
    labelCol: { span: 20 },
    wrapperCol: { span: 24 },
  };

  const onFinish = (value) => {
    let data = {
      //   id: value.productid || "",
      //   productName: value.productname,
      //   note: value.note,
      //   status:
      //     String(value.status) === "true"
      //       ? true
      //       : value.status === undefined
      //       ? true
      //       : false,
    };
    if (isVisible.action === "create") {
      createOption(data);
    } else {
      updateOption(data);
    }
  };

  const createOption = async (data) => {
    // let create = await API.createProduct(data);
    // if (create.message === "SUCCESS") {
    //   toast.success(create.message);
    //   getProducts();
    //   setIsVisible({ type: false, action: isVisible.action });
    // } else {
    //   toast.error(create.message);
    // }
  };

  const updateOption = async (data) => {
    // let update = await API.updateProduct(data);
    // if (update.message === "SUCCESS") {
    //   toast.success(update.message);
    //   getProducts();
    //   setIsVisible({ type: false, action: isVisible.action });
    // } else {
    //   toast.error(update.message);
    // }
  };

  const getProductById = async (productId) => {
    console.log("productId", productId);
    const res = await API.getProductById(productId);
    return res.data;
  };
  useEffect(() => {
    if (isVisible.id) {
      (async () => {
        const productItem = await getProductById(isVisible.id);
        console.log(productItem);
        form.setFieldsValue({
          productid: productItem.productId,
          alarmThreshold: productItem.alarmThreshold,
          endDate: productItem.endDate,
          expiredIn: productItem.expiredIn,
          productCategoryId: productItem.productCategoryId,
          productCd: productItem.productCd,
          productName: productItem.productName,
          startDate: moment(productItem.startDate),
          status: productItem.status,
        });
      })();
    }
  }, [isVisible.type]);
  const dateFormat = "YYYY/MM/DD hh:ss";
  return (
    <>
      <Modal
        title={
          isVisible.action === "create"
            ? "Thêm mới sản phẩm"
            : "Cập nhật sản phẩm"
        }
        centered
        visible={isVisible.type}
        onCancel={() => setIsVisible({ type: false, action: isVisible.action })}
        footer={null}
        width={"50vw"}
      >
        <Form
          {...layout}
          form={form}
          name="nest-messages"
          onFinish={onFinish}
          layout="vertical"
        >
          <Row
            gutter={{
              xs: 8,
              sm: 16,
              md: 24,
              lg: 59,
            }}
            justify="left"
          >
            {isVisible.action === "create" ? (
              <></>
            ) : (
              <>
                <Col>
                  <Form.Item
                    name="productid"
                    label="Product ID"
                    // rules={[{ required: true }]}
                  >
                    <Input disabled />
                  </Form.Item>
                </Col>
              </>
            )}
            <Col>
              <Form.Item
                name="productName"
                label="Tên sản phẩm"
                rules={[
                  { required: true },
                  {
                    pattern: new RegExp(
                      /^[a-zA-Z][^-_!@#\$%\^\(\)-\+]{1,}[^\s]$/g,
                      ""
                    ),
                    message:
                      "Tên sản sản phẩm không có ký tự đặc biệt và từ 2 chữ trở nên.",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col>
              <Form.Item
                name="productCategoryId"
                label="Product Category Id"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col>
              <Form.Item
                name="expiredIn"
                label="expiredIn"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col>
              <Form.Item
                name="productCd"
                label="productCd"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col>
              <Form.Item
                name="startDate"
                label="startDate"
                rules={[{ required: true }]}
              >
                <DatePicker showTime format={dateFormat} />
              </Form.Item>
            </Col>
            <Col>
              <Form.Item label="Trạng thái" name="status">
                <Radio.Group defaultValue="true">
                  <Radio value="0">Hoạt động</Radio>
                  <Radio value="1">Không hoạt động</Radio>
                </Radio.Group>
              </Form.Item>
            </Col>
          </Row>

          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 9 }}>
            {isVisible.action == "create" ? (
              <>
                <Button type="primary" htmlType="submit">
                  Tạo
                </Button>
              </>
            ) : (
              <>
                <Button type="primary" htmlType="submit">
                  Sửa
                </Button>
              </>
            )}
            <Button
              type="primary"
              onClick={() =>
                setIsVisible({ type: false, action: isVisible.action })
              }
              style={{ marginLeft: "5px" }}
            >
              Trở lại
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
export default ProductModal;
