import { lazy } from 'react';

export const AboutPageAsync = lazy(async () => new Promise((resolve) => {
    // @ts-ignore
    // ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДЕЛАТЬ!!!!! ДЕЛАЕМ ДЛЯ КУРСА!
    setTimeout(() => { resolve(import('./AboutPage')); }, 1500);
}));
