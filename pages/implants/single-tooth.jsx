import { Layout } from "components";
import SingleToothFocused from "components/Page/Implants/SingleTooth";
import ReactMarkdown from "react-markdown";
import sharedStyles from "utils/styles/shared.module.scss";

const SingleToothPage = (props) => {
  const markdown = `# Single Tooth Implant

A single tooth implant could be the perfect solution to address a missing tooth. When people experience tooth loss, it’s best to review all tooth replacement options, including dental implants, dentures, and bridges. 

At Affordable Smile, we want the best for our patients. Patients may face various problems if they don’t address the missing tooth on time, such as gum disease, severe deterioration of the gum tissues, tooth root degradation, and further tooth loss.

### Who Is a Suitable Candidate for a Single Tooth Implant?

It is essential to schedule dental assistance if:

- You have lost a tooth due to oral decay
- You are missing a tooth due to a medical condition
- You had a tooth knocked out in an accident
 
[Contact us today](/contact) to book an appointment and discuss a single tooth implant treatment`;

  return (
    <Layout>
      <div className={sharedStyles.article}>
        <div className={sharedStyles.hero}>
          <SingleToothFocused />
        </div>
        <div className={sharedStyles.markdown}>
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
      </div>
    </Layout>
  );
};

export default SingleToothPage;
