import Link from "next/link";


export default async function Todos(){
    let res = await fetch ('http://localhost:3000/api/todos',
        {
            cache : "no-cache"
        }
    )
    res = await res.json();
    return(
        <div className="min-h-screen p-10">
            <h1 className="text-3xl text-center font-bold">Todos</h1>
            <div className="w-2/3 mx-auto gap-2">

            <input 
            placeholder="Add Todo" 
            type="text" 
            className="border-2 p-2 flex flex-grow"/>
            <button 
            className="bg-purple-200 rounded p-2 px-4">
                Add Todo
                </button>
            </div>
            {res.data?.map((todo)=> 
                <Link key={todo.id} href={`/todo/${todo.id}`}>
                <h1 className="border p-2 text-center text-3xl w-2/3 mx-auto m-1">{todo.todo}</h1>
                </Link>
            )}
        </div>
    )
}