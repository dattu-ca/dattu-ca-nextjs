import React from "react";

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

export default MetasList;
