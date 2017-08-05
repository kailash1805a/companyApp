/**
 * Action is called for loading comapny information
 */
import * as types from './actionTypes';
import companyAPI from '../api/CompanyApi';

/**
 * Get all company list
 */
export function loadCompany(companies) {
    return { type: types.LOAD_COMPANY, companies };
}


/**
 * Load All companies information 
 */
export function loadCompanies(searchKey, searchType) {

    return function (dispatch) {
        return companyAPI.getAllCompanies(searchKey, searchType).then(companies => {
            dispatch(loadCompany(companies));
        }).catch(error => {
            throw(error);
        })
    }
}
