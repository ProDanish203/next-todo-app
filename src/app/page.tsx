import {Heading, AddTodo, FilterTodo, Todos} from "@/components";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  return (
    <main>
      <ToastContainer/> 
      <div className="bg-background min-h-[100vh] px-2 pt-20">
        <Heading/>
        <FilterTodo/>
        <AddTodo/>
        <Todos/>
      </div>
    </main>
  )
}
