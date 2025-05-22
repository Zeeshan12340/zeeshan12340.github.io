import React from 'react'
import '../index.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import posts from '../constants/posts.json';

export default function Posts() {
    return (
        <div>
            <h1 className='header'>Blog Posts</h1>
            <div>
                <div className='posts-container'>
                    {posts.posts.map((post, index) => (
                        <Link key={index} to={`/posts/${index + 1}`} style={{ textDecoration: 'none' }}>
                            <div key={index} style={{ minWidth: 800, minHeight: 60, borderRadius: 10, background: '#cccccc' }} className='p-2 m-2 rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300'>
                                <div
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        fontSize: 20,
                                        fontWeight: 'bold',
                                        fontFamily: '-apple-system, BlinkMacSystemFont, "San Francisco", "Helvetica Neue", Helvetica, Arial, sans-serif',
                                        color: '#000000',
                                        paddingLeft: 30,
                                        paddingRight: 30,
                                        paddingTop: 7,
                                    }}
                                >
                                    <div>{post.title}</div>
                                    <div>{post.pubdate}</div>
                                </div>

                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}