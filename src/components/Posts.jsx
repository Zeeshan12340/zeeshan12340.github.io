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
                    {[...posts.posts].reverse().map((post, index) => (
                        <Link key={index} to={`/posts/${posts.posts.length - index}`} style={{ textDecoration: 'none' }}>
                            <div key={index} style={{ width: 'min(800px, 92vw)', minHeight: 64, borderRadius: 10, background: 'var(--card-bg)' }} className='glow-card m-2'>
                                <div
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        gap: 16,
                                        fontSize: 19,
                                        fontFamily: 'var(--font-body)',
                                        color: 'var(--text)',
                                        padding: '18px 28px',
                                    }}
                                >
                                    <div style={{ fontWeight: 600 }}>{post.title}</div>
                                    <div style={{ color: 'var(--accent)', fontSize: '0.92em', whiteSpace: 'nowrap' }}>{post.pubdate}</div>
                                </div>

                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}