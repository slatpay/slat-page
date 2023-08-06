'use client'

import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  from,
  InMemoryCache,
} from '@apollo/client'
import { ReactNode } from 'react'

// lib/apolloClient.js

const httpLink = createHttpLink({
  uri: 'https://api.slatpay.com/graphql',
  headers: {
    Authorization: `Bearer ${
      typeof window !== 'undefined' ? localStorage.getItem('user-token') : ''
    }`,
  },
  fetch,
})

export function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: from([httpLink]),
    cache: new InMemoryCache(),
  })
}

export function WithApollo({ children }: { children: ReactNode }) {
  return (
    <ApolloProvider client={createApolloClient()}>{children}</ApolloProvider>
  )
}
