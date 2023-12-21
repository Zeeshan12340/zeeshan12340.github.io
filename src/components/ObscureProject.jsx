import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import '../css/MarkdownContainer.css';

async function fetchMD(url) {
  try {
    const response = await fetch(url);
    const text = await response.text();
    return text;
  } catch (error) {
    return null;
  }
}

function ObscureProject() {
  const githubUrl = 'https://raw.githubusercontent.com/Zeeshan12340/writeups/main/obscure.md';
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    async function fetchData() {
      const content = await fetchMD(githubUrl);
      if (content) {
        setMarkdown(content);
      }
    }

    fetchData();
  }, [githubUrl]);

  return (
    <div className="markdown-container">
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  );
}

export default ObscureProject;
