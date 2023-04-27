import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, parsePath, useNavigate, useParams } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux'
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Form,
  ListGroupItem,
} from 'react-bootstrap';

import Rating from '../components/Rating';

const ProductScreen = () => {
  const [product, setProduct] = useState([]);
  const params = useParams();

  const fetchProduct = async () => {
    const { data } = await axios.get(`/api/products/${params.id}`);

    setProduct(data);
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div>
      <Link className='btn btn-light my-3' to='/'>
        Go back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroupItem>
              <h3>{product.name}</h3>
            </ListGroupItem>
            <ListGroupItem>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </ListGroupItem>
            <ListGroupItem>Price: ${product.price}</ListGroupItem>
            <ListGroupItem>Description: ${product.description}</ListGroupItem>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroupItem>
                <Row>
                  <Col>Price: </Col>
                  <Col>
                    <strong>{product.price}</strong>
                  </Col>
                </Row>
              </ListGroupItem>

              <ListGroupItem>
                <Row>
                  <Col>Status: </Col>
                  <Col>
                    {product.countInStock > 0 ? 'In stock' : 'Out of stock'}
                  </Col>
                </Row>
              </ListGroupItem>

              <ListGroup.Item>
                <Button
                  className='col-12'
                  type='button'
                  disabled={product.countInStock === 0}
                >
                  Add to cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ProductScreen;
