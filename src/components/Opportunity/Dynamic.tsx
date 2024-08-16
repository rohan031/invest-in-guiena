import React, { act, useState } from "react";
import styles from "./opportunity.module.scss";

const data = [
	{
		heading: "Mining",
		text: " Guinea has one of the world's largest reserves of bauxite, essential for aluminum production. The country is also rich in iron, gold, diamonds, and other strategic minerals.",
		link: "/files/Invest in mining Powerpoint.pdf",
	},

	{
		heading: "Agriculture",
		text: "A vital sector for the rural population, with fertile land suitable for cultivating rice, cotton, coffee, cocoa, bananas, potatoes, tropical fruits, as well as livestock farming.",
		link: "/files/Invest in agriculture Powerrpoint.pdf",
	},

	{
		heading: "Energy",
		text: "With its vast hydro resources, Guinea is poised to become a key player in energy export in West Africa. There are opportunities for renewable energy projects.",
		link: "/files/Invest in energy Powerpoint.pdf",
	},

	{
		heading: "ICT",
		text: "The telecommunications sector in Guinea is experiencing significant growth, supported by significant investments.",
		link: "/files/Invest in ICT Powerpoint.pdf",
	},

	{
		heading: "Infrastructure",
		text: "Development of transport, telecommunications, and energy infrastructure.",
		link: "/files/Invest in infrastructures Powerpoint.pdf",
	},

	{
		heading: "Livestock",
		text: "Ensuring the health and productivity of our livestock is our top priority, as they are the cornerstone of sustainable farming and a thriving agricultural community.",
		link: "/files/Invest in livestock and fisheries Powerpoint.pdf",
	},

	{
		heading: "Tourism",
		text: "The country has a rich natural heritage with varied landscapes, from Atlantic beaches to mountains and tropical forests.",
		link: "/files/Invest in tourism Powerpoint.pdf",
	},
];

const Dynamic = () => {
	const [active, setActive] = useState<string>(data[0].heading);

	const handleActive = (item: string) => {
		setActive(item);
	};

	let activeItem = data.find((item) => item.heading === active);
	if (!activeItem) activeItem = data[0];

	return (
		<div className={styles.dynamic}>
			<div className={styles.nav}>
				{data.map((item) => {
					return (
						<button
							key={item.link}
							data-active={
								active === item.heading ||
								activeItem.heading === item.heading
							}
							onClick={() => handleActive(item.heading)}
						>
							{item.heading}
						</button>
					);
				})}
			</div>

			<div className={`container ${styles.content}`}>
				<p>{activeItem.text}</p>
				<div>
					<a
						href={activeItem.link}
						target="_blank"
						rel="noopener noreferrer"
					>
						Brochure
					</a>
				</div>
			</div>
		</div>
	);
};

export default Dynamic;
