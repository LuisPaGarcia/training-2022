import React from "react";
export default function RowComponent({
  id,
  email,
  name,
  subscribed,
  active,
  handleOnChange,
}) {
  return (
    <tr>
      <td style={{ color: "red" }}>{new Date().toISOString()}</td>
      <td>{email}</td>
      <td>{name.substring(0, 10)}</td>
      <td>
        <input
          id="subscribed"
          type="checkbox"
          onChange={(event) => handleOnChange(event, id)}
          checked={subscribed}
        />
      </td>
      <td>
        <input
          id="active"
          type="checkbox"
          onChange={(event) => handleOnChange(event, id)}
          checked={active}
        />
      </td>
    </tr>
  );
}
