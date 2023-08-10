"use client"
import { useTodo } from '@/store/todos';
import React, { useState } from 'react'
import { toast } from "react-toastify";

export const AddTodo = () => {

    const [text, setText] = useState("")
    // @ts-ignore
    const { addTodo } = useTodo();

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(!text) return toast.error("Text is required");
        addTodo(text);
        setText("");
    }

  return (
    <>
    <form onSubmit={handleSubmit} className="max-w-[600px] mx-auto w-full mt-10">
    <div className="w-full text-center flex flex-wrap items-center justify-between gap-3">

        <input type="text" value={text}  onChange={(e) => setText(e.target.value)}
        placeholder="Enter Todo"
        className="px-2 py-2 text-text md:w-[75%] w-full outline-none shadow-lg border-2 border-accent rounded-md"
        />

        <button className="text-background bg-primary px-5 py-2.5 rounded-md md:block md:w-auto w-full">Add todo</button>
    </div>
    </form>
    </>
  )
}