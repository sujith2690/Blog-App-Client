import React, { useState } from 'react'
import { getCarousalBlog } from '../API/BlogRequest'

const CarousalBlog = () => {
    // const [CarousalBlog, setCarousalBlog] = useState([])
    // const allCarousalBlog = async () => {
    //    const response =   await getCarousalBlog()
    //         setCarousalBlog(response.data)
    // }
    // useEffect(() => {
    //     allCarousalBlog()
    // }, [])
    return (
        <h1>CAROUSAL Blog</h1>
        // <section className="text-gray-100 p-5">
        //     <div className="grid grid-cols-1 gap-5 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2">
        //         {UserBlogs && UserBlogs.map((item, i) => {
        //             return (
        //                 <div key={i} className="relative flex items-end justify-start w-full text-left bg-center bg-cover h-96 dark:bg-gray-500" style={{ backgroundImage: 'url("https://source.unsplash.com/random/240x320")' }}>
        //                     <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-gray-900 dark:to-gray-900"></div>
        //                     <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
        //                         <a rel="noopener noreferrer" href="#" className="px-3 py-2 text-xs font-semibold uppercase dark:text-red-600 ">DOC: {item.category}</a>
        //                         <div className="flex flex-col justify-start text-center dark:text-gray-100">
        //                             <span className="text-3xl font-semibold">04</span>
        //                             <span className="uppercase">Aug</span>
        //                         </div>
        //                     </div>
        //                     <div className="flex flex-col items-center justify-center">
        //                         <div className="flex flex-wrap gap-x-2 gap-y-2">
        //                             <div className="relative flex  items-center p-2">
        //                                 <img src="https://images.pexels.com/photos/17484793/pexels-photo-17484793/free-photo-of-man-wearing-casual-outfit-on-a-street.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="w-12 h-12 border object-cover rounded-full dark:bg-gray-500 dark:border-gray-700" />
        //                                 <p className='ml-2' >name</p>
        //                             </div>
        //                         </div>
        //                     </div>
        //                     <div></div>
        //                     <h2 className="z-10 p-5">
        //                         <a rel="noopener noreferrer" className="font-medium text-md hover:underline dark:text-gray-100">{item.title}</a>
        //                     </h2>
        //                     <p className="z-10 p-5 text-gray-100">{item.description}</p>

        //                 </div>
        //             );
        //         })}
        //     </div>
        // </section>
    )
}

export default CarousalBlog