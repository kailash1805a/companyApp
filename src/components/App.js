/**
 * Main company application module handle all templates
 * Author: Kailash kumar
 */
import React, { PropTypes } from 'react';
import Header from './common/Header';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as companyActions from '../actions/companyActions';
import { browserHistory } from 'react-router';

class App extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            searchWord: '',
            searchType: 0
        };
        this.onSearch = this.onSearch.bind(this);
        this.updateInputValue = this.updateInputValue.bind(this);
        this.updateTypeValue = this.updateTypeValue.bind(this);
    }

    componentDidMount() {
        this.props.actions.loadCompanies(null, this.state.searchType);
        browserHistory.push('/companies');
    }

    /*
     *onSearch function is triggered on click of the search button.
     * It fetch new company list based on the searchWord.
     * */
    onSearch() {
        this.props.actions.loadCompanies(this.state.searchWord, this.state.searchType);
        browserHistory.push('/companies');
    }

    /**
     *updateInputValue function is triggered onChange of the search input field and
     * update the searchWord in the state.
     */
    updateInputValue(event) {
        this.setState({
            searchWord: event.target.value
        });
    }

    /**
     * set search type to state
     */
    updateTypeValue(event) {
        this.setState({
            searchType: event.target.value
        });
    }
    render() {
        return (
            <div className="container">
                <h1>Company information</h1>
                <Header value={this.state.searchWord} onChange={this.updateInputValue} onChangeType={this.updateTypeValue} onSearch={this.onSearch} />
                {this.props.children}
            </div>
        );
    }
}

App.PropTypes = {
    children: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
    searchWord: PropTypes.string
};

//to subscribe to store updates
function mapStateToProps(state, ownProps) {
    return {
        company: state.companyReducer
    };
}
//to bind action creators
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(companyActions, dispatch)
    };
}
//Connecting a React component to the Redux store
export default connect(mapStateToProps, mapDispatchToProps)(App);