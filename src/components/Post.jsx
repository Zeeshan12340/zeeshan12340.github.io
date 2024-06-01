import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import post1Data from '../constants/pwncollege.md';

export default function Post() {
    const [post1, setPost1] = useState('');

    useEffect(() => {
        fetch(post1Data)
            .then(response => response.text())
            .then(text => setPost1(text));
    }, []);

    return (
        <div className="my-5">
            <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'left', fontFamily: 'Merriweather' }}>
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
                    {post1}
                </ReactMarkdown>
            </div>
        </div>
    );
}