import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


function Apple(){
    return(
        <div className='boppers' style={{ display: "flex", flexWrap: "wrap", margin: 15}}>
            <Cardfunc img="https://i.kym-cdn.com/news_feeds/icons/mobile/000/030/251/576.jpg"
            title="result 1"
            color="color1"
            vendor="vendor1"
            shiptime="shiptime1"
            rating="rating1"/>
            
            <Cardfunc img="https://preview.redd.it/tyhrngisvqv31.png?auto=webp&s=fce28be15f08b6e9632683d9fedeeeb680e7342a"
            title="result 2"
            color="color2"
            vendor="vendor2"
            shiptime="shiptime2"
            rating="rating2"/>

            <Cardfunc img="https://i.kym-cdn.com/news_feeds/icons/mobile/000/035/914/6d3.jpg"
            title="result 3"
            color="color3"
            vendor="vendor3"
            shiptime="shiptime3"
            rating="rating3"/>      
        </div>
    );
}


function Cardfunc(prop) {
  return (
    <Card style={{ width: '18rem', margin: '4em'}}>
      <Card.Img variant="top" src={prop.img} />
      <Card.Body>
        <Card.Title>{prop.title}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{prop.color}</ListGroup.Item>
        <ListGroup.Item>{prop.vendor}</ListGroup.Item>
        <ListGroup.Item>{prop.shiptime}</ListGroup.Item>
        <ListGroup.Item>{prop.rating}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">{prop.cardlink}</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default Apple;