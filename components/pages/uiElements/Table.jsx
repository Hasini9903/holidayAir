import React from "react";

export default function Table() {
  return (
    <div className="col-lg-6">
      <div className="text-22 fw-500">Table</div>

      <table className="table-4 w-1/1 mt-30">
        <thead className="bg-light-1">
          <tr>
            <th>Description</th>
            <th>Hour</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Design UX and UI</td>
            <td>14</td>
            <td>3</td>
          </tr>

          <tr>
            <td>Design UX and UI</td>
            <td>14</td>
            <td>3</td>
          </tr>

          <tr>
            <td>Design UX and UI</td>
            <td>14</td>
            <td>3</td>
          </tr>

          <tr>
            <td>Design UX and UI</td>
            <td>14</td>
            <td>3</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
