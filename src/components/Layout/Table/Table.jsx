import { arrayOf, object } from 'prop-types';
import React from 'react';

const defaultRender = (value) => value;

const Table = ({ dataSource, columns }) => {
  return (
    <table className="table-auto shadow-md mt-10 w-ful w-lg">
      <thead className="bg-gray-800">
        <tr className="text-white">
          {columns.map((column) => (
            <th key={column.key} className="w-1/5 py-2">
              {column.title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="bg-white">
        {dataSource.map((item) => (
          <tr key={item.id} className="border hover:bg-gray-200">
            {columns.map((column) => {
              const render = column.render || defaultRender;
              return (
                <td
                  key={column.key}
                  className={`text-center px-4 py-2 ${column.className}`}
                >
                  {render(item[column.key], item)}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

Table.propTypes = {
  dataSource: arrayOf(object).isRequired,
  columns: arrayOf(object).isRequired,
};

export default Table;
