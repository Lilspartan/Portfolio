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
						shadow-2xl
						transition
						duration-300
						border border-transparent
						hover:shadow-[0_0_25px_rgba(192,132,252,0.2)]
						hover:border-accent/30
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