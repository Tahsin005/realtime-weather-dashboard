import React from 'react'
import clsx from "clsx"

type Props = {
    children: React.ReactNode,
    title: string,
    className?: string,
    childrenClassName?: string,
}

export default function Card({ children, title, className, childrenClassName }: Props) {
    return (
        <div className={clsx(
            'p-4 rounded-xl bg-zinc-900 shadow-md flex flex-col gap-4',
            className
        )}>
            <h2 className='text-2xl font-semibold'>{title}</h2>
            <div className={childrenClassName}>
                {children}
            </div>
        </div>
    )
}