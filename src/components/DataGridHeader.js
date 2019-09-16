import React from 'react';



const DataGridHeader = ({ columns }) => {
    return(
        columns.map((single, i) => {
            return(
                
                <th key={i}>
                    {single}
                </th>
              
            )
        })
    )
};



export default DataGridHeader;