import React from "react";
import ToDoList from "./ToDoList";

//create your first component
export function Home() {
	return (
		<div className="text-center mt-5">
			<ToDoList />
		</div>
	);
}
