import React from 'react';
import Layout from './components/Layout';
import Widget1 from './components/Widget1';
import Widget2 from './components/Widget2';
import Widget3 from './components/Widget3';

function App() {
  return (
    <Layout>
      <Widget1 />
      <Widget2 />
      <Widget3 />
    </Layout>
  );
}

export default App;
