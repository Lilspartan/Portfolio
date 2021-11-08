import React from 'react'

type Props = {
    children: any;
}

export const Card = (props: Props) => {
    return (
        <div className = "bg-primary p-16 rounded-lg">
            { props.children }
        </div>
    )
}

export const CardHeading = (props: Props) => {
    return (
        <span className = "text-3xl text-white border-l-8 border-accent pl-4 font-extrabold">{ props.children }</span>
    )
}