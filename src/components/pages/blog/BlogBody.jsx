import React from 'react'
import { Link } from 'react-router-dom';

const blogPosts = [
    {
        id: 1,
        title: "Getting Started with Web Development",
        slug: "getting-started-with-web-development",
        description: "A beginner-friendly guide to building your first website.",
        publishedDate: "2026-01-15",
    },
    {
        id: 2,
        title: "How to Write Better Blog Posts",
        slug: "how-to-write-better-blog-posts",
        description: "Simple tips for creating clear, engaging articles.",
        publishedDate: "2026-02-03",
    },
    {
        id: 3,
        title: "A Beginner's Guide to JavaScript",
        slug: "beginners-guide-to-javascript",
        description: "Learn the basics of JavaScript and add interactivity to your websites.",
        publishedDate: "2026-03-12",
    },
    {
        id: 4,
        title: "Getting Started with Web Development",
        slug: "getting-started-with-web-development",
        description: "A beginner-friendly guide to building your first website.",
        publishedDate: "2026-01-15",
    },
    {
        id: 5,
        title: "How to Write Better Blog Posts",
        slug: "how-to-write-better-blog-posts",
        description: "Simple tips for creating clear, engaging articles.",
        publishedDate: "2026-02-03",
    },
    {
        id: 6,
        title: "A Beginner's Guide to JavaScript",
        slug: "beginners-guide-to-javascript",
        description: "Learn the basics of JavaScript and add interactivity to your websites.",
        publishedDate: "2026-03-12",
    },
];


const BlogBody = () => {
    return (
        <section className="py-28">
            <div className="mx-auto max-w-[1500px] px-6 md:px-10 lg:px-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {blogPosts.map((item, index) => (

                    <Link className="bg-white p-4 shadow-2xl" >
                        <div className="h-[250px] rounded-2xl bg-amber-200"></div>
                        <h3 className='text-2xl pt-3'>{item.title}</h3>
                        <p className='py-3'>{item.description}</p>
                        <span className="text-sm text-gray-500">{item.publishedDate}</span>
                    </Link>

                ))

                }
            </div>
        </section>
    )
}

export default BlogBody