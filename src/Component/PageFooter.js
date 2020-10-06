import React, {Component} from 'react';
import {Col, Modal, Jumbotron, ListGroup, Form, Row, Button, Navbar} from 'react-bootstrap';

class PageFooter extends Component{
	constructor(props){
		super(props)
		this.state={
			show:false
		}
		this.handleLogin=this.handleLogin.bind(this)
	}
	handleLogin(){
		
		this.setState({show:!this.state.show})
		
	}

	render(){
	return(
		<>
		<Row>				
			<Col sm={3}>
				<ListGroup as="ul" align="justify">
					<ListGroup.Item as="li" active>
						Liga 1 Indonesia
					</ListGroup.Item>
					<ListGroup.Item as="li">Liga Primer Inggris</ListGroup.Item>
					<ListGroup.Item as="li" disabled>
						Divisi Primera
					</ListGroup.Item>
					<ListGroup.Item as="li">
						Seri A
					</ListGroup.Item>
					<ListGroup.Item as="li">
						Ligue 1
					</ListGroup.Item>
					<ListGroup.Item as="li">
						Bundes Liga
					</ListGroup.Item>
				</ListGroup>
			</Col>
			<Col sm={6}>
				<Jumbotron align="justify">
					<h1>DIVISI PRIMERA</h1>
					<p>
						Main untuk Catalunya, Gerard Pique Minta Dihormati
					</p>
					<p>
					<Button variant="primary">Read more</Button>
					</p>
				</Jumbotron>

			</Col>
			<Col sm={3}>
				<center>
					<Navbar.Brand>					    
						<img
		 					alt=""
		 					src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQueskTtl7dvVM0Th3uQvvhJXehOQrrY2p0HQ&usqp=CAU" roundedCircle		
		 					width="30"
		 					height="30"
		 					
						/>
						<br/>  
						<b>Silahkan Login</b>
					</Navbar.Brand>
				</center>
				
				<Form>
					<Form.Group controlId="formBasicEmail">				    
							<Form.Control type="email" placeholder="Masukan Email" />				    
					</Form.Group>
							<Form.Group controlId="formBasicPassword">				    
					<Form.Control type="password" placeholder="Password" />
					</Form.Group>
					<Form.Group controlId="formBasicCheckbox">
						<Form.Check type="checkbox" label="Term & Conditions" />
					</Form.Group>

					<Button onClick={()=>this.handleLogin()}>Login</Button>
						<Modal show={this.state.show} onHide={()=>this.handleLogin()}>
						<Modal.Dialog>
  							<Modal.Header closeButton>
    							<Modal.Title>Login</Modal.Title>
  							</Modal.Header>

  						<Modal.Body>
    						<p>Anda Berhasil Login</p>
  						</Modal.Body>

  						<Modal.Footer>
    						<Button onClick={()=>{this.handleLogin()}}variant="secondary">Close</Button>
    						<Button onClick={()=>{this.handleLogin()}}variant="primary">Save Username & Klik</Button>
  						</Modal.Footer>
					</Modal.Dialog>	
    			</Modal>
				</Form>
				</Col>
			</Row>		
		</>
		)
	}
}
export default PageFooter;