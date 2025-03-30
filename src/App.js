import React from 'react';
import './index.css';  // Or wherever your CSS file is
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Counter from './components/JmCounter'; // assuming you have a Counter component
import Post from './components/JmPost'; // assuming you have a Post component

function App() {
  return (
    <Router>
      <div className="bg-white text-center">
        <nav className="bg-pink-500 text-white text-center p-4">
          {/* Link to navigate between pages */}
          <Link className="font-bold no-underline mr-6" to="/">Home</Link>
          <Link className="font-bold no-underline mr-6" to="/counter">Counter</Link>
          <Link className="font-bold no-underline" to="/post">Post</Link>
        </nav>

        <Routes>
          {/* Define your routes */}
          <Route path="/" element={<h2 className="text-xl text-slate-900 font-bold p-6">Welcome to the Home Page</h2>} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/post" element={<Post />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;