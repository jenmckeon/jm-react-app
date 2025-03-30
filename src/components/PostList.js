import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';

// GraphQL query with pagination
const GET_POSTS = gql`
  query GetPosts($page: Int, $limit: Int) {
    posts(options: { paginate: { page: $page, limit: $limit } }) {
      data {
        id
        title
      }
    }
  }
`;

const PostList = () => {
  const [page, setPage] = useState(1);
  const limit = 5; // Show 5 posts per page

  const { loading, error, data } = useQuery(GET_POSTS, {
    variables: { page, limit },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="max-w-2xl mx-auto p-4 mt-10 text-center">
      <h1 className="text-2xl text-slate-900 font-bold pb-8">GraphQL + Apollo Post List</h1>
      {data.posts.data.map((post) => (
        <div key={post.id} className="mb-8 text-left">
          <h3 className="text-left text-lg font-semibold">{post.title}</h3>
          <Link to={`/post/${post.id}`} className="text-pink-500">Read more</Link>
        </div>
      ))}

      {/* Pagination Controls */}
      <div className="mt-4 flex justify-between">
        <button
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
        >
          Previous
        </button>
        <span className="px-4 py-2">Page {page}</span>
        <button
          className="px-4 py-2 bg-gray-300 rounded"
          onClick={() => setPage((prev) => prev + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PostList;