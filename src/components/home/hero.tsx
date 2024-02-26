import './hero.css';
import { VehicleAd } from '../ads/homeherovehiclead'
import Strings from '../constants/strings';
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Hero = () => {
    const homePageHeroTitle = Strings.homePageHeroTitle;
    const x = homePageHeroTitle.split(' ');
    const homePageHeroTag = Strings.homePageHeroTag
    let xcount = 0;

    return  <Container fluid className='hero'>
                <Container>
                    <Row>
                        <Col>
                            <Stack className='homeherostack' gap={2}>
                                <h1 className="homePageHeroTitle">
                                {                                
                                x.map(function(data) {                                    
                                    if(xcount == 0){
                                        xcount++;
                                        return( <>{data}<br /></>)
                                    } else if(xcount == 1){
                                        xcount++;
                                        return( <>{data + ' '}</>)
                                    } else{
                                        xcount++;
                                        return( <>{data}</>)
                                    }
                                    })}
                                </h1>
                                <h4 className="homePageHeroTag">{homePageHeroTag}</h4>
                                <div className="d-flex">            
                                    <a className='mx-1 py-2 flex-fill navbtn btn btn-primary'>Price New/Used</a>
                                    <a className='mx-1 py-2 flex-fill navbtn btn btn-primary'>My Car's Value</a>
                                </div>
                                <div className="d-flex">
                                    <a className="navbtn mx-1 py-2 flex-fill btn btn-btn btn-secondary">Check My Car for Recalls</a>
                                </div>
                            </Stack>
                        </Col>
                        <Col><VehicleAd /></Col>
                    </Row>
                </Container>
            </Container>
}