import React from "react";
import QualityData from "./QualityData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Quality() {
	return (
		<div className="policyblock">
			<h2>QUAILTY/IMS POLICY</h2>
			<p>
				<b>
					Top Management of the SIS Certifications Pvt Ltd shall demonstrate
					that:
				</b>
			</p>
			{QualityData.map((data, index) => {
				return (
					<div className="quality" key={index}>
						<p>
							<FontAwesomeIcon className="check" icon={["fas", "check"]} />
							{data}
						</p>
					</div>
				);
			})}
			<p>
				The above policy may be reviewed for any changes, as and when required,
				by the Top Management. The above policy will be prominently displayed in
				SIS Certifications Pvt. Ltd. office, website and brochures.
			</p>
		</div>
	);
}

export default Quality;
