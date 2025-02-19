"use client";

import { addTodo } from "@/actions/todos";
import { useRef } from "react";


export default function TodoForm() {
    const formRef = useRef(null);
    return(
        <form
        ref={formRef}
         action={async(FormData)=>{
            await addTodo(FormData);
            formRef.current.reset();
         }} className="w-2/3 mx-auto gap-2">
                    <input 
                    placeholder="Add Todo" 
                    type="text" 
                    name="todo"
                    className="border-2 p-2 flex flex-grow"/>
                    <input type="submit"
                    className="bg-purple-200 rounded p-2 px-4" value={"Add Todo"}/>
                    </form>
    )
}