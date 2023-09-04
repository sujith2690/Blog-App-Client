// import React, { useState } from 'react'
// import { FaBookReader } from 'react-icons/fa';
// import { FiSun, FiMenu } from 'react-icons/fi';
// import { BsMoonStarsFill, BsSearch } from 'react-icons/bs';
// import { FaUserCircle } from 'react-icons/fa';
// import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
// import { Link } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';



// const Header = ({ toggleTheme, darkMode }) => {

//     const dispatch = useDispatch()
//     const user = useSelector((state) => state.user.userDetails);
//     console.log(user, '---logged user')
//     const [menuVisible, setMenuVisible] = useState(false);
//     const [activeLink, setActiveLink] = useState('1');
//     const handleActive = (link) => {
//         setActiveLink(link);
//     };
//     const toggleMenu = () => {
//         setMenuVisible(!menuVisible);
//     };
//     return (
//         <>
//             {/* <header className={`p-4 ${darkMode ? 'bg-gray-800 text-gray-100' : ''}`}>
//                 <div className="container flex justify-between h-16 mx-auto">
//                     <a rel="noopener noreferrer" aria-label="Back to homepage" className="flex items-center p-2">
//                         <FaBookReader className="text-3xl" />
//                         <p className='ml-3'>Readers</p>
//                     </a>

//                     <ul className={`items-stretch ${menuVisible ? 'flex' : 'hidden'} space-x-3 lg:flex`}>
//                         <li className="flex">
//                             <Link
//                                 to="/home"
//                                 className={`flex items-center px-4 -mb-1 border-b-2 border-transparent ${activeLink === '1' ? 'text-yellow-400 border-yellow-400' : ''
//                                     }`}
//                                 onClick={() => handleActive('1')}
//                             >
//                                 Home
//                             </Link>                        </li>
//                         <li className="flex">
//                             <Link to="/myBlogs" className={`flex items-center px-4 -mb-1 border-b-2 border-transparent ${activeLink === '2' ? 'text-yellow-400 border-yellow-400' : ''}`}
//                                 onClick={() => handleActive('2')}
//                             >
//                                 My Blogs
//                             </Link>                        </li>
//                         <li className="flex">
//                             <Link
//                                 to="/blogs/add"
//                                 className={`flex items-center px-4 -mb-1 border-b-2 border-transparent ${activeLink === '3' ? 'text-yellow-400 border-yellow-400' : ''
//                                     }`}
//                                 onClick={() => handleActive('3')}
//                             >
//                                 Add Blog
//                             </Link>
//                         </li>
//                     </ul>
//                     <div className="flex items-center md:space-x-4">
//                         <button title="Toggle theme" type="button" className="p-3 rounded-xl text-blue-100" onClick={toggleTheme}>
//                             {darkMode ? <FiSun className="text-white" /> : <BsMoonStarsFill className="text-black" />}
//                         </button>
//                         <div className="relative">
//                             <span className="absolute inset-y-0 left-0 flex items-center pl-2">
//                                 <button type="submit" title="Search" className="p-1 focus:outline-none focus:ring">
//                                     <BsSearch className="w-4 h-4 text-yellow-400" />
//                                 </button>
//                             </span>
//                             <input type="search" name="Search" placeholder="Search..." className="w-32 py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none bg-gray-900 text-gray-100 focus:bg-gray-900" />
//                         </div>
//                         <a  className="flex items-center p-2 cursor-pointer">
//                             <FaUserCircle />
//                             <p className='ml-3'>{user.name}</p>
//                         </a>
//                         <Link
//                             to="/auth"
//                         >
//                             <button type="button" className="hidden px-6 py-2 font-semibold rounded lg:block bg-yellow-400 text-white"
//                                 onClick={!user ? () => dispatch(authAction.logout()) : null}
//                             >
//                                 {user ? 'Logout' : 'Log in'}
//                             </button>
//                         </Link>

//                     </div>
//                     <button title="Open menu" type="button" className="p-4 lg:hidden" onClick={toggleMenu}>
//                         {menuVisible ? <AiOutlineClose className="w-6 h-6 text-gray-900" /> : <AiOutlineMenu className="w-6 h-6 text-gray-900" />}
//                     </button>
//                 </div>
//             </header > */}




