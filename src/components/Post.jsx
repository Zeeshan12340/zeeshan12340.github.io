import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";

export default function Post() {
    let { id } = useParams();
    const [post1, setPost1] = useState('');

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/Zeeshan12340/writeups/main/revworks.md')
            .then(response => response.text())
            .then(text => setPost1(text));
    }, []);

    return (
        <div className="my-5">
            <h1>Post {id}</h1>
            <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'left' }}>
                <ReactMarkdown
                    components={{
                        img: ({ ...props }) => <div><img {...props} /></div>
                    }}
                >
                    {post1}
                </ReactMarkdown>
            </div>
        </div>
    );
}