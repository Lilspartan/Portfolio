import { Button, Card, IconButton } from '../../components';

import { projects, charity } from '../../utils/projects';

const animationGap = 0.2;

const Landing = () => {
	return (
		<div className="
			bg-background
			h-full text-center
		">
			<div className = "flex flex-col text-white p-4">
                <div data-m = "bounce-down" className = "" data-m-duration = {animationGap}>
                    <Card full>
                        <div className = "flex flex-row justify-between">
                            <h1 className = "text-center text-4xl font-extrabold">My Projects</h1>

                            <div className = "">
                                <Button link = "/">Go Back</Button>
                            </div>
                        </div>
                    </Card>
                </div>

                {projects.map((project, index) => {
                    if (project.size === "full") {
                        return (
                            <div data-m = "bounce-down" data-m-delay = {animationGap * index} data-m-duration = {animationGap * 2}>
                                <Card>
                                    <div className = {`flex flex-col lg:flex-row gap-8 justify-between`}>
                                        <img src = {project.logo} alt={project.name + " logo"} className = {"lg:w-1/4 max-h-40 object-contain my-auto rounded-lg lg:object-left"} />
                                        <div className = "flex flex-col justify-center lg:w-1/2">
                                            <h1 className = "text-5xl font-extrabold">{ project.name }</h1>
                                            <span className = "text-xl my-8">{ project.description }</span>
                                        </div>
                                        <div className = "flex flex-col justify-center gap-2 lg:w-1/4">
                                            <span className = "italic opacity-70">{!project.active && "(No Longer Maintained)"}</span>
                                            { 
                                                project.new_links && project.new_links.map((link) => (
                                                    <Button 
                                                        type = { link.external ? "icon" : "outline" }
                                                        link = { link.url }
                                                        target = {link.external ? "blank" : "new"}
                                                    >{link.text}</Button>
                                                ))
                                            }

                                            {
                                                project.infoPage.description !== null && (
                                                    <Button 
                                                        type = "outline"
                                                        link = { `/projects/${project.link}` }
                                                    >More Info</Button>
                                                )
                                            }
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        )
                    } else {
                        return (
                            <div className = "flex flex-col lg:flex-row mb-8">
                                {project.projects.map((p, i) => (
                                    <div className = "w-full lg:w-1/3" data-m = "bounce-down" data-m-delay = {Number((animationGap * (index + i) + animationGap).toFixed(1))} data-m-duration = {animationGap * 2}>
                                        <Card full>
                                            <div className = {`flex flex-col justify-between h-full`}>
                                                <div>
                                                    <img src = {p.logo} alt={p.name + " logo"} className = {"mx-auto my-auto rounded-lg w-full h-40 object-contain"} />
                                                    
                                                    <div className = "flex flex-col justify-center py-8">
                                                        <h1 className = "text-4xl font-extrabold">{ p.name }</h1>
                                                        <span className = "text-lg my-8">{ p.description }</span>
                                                    </div>
                                                </div>
                                                <div className = "flex flex-col justify-center">
                                                    <div className="flex flex-row justify-center gap-2">
                                                        { 
                                                            p.new_links && p.new_links.map((link) => {
                                                                if (link.type === "group") {
                                                                    return (
                                                                        <Button 
                                                                            type = { link.external ? "icon" : "outline" }
                                                                            link = { link.url }
                                                                            target = {link.external ? "blank" : "new"}
                                                                        >{link.text}</Button>
                                                                    )
                                                                }
                                                            })
                                                        }

                                                        {
                                                            p.infoPage.description !== null && (
                                                                <Button 
                                                                    type = "outline"
                                                                    link = { `/projects/${p.link}` }
                                                                >More Info</Button>
                                                            )
                                                        }
                                                    </div>
                                                    <div className="block mt-2">
                                                    { 
                                                            p.new_links && p.new_links.map((link) => {
                                                                if (link.type === "block") {
                                                                    return (
                                                                        <Button 
                                                                            type = { link.external ? "icon" : "outline" }
                                                                            link = {link.url}
                                                                            target = {link.external ? "blank" : "new"}
                                                                        >{link.text}</Button>
                                                                    )
                                                                }
                                                            })
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </Card>
                                    </div>
                                ))}
                            </div>
                        )
                    }
                })}

                <div data-m = "bounce-down" className = "mt-16">
                    <Card full>
                        <h1 className = "text-left text-4xl font-extrabold">Charity Work</h1>
                    </Card>
                </div>

                <div className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-8 gap-y-8">
                    {charity.map((event, i) => (
                        <div className = "w-full" data-m = "bounce-down" data-m-delay = "0.5">
                            <Card full>
                                { new Date(event.startDate) > new Date() || event.raised === 0 ? (
                                    <div className = {`flex flex-col justify-between h-full`}>
                                        <div>
                                            <div className = "flex flex-col justify-center py-2">
                                                <h2 className = "font-bold text-xl text-glow text-accent mb-4">Upcoming Event</h2>
                                                <h1 className = "text-xl font-extrabold text-left">{ event.name }</h1>
                                                <p className = "text-left text-sm mt-4">{ event.notes }</p>
                                            </div>
                                        </div>

                                        <div className = "flex flex-col justify-center text-left">
                                            { event.links.length > 0 && <span>Links:</span> }
                                            { event.links.map((link) => (
                                                <span className = "ml-2 my-1 text-accent"><a href = { link.url }>{ link.text }</a></span>
                                            )) }
                                        </div>

                                        <div>
                                            <h2 className = "text-sm">{ new Date(event.startDate).toLocaleDateString('en-us', { year:"numeric", month:"long", day:"numeric"}) }</h2>
                                        </div>
                                    </div>
                                ) : (
                                    <div className = {`flex flex-col justify-between h-full`}>
                                        <div>
                                            <div className = "flex flex-col justify-center py-2">
                                                <h1 className = "text-xl font-extrabold text-left">{ event.name }</h1>
                                                
                                                <span className = "text-lg mt-1 text-left opacity-60">Raised: ${ Intl.NumberFormat().format(event.raised) }</span>
                                                <span className = "text-lg mb-1 text-left opacity-60">Role: { event.role }</span>
                                            </div>
                                        </div>

                                        <div className = "flex flex-col justify-center text-left">
                                            { event.links.length > 0 && <span>Links:</span> }
                                            { event.links.map((link) => (
                                                <span className = "ml-2 my-1 text-accent"><a href = { link.url }>{ link.text }</a></span>
                                            )) }
                                        </div>

                                        <div>
                                            <span className = "text-sm">{ event.startDate === event.endDate ? (
                                                <>{ new Date(event.startDate).toLocaleDateString('en-us', { year:"numeric", month:"long", day:"numeric"}) }</>
                                            ) : (
                                                <>
                                                    { new Date(event.startDate).toLocaleDateString('en-us', { year:"numeric", month:"long", day:"numeric"}) }
                                                    {" "}-{" "}
                                                    { new Date(event.endDate).toLocaleDateString('en-us', { year:"numeric", month:"long", day:"numeric"}) }
                                                </>
                                            )}</span>
                                        </div>
                                    </div>
                                ) }
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
		</div>
	)
}

export default Landing
