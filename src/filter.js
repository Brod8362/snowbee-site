import Dropdown from 'react-bootstrap/Dropdown';
// asks server what the filters are
// each vendor obj will have name, internal property id, url img to rep. vendor
let vendors = [
    {
      id: "amazon",
      display_name: "Amazon",
      url: "https://amazon.com",
      favicon: "https://amazon.com/favicon.ico"
    },
    {
			id: "walmart",
			display_name: "Walmart",
			url: "https://walmart.com",
			favicon: "https://walmart.com/favicon.ico"
		}
  ];
function Filter() {
    return (
        <Dropdown>
     
          <Dropdown.Toggle variant="secondary" id="dropdown-basic" >
            Filters
          </Dropdown.Toggle>
    
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Color</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Vendor</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Shipping Time</Dropdown.Item>
            <Dropdown.Item href="#/action-4">Rating</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      ); 
    }
export default Filter;
