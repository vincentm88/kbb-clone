import Container from 'react-bootstrap/Container';
import './shopmakes.css';
import Stack from 'react-bootstrap/Stack';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';


function getImageUrl(name : string, ext : string) {
    return new URL(`../../assets/logos/${name}.${ext}`, import.meta.url).href
}

const vehicleMakes = [
    { id: 1, name: 'Acura', img:  getImageUrl('acura','png') },
    { id: 2, name: 'Alfa Romeo', img: getImageUrl('alfaromeo','png') },
    { id: 3, name: 'Aston Martin', img: getImageUrl('astonmartin','png') },
    { id: 4, name: 'Audi', img: getImageUrl('audi','png') },
    { id: 5, name: 'Bentley', img: getImageUrl('bentley','png') },
    { id: 6, name: 'BMW', img: getImageUrl('bmw','png') },
    { id: 3, name: 'Buick', img: getImageUrl('buick','png') },
    { id: 4, name: 'Cadillac', img: getImageUrl('cadillac','png') },
    { id: 5, name: 'Chevrolet', img: getImageUrl('chevrolet','png') },
    { id: 6, name: 'Chrysler', img: getImageUrl('chrysler','png') },
    { id: 3, name: 'Daewoo', img: getImageUrl('daewoo','png') },
    { id: 4, name: 'Daihatsu', img: getImageUrl('daihatsu','png') },
    { id: 5, name: 'Dodge', img: getImageUrl('dodge','png') },
    { id: 6, name: 'Eagle', img: getImageUrl('eagle','png') },
    { id: 3, name: 'Ferrari', img: getImageUrl('ferrari','png') },
    { id: 4, name: 'FIAT', img: getImageUrl('fiat','png') },
    { id: 5, name: 'Fisker', img: getImageUrl('fisker','png') },
    { id: 6, name: 'Ford', img: getImageUrl('ford','png') },
    { id: 3, name: 'Freightliner', img: getImageUrl('freightliner','png') },
    { id: 4, name: 'Genesis', img: getImageUrl('genesis','png') },
    { id: 5, name: 'Geo', img: getImageUrl('geo','png') },
    { id: 6, name: 'GMC', img: getImageUrl('gmc','png') },
];


export const ShopMakes = () => {
    const [searchItem, setSearchItem] = useState('');
    const [leftHide, setLeftHide] = useState('hide');
    const [rightHide, setRightHide] = useState('show');
    const [filteredList, setFilteredList] = useState(vehicleMakes);

    
    useEffect(() => {
        
        setScrollButtons();



      }, [filteredList]);
    


    function setScrollButtons(){
        const element = document.getElementById("shopmakeslist");
        const elementul = document.getElementById("shopmakesul");
        console.log('scrollLeft', element!.scrollLeft);
        console.log('scrollWidth', element!.scrollWidth);
        console.log('offsetWidth', element!.offsetWidth);
        console.log('elementul', elementul!.offsetWidth);
        console.log('elementul', elementul!.clientWidth);



        
    }

    const handleFilter = (e: any) => { 
        const searchTerm = e.target.value;

        setSearchItem(searchTerm)
    
        const filteredItems = vehicleMakes.filter((make) =>
            make.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    
        setFilteredList(filteredItems);
        console.log(searchTerm)
      }

    const handleMakesClick = (direction: string, e: any) => { 
        console.log(direction);
        const element = document.getElementById("shopmakeslist");
        const speed = 2;
        const distance = 800;
        const step = 10;
        let scrollAmount = 0;

        let slideTimer = setInterval(function(){
            if(direction == 'left'){
                element!.scrollLeft -= step;
            } else {
                element!.scrollLeft += step;
            }
            scrollAmount += step;
            if(scrollAmount >= distance){
                window.clearInterval(slideTimer);
            }

        }, speed);
        
        console.log(element?.clientWidth)
        console.log(element?.offsetWidth)
        console.log(element?.scrollLeft)
        console.log(element?.scrollWidth)
    }

    return <Container fluid className='shopmakes'>
        <Container className='py-4'>
            <Stack className='align-items-baseline px-3' direction="horizontal" gap={3}>
                <h1 className='shopmakes'>Cars By Makes</h1>
                <Form.Control className='shopmakes'
                              size="lg" 
                              type="text" 
                              value={searchItem}
                              placeholder="Filter By Make" 
                              onChange={handleFilter}
                              />
            </Stack>

            <div className='shopmakes listgroupparent'>
                <div className='shopmakes btngroup w-100'>
                    <Button className={`shopmakes left ${leftHide}`}
                            variant="primary"
                            onClick={handleMakesClick.bind(this, 'left')}
                            >
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </Button>
                    <Button className={`shopmakes right ${rightHide}`}
                            variant="primary"
                            onClick={handleMakesClick.bind(this, 'right')}
                            >
                        <FontAwesomeIcon icon={faChevronRight} />
                    </Button>
                </div>
            <div id="shopmakeslist" className='shopmakes listgroupdiv'>
                <ul id="shopmakesul" className='shopmakes list-group list-group-horizontal'>
                    {
                        filteredList.map((make, index) => {
                            return (index % 2 === 0 &&
                                <li className="shopmakes list-group-item">
                                <Stack direction="horizontal" className='shopmakes px-4'>
                                            <Image src={make.img} className='shopmakes img' />
                                        <h5 className='shopmakes text-center'>{make.name}</h5>
                                    </Stack>
                                </li>
                            )
                        })
                    }

                </ul>
                <ul className='shopmakes list-group list-group-horizontal'>
                    {
                        filteredList.map((make, index) => {
                            return (index % 2 !== 0 &&
                                <li className="shopmakes list-group-item">
                                        <Stack direction="horizontal" className='shopmakes px-4'>
                                            <Image src={make.img} className='shopmakes img' />
                                            <h5 className='shopmakes text-center'>{make.name}</h5>
                                        </Stack>
                                </li>
                            )
                        })
                    }

                </ul>
            </div>
            </div>
            
        </Container>
    </Container>
}