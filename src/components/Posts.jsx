import React from 'react';
import '../index.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import posts from '../constants/posts.json';

export default function Posts() {
    return (
        <div>
            <h1 className="header">Blog Posts</h1>
            <div className="posts-container">
                {[...posts.posts].reverse().map((post, index) => {
                    const id = posts.posts.length - index;
                    return (
                        <Link key={id} to={`/posts/${id}`} className="post-row glow-card">
                            <div className="post-row__head">
                                <span className="post-row__title">{post.title}</span>
                                <span className="post-row__date">{post.pubdate}</span>
                            </div>
                            {post.description && (
                                <p className="post-row__desc">{post.description}</p>
                            )}
                            {post.tags && (
                                <div className="tag-list">
                                    {post.tags.map((tag) => (
                                        <span key={tag} className="tag">{tag}</span>
                                    ))}
                                </div>
                            )}
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
