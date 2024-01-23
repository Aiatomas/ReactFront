import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardProduct({name, data, setData, item}) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                {/*<Card.Title>{item.name}</Card.Title>*/}
                <Card.Title>{1}</Card.Title>
                <Card.Text>

                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
}

export default CardProduct;