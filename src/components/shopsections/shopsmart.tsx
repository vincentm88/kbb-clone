import Container from 'react-bootstrap/Container';
import './shopsmart.css';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Stack from 'react-bootstrap/Stack'
import cardOneImage from '/cardone.png'
import { useEffect, useState } from 'react';

export const ShopSmart = () => {
    const [smartActive, setSmartActive] = useState('step1');
    
    useEffect(() => {
        
        setSmartActive('step1');
        
        document.getElementById(smartActive)?.classList.add('active')

        
    }, [smartActive]);

    return  <Container className='py-4'>
                <Stack className='align-items-baseline px-3' direction="horizontal" gap={3}>
                    <h1 className='shopsmart'>Shop Smart</h1>  
                    <h4 className='shopsmart'>Let Kelley Help You Shop Like a Pro</h4>     
                </Stack>             
                <CardGroup className='shopsmartcardgroup px-5'>
                    <Card className='shopsmart'>
                        <Card.Body>
                        <Card.Title className='shopsmart'>Start with Your Current Car</Card.Title>
                        <Card.Text className='shopsmart'>
                            Get an estimated value or a fixed offer to buy your car.
                        </Card.Text>
                        <Card.Img className='d-flex w-50 m-auto' src={cardOneImage} />
                        </Card.Body>
                        <Card.Footer className='shopsmart'>
                            <div className="d-flex">
                                <a id="step1" className="btn btn-outline-secondary btn-sm shopsmart" >Get My Car's Value</a>
                            </div>
                        </Card.Footer>
                    </Card>
                    <Card className='shopsmart'>
                        <Card.Body>
                        <Card.Title className='shopsmart'>Find the Perfect Car</Card.Title>
                        <Card.Text className='shopsmart'>
                            Search through currently available inventory
                        </Card.Text>
                        <Card.Img className='d-flex w-50 m-auto' src={cardOneImage} />
                        </Card.Body>
                        <Card.Footer className='shopsmart'>
                            <div className="d-flex">
                                <a className="btn btn-outline-secondary btn-sm shopsmart">Shop Recommended</a>
                            </div>
                        </Card.Footer>
                    </Card>
                    <Card className='shopsmart'>
                        <Card.Body>
                        <Card.Title className='shopsmart'>Make Your Own Deal</Card.Title>
                        <Card.Text className='shopsmart'>
                            Manage your own deal, you choose the payments.
                        </Card.Text>
                        <Card.Img className='d-flex w-50 m-auto' src={cardOneImage} />
                        </Card.Body>
                        <Card.Footer className='shopsmart'>
                            <div className="d-flex">
                                <a className="btn btn-outline-secondary btn-sm shopsmart">Customize Payments</a>
                            </div>
                        </Card.Footer>
                    </Card>
                    <Card className='shopsmart'>
                        <Card.Body>
                        <Card.Title className='shopsmart'>Get Financed</Card.Title>
                        <Card.Text className='shopsmart'>
                            Make sure you don't overpay with help from Kelley Blue Book.
                        </Card.Text>
                        <Card.Img className='d-flex w-50 m-auto' src={cardOneImage} />
                        </Card.Body>
                        <Card.Footer className='shopsmart'>
                            <div className="d-flex">
                                <a className="btn btn-outline-secondary btn-sm shopsmart">Compare Rates</a>
                            </div>
                        </Card.Footer>
                    </Card>
                </CardGroup>
            </Container>
}