import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IUser, ServerResponse } from '../../models/models'

export const githubApi = createApi({
    reducerPath: 'github/api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.github.com/'
    }),
    endpoints: build => ({
        searchUsers: build.query<IUser[],string>({ // 1 дженерик указывает что мы получаем от сервера, 2 - какой параметр хотим принимать чтобы получить запрос
            query: (search: string) => ({
                url: `search/users`,
                params: {
                    q: search,
                    per_page: 10 // кол-во получаемых элементов
                }
            }), // можем вернуть строчку, а можем вернуть объект (в нем настраиваем доп. параметры)
            transformResponse: (response: ServerResponse<IUser>) => response.items
        })
    })
})

export const {useSearchUsersQuery} = githubApi