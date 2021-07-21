import React from "react";
// import { useState} from 'react'
// import axios from 'axios'
import Form from "../resuables/Form";

function Enquiry() {
	const formData = [
		{
			placeholder: "Your Name*",
			type: "text",
			name: "name",
		},
		{
			placeholder: "Mobile No.*",
			type: "text",
			name: "phone",
		},
		{
			placeholder: "Email I'd*",
			type: "text",
			name: "email",
		},
	];

	return (
		<div className="showcase6">
			<h1>For Quick Call Fill Out The Enquiry Form</h1>
			<Form
				class="form-2"
				group="form-group-2"
				box="form-box-2"
				requirement={false}
				submit="submit-2"
				data={formData}
			/>
		</div>
	);
}

export default Enquiry;
