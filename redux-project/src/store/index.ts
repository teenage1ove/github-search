import { configureStore } from '@reduxjs/toolkit'
import { githubApi } from './github/github.api'
import {thunk} from 'redux-thunk';
export const store = configureStore({
    reducer: {
        [githubApi.reducerPath]: githubApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk, githubApi.middleware),
})