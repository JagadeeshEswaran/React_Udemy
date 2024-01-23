import React from "react";
import aboutImg from "../images/about.jpg";
import { searchLink1 } from "../appData";
import Title from "./Title";

const About = () => {
	return (
		<div>
			<section className="section" id="about">
				<Title title="about" subTitle="us" />

				<div className="section-center about-center">
					<div className="about-img">
						<img src={aboutImg} className="about-photo" alt="awesome beach" />
					</div>
					<article className="about-info">
						<h3>explore the difference</h3>
						<p>
							India is a land of diverse landscapes and rich cultural heritage,
							making it a captivating destination for tourists from around the
							world. The country`&apos`s tourism industry is a vibrant tapestry
							of history, spirituality, and natural beauty.
						</p>
						<p>
							From the snow-capped peaks of the Himalayas to the tropical
							beaches of the south, India offers a kaleidoscope of experiences
							for every type of traveler.
						</p>
						<a
							href={searchLink1[0].href}
							target="_blank"
							rel="noreferrer"
							className="btn">
							read more
						</a>
					</article>
				</div>
			</section>
		</div>
	);
};

export default About;
