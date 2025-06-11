import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Post() {
    let { id } = useParams();
    if ( id == "android-exploitation" ) {
        id = 3;
    }

    const [post, setPost] = useState('');
    const BlockQuote = ({ children }) => (
        <blockquote style={{
            borderLeft: '4px solid #888',
            paddingLeft: '1em',
            color: '#bbb',
            fontStyle: 'italic',
            margin: '1.5em 0',
            background: 'rgba(255, 255, 255, 0.03)',
            borderRadius: '4px',
            padding: '1em'
        }}>
            {children}
        </blockquote>
    );
    BlockQuote.propTypes = {
        children: PropTypes.node.isRequired,
    };

    useEffect(() => {
        import(`../constants/post${id}.md`)
            .then((module) =>
                fetch(module.default)
                    .then((response) => response.text())
                    .then((text) => setPost(text))
            )
            .catch(() => setPost('# 404 - Post Not Found\nSorry, the post you\'re looking for does not exist.'));
    }, [id]);

    return (
        <div className="mt-5 pt-5" style={{ background: "linear-gradient(135deg, rgb(30, 30, 45), rgb(32, 32, 60))" }}>
            <div style={{ backgroundColor: 'rgb(19, 19, 28)', maxWidth: '1100px', margin: '0 auto', padding: 30, textAlign: 'justify', fontFamily: 'Inter, Sans-Serif' }}>
                <ReactMarkdown
                    components={{
                        h1: ({ ...props }) => <h1 style={{ fontSize: '2em', fontWeight: 'bold', borderBottom: '2px solid #ccc', paddingBottom: '0.3em', marginTop: '1em', color: '#ffffff' }} {...props} />,
                        h2: ({ ...props }) => <h2 style={{ fontSize: '1.5em', fontWeight: 'bold', borderBottom: '1px solid #555', paddingBottom: '0.2em', marginTop: '1em', color: '#dddddd' }} {...props} />,
                        img: ({ ...props }) => <div><img {...props} /></div>,
                        code: ({ inline, className, children, ...props }) => {
                            const match = /language-(\w+)/.exec(className || '');
                            if (!inline && !match) {
                                return <SyntaxHighlighter lineNumberStyle={{ color: '#888', marginRight: 10 }} showLineNumbers style={dracula} language="bash" PreTag="div" {...props}>{String(children).replace(/\n$/, '')}</SyntaxHighlighter>
                            }
                            return !inline && match ? (
                                <SyntaxHighlighter lineNumberStyle={{ color: '#888', marginRight: 10 }} showLineNumbers style={dracula} language={match[1]} PreTag="div" {...props}>{String(children).replace(/\n$/, '')}</SyntaxHighlighter>
                            ) : (
                                <code className={className} {...props}>
                                    {children}
                                </code>
                            );
                        },
                        blockquote: BlockQuote,
                    }}
                >
                    {post}
                </ReactMarkdown>
            </div>
        </div>
    );
}