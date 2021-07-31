import React, { useState } from "react";
import MyTodos from "./MyTodos";
interface ITodo {
    todo: string;
    time?: string;
}
const AddTodo = () => {
    const [newTodo, setNewTodo] = useState<ITodo>({} as ITodo);
    const [todos, setTodos] = useState<ITodo[]>([]);

    const handleClick = () => {
        if (newTodo.todo !== "") {
            setTodos([...todos, newTodo]);
            setNewTodo({
                todo: "",
                time: "",
            });
        } else {
            alert("Please Enter something");
        }
    };
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        setNewTodo({ ...newTodo, [e.target.name]: e.target.value });

    const handleRemove = (todo: string) => {
        const updatedTodos = todos.filter((t) => t.todo !== todo);
        setTodos(updatedTodos);
    };

    return (
        <div className="container">
            <h1>Add your tod's here 🚮</h1>
            <div>
                <input
                    value={newTodo.todo}
                    onChange={onChange}
                    type="text"
                    name="todo"
                    id=""
                    placeholder="Add todo title"
                />{" "}
                <br />
                <input
                    value={newTodo.time}
                    onChange={onChange}
                    type="text"
                    name="time"
                    id=""
                    placeholder="Add todo description"
                />{" "}
                <br />
                <button className="btn" onClick={handleClick}>
                    Add
                </button>
            </div>
            {todos.map((con) => (
                <MyTodos
                    key={con.todo}
                    todo={con.todo}
                    time={con.time}
                    handleRemove={handleRemove}
                />
            ))}
        </div>
    );
};

export default AddTodo;
