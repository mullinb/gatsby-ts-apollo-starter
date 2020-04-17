import React from 'react';
import Link from 'gatsby-link';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const QUERY = gql`
  {
    items {
      id
      name
    }
  }
`;
const SecondPage = () => {
  const { data, loading } = useQuery(QUERY);
  if (loading) return 'LOADING';
  console.log('data', data);
  return (
    <div>
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
    </div>
  );
};

export default SecondPage;
