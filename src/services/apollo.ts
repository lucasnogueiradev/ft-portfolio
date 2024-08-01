// import { ApolloClient, InMemoryCache } from "@apollo/client";
import axios from "axios";

const token = process.env.API_TOKEN;

// Configuração do ApolloClient para GraphQL
// export const client = new ApolloClient({
//   uri: "https://api.github.com/graphql",
//   headers: {
//     Authorization: `Bearer ${token}`,
//   },
//   cache: new InMemoryCache(),
// });

// Configuração do axios para REST com autenticação
export const api = axios.create({
  baseURL: "https://api.github.com/graphql",
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  },
});

// Configuração do axios para REST sem autenticação (se necessário)
export const apiGitHub = axios.create({
  baseURL: "https://api.github.com",
});
