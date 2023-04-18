import React from "react";
import { DataGrid } from "@material-ui/data-grid";

const SalesTable = ({ list }) => {
  const columns = [
    {
      field: "product",
      headerName: "Product",
      minWidth: 100,
      flex: 0.5,
    },
    {
      field: "rate",
      headerName: "Rate",
      minWidth: 100,
      flex: 0.5,
    },
    {
      field: "quantity",
      headerName: "Quantity",
      minWidth: 100,
      flex: 0.5,
    },
    {
      field: "amount",
      headerName: "Amount",
      minWidth: 150,
      flex: 0.5,
    },
  ];

  return (
    <DataGrid
      rows={list}
      getRowId={(row) => {
        let index = list.findIndex(
          (value) =>
            value.amount == row?.amount && value.product == row?.product
        );
        return index;
      }}
      columns={columns}
      pageSize={10}
      disableSelectionOnClick
      className="productListTable"
      autoHeight
    />
  );
};

export default SalesTable;
