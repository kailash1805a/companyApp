/**
 * Author: Kailash kumar
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as companyAction from '../../actions/companyActions';

import CompanyListPresentation from './CompanyListPresentation';
import NoCompanyFound from './NoCompanyFound';


class CompanyPage extends React.Component {

    render() {
        /**
         * Getting list of companies from props
         */
        const { companies } = this.props;
        return (
            <div className="container">
                {
                (companies != undefined) ?
                    (companies.length) && (companies.length > 0) ? <CompanyListPresentation companies={companies} /> 
                    : <NoCompanyFound /> : <NoCompanyFound />
                }
            </div>
        );
    }
}

CompanyPage.PropTypes = {
    companies: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        companies: state.companyReducer
    };
}


function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(companyAction, dispatch)
    };
}

/**
 * connecting a react component  to the redux store
 */
export default connect(mapStateToProps, mapDispatchToProps)(CompanyPage);