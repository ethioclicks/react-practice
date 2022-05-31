import { useRef } from "react";
import "./styles.css";
type InputProps = {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (event: React.FormEvent) => void;
}
function InputField({ todo, setTodo, handleAdd }: InputProps) {
    const inputRef = useRef<HTMLInputElement>(null);
    return (
        <form className="input"
            onSubmit={(event) => { handleAdd(event); inputRef.current?.blur(); }}>
        <input className="input__box" ref={inputRef} type='text' value={todo} 
            onChange={(event) => setTodo(event.target.value)} placeholder="Enter a task"/>
        <button className="input_submit" type="submit">Add</button>
    </form >
  )
}

export default InputField