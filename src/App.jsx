import CrossIcon from "./components/icons/CrossIcon";
import Moon from "./components/icons/Moon";

const app = () =>{
return (
<div className="bg-[url('assets\images\bg-mobile-light.jpg')] bg-no-repeat bg-left-top bg-contain bg-gray-200 min-h-screen">
<header className="container mx-auto px-4 ">
<div className="flex px-4 justify-between px-4 pt-8">
<h1 className="uppercase text-white text-2xl font-semibold tracking-[0.3em]">
    todo
</h1>
<button>
 <Moon className=""/>   
</button>
</div>
<form className="bg-white rounded-md overflow-hidden py-1.5 flex gap-4 items-center px-4 mt-7">
    <span className="rounded-full border-2 h-5 w-5 inline-block">

    </span>
    <input 
    className="w-full text-gray-400 outline-none "
    type="" 
    placeholder="Create a new todo...">
    </input>
</form>
</header>
<main className="container mx-auto px-4 mt-7 ">
<div className="bg-white rounded-md ">    
<article className="flex gap-4 py-4 border-gray-400 border-b-2 px-4">
    <button className="rounded-full border-2 h-5 w-5 inline-block flex-none ">

    </button>
    <p className="text-gray-600 grow">
        Complete online JavaScript course
    </p>
    <button className=" flex-none">
        <CrossIcon/>
    </button>
</article>

<article className="flex gap-4 py-4 border-gray-400 border-b-2 px-4">
    <button className="rounded-full border-2 h-5 w-5 inline-block flex-none ">

    </button>
    <p className="text-gray-600 grow">
        Complete online JavaScript course
    </p>
    <button className=" flex-none">
        <CrossIcon/>
    </button>
</article>

<article className="flex gap-4 py-4 border-gray-400 border-b-2 px-4">
    <button className="rounded-full border-2 h-5 w-5 inline-block flex-none ">

    </button>
    <p className="text-gray-600 grow">
        Complete online JavaScript course
    </p>
    <button className=" flex-none">
        <CrossIcon/>
    </button>
</article>

<article className="flex gap-4 py-4 border-gray-400 border-b-2 px-4">
    <button className="rounded-full border-2 h-5 w-5 inline-block flex-none ">

    </button>
    <p className="text-gray-600 grow">
        Complete online JavaScript course
    </p>
    <button className=" flex-none">
        <CrossIcon/>
    </button>
</article>

<article className="flex gap-4 py-4 border-gray-400 border-b-2 px-4">
    <button className="rounded-full border-2 h-5 w-5 inline-block flex-none ">

    </button>
    <p className="text-gray-600 grow">
        Complete online JavaScript course
    </p>
    <button className=" flex-none">
        <CrossIcon/>
    </button>
</article>

<article className="flex gap-4 py-4 border-gray-400 border-b-2 px-4">
    <button className="rounded-full border-2 h-5 w-5 inline-block flex-none ">

    </button>
    <p className="text-gray-600 grow">
        Complete online JavaScript course
    </p>
    <button className=" flex-none">
        <CrossIcon/>
    </button>
</article>

<section className="py-4 px-4 flex justify-between">
    <span className="text-gray-400">5 items left</span>
    <button className="text-gray-400">Clear Completed</button>
</section>
</div>
</main>

<section className="px-4 container mx-auto px-4 mt-6">
    <div className="bg-white p-4 rounded-md flex justify-center gap-4" >
    <button className="hover:text-blue-600">All</button>
    <button className="hover:text-blue-600">Active</button>
    <button className="hover:text-blue-600">Complete</button>
    </div>
</section>

<section className="text-center mt-8">Drag N Drop 2 reorder list</section>
</div>
);
};

export default app
