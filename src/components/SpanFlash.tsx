import { HTMLAttributes } from 'react';
import classNames from 'classnames';


export function SpanFlash(
    {className, ...rest}: HTMLAttributes<HTMLSpanElement>
) {
    return <span
        className={classNames(
            'text-transparent bg-clip-text bg-gradient-to-r',
            'from-pink-600 to-fuchsia-600',
            className
        )}
        {...rest}
    />
}
