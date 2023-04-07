import {
  ALL_PURCHASE_FAIL,
  ALL_PURCHASE_REQUEST,
  ALL_PURCHASE_SUCCESS,
  CLEAR_ERRORS,
  ADMIN_PURCHASE_REQUEST,
  ADMIN_PURCHASE_SUCCESS,
  ADMIN_PURCHASE_FAIL,
  NEW_PURCHASE_REQUEST,
  NEW_PURCHASE_SUCCESS,
  NEW_PURCHASE_FAIL,
  NEW_PURCHASE_RESET,
  DELETE_PURCHASE_REQUEST,
  DELETE_PURCHASE_SUCCESS,
  DELETE_PURCHASE_RESET,
} from "../constans/PurchaseConstans";

export const purchasesReducer = (state = { purchases: [] }, action) => {
  switch (action.type) {
    case ALL_PURCHASE_REQUEST:
    case ADMIN_PURCHASE_REQUEST:
      return {
        loading: true,
        purchases: [],
      };
    case ALL_PURCHASE_SUCCESS:
      return {
        loading: false,
        purchases: action.payload.purchases,
        purchasesCount: action.payload.purchasesCount,
        resultPerPage: action.payload.resultPerPage,
        filteredProductsCount: action.payload.filteredProductsCount,
      };

    case ADMIN_PURCHASE_SUCCESS:
      return {
        loading: false,
        purchases: action.payload,
      };

    case ALL_PURCHASE_FAIL:
    case ADMIN_PURCHASE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

// New Product ----Admin
export const newPurchaseReducer = (state = { purchase: {} }, action) => {
  switch (action.type) {
    case NEW_PURCHASE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case NEW_PURCHASE_SUCCESS:
      return {
        loading: false,
        success: action.payload.success,
        purchase: action.payload.purchase,
      };
    case NEW_PURCHASE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case NEW_PURCHASE_RESET:
      return {
        ...state,
        success: false,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

// Delete Product
export const deletePurchaseReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_PURCHASE_REQUEST:
    case DELETE_PURCHASE_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: action.payload,
      };

    case DELETE_PURCHASE_RESET:
      return {
        ...state,
        isDeleted: false,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
