//1.Footer component hiển thị thông tin bản quyền và liên kết 
//đến trang chủ của tác giả: ID, Tên, Email, Link github
//hiển thị footer ở cuối trang web, đảm bảo rằng nó luôn nằm ở cuối trang,
//ngay cả khi nội dung chính không đủ để đẩy nó xuống dưới cùng của cửa sổ trình duyệt.
//thông tin hiển thị container, row, col của bootstrap
//css cho footer để có nền sáng và chữ màu tối, căn giữa nội dung
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
function Footer({id, name, email, githubLink}) {
    return (
        <Container fluid className="bg-light text-center py-3">
            <Row>
                <Col className="text-center">
                    <p>&copy; {id}</p>
                    <p>Name: {name}</p>
                    <p>Email: {email}</p>
            <p><a href={githubLink} target="_blank" rel="noopener noreferrer">GitHub Profile</a></p>
                </Col>
            </Row>
        </Container>
    );
}
export default Footer;