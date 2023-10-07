import React from 'react';
import './Helplines.css'; // Import the CSS file for styling

function Helplines() {
  return (
    <div className="box">
      <table>
      <thead>
        <tr>
          <th colspan="2">Emergency Numbers</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Police</td>
          <td>100</td>
        </tr>
        <tr>
          <td>Fire Station</td>
          <td>101</td>
        </tr>
        <tr>
          <td>Ambulance</td>
          <td>108</td>
        </tr>
        <tr>
          <td>Flood Helpline</td>
          <td>1234567890</td>
        </tr>
        <tr>
          <td>COVID Helpline</td>
          <td>1987654321</td>
        </tr>
        <tr>
          <td>Nipah Helpline</td>
          <td>1223334444</td>
        </tr>
      </tbody>
    </table>
    </div>
  );
}

export default Helplines;