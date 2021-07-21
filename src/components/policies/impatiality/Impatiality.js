import React from "react";
import ImpatialityData from "./ImpatialityData";

function Impatiality() {
	return (
		<div className="policyblock">
			<h2>IMPARTIALITY POLICY</h2>
			{ImpatialityData.map((data, index) => {
				return <p key={index}>{data}</p>;
			})}
		</div>
	);
}

export default Impatiality;
