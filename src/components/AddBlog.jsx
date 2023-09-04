import { useFormik } from 'formik';
import React, { useState } from 'react'
import { BsFillPencilFill } from 'react-icons/bs';
import { blogSchema } from '../schemas';
import { addBlog } from '../API/BlogRequest';
import { useNavigate } from 'react-router-dom';
import Header from './Header';


const AddBlog = () => {
  const navigate = useNavigate()
  const initialValues = {
    title: '',
    blogType: '',
    imageUrl: '',
    description: ''
  };
  const validationSchema = blogSchema

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values, action) => {
      try {
        let blog = await addBlog(values)
        console.log(blog.data, '-----response')
        blog = blog.data.success
        if (login) {

          navigate('/home')
        }
      } catch (error) {
        console.log(error, 'Login failed');
      }
      action.resetForm()
    }
  })
  const BlogOptions = ['documents', 'science', 'biological', 'anime']


  return (
    <div className='bg-gray-800 text-white h-screen'>
      <Header />
      <section className="p-6 bg-gray-800 text-gray-50">
        <form onSubmit={handleSubmit} className="container flex flex-col mx-auto space-y-12">
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-900">
            <div className="space-y-2 col-span-full lg:col-span-1">
              <p className="font-medium">New Blog</p>
              <p className="text-xs"></p>
              <div className="col-span-full">
                <label htmlFor="bio" className="text-sm">Blog Image</label>
                <div className="relative">
                  <img
                    src="https://source.unsplash.com/random/240x320"
                    alt=""
                    className=" relative object-cover rounded-md bg-gray-500"
                  />
                  <button
                    type="button"
                    className="absolute bottom-0 right-0 px-4 py-2 border rounded-md border-gray-100"
                  >
                    <BsFillPencilFill />
                  </button>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3 ">

              <div className="col-span-full sm:col-span-3">
                <label for="username" className="text-sm">Title</label>
                <input
                  value={values.title || ''}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="title"
                  id="title"
                  type="text" placeholder="Title" className="w-full p-2 outline-none rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900" />
                {errors.title && touched.title ? (
                  <p className="text-red-600 text-center text-sm">{errors.title}</p>
                ) : null}
              </div>
              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">Blog Type </label>
                <select
                  value={values.blogType || ''}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="blogType"
                  id="blogType" className="w-full p-2 outline-none rounded-md  focus:ring focus:ring-indigo-500 border-gray-700 text-gray-900 capitalize">
                  <option value="" className='' disabled selected>Choose Blog</option>
                  {BlogOptions.map((item) => {
                    return (
                      <option value={item} className="uppercase ">{item}</option>
                    )
                  })}
                </select>
                {errors.blogType && touched.blogType ? (
                  <p className="text-red-600 text-center text-sm">{errors.blogType}</p>
                ) : null}
              </div>

              <div className="col-span-full">
                <label for="bio" className="text-sm">Image URL</label>
                <input
                  value={values.imageUrl || ''}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="imageUrl"
                  id="imageUrl" type="text" placeholder="URL" className="w-full p-2 outline-none rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900" />
                {errors.imageUrl && touched.imageUrl ? (
                  <p className="text-red-600 text-center text-sm">{errors.imageUrl}</p>
                ) : null}
              </div>
              <div className="col-span-full">
                <label for="bio" className="text-sm">Description</label>
                <textarea
                  value={values.description || ''}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="description"
                  id="description"
                  className="w-full outline-none p-2  rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900"></textarea>
                  {errors.description && touched.description ? (
                  <p className="text-red-600 text-center text-sm">{errors.description}</p>
                ) : null}
              </div>
              <button type="submit" className=" font-semibold  rounded-2xl cursor-pointer bg-gray-100 text-gray-800  col-end-7 ">Submit</button>
            </div>
          </fieldset>
        </form>
      </section>
    </div>
  )
}

export default AddBlog