/**
 * Author: Kailash kumar
 */

import React, { PropTypes } from 'react';

const CompanyListPresentation = ({ companies }) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Company Name</th>
                    <th>Buisness ID</th>
                    <th>Registration Date</th>
                </tr>
            </thead>
            <tbody>
                {
                    companies.map(company =>
                        <tr>
                            <td>{company.name}</td>
                            <td>{company.businessId}</td>
                            <td>{company.registrationDate}</td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    );
};

CompanyListPresentation.PropTypes = {
    companies: PropTypes.array.isRequired
};

export default CompanyListPresentation;