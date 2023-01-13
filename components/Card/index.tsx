import React from 'react'

type Props = {
    children: any;
}

type LinkProps = {
    children: any;
		link: string;
}

export const Card = (props: Props) => {
    return (
			<span className="my-auto slide-top-small">
        <div className="
					bg-primary 
					p-8 
					rounded-lg 
					shadow-2xl 
					m-4 
					mt-8
					transition 
					duration-300
					">
            { props.children }
        </div>
			</span>
    )
}

export const CardHeading = (props: Props) => {
    return (
			<>
        <span className="text-3xl text-white border-l-8 border-accent pl-4 font-extrabold">{ props.children }</span>
			</>
    )
}