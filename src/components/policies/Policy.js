import React from "react";
import Isoblock from "../resuables/Isoblock";
import Download from "../resuables/Download";
import Navigator from "../resuables/Navigator";
import Form from "../resuables/Form";
import accreditationData from "../accreditation/AccreditationData";
import { useParams } from "react-router-dom";
import PolicyData from "./PolicyData";

function Policy() {
	const { id } = useParams();

	return (
		<div>
			<Navigator route="About" />
			<div className="policy-grid">
				<div className="getquote">
					<h1>GET QUOTE</h1>
					<Form
						class="form-3"
						group="form-group"
						box="form-box"
						submit="submit"
						center={true}
						requirement={true}
						data={accreditationData.form}
					/>
				</div>
				<Isoblock />
				<Download />
				{PolicyData[id]}
			</div>
		</div>
	);
}

export default Policy;
