'use client'
import React from 'react';
import { Fabric } from '@fluentui/react';
import { Text } from '@fluentui/react/lib/Text';
import { Stack } from '@fluentui/react/lib/Stack';

// https://gist.github.com/theel0ja/b9e44a961f892ccf43e217ab74b9417b
const DocumentViewer = ({ documentUrl }: any) => {
  const viewerUrl = `https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(documentUrl)}`;

  console.log(`Viewer URL: ${viewerUrl}`)
  return (
    <Fabric>
      <Stack tokens={{ childrenGap: 10 }} styles={{ root: { padding: 20 } }}>
        <Text variant="xLarge">Document Viewer</Text>
        <iframe
          src={viewerUrl}
          style={{ width: '100%', height: '600px', border: 'none' }}
          title="Document Viewer"
        />
      </Stack>
    </Fabric>
  );
};

const Home = () => {
  const documentUrl = 'https://calibre-ebook.com/downloads/demos/demo.docx'; // State to manage editor instance

  // const documentUrl = '/example.docx';
  return (
    <div style={{height: '100vh', width: '100vw'}}>
      <div>
      <DocumentViewer documentUrl={documentUrl} />
    </div>
    </div>
  );
};

export default Home;