import React from 'react'

type Props = {
    children: any;
	full?: boolean;
}

type LinkProps = {
    children: any;
		link: string;
}

export const Card = (props: Props) => {
    return (
		<div className={`my-auto slide-top-small ${props.full && "h-full"}`}>
			<div className={`
						bg-primary 
						p-8 
						rounded-lg 
						shadow-2xl 
						m-4 
						transition 
						duration-300
						${props.full && "h-full"}
						`}>
				{ props.children }
			</div>
		</div>
    )
}

export const CardHeading = (props: Props) => {
    return (
			<>
        <span className="text-3xl text-white border-l-8 border-accent pl-4 font-extrabold">{ props.children }</span>
			</>
    )
}