import React from "react";
import communicationData from "./CommunicationData";

function Communication() {
	return (
		<div className="policyblock">
			<h2>COMMUNICATION POLICY</h2>
			<p>{communicationData["one"]}</p>
			<table className="table">
				{communicationData["two"].map((data, index) => {
					return (
						<tr>
							<td>{data.one}</td>
							<td>{data.two}</td>
						</tr>
					);
				})}
			</table>
			<h2>MODE OF COMMUNICATIONS</h2>
			<div className="communications">
				{communicationData["three"].map((data, index) => {
					return <p>{data}</p>;
				})}
			</div>
		</div>
	);
}

export default Communication;
