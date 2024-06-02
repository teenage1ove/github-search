import { configureStore } from '@reduxjs/toolkit'
import { githubApi } from './github/github.api'
import {thunk} from 'redux-thunk';
import { setupListeners } from '@reduxjs/toolkit/query'
import { githubReducer } from './github/github.slice'

export const store = configureStore({
    reducer: {
        [githubApi.reducerPath]: githubApi.reducer,
        github: githubReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk, githubApi.middleware),
})

setupListeners(store.dispatch)

// для понимания с какими данными мы работаем в store

export type RootState = ReturnType<typeof store.getState>