import { configureStore } from '@reduxjs/toolkit'
import blogReducer from './blogSlice'

export const store = configureStore({
    reducer: {
        blog: blogReducer
    }
})

// هذا النوع راح نحتاجه لاحقاً بالـ useSelector

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
