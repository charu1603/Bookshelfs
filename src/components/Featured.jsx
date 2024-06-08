import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid, Card, CardContent, Typography, Container, Stack } from '@mui/material';
import { alpha } from '@mui/material';

export default function Featured({ searchTerm }) {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, [searchTerm]);

  const fetchBooks = async () => {
    const query = searchTerm ? searchTerm : 'default';
    const url = `https://www.googleapis.com/books/v1/volumes?q=${query}`;

    try {
      const response = await axios.get(url);
      setBooks(response.data.items || []);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  return (
    <Container   sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'right',
        pt: { xs: 14, sm: 20 },
        pb: { xs: 8, sm: 12 },
      }}>
          <Stack spacing={2} useFlexGap sx={{ width: { xs: '100%', sm: '70%' } }}>
              <Typography textAlign="left" 
               fontSize='clamp(3.0rem, 10vw, 3rem)'>
Featured
              </Typography>
<Typography
          textAlign="left"
          color="text.secondary"
          sx={{ alignSelf: 'left', width: { sm: '100%', md: '80%' } }}
        >
          Explore our cutting-edge dashboard, delivering high-quality solutions
       
        </Typography>
        </Stack>
    <Grid container spacing={3} sx={{ pt: '3rem' }}>
      {books.map((book) => (
        <Grid item key={book.id} xs={12} sm={6} md={4} lg={3}>
         
         <Card
            sx={{
            
              height: 350,
              borderRadius: 2,
              overflow: 'hidden',
            }}
          >
            <img
              src={book.volumeInfo.imageLinks?.thumbnail}
              alt={book.volumeInfo.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
           
           
          </Card>
          <CardContent>
              <Typography gutterBottom >
                {book.volumeInfo.title}
              </Typography>
             
              </CardContent>
          </Grid>
      ))}
    </Grid>
    </Container>
  );
};
