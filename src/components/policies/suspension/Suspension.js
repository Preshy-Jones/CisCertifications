import React from "react";
import SuspensionData from "./SuspensionData";

function Suspension() {
	return (
		<div className="policyblock">
			<h2>SUSPENSION POLICY</h2>
			{SuspensionData["one"].map((data, index) => {
				return index === 1 ? (
					<p key={index}>
						<b>{data}</b>
					</p>
				) : (
					<p key={index}>{data}</p>
				);
			})}
			<div className="communications">
				{SuspensionData["two"].map((data, index) => {
					return <p key={index}>{data}</p>;
				})}
			</div>
		</div>
	);
}

export default Suspension;
