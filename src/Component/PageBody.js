import React from 'react';
import {Container, Carousel, Row} from 'react-bootstrap';


function PageBody() {
	return(
		<>
		<Container>
			<Row>
			<center>
			<Carousel>
			<Carousel.Item>
			<img
			className="d-block w-75"
			src="https://images.performgroup.com/di/library/GOAL/30/f0/neymar-psg-paris-saint-germain-2018-19_gmakk5891n9c19udcwofmrsgc.jpg?t=-1258742791&quality=60&w=1600"
			alt="First slide"
			/>
			<Carousel.Caption>
			<h3>Neymar Bahas Kontrak Baru Di Paris Saint-Germainl</h3>
			</Carousel.Caption>
			</Carousel.Item>

			<Carousel.Item>
			<img
			className="d-block w-75"
			src="https://images.performgroup.com/di/library/GOAL/f3/33/england-celebrate-vs-montenegro_e97kv5anpqlq1gr9nc2qaz4ko.jpg?t=-1232521935&quality=60&w=1600"
			alt="Second slide"
			/>
			<Carousel.Caption>
			<h3>Inggris Mau Jadi Tim Terbaik Di Dunia</h3>			
			</Carousel.Caption>
			</Carousel.Item>

			<Carousel.Item>
			<img
			className="d-block w-75"
			src="https://images.performgroup.com/di/library/GOAL/63/7f/sani-rizki-fauzi-indonesia-u-22_4yztc4nehkt61fa7omuyagf71.jpg?t=351764441&quality=60&w=1600"
			alt="Third slide"
			/>
			<Carousel.Caption>
			<h3>Sani Rizki Fauzi Tegaskan Mental Pemain Timnas Indonesia U-23 Tetap Bagus</h3>
			</Carousel.Caption>
			</Carousel.Item>
			</Carousel>
			</center>
			</Row>			
		</Container>
		</>
		)
}
export default PageBody;