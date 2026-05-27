//Pizza component hien thi thong tin ve mot loai pizza,gom id, name, price, description, image. originalPrice, salePrice, tag
//Hien thi thong tin pizza trong mot card, su dung Bootstrap de tao bo cuc dep hon. Hien thi hinh anh pizza, ten pizza, mo ta ngan gon, gia goc va gia ban sau khi giam gia (neu co), va cac tag lien quan den pizza (neu co).
//CSS cho Card, de co nen sang va chu trang, de doc hon. Co the them hinh anh nen cho card, de tao diem nhan va lam dep hon.

import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import MyModal from './MyModal';

function Pizza({ pizza }) {
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const imageUrl = pizza?.imageUrl || pizza?.image || '/images/1.jpg';
    const price = pizza?.price ?? 0;
    const originalPrice = pizza?.originalPrice;
    const salePrice = pizza?.salePrice;

    const normalizedImageUrl = imageUrl.startsWith('/')
        ? imageUrl
        : `/${imageUrl.replace(/^\.\//, '')}`;

    return (
        <Card className="h-100">
            <div style={{ overflow: 'hidden', maxHeight: 220 }}>
                <Card.Img
                    variant="top"
                    src={normalizedImageUrl}
                    alt={pizza?.name || 'Pizza image'}
                    style={{ objectFit: 'cover', width: '100%', height: 220 }}
                />
            </div>
            <Card.Body className="d-flex flex-column">
                <Card.Title>{pizza?.name || 'Unknown Pizza'}</Card.Title>
                <Card.Text>{pizza?.description || 'No description available.'}</Card.Text>
                <Card.Text>${price.toFixed(2)}</Card.Text>
                <Card.Text>
                    {originalPrice != null && (
                        <span style={{ textDecoration: 'line-through', marginRight: '0.5rem' }}>${originalPrice.toFixed(2)}</span>
                    )}
                    {salePrice != null && (
                        <span style={{ color: 'red' }}>${salePrice.toFixed(2)}</span>
                    )}
                </Card.Text>
                {pizza?.tag && (
                    <Card.Text>
                        <small className="text-muted">{pizza.tag}</small>
                    </Card.Text>
                )}
                <Button variant="primary" className="mt-auto" onClick={handleShow}>View Details</Button>
            </Card.Body>
            <MyModal show={show} handleClose={handleClose} pizza={pizza} />
        </Card>
    );
}

export default Pizza;