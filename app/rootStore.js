import { createStore, applyMiddleware, compose } from "redux";
import { fromJS } from "immutable";

import createSagaMiddleware, { END } from "redux-saga";

import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";


const sagaMiddleware = createSagaMiddleware({
    // sagaMonitor: SagaLogger,
});

export default function (initialState = {}) {
    // Create the store with two middlewares
    // 1. sagaMiddleware: Makes redux-sagas work
    const middlewares = [sagaMiddleware];

    const enhancers = [applyMiddleware(...middlewares)];

    // If Redux DevTools Extension is installed use it, otherwise use Redux compose
    const composeEnhancers = isDev() &&
        typeof window === "object" &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        : compose;

    const store = createStore(
        rootReducer(),
        fromJS(initialState),
        composeEnhancers(...enhancers)
    );

    store.runSaga = sagaMiddleware.run;
    store.asyncReducers = {};
    store.close = () => store.dispatch(END);

    var currentSagas = store.runSaga(rootSaga);

    // TODO reducers HMR
    // TODO saga HMR

    if (isDev()) {
        window.__store = store;
    }

    return store;
}

function isDev() {
    return process.env.NODE_ENV === "development"
}