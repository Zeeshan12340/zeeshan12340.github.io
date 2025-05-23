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
            <div style={{ backgroundColor: 'rgb(19, 19, 28)', maxWidth: '1100px', margin: '0 auto', padding: 30, textAlign: 'justify', fontFamily: 'Inter, Sans-Serif' }}>
                <ReactMarkdown
                    components={{
                        h1: ({...props}) => <h1 style={{ fontSize: '2.5em', fontWeight: 'bold', borderBottom: '2px solid #ccc', paddingBottom: '0.3em', marginTop: '1em', color: '#ffffff' }} {...props} />,
                        h2: ({...props}) => <h2 style={{ fontSize: '2em', fontWeight: 'bold', borderBottom: '1px solid #555', paddingBottom: '0.2em', marginTop: '1em', color: '#dddddd' }} {...props} />,
                        h3: ({...props}) => <h3 style={{ fontSize: '1.5em', fontWeight: '600', marginTop: '1em', color: '#cccccc' }} {...props} />,
                        img: ({ ...props }) => <div><img {...props} /></div>,
                        code: ({ inline, className, children, ...props }) => {
                            const match = /language-(\w+)/.exec(className || '');
                            if (!inline && !match) {
                                return  <SyntaxHighlighter lineNumberStyle={{ color: '#888', marginRight: 10 }} showLineNumbers style={dracula} language="bash" PreTag="div" {...props}>{String(children).replace(/\n$/, '')}</SyntaxHighlighter>
                            }
                            return !inline && match ? (
                                <SyntaxHighlighter lineNumberStyle={{ color: '#888', marginRight: 10 }} showLineNumbers style={dracula} language={match[1]} PreTag="div" {...props}>{String(children).replace(/\n$/, '')}</SyntaxHighlighter>
                            ) : (
                                <code className={className} {...props}>
                                    {children}
                                </code>
                            );
                        },
                    }}
                >
                    {post}
                </ReactMarkdown>
            </div>
        </div>
    );
}