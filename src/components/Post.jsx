import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import post1Data from '../constants/pwncollege.md';
import { useParams } from 'react-router-dom';

export default function Post() {
    const { id } = useParams();

    const [post, setPost] = useState('');

    useEffect(() => {
        if (id === "1") {
            fetch(post1Data)
                .then(response => response.text())
                .then(text => setPost(text));
        } else if (id === "2") {
        fetch("https://raw.githubusercontent.com/Zeeshan12340/writeups/main/obscure.md")
            .then(response => response.text())
            .then(text => setPost(text));
        }
    }, [id]);

    return (
        <div className="my-5">
            <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'justify', fontFamily: 'Inter, Sans-Serif' }}>
                <ReactMarkdown
                    components={{
                        img: ({ ...props }) => <div><img {...props} /></div>,
                        code: ({ inline, className, children, ...props }) => {
                            const match = /language-(\w+)/.exec(className || '');
                            return !inline && match ? (
                                <SyntaxHighlighter style={dracula} language={match[1]} PreTag="div" {...props}>{String(children).replace(/\n$/, '')}</SyntaxHighlighter>
                            ) : (
                                <code className={className} {...props}>
                                    {children}
                                </code>
                            );
                        }
                    }}
                >
                    {post}
                </ReactMarkdown>
            </div>
        </div>
    );
}