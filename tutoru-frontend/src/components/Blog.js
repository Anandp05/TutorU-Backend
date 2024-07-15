// src/components/Blog.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './Blog.css';

function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5002/api/posts')
      .then((response) => setPosts(response.data))
      .catch((error) => console.error('Error fetching posts:', error));
  }, []);

  return (
    <Container maxWidth="lg" className="blog">
      <Typography variant="h4" component="h2" gutterBottom>
        Our Blog
      </Typography>
      <Grid container spacing={4}>
        {posts.map((post) => (
          <Grid item key={post._id} xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                alt={post.title}
                height="140"
                image={post.imageUrl} // Ensure your post data includes an imageUrl
                title={post.title}
              />
              <CardContent>
                <Typography variant="h5" component="h2">
                  {post.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {post.content}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  href={post.link} // Ensure your post data includes a link
                  target="_blank"
                  style={{ marginTop: '10px' }}
                >
                  Read More
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Blog;
