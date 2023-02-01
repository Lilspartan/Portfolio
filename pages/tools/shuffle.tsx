import { Button, ButtonContainer, Card } from '../../components';

import { useState, useEffect } from "react";

const Shuffle = () => {
    const [list, setList] = useState<string[]>([]);
    const [input, setInput] = useState("");

    const addJson = (e) => {
        setInput(e.target.value);
        try {
            let parsed = JSON.parse(e.target.value);
            console.log(parsed);
            setList(parsed);
        } catch (e) {
            return;
        }

    }

    const changeItem = (action: "add" | "delete", index?: number) => {
        switch (action) {
            case "add": return setList([ ...list, "Item " + (list.length + 1) ]);
            case "delete": return setList(list.filter((i, _index) => { return _index !== index }));
        }
    }

    const editItem = (e, index) => {
        return setList(list.map((i, _index) => { 
            if (_index === index) return e.target.value;
            else return i;
        }))
    }

    const shuffleList = () => {
        let temp = [...list];
        temp = temp.sort((a, b) => 0.5 - Math.random());
        setList(temp);
    }

    useEffect(() => {
        setInput(JSON.stringify(list, null, 4))
    }, [ list ])

	return (
		<div className="
			bg-background
			min-h-screen
		">
			<div className="grid place-items-center min-h-screen text-center">
				<div>
					<Card>
                        <div className = "flex flex-row gap-4 mb-4">
                            <div>
                                <textarea className = "my-2 text-white px-2 py-1 bg-background rounded-lg w-full h-full" onChange = {(e) => {
                                    addJson(e);
                                }} value = {input}/>
                            </div>
                            <ul className = "text-white">
                                {list.map((item:string, i:number)=> {
                                    return (
                                        <li key = {i}>
                                            <input onChange = {(e) => {
                                                editItem(e, i);
                                            }} className = "bg-background rounded-lg my-1 py-1 px-2" value = {item} />
                                            <span className = "select-none text-xl font-bold ml-2 cursor-pointer" onClick = {() => {
                                                changeItem("delete", i);
                                            }}>X</span>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                        <div className = "flex flex-row gap-2">
                            <Button click = {() => {
                                changeItem("add");
                            }}>Add</Button>
                            <Button click = {() => {
                                shuffleList();
                            }}>Shuffle</Button>
                        </div>
					</Card>
				</div>
			</div>
		</div>
	)
}

export default Shuffle
