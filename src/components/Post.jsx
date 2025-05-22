import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import post1Data from '../constants/pwncollege.md';
import post2Data from '../constants/obscure.md';
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
            fetch(post2Data)
                .then(response => response.text())
                .then(text => setPost(text));
        }
    }, [id]);

    return (
        <div className="mt-5 pt-5" style={{ background: "linear-gradient(135deg, rgb(30, 30, 45), rgb(32, 32, 60))"}}>
            <div style={{ maxWidth: '1000px', margin: '0 auto', paddingLeft: 10, textAlign: 'justify', fontFamily: 'Inter, Sans-Serif' }}>
                <ReactMarkdown
                    components={{
                        img: ({ ...props }) => <div><img {...props} /></div>,
                        code: ({ inline, className, children, ...props }) => {
                            const match = /language-(\w+)/.exec(className || '');
                            if (!inline && !match) {
                                return  <SyntaxHighlighter style={dracula} language="bash" PreTag="div" {...props}>{String(children).replace(/\n$/, '')}</SyntaxHighlighter>
                            }
                            return !inline && match ? (
                                <SyntaxHighlighter style={dracula} language={match[1]} PreTag="div" {...props}>{String(children).replace(/\n$/, '')}</SyntaxHighlighter>
                            ) : (
                                <code className={className} {...props}>
                                    {children}
                                </code>
                            );
                        },
                        h1: ({ ...props }) => <h1 className="text-3xl font-bold" {...props} />,
                    }}
                >
                    {post}
                </ReactMarkdown>
            </div>
        </div>
    );
}