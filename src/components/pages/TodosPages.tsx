import React from "react";
import { TodoForn } from "../TodoFrom";
import { TodoList } from "../TodoList";
import { ITodo } from '../../interfaces';
import { useState, useEffect } from 'react';

declare var confirm: (question: string) => boolean

export const TodosPage: React.FC = () => {
    const [todos, setTotos] = useState<ITodo[]>([]);
  useEffect(() => { 
    const seved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[]
    setTotos(seved)
  }, []);

  useEffect(()=> {
    localStorage.setItem('todos', JSON.stringify(todos))
  },[todos])

  const addHandler = (title: string) => {
    const newTodo: ITodo = {
      title: title,
      id: Date.now(),
      completed: false
    }
    // setTotos([newTodo, ...todos])
    setTotos(prev => [newTodo, ...todos])
  }

  const toggleHadler = (id: number) => {
    setTotos(prev =>
      prev.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    )
  }

  const removeHandler = (id: number) => {
    const showldRemove = confirm(
      'Вы уверены, что хотите удалить этот элемент ? '
    )
    if (showldRemove) {
      setTotos(prev => prev.filter(todo => todo.id !== id))
    }

  }
    return (
        <React.Fragment>

            <TodoForn onAdd={addHandler}
            />
            <TodoList todos={todos}
                onToggle={toggleHadler}
                onRemove={removeHandler}
            />
        </React.Fragment>
    )
}