//             <nav class="bg-gray-800">
//                 <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
//                     <div class="relative flex h-16 items-center justify-between">
//                         <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
//                             <button onClick={toggleMenu} type="button" class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
//                                 <span class="absolute -inset-0.5"></span>
//                                 <span class="sr-only">Open main menu</span>
//                                 <AiOutlineMenu/>
//                             </button>
//                         </div>
//                         <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
//                             <div class="flex flex-shrink-0 items-center">
//                             <FaBookReader className="text-3xl text-yellow-500" /><p className='text-yellow-600 ml-2'>  REaderS </p>                         </div>
//                             {/* <a rel="noopener noreferrer" aria-label="Back to homepage" className="flex items-center p-2">
//                                 <FaBookReader className="text-3xl" />
//                                 <p className='ml-3'>Readers</p>
//                             </a> */}
//                             <div class="hidden sm:ml-6 sm:block">
//                                 <div class="flex space-x-4">
//                                     {/* <a href="#" class="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Dashboard</a> */}
//                                     <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Home</a>
//                                     <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">My Blogs</a>
//                                     <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Add Blog</a>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="relative">
//                             <span className="absolute inset-y-0 left-0 flex items-center pl-2">
//                                 <button type="submit" title="Search" className="p-1 focus:outline-none focus:ring">
//                                     <BsSearch className="w-4 h-4 text-yellow-400" />
//                                 </button>
//                             </span>
//                             <input type="search" name="Search" placeholder="Search..." className="w-32 py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none bg-gray-900 text-gray-100 focus:bg-gray-900" />
//                         </div>
//                         <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
//                             <button type="button" class="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
//                                 <span class="absolute -inset-1.5"></span>
//                                 <span class="sr-only">View notifications</span>
//                                 <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
//                                     <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
//                                 </svg>
//                             </button>

//                             <div class="relative ml-3">
//                                 <div>
//                                     <button type="button" class="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
//                                         <span class="absolute -inset-1.5"></span>
//                                         <span class="sr-only">Open user menu</span>
//                                         <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
//                                     </button>
//                                 </div>


//                                 {/* <div class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
//                                     <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">Your Profile</a>
//                                     <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1">Settings</a>
//                                     <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2">Sign out</a>
//                                 </div> */}
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 <div class="sm:hidden">
//                     <div class="space-y-1 px-2 pb-3 pt-2">
//                         <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Home</a>
//                         <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">My Blogs</a>
//                         <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Add Blog</a>
//                     </div>
//                 </div>
//             </nav>

//         </>
//     )
// }

// export default Header




// ........................


// import React, { useState } from 'react';
// import { HiUserCircle, HiOutlineBell, HiOutlineMenuAlt3, HiX } from 'react-icons/hi';
// import { Link,useParams } from 'react-router-dom';


// const navigation = [
//     { name: 'Home', href: '/', current: true },
//     { name: 'My Blogs', href: '/myBlogs', current: false },
//     { name: 'Add Blogs', href: '/addBlog', current: false },
// ];

// function classNames(...classes) {
//     return classes.filter(Boolean).join(' ');
// }

// export default function Example() {
//     const [open, setOpen] = useState(false);
//     const [profileOpen, setProfileOpen] = useState(false);

//     const toggleMenu = () => {
//         setOpen(!open);
//     };

//     const toggleProfileMenu = () => {
//         setProfileOpen(!profileOpen);
//     };

//     return (
//         <div className="bg-gray-800">
//             <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
//                 <div className="relative flex h-16 items-center justify-between">
//                     <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
//                         {/* Mobile menu button */}
//                         <button
//                             onClick={toggleMenu}
//                             className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
//                         >
//                             <span className="absolute -inset-0.5" />
//                             <span className="sr-only">Open main menu</span>
//                             {open ? (
//                                 <HiX className="block h-6 w-6" aria-hidden="true" />
//                             ) : (
//                                 <HiOutlineMenuAlt3 className="block h-6 w-6" aria-hidden="true" />
//                             )}
//                         </button>
//                     </div>
//                     <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
//                         <div className="flex flex-shrink-0 items-center">
//                             <img
//                                 className="h-8 w-auto"
//                                 src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
//                                 alt="Your Company"
//                             />
//                         </div>
//                         <div className="hidden sm:ml-6 sm:block">
//                             <div className="flex space-x-4">
//                                 {navigation.map((item) => (
//                                     <Link key={item.name}
//                                         to={item.href}
//                                         className={classNames(
//                                             item.current
//                                                 ? 'bg-gray-900 text-white'
//                                                 : 'text-gray-300 hover:bg-gray-700 hover:text-white',
//                                             'rounded-md px-3 py-2 text-sm font-medium'
//                                         )}
//                                     >
//                                         {item.name}
//                                     </Link>
//                                     // <a
//                                     //     key={item.name}
//                                     //     href={item.href}
//                                     //     className={classNames(
//                                     //         item.current
//                                     //             ? 'bg-gray-900 text-white'
//                                     //             : 'text-gray-300 hover:bg-gray-700 hover:text-white',
//                                     //         'rounded-md px-3 py-2 text-sm font-medium'
//                                     //     )}
//                                     //     aria-current={item.current ? 'page' : undefined}
//                                     // >
//                                     //     {item.name}
//                                     // </a>
//                                 ))}
//                             </div>
//                         </div>
//                     </div>
//                     <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
//                         <button
//                             type="button"
//                             onClick={toggleMenu}
//                             className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
//                         >
//                             <span className="absolute -inset-1.5" />
//                             <span className="sr-only">View notifications</span>
//                             <HiOutlineBell className="h-6 w-6" aria-hidden="true" />
//                         </button>
//                         <div className="relative ml-3">
//                             <button
//                                 onClick={toggleProfileMenu}
//                                 className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
//                             >
//                                 <span className="absolute -inset-1.5" />
//                                 <span className="sr-only">Open user menu</span>
//                                 <HiUserCircle className="h-8 w-8 rounded-full" aria-hidden="true" />
//                             </button>
//                             {profileOpen && (
//                                 <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
//                                     <a
//                                         href="#"
//                                         className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                                     >
//                                         Your Profile
//                                     </a>
//                                     <a
//                                         href="#"
//                                         className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                                     >
//                                         Settings
//                                     </a>
//                                     <a
//                                         href="#"
//                                         className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                                     >
//                                         Sign out
//                                     </a>
//                                 </div>
//                             )}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             {/* Mobile menu */}
//             {open && (
//                 <div className="sm:hidden">
//                     <div className="space-y-1 px-2 pb-3 pt-2">
//                         {navigation.map((item) => (
//                             <a
//                                 key={item.name}
//                                 href={item.href}
//                                 className={classNames(
//                                     item.current
//                                         ? 'bg-gray-900 text-white'
//                                         : 'text-gray-300 hover:bg-gray-700 hover:text-white',
//                                     'block rounded-md px-3 py-2 text-base font-medium'
//                                 )}
//                                 aria-current={item.current ? 'page' : undefined}
//                             >
//                                 {item.name}
//                             </a>
//                         ))}
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// }


