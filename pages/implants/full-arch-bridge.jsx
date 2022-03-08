import { Layout } from "components";
import FullArchFocused from "components/Page/Implants/FullArch";
import ReactMarkdown from "react-markdown";
import sharedStyles from "utils/styles/shared.module.scss";

const markdown = `# Full Arch Dental Implants 

At Affordable Smile, we want the best for our patients. Patients may face various problems if they don’t address the missing tooth on time, such as gum disease, severe deterioration of the gum tissues, tooth root degradation, and further tooth loss.


### Who Should Get All-on-4 Fixed Dental Implants?

These fixed dental implants offer patients a chance to live a healthy and fulfiling lifestyle by replacing teeth with quality implants instead of dentures. 

The All-on-4 procedure is more affordable, faster, and doesn’t require high bone density to support the implants. 

### So What is an All on 4/6 Implant Solution?

An all on 4/6 implant solution is one where between 4 or more implants are placed into the bone and a full tooth bridge is literally fixed to the implants. The Smile quality is very high as there is no need to match to other failing teeth. Generally there are no teeth in that jaw (being top or lower jam or both) so it means theres a clean palate by which to create your beautiful smile upon. 

With an All on 4/6 implant treatment there are various materials that can be used to complete the smile. These can be acrylics or ceramics all bonded to a titanium superstructure that is secured to the implants. Ask you practitioner about all the materials that can be used to get your smile looking amazing and have you eating back to your best!

If you are ready to improve your oral health and enhance your smile, [contact us today](/contact)  to schedule an appointment.`;

const FullArchBridgePage = (props) => {
  return (
    <Layout>
      <div className={sharedStyles.article}>
        <div className={sharedStyles.hero}>
          <FullArchFocused />
        </div>
        <div className={sharedStyles.markdown}>
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
      </div>
    </Layout>
  );
};

export default FullArchBridgePage;
