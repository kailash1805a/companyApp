/**
 * Author: Kailash kumar
 */
// Base URL of API
const BASE_API_URL = 'http://avoindata.prh.fi/bis/v1?totalResults=false&maxResults=10&resultsFrom=0&companyRegistrationFrom=2014-02-28';

class CompanyApi {

    /**
     * To get list of company list based on business ID
     */
    static getAllCompanies(searchKey, searchType) {
        console.log(searchType);
        switch (searchType) {
            /**
             * get company list based on company name
             */
            case "1":
                return fetch(`${BASE_API_URL}&name=` + searchKey).then((response) => {
                    return response.json();
                }).then(response => {
                    return response.results;
                });
                break;

            /**
             * get company list based on buisness id
             */
            case "2":
                return fetch(`${BASE_API_URL}&businessId=` + searchKey).then((response) => {
                    return response.json();
                }).then(response => {
                    return response.results;
                });
                break;

            /**
             * get all companies information
             */
            default:
                return fetch(`${BASE_API_URL}`).then((response) => {
                    return response.json();
                }).then(response => {
                    return response.results;
                });
                break;
        }



    }
}

export default CompanyApi;