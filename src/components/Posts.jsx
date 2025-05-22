import React from 'react'
import PostCard from './projects/PostCard'
import '../index.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import posts from '../constants/posts.json';

export default function Posts() {
    return (
        <div
        style={{
            backgroundImage: "url('/images/blog/starry-night.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundColor: "rgba(255,255,255,)",
            minHeight: "100vh",
        }}
        >
            <h1 className='mt-6 mb-6 header'>Posts</h1>
            <div>
                <div className='posts-container'>
                    {posts.posts.map((post, index) => (
                        <Link key={index} to={`/posts/${index+1}`} style={{ textDecoration: 'none' }}>
                            <PostCard key={index} post={post} />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}