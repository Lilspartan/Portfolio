type Props = {
	link: string;
	type: "outline" | "filled";
	children: any;
	target?: "new" | "blank"
	className?: string;
	color?: "accent" | "danger";
}

export const Button = ({ link, type, children, target, className, color="accent" }:Props) => {
	return (
		<>
			{(type === "filled") ? (
				<a href={link} target={`${target ? `_${target}` : "_self"}`}
					className={`mx-2 mt-2 opacity-75 hover:opacity-100 rounded-lg bg-${color} py-2 px-6 text-white font-semibold text-${color} transition duration-500 text-background`}
				>{ children }</a>
			) : (
				<a href={link} target={`${target ? `_${target}` : "_self"}`}
					className={`mx-2 mt-2 opacity-75 hover:opacity-100 rounded-lg bg-background py-2 px-6 text-white font-semibold text-${color} transition duration-500 border-${color} border-2 hover:bg-${color} hover:text-primary`}
				>{ children }</a>
			)}
		</>
	)
}

export const ButtonContainer = (props:any) => {
	return (
		<div className="flex flex-row flex-wrap">
			{ props.children }
		</div>
	)
}