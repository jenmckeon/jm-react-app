import React, { useState } from "react";
import '../index.css';  // Main CSS File - Utilizes TailwindCSS
import { ApolloClient, InMemoryCache, ApolloProvider, gql, useQuery } from "@apollo/client";

// Apollo Client Setup
const client = new ApolloClient({
  uri: "https://graphqlzero.almansi.me/api",
  cache: new InMemoryCache(),
});

// GraphQL Query
const GET_POST = gql`
  query {
    post(id: 1) {
      id
      title
      body
    }
  }
`;

// Component to Fetch Data
const Post = () => {
  const { loading, error, data } = useQuery(GET_POST);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2 className="text-left text-xl text-slate-900 font-bold pb-2">Post Title: {data.post.title}</h2>
      <p className="text-left text-base text-slate-700">{data.post.body}</p>
    </div>
  );
};

// Counter Component
const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2 className="text-xl text-slate-900 font-bold pb-6">Counter: {count}</h2>
      <button className="bg-pink-500 text-white w-full px-8 py-3 outline-pink-500 rounded-full mb-4" onClick={() => setCount(count + 1)}>Increase</button>
      <button className="text-pink-500 w-full px-8 py-3 border-solid border-2 border-pink-500 rounded-full mb-4" onClick={() => setCount(count - 1)}>Decrease</button>
      <button className="p-0 text-slate-900 no-underline mb-8" onClick={() => setCount(0)}>Reset</button>
    </div>
  );
};

// Main App Component
const App = () => {
  return (
    <ApolloProvider client={client}>
      <div className="max-w-lg mx-auto p-4 mt-10 text-center">
        <h1 className="text-2xl text-slate-900 font-bold pb-2">GraphQL + Apollo + React Counter</h1>
        <Counter />
        <Post />
      </div>
    </ApolloProvider>
  );
};

export default App;