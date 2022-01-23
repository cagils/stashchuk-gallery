import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Search from './components/Search';
import ImageCard from './components/ImageCard';
import { Container, Row, Col } from 'react-bootstrap';

const UNSPLASH_KEY = process.env.REACT_APP_UNSPLASH_KEY;

const App = () => {
  const [word, setWord] = useState('');
  const [images, setImages] = useState([]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log(word);
    fetch(
      `https://api.unsplash.com/photos/random/?query=${word}&client_id=${UNSPLASH_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages([{ ...data, title: word }, ...images]);
      })
      .catch((err) => {
        console.log(err);
      });
    setWord('');
  };

  console.log(UNSPLASH_KEY);
  return (
    <div>
      <Header title='Images Gallery' />
      <Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit} />
      <Container className='mt-4'>
        <Row xs={1} md={2} lg={3}>
          {images.map((image, i) => (
            <Col key={i} className='pb-3'>
              <ImageCard image={image} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default App;
