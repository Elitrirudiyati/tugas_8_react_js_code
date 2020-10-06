import React from 'react';
import { Figure, Dropdown, Row, Col, Breadcrumb} from 'react-bootstrap';



function PageHeader() {
	return(
		<>
			<Row className="table-dark">
			  <Col sm={3}>
			  	<Dropdown>
				<Dropdown.Toggle variant="success" id="dropdown-basic">
					Pilih Bahasa
				</Dropdown.Toggle>
				<Dropdown.Menu>
					<Dropdown.Item href="#/action-1"> English </Dropdown.Item>
					<Dropdown.Item href="#/action-2">Bahasa Indonesia</Dropdown.Item>
					<Dropdown.Item href="#/action-3">Bahasa Arab</Dropdown.Item>
				</Dropdown.Menu>
				</Dropdown>
			  	</Col>

			  <Col sm={6}>
			  </Col>

			  <Col sm={3}>
			  <Figure>
  				<Figure.Image
    				width={65}
    				height={65}
    				alt="171x180"
    				src="https://png.pngtree.com/svg/20161113/ef1b24279e.png"
  				/>
  				<Figure.Caption>
   					<b>Alan Saputra</b>
  				</Figure.Caption>
			</Figure>
			</Col>			
			</Row>

			<Row>
			 <Col sm={4}>			  	
			  </Col>
			  <Col sm={4}>			  	
			  </Col>
			  <Col sm={4}>
			  	<Breadcrumb>
				  <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
				  <Breadcrumb.Item href="#">Berita</Breadcrumb.Item>
				  <Breadcrumb.Item active>Bola</Breadcrumb.Item>
				</Breadcrumb>
			  </Col>
			</Row>		
		</>
		)
}
export default PageHeader;