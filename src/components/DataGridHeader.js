import React from 'react';
// import { shape } from 'prop-types';


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

// DataGridHeader.propTypes = {
// //   columns: columnShape.isRequired, // not to sure what columnShape is 
// };

export default DataGridHeader;