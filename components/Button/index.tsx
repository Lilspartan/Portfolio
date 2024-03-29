import { MouseEventHandler } from 'react'
import classnames from 'classnames'

type Props = {
	link?: string;
	type?: "outline" | "filled" | "block" | "icon";
	children: any;
	target?: "new" | "blank"
	className?: string;
	color?: "accent" | "danger" | "success" | "warning" | "info" | "light";
	click?: MouseEventHandler;
  glow?: boolean;
  delay?: string;
  icon?: "external" | "info";
}

export const Button = ({ delay="0", glow=false, link, type="outline", children, target, className, color="accent", click=()=>{ console.log("clicked") } }:Props) => {
	const buttonClasses = classnames([
		"cursor-pointer",
		"py-2",
		"px-4",
		"font-semibold",
		"transition",
		"duration-200",
		"rounded-lg",
		"hover:opacity-100",
		"shadow",
		"hover:shadow-2xl",
		// "whitespace-nowrap",
		"float-left",
		// "clear-left"
		"block",
		"w-full",
		glow ? "glow" : "",
		"button",
		"select-none"
	])
	
	switch (type) {
		case "filled":
			return (
				<a onClick = {click} href={link} target={`${target ? `_${target}` : "_self"}`}
					className={classnames([
						buttonClasses,
						`bg-${color}`,
						"text-background",
						"opacity-50",
						className
					])}
				>{ children }</a>
			)
		case "outline":
			return (
				<a data-m-delay = {delay} onClick = {click} href={link} target={`${target ? `_${target}` : "_self"}`}
					className = {classnames([
						buttonClasses,
						"bg-background",
						`border-${color}`,
						"border-2",
						`hover:bg-accent`,
						"hover:text-primary",
						`text-${color}`,
						className
					])}
				>{ children }</a>
			)
			break;
		case "block":
			return (
				<a onClick = {click} href={link} target={`${target ? `_${target}` : "_self"}`}
					className = {classnames([
						buttonClasses,
						"bg-background",
						`border-${color}`,
						"border-2",
						`hover:bg-${color}`,
						"hover:text-primary",
						`text-${color}`,
            "block",
						className
					])}
				>{ children }</a>
			)
			break;
		case "icon":
			return (
				<a onClick = {click} href={link} target={`${target ? `_${target}` : "_self"}`}
					className = {classnames([
						buttonClasses,
						"bg-background",
						`border-${color}`,
						"border-2",
						`hover:bg-${color}`,
						"hover:text-primary",
						`text-${color}`,
            			"block", "icon",
						className
					])}
				>{ children }</a>	
			)
	}
}

export const IconButton = ({ icon = "external", delay="0", glow=false, link, type="outline", children, target, className, color="accent", click=()=>{ console.log("clicked") } }:Props) => {
	const buttonClasses = classnames([
		"cursor-pointer",
		"py-2",
		"px-4",
		"font-semibold",
		"transition",
		"duration-500",
		"rounded-lg",
		"hover:opacity-100",
		"shadow",
		"hover:shadow-2xl",
		// "whitespace-nowrap",
		"float-left",
		// "clear-left"
		"block",
		"w-full",
		glow ? "glow" : "",
		"button",
		"select-none",
		"bg-background",
		`border-${color}`,
		"border-2",
		`hover:bg-${color}`,
		"hover:text-primary",
		`text-${color}`,
		"block",
		"icon",
		icon === "external" ? "external" : "info"
	])
	
	return (
		<a onClick = {click} href={link} target={`${target ? `_${target}` : "_self"}`}
			className = {classnames([
				buttonClasses
			])}
		>{ children }</a>
	)	
}

export const ButtonContainer = (props:any) => {
	return (
		<div className="flex flex-row flex-wrap">
			{ props.children }
		</div>
	)
}