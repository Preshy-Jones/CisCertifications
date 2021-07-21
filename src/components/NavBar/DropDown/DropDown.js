import React from "react";
import { DropDownItems } from "./DropDownItems";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function DropDown(props) {
	// const [click, setClick] = useState(false);

	// const handleClick = () => {
	// 	setClick({ clicked: !click.clicked });
	// };

	return (
		<div className={props.cName + " dropdown"}>
			{props.about && (
				<div className="dropdown-box dropdowncol-1">
					<h2>{DropDownItems[props.data][0].name}</h2>
					<p>
						{DropDownItems[props.data][0].body}{" "}
						<span>
							<a href="/CisCertifications/#/about">Read More</a>
						</span>{" "}
					</p>
				</div>
			)}

			{DropDownItems[props.data].map((item, index) => {
				if (item.items) {
					return (
						<div className="dropdown-box dropdowncol-2">
							<h2>{item.name}</h2>
							<ul>
								{item.items.map((term, index) => {
									return (
										<li key={index}>
											<FontAwesomeIcon
												className="right-arrow"
												icon={["fas", "caret-right"]}
											/>
											<a href="#">{term}</a>
										</li>
									);
								})}
							</ul>
						</div>
					);
				}
			})}
		</div>
	);
}

export default DropDown;
