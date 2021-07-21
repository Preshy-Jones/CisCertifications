import Impartiality from "./impatiality/Impatiality";
import Quality from "./quality/Quality";
import Suspension from "./suspension/Suspension";
import Cancellation from "./cancellation/Cancellation";
import AppealsComplaints from "./AppealsComplaints/AppealsComplaints";
import Communication from "./communication/Communication";

const policyData = {
	impartiality_policy: <Impartiality />,
	quality_policy: <Quality />,
	suspension_policy: <Suspension />,
	withdrawal_policy: <Cancellation />,
	appeals: <AppealsComplaints type="appeal" />,
	complaints: <AppealsComplaints type="complaint" />,
	communication_policy: <Communication />,
};

export default policyData;
