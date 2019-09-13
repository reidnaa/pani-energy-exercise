import React from "react";
import { arrayOf, shape, string } from "prop-types";
import DataGridHeader from "./DataGridHeader";
import DataGridRow from "./DataGridRow";

const DataGrid = ({ columns, rows }) => (
  <div>
    <table>
    <tbody>
      <tr>
        <DataGridHeader columns={columns} />
      </tr>
      
      {rows.map((r,i) => (
        <DataGridRow row={r} key={i}/>
      ))}
      </tbody>
    </table>
  </div>
);

const columnShape = shape({
  label: string,
  key: string
});

const rowShape = arrayOf(
  shape({
    key: string,
    value: string
  })
);

DataGrid.propTypes = {
  columns: arrayOf(columnShape).isRequired,
  rows: arrayOf(rowShape).isRequired
};

export default DataGrid;
