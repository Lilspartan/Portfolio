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
			<span className="my-auto">
        <div className="bg-primary p-12 rounded-lg shadow-2xl m-4 transition duration-306">
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

export const LinkCard = (props: LinkProps) => {
	return (
			<a href={props.link} target="_new" className = "my-auto">
        <div className="bg-primary p-12 rounded-lg hover:shadow-2xl m-4 transition duration-300 hover:bottom-16">
					{ props.children }
				</div>
			</a>
    )
}

{/*<p className="mt-8">
						I'm a {calculateAge(1094716861000)} year old full-stack developer from Washington
					</p>*/}