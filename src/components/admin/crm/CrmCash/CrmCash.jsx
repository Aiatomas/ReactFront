import React, { useState, useEffect } from 'react';
import { Carousel, Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import classnames from 'classnames';

const CrmCash = () => {
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState({
    orderDetails: {},
    options: {},
  });

  // useEffect(() => {
  //   //API calls to get orders and products list. Replace it with your own API end points
  //   axios.get('/api/orders')
  //     .then(res => setOrders(res.data));
  //
  //   axios.get('/api/products')
  //     .then(res => setProducts(res.data));
  // }, []);

  const handleOrderSelect = (order) => {
    setSelectedOrder(order);
  };

  return (
    <Container>
      <Carousel className={classnames('mb-4')}>
        {orders.map((order, index) => (
          <Carousel.Item key={index}>
            <h5>Order: {order.id}</h5>
            <Button variant="primary" onClick={() => handleOrderSelect(order)}>
              Select this order
            </Button>
          </Carousel.Item>
        ))}
      </Carousel>

      <Row>
        <Col md={6} className="whiteBG">
          <h4>Product List</h4>
          <ul>
            {products.map((product, index) => (
              <li key={index}>{product.name} - {product.price}</li>
            ))}
          </ul>
        </Col>
        <Col md={6} className="whiteBG">
          <h4>Order Details</h4>
          <p>Order Id: {selectedOrder.orderDetails.id}</p>
          <p>Total price: {selectedOrder.orderDetails.totalPrice}</p>

          <h4>Options</h4>
          {/* Link to options page, replace with your actual path */}
          <Link to={`/options/${selectedOrder.options.id}`}>View Options</Link>
        </Col>
      </Row>
    </Container>
  );
}

export default CrmCash;