import React from 'react';
import 'assets/styles/reset.css'
import { BrowserRouter as Router } from 'react-router-dom'

import Layout from './page/Layout.jsx'
function App() {
  return (
    <Router>
      <Layout></Layout>
    </Router>
    // <div>123</div>
  );
} 

export default App;
