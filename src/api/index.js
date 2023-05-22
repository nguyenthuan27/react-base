import { customAxios } from "../utils/custom-axios";

const serverEndpoint = process.env.REACT_APP_API_URL;
export const handleResponse = (res) => {
  const data = res?.data?.data;
  return data;
};

export const handleError = (err) => {
  console.error(err);
  throw err;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  //product

  getAllProduct: async (data) => {
    const res = await customAxios({
      method: "post",
      url: `${serverEndpoint}/api/v1/product/search`,
      data: data,
    });
    return res.data;
  },
  createProduct: async (data) => {
    const res = await customAxios({
      method: "post",
      url: `${serverEndpoint}/api/v1/product/create`,
      data: data,
    });
    return res.data;
  },
  updateProduct: async (data) => {
    const res = await customAxios({
      method: "put",
      url: `${serverEndpoint}/api/v1/product/update`,
      data: data,
    });
    return res.data;
  },

  getProductById: async (productId) => {
    const res = await customAxios({
      method: "get",
      url: `${serverEndpoint}/api/v1/product/getProductById?getProductById=${productId}`,
    });
    return res.data;
  },
  //order-dtl-controller-impl

  updateOrderdtl: async (id, data) => {
    const res = await customAxios({
      method: "put",
      url: `${serverEndpoint}/api/v1/orderdtl/update/${id}`,
      data: data,
    });
    return res.data;
  },
  deleteOrderdtl: async (id) => {
    const res = await customAxios({
      method: "delete",
      url: `${serverEndpoint}/api/v1/orderdtl/delete/${id}`,
    });
    return res.data;
  },
  getOrderdtlById: async (id) => {
    const res = await customAxios({
      method: "get",
      url: `${serverEndpoint}/api/v1/orderdtl/info/${id}`,
    });
    return res.data;
  },
  getClientRouter: async (data) => {
    const res = await customAxios({
      method: "post",
      url: `${serverEndpoint}/api/v1/client/getClientRouter`,
      data: data,
    });
    return res.data;
  },
};
