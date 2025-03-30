// src/components/PostPage.js
import React from "react";
import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";  // To access dynamic URL params

// GraphQL query to fetch a post by ID
const GET_POST_BY_ID = gql`
  query GetPostById($id: ID!) {
    post(id: $id) {
      id
      title
      body
    }
  }
`;

const PostPage = () => {
  const { id } = useParams();  // Get the dynamic post ID from the URL
  const { loading, error, data } = useQuery(GET_POST_BY_ID, {
    variables: { id },  // Pass the dynamic ID to the query
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="max-w-lg mx-auto p-4 mt-10 text-center">
      <h1 className="text-2xl text-slate-900 font-bold pb-8">GraphQL + Apollo Single Post</h1>
      <h2 className="text-left text-xl text-slate-900 font-bold pb-2">{data.post.title}</h2>
      <p className="text-left text-base text-slate-700">{data.post.body}</p>
    </div>
  );
};

export default PostPage;