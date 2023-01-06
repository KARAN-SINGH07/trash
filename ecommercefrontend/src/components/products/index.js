// import logo from './logo.svg';
// import image1 from './img/registration.jpg'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './products.css';
import Product from "../products2/index";
// import img from './imag/naruto.jpg'
let arr;

function Products() {
	const navigate = useNavigate();
	useEffect(() => {
		if (!localStorage.getItem('token') && !localStorage.getItem('admintoken')) {
		
		
			navigate('/login')
		}
	}, [])

	const [APIData, setAPIData] = useState([]);
	
	useEffect(() => {
		axios.get('http://localhost:4000/productlisting/getproduct')
			.then((response) => {
				
				// console(response.data);	
				setAPIData(response.data.data);
				
			})
	}, []);
	return (
		// console.log(APIData),
		<body className='bodyy'>
			<div className="margin-top2 container-xl">
				<div className="row">
					<div className="col-md-12">
						<h2 className='h22'>Featured <b>Products</b></h2>
						<div id="myCarousel" className="carousel slide" data-ride="carousel" data-interval="0">
							{/* <!-- Carousel indicators --> */}
							{/* <ol className="carousel-indicators">
					<li data-target="#myCarousel" data-slide-to="0" className="active"></li>
					<li data-target="#myCarousel" data-slide-to="1"></li>
					<li data-target="#myCarousel" data-slide-to="2"></li>
				</ol>    */}
							{/* <!-- Wrapper for carousel items --> */}

							<div className="carousel-inner">
								<div className="item carousel-item active">
									
									 
									<div className="row">
									{APIData.map((data)=>{
							return(<Product  productname={data.productname} price={data.price} description={data.description} img={data.img}/>)})}
						
																	
										
									
									</div>
									
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			 
		</body>
	);
}

export default Products;

