import Register from "./Pages/Register/index";
import Home from "./Pages/Home/home";
import Login from "./componets/Login/Login";
import Header from "./componets/Header/index";
import Chats from "./Pages/Chats/Chats";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { setContext } from "@apollo/client/link/context";
import "./index.css";

const httpLink = createHttpLink({ uri: "http://localhost:3001/graphql" });

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Chats" element={<Chats />} />
          </Routes>
        </Router>
      </div>
    </ApolloProvider>
  );
}

export default App;
