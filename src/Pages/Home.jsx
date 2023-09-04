import React, { useState } from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Blogs from '../components/Blogs'
import { useEffect } from 'react'
import { getBlogs } from '../API/BlogRequest'
import SingleBlog from '../components/SingleBlog'
import EmptyBlog from '../components/EmptyBlog'
import CarousalBlog from '../components/CarousalBlog'

const Home = () => {
    const [UserBlogs, setUserBlogs] = useState()
    const allBlogs = async () => {
        try {
            const blogs = await getBlogs()
            const doc = blogs.data.blogs
            await setUserBlogs(doc)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        allBlogs()
    }, [])


    return (
        <div className='bg-gray-800 text-white h-screen'>
            <Header />
            <Hero />
            <CarousalBlog />
            {UserBlogs ? <SingleBlog UserBlogs={UserBlogs} /> : <EmptyBlog />}
            <Blogs />
        </div>
    )
}

export default Home