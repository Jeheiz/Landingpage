import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<nav className="navbar bg-light">
				<div className="container-fluid block">
					<h1 className="navbar-brand mb-0 h1 letter">A Warm welcome! </h1>
					<div>Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Enim blanditiis, quae omnis in ullam minus sunt tenetur itaque laborum odio rem reiciendis ipsam perspiciatis optio architecto libero adipisci labore aperiam!</div>
					<button type="button" className="btn btn-primary">Call to action!</button>
				</div>

				<div className="card4" style={{width: "18rem"}}>
				<img src="https://prints.ultracoloringpages.com/fbd952526f4031d596180ed6ae838796.png" class="card-img-top" alt="https://prints.ultracoloringpages.com/fbd952526f4031d596180ed6ae838796.png"/>
						<div className="card-body">

							<h5 className="card-title">Card title</h5>
							<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
							<a href="#" className="btn btn-primary">Find out more</a>
						</div>			
                </div>

                
				<div className="card2" style={{width: "18rem"}}>
						<div className="card-body">
						<img src="https://prints.ultracoloringpages.com/fbd952526f4031d596180ed6ae838796.png" class="card-img-top" alt="https://prints.ultracoloringpages.com/fbd952526f4031d596180ed6ae838796.png"/>	
							<h5 className="card-title">Card title</h5>
							<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
							<a href="#" className="btn btn-primary">Find out more </a>
						</div>			
                </div>

				
				<div className="card3" style={{width: "18rem"}}>
						<div className="card-body">
						<img src="https://prints.ultracoloringpages.com/fbd952526f4031d596180ed6ae838796.png" class="card-img-top" alt="https://prints.ultracoloringpages.com/fbd952526f4031d596180ed6ae838796.png"/>	
							<h5 className="card-title">Card title</h5>
							<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
							<a href="#" className="btn btn-primary">Find out more</a>
						</div>			
                </div>

				<div className="card4" style={{width: "18rem"}}>
				<img src="https://prints.ultracoloringpages.com/fbd952526f4031d596180ed6ae838796.png" class="card-img-top" alt="https://prints.ultracoloringpages.com/fbd952526f4031d596180ed6ae838796.png"/>
						<div className="card-body">

							<h5 className="card-title">Card title</h5>
							<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
							<a href="#" className="btn btn-primary">Find out more</a>
						</div>			
                </div>



					</nav>

					<div className="footer">
					<a href="#" >
						Copywright your website 2019
					</a>
					</div>
		

				</div>
				);
};

				export default Home;
