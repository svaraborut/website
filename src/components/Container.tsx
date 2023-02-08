import { HTMLAttributes } from 'react';
import classNames from 'classnames';


export function Container(
    {className, ...rest}: HTMLAttributes<HTMLDivElement>
) {
    return <div
        className={classNames(
            'px-8 md:px-16 w-full max-w-7xl mx-auto',
            className
        )}
        {...rest}
    />
}
