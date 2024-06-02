import React from 'react'
import { useState, useEffect } from 'react'
import PostCard from './projects/PostCard'
import particlesOptions from "../particles.json";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import '../index.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import posts from '../constants/posts.json';

export default function Posts() {
    const [init, setInit] = useState(false);

    useEffect(() => {
        if (init) {
            return;
        }
        initParticlesEngine(async (engine) => {
            await loadFull(engine);
        }).then(() => {
            setInit(true);
        });
    }, [init]);

    return (
        <div>
            {init && <Particles options={particlesOptions} />}
            <h1 className='mt-4 mb-6 header'>Posts</h1>
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