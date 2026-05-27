//Hiển thị danh sách các loại pizza trong một component PizzaList.
//Sử dụng dữ liệu từ một mảng pizzas trong pizzaData.js
//Gọi component Pizza
//Hiển thị trong container của react-bootstrap để có giao diện đẹp hơn
import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { pizzaDatas } from '../data/pizzaData';
import Pizza from './Pizza';
function PizzaList() {
    return (
        <Container className="my-4">
            <Row>
                {pizzaDatas.map(pizza => (
                    <Col key={pizza.id} md={4} className="mb-4">
                        <Pizza pizza={pizza} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}
export default PizzaList;
        
        
