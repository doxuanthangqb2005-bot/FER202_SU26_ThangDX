import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function MyModal({ show, handleClose, pizza }) {
    if (!pizza) return null;

    const imageUrl = pizza?.imageUrl || pizza?.image || '/images/1.jpg';
    const normalizedImageUrl = imageUrl.startsWith('/')
        ? imageUrl
        : `/${imageUrl.replace(/^\.\//, '')}`;

    return (
        <Modal show={show} onHide={handleClose} size="lg" centered>
            <Modal.Header closeButton>
                <Modal.Title>{pizza?.name || 'Pizza Details'}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div style={{ marginBottom: '1rem' }}>
                    <img
                        src={normalizedImageUrl}
                        alt={pizza?.name}
                        style={{ width: '100%', maxHeight: 400, objectFit: 'cover', borderRadius: '8px' }}
                    />
                </div>
                <h5>Description</h5>
                <p>{pizza?.description || 'No description available.'}</p>
                
                <h5>Price</h5>
                <p>
                    {pizza?.originalPrice != null && (
                        <span style={{ textDecoration: 'line-through', marginRight: '1rem', color: '#999' }}>
                            ${pizza.originalPrice.toFixed(2)}
                        </span>
                    )}
                    <span style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#e74c3c' }}>
                        ${(pizza?.salePrice ?? pizza?.price ?? 0).toFixed(2)}
                    </span>
                </p>

                {pizza?.tag && (
                    <div>
                        <h5>Tag</h5>
                        <p>
                            <span style={{ 
                                display: 'inline-block',
                                backgroundColor: '#007bff',
                                color: 'white',
                                padding: '0.4rem 0.8rem',
                                borderRadius: '4px'
                            }}>
                                {pizza.tag}
                            </span>
                        </p>
                    </div>
                )}

                {pizza?.ingredients && (
                    <div>
                        <h5>Ingredients</h5>
                        <p>{pizza.ingredients}</p>
                    </div>
                )}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Add to Cart
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default MyModal;
