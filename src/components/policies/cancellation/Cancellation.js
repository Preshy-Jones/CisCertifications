import React from "react";
import CancellationData from "./CancellationData";

function Cancellation() {
	return (
		<div className="policyblock">
			<h2>CANCELLATION/WITHDRAWAL POLICY</h2>
			{CancellationData["one"].map((data, index) => {
				return index === 1 ? (
					<p key={index}>
						<b>{data}</b>
					</p>
				) : (
					<p key={index}>{data}</p>
				);
			})}
			<div className="communications">
				{CancellationData["two"].map((data, index) => {
					return <p key={index}>{data}</p>;
				})}
			</div>
		</div>
	);
}

export default Cancellation;
