import { ApolloProvider } from '@apollo/react-hooks';
import { client } from './client';
import React, { ReactElement } from 'react';

export const wrapRootElement = ({ element }: { element: ReactElement }) => (
  <ApolloProvider client={client}>{element}</ApolloProvider>
);
