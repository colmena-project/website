import React, { useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const PageTitle = () => {
    const parallax = useRef(null);

    useEffect(() => {
        if (parallax.current) {
            parallax.current.style.backgroundImage = `url(${parallax.current.getAttribute('data-image')})`;
        }
    }, [parallax]);

    return (
        <section className="page-title valign parallax" data-image="/images/parallax/contact.jpg" ref={parallax}>
			
			{/* <!-- Overlay --> */}
			<div className="overlay"></div>	
			
			{/* <!-- Container --> */}
			<Container>
				<Row>
					<Col className="col-12 text-center">
						
						{/* <!-- Title --> */}
						<h1 className="blog-title">Contact</h1>
						<p className="blog-info info">Connect with us</p>

					</Col>
				</Row>
			</Container>
			
		</section>
    );
};

export default PageTitle;
