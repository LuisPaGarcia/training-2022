import React from "react";

export default function TableComponent({ children }) {
  return (
    <table>
      <thead>
        <tr>
          <td>Last Render</td>
          <td>Email</td>
          <td>Name</td>
          <td>Subscribed</td>
          <td>Activated</td>
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
}
