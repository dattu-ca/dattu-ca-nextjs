import React from "react";
import _ from "lodash";
import Box from "@mui/material/Box";

const MetasList = ({ items }) => {
  return (
    <ul>
      {items.map((item) => {
        return (
          <React.Fragment key={item.fields.slug}>
            <li>
              {item.fields.title}
              {item.fields.children && (
                <MetasList items={item.fields.children} />
              )}
            </li>
          </React.Fragment>
        );
      })}
    </ul>
  );
};

const MetasListContainer = ({ metaType, items }) => {
  return (
    <Box sx={{ my: 4 }}>
      <h1>{_.startCase(_.toLower(metaType))}</h1>
      <MetasList items={items} />
    </Box>
  );
};

export default MetasListContainer;
