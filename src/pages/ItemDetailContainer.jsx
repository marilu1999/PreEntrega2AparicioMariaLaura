import { Button, Card } from 'react-bootstrap';
import { useGetProductById } from '../hooks/useProducts';
import { useParams } from 'react-router-dom';

export const ItemDetailContainer = () => {
  const { id } = useParams()
  const {productData} = useGetProductById (id)
  return (
    <Card key={productData.id} style={{ width: '18rem', margin: '20px' }}>
          <Card.Img variant="top" src={productData.thumbnail} />
          <Card.Body>
            <Card.Title>{productData.title}</Card.Title>
            <Card.Text>{productData.description}</Card.Text>
            <Card.Text>${productData.price}</Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
  );
};

export default ItemDetailContainer