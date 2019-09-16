import React from "react";
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


export default DataGrid;
