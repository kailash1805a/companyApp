/**
 * Author : Kailash kumar
 */
import React from 'react';
import * as types from '../actions/actionTypes';
import initialState from './initialState';
/*
 * reducer for Company Page
 * */
export default function companyReducer(state = initialState.companies, actions) {
    switch (actions.type) {
       
        case types.LOAD_COMPANY:
         return actions.companies;

        default:
            return state;
    }
}