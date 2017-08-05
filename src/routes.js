/**
 * Setting up routes for application
 * Author: Kailash kumar
 */
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import CompanyPage from './components/company/companyPage';

export default (
    <Route path="/" component={App}>
       
          <Route path="/companies" component={CompanyPage}/>
    </Route>
);