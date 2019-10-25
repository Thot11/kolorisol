import React from "react";
import anime from 'animejs';

import "./activites.scss";


const Activites = () => (
	
	<section className="activites">
		<h2>Nos activités</h2>
		<p className="intro">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sem mi, finibus at orci sit amet, aliquam laoreet mauris. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis sodales felis eu orci mattis, et volutpat nulla pellentesque.</p>
		<div className="list-buttons">
			<button className="button-description button-peinture" onClick={changePeinture}>Peinture</button>
			<button className="button-description button-isolation" onClick={changeIsolation}>Isolation</button>
			<button className="button-description button-ravallement" onClick={changeRavallement}>Ravallement</button>
		</div>
		<div className="div-description">
			<p className="description description-peinture">
				Peinture ipsum dolor sit amet, consectetur adipiscing elit. Quisque sem mi, finibus at orci sit amet, aliquam laoreet mauris. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis sodales felis eu orci mattis, et volutpat nulla pellentesque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sem mi, finibus at orci sit amet, aliquam laoreet mauris. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis sodales felis eu orci mattis, et volutpat nulla pellentesque.
			</p>
			<p className="description description-isolation">
				Isolation ipsum dolor sit amet, consectetur adipiscing elit. Quisque sem mi, finibus at orci sit amet, aliquam laoreet mauris. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis sodales felis eu orci mattis, et volutpat nulla pellentesque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sem mi, finibus at orci sit amet, aliquam laoreet mauris. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis sodales felis eu orci mattis, et volutpat nulla pellentesque.
			</p>
			<p className="description description-ravallement">
				Ravallement ipsum dolor sit amet, consectetur adipiscing elit. Quisque sem mi, finibus at orci sit amet, aliquam laoreet mauris. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis sodales felis eu orci mattis, et volutpat nulla pellentesque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sem mi, finibus at orci sit amet, aliquam laoreet mauris. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis sodales felis eu orci mattis, et volutpat nulla pellentesque.
			</p>
			<div className="tabulation">
				<div className="bulle bulle-peinture"></div>
				<div className="bulle bulle-isolation"></div>
				<div className="bulle bulle-ravallement"></div>
			</div>
		</div>
		
	</section>
	
	
)


const changePeinture = () => {
	console.log("peinture");
	anime({
		targets: '.description-peinture',
		left: '0',
		opacity: '1',
		easing: 'linear',
		duration: 200
	});

	anime({
		targets: ['.description-ravallement','.description-isolation'],
		left: '350px',
		opacity: '0',
		easing: 'linear',
		duration: 200
	});


	anime({
		targets: '.button-peinture',
		backgroundColor: '#fff',
		color: '#EC7F00',
		duration: 200
	});

	anime({
		targets: ['.button-ravallement','.button-isolation'],
		backgroundColor: '#EC7F00',
		color: '#fff',
		duration: 200
	});

	anime({
		targets: '.button-peinture',
		backgroundColor: '#fff',
		color: '#EC7F00',
		duration: 200
	});

	anime({
		targets: ['.button-ravallement','.button-isolation'],
		backgroundColor: '#EC7F00',
		color: '#fff',
		duration: 200
	});

	anime({
		targets: '.bulle-peinture',
		backgroundColor: '#EC7F00',
		duration: 200
	});

	anime({
		targets: ['.bulle-ravallement','.bulle-isolation'],
		backgroundColor: '#C4C4C4',
		duration: 200
	});
	
}

const changeIsolation = () => {
	console.log("isolation");
	anime({
		targets: '.description-isolation',
		left: '0',
		opacity: '1',
		easing: 'linear',
		duration: 200
	});

	anime({
		targets: ['.description-peinture','.description-ravallement'],
		left: '350px',
		opacity: '0',
		easing: 'linear',
		duration: 200
	});

	anime({
		targets: '.button-isolation',
		backgroundColor: '#fff',
		color: '#EC7F00',
		duration: 200
	});

	anime({
		targets: ['.button-peinture','.button-ravallement'],
		backgroundColor: '#EC7F00',
		color: '#fff',
		duration: 200
	});

	anime({
		targets: '.bulle-isolation',
		backgroundColor: '#EC7F00',
		duration: 200
	});

	anime({
		targets: ['.bulle-peinture','.bulle-ravallement'],
		backgroundColor: '#C4C4C4',
		duration: 200
	});
}

const changeRavallement = () => {
	console.log("ravallment");
	anime({
		targets: '.description-ravallement',
		left: '0',
		opacity: 1,
		easing: 'linear',
		duration: 200
	});

	anime({
		targets: ['.description-isolation','.description-peinture'],
		left: '350px',
		opacity: 0,
		easing: 'linear',
		duration: 200
	});

	anime({
		targets: '.button-ravallement',
		backgroundColor: '#fff',
		color: '#EC7F00',
		duration: 200
	});

	anime({
		targets: ['.button-peinture','.button-isolation'],
		backgroundColor: '#EC7F00',
		color: '#fff',
		duration: 200
	});

	anime({
		targets: '.bulle-ravallement',
		backgroundColor: '#EC7F00',
		duration: 200
	});

	anime({
		targets: ['.bulle-peinture','.bulle-isolation'],
		backgroundColor: '#C4C4C4',
		duration: 200
	});
}



export default Activites