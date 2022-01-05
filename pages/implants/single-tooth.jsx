import { Layout } from "components";
import SingleToothFocused from "components/Page/Implants/SingleTooth";
import ReactMarkdown from "react-markdown";
import sharedStyles from "utils/styles/shared.module.scss";

const SingleToothPage = (props) => {
  const markdown = `# Single Tooth Implant

A single tooth implant could be the perfect solution to address a missing tooth. When people experience tooth loss, it’s best to review all tooth replacement options, including dental implants, dentures, and bridges. 

At Affordable Smile, we want the best for our patients. Although some people aren’t disturbed by the aesthetic issues of missing teeth, such thinking can lead to devastating oral consequences. Patients may face various problems if they don’t address the missing tooth on time, such as gum disease, severe deterioration of the gum tissues, tooth root degradation, and further tooth loss.

### Dental Implants vs Bridges for Replacing a Missing Tooth

Traditional bridges are prosthetics that rely on the remaining healthy teeth. The artificial tooth fills the gap between the teeth and restores patients’ smiles. “Whilst a bridge is certainly an option, it does ultimately mean cutting into potentially healthy teeth and starting the degradation process which may lead to future tooth problems on the bridged teeth. If your bone is good and you have a level of general health an implant may be the way to go! So what is an implant?

A single tooth implant is a small titanium piece that replaces the lost tooth’s root. After our dentists place the implant, your jaw will start bonding with the implant, and during that time, you will wear a temporary crown. Once the single implant and the jaw bone bond is strong, you will enjoy a permanent crown, which can last for decades.

Some differences between a bridge and a single tooth implant include: 
- A bridge requires support from the abutment teeth, while an implant is self-supporting
- A dental bridge doesn’t support bone health, while implants protect the gums and stimulate the jawbone
- Dental bridges last for ten years, while dental implants up to three decades

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
