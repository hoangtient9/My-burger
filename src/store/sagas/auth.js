import {put, delay} from 'redux-saga/effects';
import axios from 'axios';

import * as actions from '../actions';

export function* logoutSaga() {
    yield localStorage.removeItem('idToken');
    yield localStorage.removeItem('userId');
    yield localStorage.removeItem('expirationDate');
    yield put(actions.logoutSucceed())
}

export function* checkAuthTimeoutSaga(action) {
    yield delay(action.expirationTime);
    yield put(actions.authLogout())
}

export function* authUserSaga(action) {
    yield put(actions.authStart())
    const authData = {
        email: action.email,
        password: action.password,
        returnSecureToken: true
    }

    let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD2wwCJ_qjeaL8Am1hbRD1QfB11fJHPHTc';
    if (!action.isSignup) {
        url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD2wwCJ_qjeaL8Am1hbRD1QfB11fJHPHTc';
    }

    try {
            const response = yield axios.post(url, authData)
            const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000);
            yield localStorage.setItem('idToken', response.data.idToken);
            yield localStorage.setItem('expirationDate', expirationDate)
            yield localStorage.setItem('userId', response.data.localId)
            yield put(actions.authSuccess(response.data.idToken, response.data.localId))
            yield put(actions.checkAuthTimeout(response.data.expiresIn))
    } 
    catch(error) {
        yield put(actions.authFail(error.response.data.error))
    }

}

export function* authCheckStateSaga() {
    const token = yield localStorage.getItem('idToken');
    if (!token) {
        yield put(actions.authLogout())
    } else {
        const expirationDate = yield new Date(localStorage.getItem('expirationDate'))
        if (expirationDate <= new Date()) {
            yield put(actions.authLogout())
        } else {
            const userId = localStorage.getItem('userId')
            yield put(actions.authSuccess(token, userId))
            yield put(actions.checkAuthTimeout(expirationDate.getTime() - new Date().getTime() / 1000))
        }
    }
}