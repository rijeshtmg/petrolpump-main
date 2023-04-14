import * as React from "react";
import DataTable from "react-data-table-component";

const columns = [
  {
    name: "S.No",
    selector: (row, index) => index + 1,
    style: {
      fontSize: "16px",
    },
  },
  {
    name: "Customer Name",
    selector: (row) => row?.name,
    style: {
      fontSize: "16px",
    },
  },
  {
    name: "Total Amount",
    selector: (row) => row?.total,
    style: {
      fontSize: "16px",
    },
  },
];
const customStyles = {
  headCells: {
    style: {
      fontWeight: "medium",
      fontSize: "20px",
      color: "blue"
    },
  },
};

// data provides access to your row data
const ExpandedComponent = ({ data }) => {
  return (
    <table style={{ width: "100%" }}>
      <thead>
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Quanitity</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {data.list.map((value, index) => {
          return (
            <tr key={index}>
              <td>{value.product}</td>
              <td>{value.rate}</td>
              <td>{value.quantity}</td>
              <td>{value.amount}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

const SalesTable = ({ lists }) => {
  return (
    <DataTable
      columns={columns}
      data={lists}
      expandableRows
      expandableRowsComponent={ExpandedComponent}
      customStyles={customStyles}
    />
  );
};
export default SalesTable;
