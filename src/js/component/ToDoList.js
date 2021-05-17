import React from "react";
import { useState, useEffect } from "react";
import "../../styles/index.scss";

const ToDoList = () => {
	const [todo, setTodo] = useState("");
	const [todos, setTodos] = useState([]);
	const [hover, setHover] = useState(false);
	const handleChange = e => {
		setTodo(e.target.value);
	};

	const addTodo = () => {
		setTodos([
			...todos,
			{
				id: todos.length + 1,
				text: todo,
				completed: false
			}
		]);
	};

	const onSubmit = e => {
		e.preventDefault();
		if (todo === "") return;
		addTodo();
		setTodo("");
	};

	const removeTodo = todoId => {
		const updatedTodos = todos.filter(todo => todo.id !== todoId);
		setTodos(updatedTodos);
	};

	const toggleTodo = todoId => {
		const updatedTodos = todos.map(todo => {
			return todo.id === todoId
				? { ...todo, completed: !todo.completed }
				: todo;
		});
		setTodos(updatedTodos);
	};
	const handleKeyPress = e => {
		if (e.key === "Enter" && e.target.value !== "") {
			addTodo();
			setTodo("");
			onSubmit();
		}
	};

	return (
		<div className="container">
			<div className="row ">
				<div className="col-md-12 title ">
					<h1>todos</h1>
				</div>
			</div>
			<div className="row list">
				<div className="col-md-12">
					<div className="row">
						<div className="col-md-8 ">
							<input
								id="todo"
								className="todo-input"
								onChange={handleChange}
								value={todo}
								placeholder="What needs to be done?"
								onKeyPress={handleKeyPress}
							/>
						</div>
						<div className="col-md-4"></div>
					</div>

					<div className="row">
						<div className="col-md-12">
							<ul>
								{todos.map(todo => (
									<li
										key={todo.id}
										onMouseEnter={() => setHover(true)}
										onMouseLeave={() => setHover(false)}>
										<span
											className={
												todo.completed
													? "todo-completed"
													: undefined
											}
											onClick={() => toggleTodo(todo.id)}>
											{todo.text}
										</span>
										<span
											className="delete-btn"
											onClick={() => removeTodo(todo.id)}>
											{hover && (
												<i className="far fa-times-circle"></i>
											)}
										</span>
									</li>
								))}
							</ul>
						</div>
					</div>
					<span className="span-bottom">
						{todos.length > 0
							? todos.length + "item left"
							: "No items left"}
					</span>
				</div>
			</div>
		</div>
	);
};

export default ToDoList;