import React, { useState } from 'react';
import { HiUserCircle, HiOutlineBell, HiOutlineMenuAlt3, HiX } from 'react-icons/hi';
import { ImBlogger2 } from 'react-icons/im';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { resetUser } from '../Redux/Features/userSlice';

const navigation = [
    { name: 'Home', href: '/', current: true },
    { name: 'My Blogs', href: '/myBlogs', current: false },
    { name: 'Add Blogs', href: '/addBlog', current: false },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

const Header = () => {
    const dispatch = useDispatch()
    const user = useSelector((state) => state.user.userDetails)
    const location = useLocation();
    const [open, setOpen] = useState(false);
    const [profileOpen, setProfileOpen] = useState(false);
    const toggleMenu = () => {
        setOpen(!open);
    };

    const toggleProfileMenu = () => {
        if (user) setProfileOpen(!profileOpen);
    };
    const handleLogout = () => {
        dispatch(resetUser())
        localStorage.setItem("Token", "");
        localStorage.setItem("User", "");
        setProfileOpen(!profileOpen);
    }

    return (
        <div className="bg-gray-800">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* Mobile menu button */}
                        <button
                            onClick={toggleMenu}
                            className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        >
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Open main menu</span>
                            {open ? (
                                <HiX className="block h-6 w-6" aria-hidden="true" />
                            ) : (
                                <HiOutlineMenuAlt3 className="block h-6 w-6" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex flex-shrink-0 items-center">
                        <ImBlogger2 className="text-3xl text-yellow-400" /><p className='ml-2 text-white font-extrabold text-xl'>Readers</p>
                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                {navigation.map((item) => (
                                    <Link key={item.name}
                                        to={item.href}
                                        className={classNames(
                                            item.href === location.pathname
                                                ? 'bg-gray-900 text-white'
                                                : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                            'rounded-md px-3 py-2 text-sm font-medium'
                                        )}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <button
                            type="button"
                            onClick={toggleMenu}
                            className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                        >
                            <span className="absolute -inset-1.5" />
                            <span className="sr-only">View notifications</span>
                            <HiOutlineBell className="h-6 w-6" aria-hidden="true" />
                        </button>
                        <div className="relative ml-3">
                            <button
                                onClick={toggleProfileMenu}
                                className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                            >
                                <span className="absolute -inset-1.5" />
                                <span className="sr-only">Open user menu</span>
                                <div className='flex items-center'>
                                    <HiUserCircle className="h-8 w-8 rounded-full mr-2" aria-hidden="true" /><p className='text-white mr-2'>{user.name}</p>
                                </div>
                            </button>
                            {profileOpen && (
                                <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <Link
                                        to={'profile'}
                                        onClick={() => setProfileOpen(!profileOpen)}
                                        className="block px-4 py-2 text-sm  cursor-pointer text-gray-700 hover:bg-gray-100 hover:font-bold"
                                    >
                                        Your Profile
                                    </Link>
                                    <p
                                        onClick={handleLogout}
                                        className="block px-4 py-2 text-sm cursor-pointer text-gray-700 hover:bg-gray-100 hover:font-bold"
                                    >
                                        Sign out
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            {/* Mobile menu */}
            {open && (
                <div className="sm:hidden">
                    <div className="space-y-1 px-2 pb-3 pt-2">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                to={item.href}
                                onClick={() => setOpen(!open)} // Toggle the 'open' state when the link is clicked
                                className={classNames(
                                    item.href === location.pathname
                                        ? 'bg-gray-900 text-white'
                                        : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                    'block rounded-md px-3 py-2 text-base font-medium'
                                )}
                            >
                                {item.name}
                            </Link>
                        ))}

                    </div>
                </div>
            )}
        </div>
    )
}

export default Header