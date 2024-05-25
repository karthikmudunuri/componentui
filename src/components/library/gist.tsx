// /src/components/GistEmbed.tsx

"use client";
// /src/components/GistEmbed.tsx

import { useEffect, useState } from 'react';
import { fetchGist } from '../../lib/fetchgist';
import { Separator } from '../ui/seperator';
import { Button } from '../ui/Button';

interface GistEmbedProps {
  gistId: string;
  height?: string; // Define height as an optional prop
}

const GistEmbed: React.FC<GistEmbedProps> = ({ gistId, height }) => {
  const [gistContent, setGistContent] = useState<string | null>(null);
  const [gistDescription, setGistDescription] = useState<string | null>(null);

  useEffect(() => {
    const getGist = async () => {
      const gist = await fetchGist(gistId);
      if (gist && gist.files) {
        const fileKey = Object.keys(gist.files)[0];
        setGistContent(gist.files[fileKey].content);
        setGistDescription(gist.description);
      }
    };

    getGist();
  }, [gistId]);

  const copyToClipboard = () => {
    if (gistContent) {
      navigator.clipboard.writeText(gistContent).then(() => {
        alert('Code copied to clipboard');
      }, (err) => {
        console.error('Could not copy text: ', err);
      });
    }
  };

  return (
    <div className={`rounded-lg border bg-card text-card-foreground shadow-sm p-4 flex flex-col ${height ? `h-${height}` : ''}`}> {/* Apply height dynamically */}
      <div className="flex justify-between items-center mb-4 ">
        <h3 className="text-lg font-bold">{gistDescription ? gistDescription : 'Code'}</h3>
        <Button variant={'secondary'} onClick={copyToClipboard}>Copy</Button>
      </div>
      <Separator className='mb-4'/>
      {gistContent ? (
        <pre className="overflow-y-auto">
          <code className="block whitespace-pre overflow-x-auto">{gistContent}</code>
        </pre>
      ) : (
        <p>Loading Code...</p>
      )}
    </div>
  );
};

export default GistEmbed;
