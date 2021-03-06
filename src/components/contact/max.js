function find_max(nums) {
	let max_num = Number.NEGATIVE_INFINITY;
	for (let num of nums) {
		if (num > max_num) {
			max_num = num;
		}
	}
	return max_num;
}

<ul
	onClick={handleClick}
	className={click ? "dropdown-menu clicked2" : "dropdown-menu"}>
	{DropDownItems[props.data].map((item, index) => {
		return (
			<li key={index}>
				<a
					className="dropdown-link"
					href={item.path}
					onClick={() => setClick(false)}>
					{item.title}
				</a>
			</li>
		);
	})}
</ul>;

{
	props.about && (
		<div className="dropdown-box dropdowncol-1">
			<h2>{FooterData[0].name}</h2>
			<p>{FooterData[0].body}</p>
		</div>
	);
}

/* <Route path="/services">
              <Services />
            </Route> */

// onMouseEnter={()=> data.dropdown && onMouseEnter(data.name)}
// onMouseLeave={()=> data.dropdown && onMouseLeave(data.name)}

{
	DropDownItems[props.data].map((item, index) => {
		if (item.items) {
			return (
				<div className="dropdown-box dropdowncol-2">
					<h2>{item.name}</h2>
					<ul>
						{item.items.map((term, index) => {
							return (
								<li key={index}>
									<FontAwesomeIcon
										className="right-arrow"
										icon={["fas", "caret-right"]}
									/>
									<a href="#">{term}</a>
								</li>
							);
						})}
					</ul>
				</div>
			);
		}
	});
}

const impatialityData = [
	"The Certification Procedures Are Approved By The Managing Director And Are To Be Abided When Applicable And When QMS/EMS/OHSAS/OHSMS/FSMS Certification Is Conducted According To ISO 17021 & ISO/TS 22003Accreditation Standards.",

	"The Certification Procedures Are Approved By The Managing Director And Are To Be Abided When Applicable And When QMS/EMS/OHSAS/OHSMS/FSMS Certification Is Conducted According To ISO 17021 & ISO/TS 22003 Accreditation Standards.",

	"The Technical Manager Is Responsible For Conducting Certification Services In Compliance With SIS Certifications.SIS Declares That It Does Not Take Part In Any Consultancy Activities Regarding Development And Implementation Of Any Management Systems.",

	"There Shall Be No Pressure Of Any Kind (Financial, Trade, Administrative, Moral Or Other) Over SIS Certifications And The Personnel Regarding The Execution Of Their Obligations As A QMS/EMS/OHSAS/OHSMS/FSMS Certification Body According To ISO/IEC 17021.",

	"SIS Certifications Identifies, Analyzes And Documents All Possibilities For Conflict Of Interests That Emerge From Certification Processes Including Any Conflicts That Emerge From Its Relations. Presence Of Relations Does Not Necessarily Position The SIS Certifications In A Situation Of Conflict Of Interests. If Some Relations Create Impartiality Threats, SIS Certifications Documents And Eliminates Or Decreases Such Threats. This Information Is Presented To The Advisory Board Members. It Is Necessary To Cover All Possible Conflict Of Interests??? Sources That Are Identified Regardless Of Their Origin. SIS Certifications Requires From All Employees, Internal And External, To Comply With Impartiality Rules As Well As Reveal Any Situation Known To Them That May Present Them Or SIS Certifications With A Conflict Of Interests. SIS Certifications Shall Use This Information As Input In Identifying Threats To Impartiality Raised By The Activities Of Such				Personnel Or By The Organization That Employ Them. Such Personnel, Internal Or External Shall Not Be Used Unless They Demonstrate That There Is No Conflict Of Interest. SIS Certifications Shall Not Undertake Any Action That Threatens The Impartiality And/Or Are Potential Conflict Of Interests.",

	"When Certain Relations Create Unacceptable Impartiality Threat, Then The Certification Shall Not Be Conducted. SIS Certifications Shall Not Certify Another Certification Body For Its Activities Related To Management System Certification.",
	"SIS Certifications Shall Implement Corrective Actions Against Irrelevant Claims Of Any Consultancy Organization Declaring That The Certification Will Be Simpler, Faster Or Cheaper If Specific Certification Body Is Used Due To The Fact It Is Conflict Of Interests. Also . SIS Certifications Shall Not State Or Imply That Certification Would Be Simpler, Faster Or Cheaper If A Specified Consultancy Organization Were Used.",
	"When Potential Impartiality Threat Arises . SIS Certifications Eliminates It Or Decreases It. This Process Is Also Controlled By The Advisory Board.",
	"SIS Certifications Shall Not Certify Own Group Companies (If There Are Such Companies) Or Organizations That . SIS Certifications Is A Part Of Or A Member.",
	"Personnel, Who Have Provided Consultancy (Including Internal Audits) With In Two Years To The Organization Seeking Certification, Are Not Allowed To Take Part In Audit Or Other Certification Activities.",
	"SIS Certifications Shall Not Provide Internal Audits For Its Certified Clients. . SIS Certifications Shall Not Certify A Management System For Which It Has Conducted Internal Audits Within Two Years Following The End Of The Internal Audits.",
	"SIS Certifications Shall Not Provide Certification Services To A Client When Relations Between The Consultancy Company And . SIS Certifications Could Lead To Impartiality Threat.",
	"SIS Certifications Shall Not Outsource Audits To A Management System Consultancy Organization As This Poses An Unacceptable Threat To The Impartiality Of The Certification Body. This Does Not Apply To Individuals Contracted As Auditors Or Technical Experts.",
	"SIS Certifications Does Not Receive Any Financial Support Different From The Invested In It And The Fees Of Its Services\nSIS Certifications Does Not Pay Any Commissions To Consultants. Therefore There Can Be No Pressure Exercised On SIS Certifications By Consultants.",
	"SIS Certifications Shall Not Allow Any Pressure From Other Certification Bodies To Influence The Certification Process In The Organization. If Other Certification Body Declines To Provide Service For Client And The Client Requests The Same Service Form . SIS Certifications Than . SIS Certifications Shall Investigate The Reasons For Declining Before Performing Any Other Certification Activities For The Respective Client.",
	"SIS Certifications Shall Not Allow Pressure From Clients And/Or Consultancy Organizations. If There Is Such Pressure Than . SIS Certifications Will Apply Requirements Of ISO 17021 & ISO/TS 22003 And Internal Procedures In Order To Stop Such Practice. <br/> SIS Certifications Shall Not Allow Pressure From Employees And/Or Related Persons. <br/> All Employees Are Obliged To Work In Compliance With Requirements Of ISO 17021 & ISO/TS 22003 As Per Agreement Of Contract. <br/> Top Management Of . SIS Certifications Is Committed To Full Compliance With This Declaration.",
];

export default impatialityData;
