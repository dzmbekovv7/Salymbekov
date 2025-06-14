import React from 'react';
import { Container, Grid, Typography, Card, CardContent, CardMedia, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom'; // импортируем Link
import './News.module.scss';
import AnimatedScrollComponent from '../../components/AnimatedComponents';
import { newsData } from '../../utils';


const reversedNews = [...newsData].reverse();

export const News = () => {
  return (
    <Container maxWidth="lg" sx={{ padding: '20px 0', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          textAlign="center"
          color="primary"
          sx={{ fontWeight: 'bold', textTransform: 'uppercase' }}
        >
          Новости колледжа
        </Typography>
        <Typography
          variant="body1"
          textAlign="center"
          gutterBottom
          sx={{ marginBottom: '30px', color: 'text.secondary', fontSize: '1.2rem' }}
        >
          Узнайте о последних событиях, достижениях и мероприятиях в нашем колледже. Мы всегда стремимся к лучшему!
        </Typography>

        <Grid container spacing={4}>
        {reversedNews.map((news) => (
            <Grid item xs={12} sm={6} md={4} key={news.id}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: 3,
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: 6,
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="400"
                  image={news.image}
                  alt={news.title}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h5" component="div" gutterBottom>
                    {news.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    {news.date}
                  </Typography>
                  <Typography variant="body1" color="text.primary">
                    {news.description}
                  </Typography>
                </CardContent>
                <Link to={news.link} style={{ textDecoration: 'none' }}>
                  <Button
                    size="small"
                    variant="contained"
                    color="primary"
                    sx={{ margin: '10px' }}
                  >
                    Читать далее
                  </Button>
                </Link>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ marginTop: '50px', padding: '20px', backgroundColor: '#1976d2', borderRadius: '8px', color: '#fff' }}>
          <Typography
            variant="h4"
            component="h2"
            sx={{ marginBottom: '20px', fontWeight: 'bold', textAlign: 'center' }}
          >
            Почему выбирают нас?
          </Typography>
          <Typography variant="body1" paragraph textAlign="center">
            Наш колледж - это современное образовательное учреждение, где каждый студент может найти своё призвание и
            получить качественное образование. Мы предлагаем современные методики обучения, богатую инфраструктуру и
            поддержку на всех этапах обучения.
          </Typography>
        </Box>

        <Box sx={{ marginTop: '40px', textAlign: 'center' }}>
          <Typography variant="h4" component="h2" sx={{ marginBottom: '20px', fontWeight: 'bold' }} gutterBottom>
            Ближайшие события
          </Typography>
          <Typography variant="body1" paragraph>
            Следите за нашими анонсами, чтобы не пропустить интересные мероприятия, которые помогут вам развивать свои
            навыки и завести новые знакомства.
          </Typography>
          <Button variant="outlined" color="primary" size="large" sx={{ marginTop: '20px' }}>
            Узнать больше
          </Button>
        </Box>
    </Container>
  );
};