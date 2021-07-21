import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const footerData = [
	{
		name: "SIS CERTIFICATIONS",
		body: " SIS Certifications Pvt. Ltd. is one of the leading certification bodies for Management System Certifications. We are backed up by a highly professional and qualified team. Ever since we established ourselves in the year 2000 in USA, we have been certifying the business enterprises across various sectors of economies for....",
	},
	{
		name: "TERMS & POLICY",
		terms: [
			{
				term: " Impartiality Policy",
				link: "/CisCertifications/#/policy/impartiality_policy",
			},
			{
				term: " Quality/IMS Policy",
				link: "/CisCertifications/#/policy/quality_policy",
			},
			{
				term: " Communication Policy",
				link: "/CisCertifications/#/policy/communication_policy",
			},
			{
				term: " Suspension Policy",
				link: "/CisCertifications/#/policy/suspension_policy",
			},
			{
				term: " Cancellation/Withdrawal Policy",
				link: "/CisCertifications/#/policy/withdrawal_policy",
			},
			{
				term: " Appeals",
				link: "/CisCertifications/#/policy/appeals",
			},
			{
				term: " Complaints",
				link: "/CisCertifications/#/policy/complaints",
			},
			// {
			// 	term:" Suspended/Cancelled Clents",
			// 	link:"/CisCertifications/#/policy/cancelled_clients"
			// },
			{
				term: " Procedure Manual",
				link: "https://drive.google.com/file/d/1Jybgh-pO9qnE6wTX9aUKV4pqjZa9x5dK/view",
			},
			// {
			// 	term: " Suspended Certificates",
			// 	link: "/CisCertifications/#/policy/suspended_certificates",
			// },
		],
	},
	{
		name: "ISO STANDARDS",
		isos: [
			" ISO 9001 Certification",
			" ISO 14001 Certification",
			" ISO 45001 Certification",
			" ISO 27001 Certification",
			" ISO 37001 Certification",
			" ISO 29001 Certification",
			" ISO 22000 Certification",
			" ISO 13485 Certification",
			" ISO 50001 Certification",
		],
	},
	{
		name: "CONTACT US",
		body: (
			<p>
				<FontAwesomeIcon
					className="info-icons"
					icon={["fas", "map-marker-alt"]}
				/>
				Unit No – 514 , 5th Floor, <br /> Sector – 48 Vipul Business Park, Sohna
				Road <br /> Gurgaon, Haryana, 122018, India <br />
				<FontAwesomeIcon
					className="info-icons"
					icon={["fas", "map-marker-alt"]}
				/>
				Unit No – 514 , 5th Floor, Sector – 48 <br /> Vipul Business Park, Sohna
				Road <br /> Gurgaon, Haryana, 122018, India <br />
				<FontAwesomeIcon className="info-icons" icon={["fas", "phone-alt"]} />
				+91 9643073391, +91-8860610495 <br />
				<FontAwesomeIcon className="info-icons" icon={["fas", "envelope"]} />
				info@siscertifications.co.in, support@siscertifications.com <br />
				<FontAwesomeIcon className="info-icons" icon={["fab", "whatsapp"]} />
				+91-8860610495
			</p>
		),

		infos: [
			{
				icon: (
					<FontAwesomeIcon
						className="info-icons"
						icon={["fas", "map-marker-alt"]}
					/>
				),
				info: "Unit No – 514 , 5th Floor, Sector – 48 Vipul Business Park, Sohna Road Gurgaon, Haryana, 122018, India",
			},
			{
				icon: (
					<FontAwesomeIcon
						className="info-icons"
						icon={["fas", "map-marker-alt"]}
					/>
				),
				info: "Unit No – 312 , 3rd Floor, Sector – 48 Vipul Business Park, Sohna Road Gurgaon, Haryana, 122018, India",
			},
			{
				icon: (
					<FontAwesomeIcon className="info-icons" icon={["fas", "phone-alt"]} />
				),
				info: "+91 9643073391, +91-8860610495",
			},
			{
				icon: (
					<FontAwesomeIcon className="info-icons" icon={["fas", "envelope"]} />
				),
				info: "info@siscertifications.co.in, support@siscertifications.com",
			},
			{
				icon: (
					<FontAwesomeIcon className="info-icons" icon={["fab", "whatsapp"]} />
				),
				info: "+91-8860610495",
			},
		],
	},
];

export default footerData;
