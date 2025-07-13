// ImportantDates.js
import React from 'react';
import './ImportantDates.css'; // Importing CSS for styling

const ImportantDates = () => {
    return (
        <section className="important-dates">
            <h2>Important Dates</h2>
            <table className="dates-table">
                <thead>
                    <tr>
                        <th>Topics</th>
                        <th>Dates</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Last date for submission of full-length paper</td>
                        <td>14th Dec 2024</td>
                    </tr>
                    <tr>
                        <td>Notification of acceptance</td>
                        <td>20th Dec 2024</td>
                    </tr>
                    <tr>
                        <td>Last date for camera Ready
                            Paper Submission
                        </td>
                        <td>26th Dec 2024</td>
                    </tr>
                    <tr>
                        <td>Last date of Registration</td>
                        <td>31st Dec 2024</td>
                    </tr>
                    <tr>
                        <td>Conference Date</td>
                        <td>10th-11th Jan 2025</td>
                    </tr>
                </tbody>
            </table>
        </section>
    );
};

export default ImportantDates;
