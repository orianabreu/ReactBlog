import { useEffect, useState } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from '@material-ui/core/Grid';

import theme from './styles/theme';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import PostCard from './components/PostCard/PostCard';
import SinglePost from './components/SinglePost/SinglePost';

function App() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => setPosts(json))
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <NavBar />
        <Home />
        <Grid container spacing={2} justify='center'>
          {posts.map(({...rest}) => (
            <PostCard {...rest}/>
          ))}
        </Grid>
        <SinglePost />
    </ ThemeProvider>
  );
}

export default App;
