import React from "react";
interface IProps {
    todo: string;
    time?: string;
    handleRemove: (todo: string) => void;
}
const MyTodos = ({ todo, time = "N/A", handleRemove }: IProps) => {
    return (
        <div className="card-container">
            <div className="card">
                <h3>
                    <strong>Todo :</strong> {todo}
                </h3>
                <h3>
                    <strong>Time :</strong> {time}
                </h3>
                <button className="btn" onClick={() => handleRemove(todo)}>
                    Done
                </button>
            </div>
        </div>
    );
};

export default MyTodos;
