import React from "react";

const DataGridRow = ({ row }) => {
  return (
      <tr>
        <td> {row.date}</td>
        <td>({row.inputs.join(', ')})</td>
        <td>{row.r11}</td>
        <td>{row.r12}</td>
        <td>{row.r13}</td>
        <td>{row.r21}</td>
        <td>{row.r22}</td>
        <td>{row.r23}</td>
      </tr>
  );
};

DataGridRow.propTypes = {
    // row: rowShape.isRequired, // not to sure what rowShape is 
};

export default DataGridRow;
