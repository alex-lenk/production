import {lazy} from 'react'

export const MainPageAsync = lazy(() => import('./MainPage'))

/*
export const MainPageAsync = lazy(() => new Promise(resolve => {
    // ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДЕЛАТЬ!!!!! ДЕЛАЕМ ДЛЯ КУРСА!
    setTimeout(() => resolve(import('./MainPage')), 1500)
}))
*/
