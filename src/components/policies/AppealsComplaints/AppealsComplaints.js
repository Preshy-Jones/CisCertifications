import React from "react";
import appeals_complaintsData from "./AppealsComplaintsData";

function AppealsComplaints(props) {
	return (
		<div className="policyblock">
			<h2>{appeals_complaintsData[props.type]["one"].name}</h2>
			{appeals_complaintsData[props.type]["one"]["points"].map(
				(data, index) => {
					return (
						<p key={index}>
							<b className="red">{data.name}</b>
							{data.body}
						</p>
					);
				}
			)}
			<h2>PROCEDURE</h2>
			{props.type === "appeal" && <p className="red">INTRODUCTION</p>}
			<p>{appeals_complaintsData[props.type]["two"]}</p>
			{appeals_complaintsData[props.type]["three"].map((data, index) => {
				return <p key={index}>{data}</p>;
			})}
		</div>
	);
}

export default AppealsComplaints;
