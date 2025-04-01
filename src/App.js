import React from 'react'; // React import should be at the top
import './index.css'; // Main CSS File - Utilizes TailwindCSS
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Router imports
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client"; // Apollo Client imports
import Counter from './components/JmCounter'; // Basic Counter Component
import PostPage from './components/PostPage'; // New PostPage for dynamic post fetching
import PostList from './components/PostList'; // New PostList to list posts

// Apollo Client setup
const client = new ApolloClient({
  uri: "https://graphqlzero.almansi.me/api",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="bg-white text-center">
          <nav className="bg-pink-500 text-white text-center p-4">
            {/* Links to navigate between pages */}
            <Link className="font-bold no-underline mr-6" to="/">Home</Link>
            <Link className="font-bold no-underline mr-6" to="/counter">Counter</Link>
            <Link className="font-bold no-underline" to="/posts">Post List</Link> {/* Link to Post List */}
          </nav>

          <Routes>
            {/* Define your routes */}
            <Route path="/" element={<h2 className="text-xl text-slate-900 font-bold p-6">Welcome to the Home Page</h2>} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/post/:id" element={<PostPage />} /> {/* Dynamic Post page */}
            <Route path="/posts" element={<PostList />} /> {/* Post list page */}
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;