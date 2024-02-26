import Container from 'react-bootstrap/Container';
import './shopcatagories.css';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Image from 'react-bootstrap/Image';
import Stack from 'react-bootstrap/Stack';
import carsImg from '../../assets/cars.webp';
import suvsImg from '../../assets/suvs.webp';
import trucksImg from '../../assets/trucks.webp';
import vansImg from '../../assets/minivans.webp';
import evsImg from '../../assets/evs.webp';
import hybridsImg from '../../assets/hybrids.webp';

export const ShopCatagories = () => {
    const vehicleCatagories =  [
                                { 'id' : 1 , 'name' : 'Cars', 'img' : carsImg},
                                { 'id' : 2 , 'name' : 'SUVs', 'img' : suvsImg},
                                { 'id' : 3 , 'name' : 'Trucks', 'img' : trucksImg},
                                { 'id' : 4 , 'name' : 'Minivans', 'img' : vansImg},
                                { 'id' : 5 , 'name' : 'EVs', 'img' : evsImg},
                                { 'id' : 6 , 'name' : 'Hybrids', 'img' : hybridsImg},
                            ];
    return  <Container className='py-4'>
                <Stack className='align-items-baseline px-3' direction="horizontal" gap={3}>
                    <h1 className='shopcatagories'>Shop Catagories</h1>  
                </Stack>             
                    
                <CardGroup className='shopcatagoriescardgroup d-flex flex-col flex-nowrap overflow-scroll shopcatagories px-5'>
                    {
                        vehicleCatagories.map((catagory)=>{
                            return( <Card className='shopcatagories'>
                                        <Card.Body>
                                        <Image src={catagory.img} />
                                        <Card.Title className='shopcatagories text-center'>Best {catagory.name}</Card.Title>
                                        </Card.Body>
                                    </Card>
                                )
                        })
                    }

                </CardGroup>
            </Container>
}