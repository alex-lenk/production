import {classNames} from 'shared/lib/classNames/classNames'
import cls from './AppLink.module.scss'
import {Link, LinkProps} from 'react-router-dom'

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    RED = 'red',
}

interface AppLinkProps extends LinkProps {
    className?: string
    theme?: AppLinkTheme
}

/*
import {FC} from 'react'
export const AppLink: FC<AppLinkProps> = (props) => {
старая версия FC, аналог ниже
* */
export const AppLink = (props: AppLinkProps) => {
    const {
        to,
        className,
        children,
        theme = AppLinkTheme.PRIMARY,
        ...otherProps
    } = props

    return (
        <Link
            to={to}
            className={classNames(cls.AppLink, {[cls[theme]]: true}, [className])}
            {...otherProps}
        >
            {children}
        </Link>
    )
}
