import React from 'react'
import { useState, useEffect } from 'react'
import PostCard from './projects/PostCard'
import particlesOptions from "../particles.json";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import '../index.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export default function Posts() {
    const post = {
        "image": "images/blog/pwncollege.jpeg",
        "title": "How I pwned pwn.college",
        "bodyText": "This post is about the time I found a Cross Site Scripting vulnerability in pwn.college, going into the motivations and how I discovered it along with the remediation.",
        "tags": [
            "XSS",
            "CTF",
            "pwn.college",
        ]
    }

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
            <h1 className='mt-4 mb-6 header'>Posts</h1>
            {init && <Particles options={particlesOptions} />}
            <Link to='/posts/1' style={{ textDecoration: 'none' }}>
                <PostCard project={post} />
            </Link>
        </div>
    )
}