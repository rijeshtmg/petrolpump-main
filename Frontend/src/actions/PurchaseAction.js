import axios from "axios";
import {
  ADMIN_PURCHASE_FAIL,
  ADMIN_PURCHASE_REQUEST,
  ADMIN_PURCHASE_SUCCESS,
  ALL_PURCHASE_FAIL,
  ALL_PURCHASE_REQUEST,
  ALL_PURCHASE_SUCCESS,
  CLEAR_ERRORS,
  DELETE_PURCHASE_FAIL,
  DELETE_PURCHASE_REQUEST,
  DELETE_PURCHASE_SUCCESS,
  NEW_PURCHASE_FAIL,
  NEW_PURCHASE_REQUEST,
  NEW_PURCHASE_SUCCESS,
} from "../constans/PurchaseConstans";

export const getPurchase =
  (keyword = "", currentPage = 1, category) =>
  async (dispatch) => {
    try {
      dispatch({
        type: ALL_PURCHASE_REQUEST,
      });

      let link = `/api/v2/purchases?keyword=${keyword}&page=${currentPage}`;

      if (category) {
        link = `/api/v2/purchases?keyword=${keyword}&page=${currentPage}&category=${category}`;
      }
      const { data } = await axios.get(link);

      dispatch({
        type: ALL_PURCHASE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ALL_PURCHASE_FAIL,
        payload: error.response.data.message,
      });
    }
  };

// Create Product --------Admin
export const createPurchase = (purchaseData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_PURCHASE_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.post(
      `/api/v2/purchase/new`,
      purchaseData,
      config
    );

    dispatch({
      type: NEW_PURCHASE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NEW_PURCHASE_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get Admin Products -----Admin
export const getAdminPurchase = () => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_PURCHASE_REQUEST });

    const { data } = await axios.get("/api/v2/admin/purchases",{
      headers:{
        "authorization":localStorage.getItem("token")
      }
    });

    dispatch({
      type: ADMIN_PURCHASE_SUCCESS,
      payload: data.purchases,
    });
  } catch (error) {
    dispatch({
      type: ADMIN_PURCHASE_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Delete Product ------Admin
export const deletePurchase = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_PURCHASE_REQUEST });

    const { data } = await axios.delete(`/api/v2/purchase/${id}`);

    dispatch({
      type: DELETE_PURCHASE_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: DELETE_PURCHASE_FAIL,
      payload: error.response.data.message,
    });
  }
};

//   Clearing errors
export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};
