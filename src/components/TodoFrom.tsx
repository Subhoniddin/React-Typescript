import React, { useRef } from "react";

interface TodoFormsProps {
    onAdd(title: string): void
}

export const TodoForn: React.FC<TodoFormsProps> = (props) => {
    const ref = useRef<HTMLInputElement>(null)

    const KeyPressHandler = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            props.onAdd(ref.current!.value);
            ref.current!.value = ''
        }

    }
    return (<div className="input-field mt2" >
        <input
            onKeyPress={KeyPressHandler}
            ref={ref}
            type='text' id="title"
            placeholder="Введите название дело"
        />
        <label htmlFor="title"
            className="active">
            Введите название дело
        </label>
    </div>)
}