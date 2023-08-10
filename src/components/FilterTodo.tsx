"use client"
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export const FilterTodo = () => {

    const searchParams = useSearchParams();
    const activeFilter = searchParams.get("todo");

  return (
    <>
    <div className='flex items-center mt-2 gap-3 justify-between text-center font-semibold max-w-[600px] w-full mx-auto bg-accent text-background rounded-md'>
        <Link href="/" className={`${activeFilter == null ? "bg-white text-primary" :""} w-full px-4 py-4 rounded-md`}>
            All
        </Link>
        <Link href="/?todo=active" className={`${activeFilter === "active" ? "bg-white text-primary" :""} w-full px-4 py-4 rounded-md`}>
            Active
        </Link>
        <Link href="/?todo=completed" className={`${activeFilter === "completed" ? "bg-white text-primary" :""} w-full px-4 py-4 rounded-md`}>
            Completed
        </Link>
    </div>
    </>
  )
}
