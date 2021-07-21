import React from "react";
import FooterData from "./FooterData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
	return (
		<div className="showcase8">
			<div className="footer-box footcol-1">
				<h2>{FooterData[0].name}</h2>
				<p>{FooterData[0].body}</p>
			</div>
			<div className="footer-box footcol-2">
				<h2>{FooterData[1].name}</h2>
				<ul>
					{FooterData[1].terms.map((term, index) => {
						return (
							<li key={index}>
								<FontAwesomeIcon
									className="right-arrow"
									icon={["fas", "caret-right"]}
								/>
								<a href={term.link}>{term.term}</a>
							</li>
						);
					})}
				</ul>
			</div>
			<div className="footer-box footcol-3">
				<h2>{FooterData[2].name}</h2>
				<ul>
					{FooterData[2].isos.map((iso, index) => {
						return (
							<li key={index}>
								<FontAwesomeIcon
									className="right-arrow"
									icon={["fas", "caret-right"]}
								/>
								<a href="#">{iso}</a>
							</li>
						);
					})}
				</ul>
			</div>
			<div className="footer-box footcol-4">
				<h2>{FooterData[3].name}</h2>
				{FooterData[3].body}
			</div>
		</div>
	);
}

export default Footer;
