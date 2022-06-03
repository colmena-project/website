import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default class Footer extends Component {

	componentDidMount() {
		if(typeof window !== 'undefined') {
			window.WOW = require('wowjs/dist/wow.js');	
		}
	
		new WOW.WOW().init();
	}

	render() {
		return (
			<footer id="contact-footer">
				
				{/* <!-- Widgets --> */}
				<div className="footer-widgets">
					<Container>
						
						<Row>
							
							{/* <!-- Footer logo --> */}
							<Col className="col-12 col-md-6 col-lg-3 res-margin">
								<div className="widget">
									<p className="footer-logo">
										<img src="/images/colmena/logo-white.png" alt="Colmena" data-rjs="2" />
									</p>
									<p>
									info@colmenaproject.io
									</p>
								
									
									{/* <!-- Social links --> */}
									<div className="footer-social">
										<a href="https://twitter.com/ColmenaProject" title="Twitter"><i className="fab fa-twitter fa-fw"></i></a>
										<a href="https://www.facebook.com/ColmenaProject" title="Facebook"><i className="fab fa-facebook-f fa-fw"></i></a>
										<a href="https://www.linkedin.com/company/colmenaproject/" title="Linkedin"><i className="fab fa-linkedin-in fa-fw"></i></a>
										<a href="https://www.instagram.com/colmenaproject/" title="Instagram"><i className="fab fa-instagram"></i></a>
									</div>
								</div>
							</Col>
							
							{/* <!-- Useful links --> 
							<Col className="col-12 col-md-6 col-lg-2 offset-lg-1 res-margin">
								<div className="widget">
									
									<h6>Enlaces útiles</h6>
									
									<ul className="footer-menu">
										<li><a href="#">Support</a></li>
										<li><a href="#">Privacy Policy</a></li>
										<li><a href="#">Terms &amp; Conditions</a></li>
										<li><a href="#">Affiliate Program</a></li>
										<li><a href="#">Careers</a></li>
									</ul>
									
								</div>
							</Col>
							*/}
							{/* <!-- Product help --> */}
							<Col className="col-12 col-md-3 col-lg-6 res-margin">
								<div className="widget">
									
									{/*<h6>Ayuda sobre Colmena</h6>*/}	
									
									<ul className="footer-menu">
										<li><a href="#services">Colmena</a></li>
										<li><a href="#features">App</a></li>
										<li><a href="#factory">Factory</a></li>
										<li><a href="#jelly">JellyCoin</a></li>
										<li><a href="#support">FAQ</a></li>
										<li><a href="/terms">Términos y condiciones</a></li>
									</ul>
									
								</div>
							</Col>
							
							{/* <!-- Download --> */}
							<Col className="col-12 col-md-6 col-lg-3">
								<div className="widget">
									
										{/*<h6>Download</h6>*/}
									
									<div className="button-store">
										<a href="https://play.google.com/store/apps/details?id=com.colmena.colmenapp&hl=es_NI&gl=US" className="custom-btn d-inline-flex align-items-center m-2 m-sm-0 mb-sm-3"><i className="fab fa-google-play"></i><p>Disponible en<span>Google Play</span></p></a>
										{/*<a href="#" className="custom-btn d-inline-flex align-items-center m-2 m-sm-0"><i className="fab fa-apple"></i><p>Descargar en <span>App Store</span></p></a>*/}
									</div>
									
								</div>
							</Col>
							
						</Row>
						
					</Container>
				</div>
				
				{/* <!-- Copyright --> */}
				<div className="footer-copyright">				
					<Container>
						
						<Row>						
							<Col className="col-12">
								
								{/* <!-- Text --> */}
								<p className="copyright text-center">
									© 2022 - <a href="#" target="_blank">Colmena ®</a>
								</p>
								
							</Col>
						</Row>
						
					</Container>				
				</div>
				
			</footer>
		);
	}

}