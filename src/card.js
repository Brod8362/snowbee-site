import { ToastBody } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


const response = {
  "products": [
    {
      "name": "APC UPS Battery Backup Surge Protector BE650G1",
      "vendor": "amazon",
      "price": 84.98999786376953,
      "product_page": "https://www.amazon.com/APC-Battery-Protector-Back-UPS-BE650G1/dp/B005GZRUZW?qu=eyJxc2MiOiI0LjEyIiwicXNhIjoiMy41MSIsInFzcCI6IjMuMjcifQ%3D%3D&ufe=app_do%3Aamzn1.fos.006c50ae-5d4c-4777-9bc0-4513d670b6bc",
      "properties": {},
      "preview_url": "https://m.media-amazon.com/images/I/318il+fyJPL._AC_US40_AA50_.jpg"
    },
    {
      "name": "CyberPower CST135XLU-R 1350VA/810W UPS",
      "vendor": "ebay",
      "price": 96.98999786376953,
      "product_page": "https://www.ebay.com/itm/314167370192?amdata=enc%3AAQAHAAAA4LcKeCekYezaIaqNW6NRL7F8GfYYgBDTZXn2oTMsUDQcv%2FFb1BZhgAdTJzTblNu2ORSHtM3OKll7PGMvCjQcfKipNC4MJl2tGsB%2BzUORu%2BdpIsxErxvGE96DDFFf%2FeRfcDuq0PidLw4s2n7hpVjEUsf6%2FuUnQ67mMNBj9Xv4vcZaLQ%2B4NRkTVqeKms93OZyOQCQeyaIRT7YSQXnhPFIdMp5Ly4lctR3Iptz0RpsRJb5h6X2sivKi6P519UuhET%2FgFI%2BzvR6W858gPYi8E3WqrZy%2FFEWS2hgkm0sHiKpA%2FCPR%7Ctkp%3ABFBMyKPC54Rh",
      "properties": {},
      "preview_url": "https://i.ebayimg.com/images/g/rvIAAOSw6tdjWeb2/s-l1600.jpg"
    },
    {
      "name": "APC UPS 450VA Battery Backup Surge Protector BN450M",
      "vendor": "walmart",
      "price": 55.0,
      "product_page": "https://www.walmart.com/ip/APC-UPS-450VA-Battery-Backup-Surge-Protector-BN450M-Backup-Battery-Power-Supply/187572176",
      "properties": {},
      "preview_url": "https://i5.walmartimages.com/asr/909f4410-c0ef-4202-9c02-87a9890d0b61_1.f25f8edf4686d17f74966646ed8a8106.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
    }
  ]
}

function Apple() {
  const rows = [];

  for (let product of response["products"]) {
    let name = product["name"];
    let vendor = product["vendor"];
    let price = product["price"];
    let image = product["preview_url"];
    let page = product["product_page"];
    const elem = (
      <Cardfunc img={image}
        title={name}
        price={`${price}`}
        vendor={vendor}
        cardlink={page}/>
    );
    rows.push(elem);
  }
  
  return <div className='boppers' style={{ display: "flex", flexWrap: "wrap", margin: 15}}>{rows}</div>;
}


function Cardfunc(prop) {
  return (
    <Card style={{ width: '18rem', margin: '4em' }}>
      <Card.Img height="250" variant="top" src={prop.img} />
      <Card.Body>
        <Card.Title>{prop.title}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{prop.price}</ListGroup.Item>
        <ListGroup.Item>{prop.vendor}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href={prop.cardlink} target="_blank">Link</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default Apple;