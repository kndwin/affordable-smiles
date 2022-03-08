import { Layout } from "components";
import ImplantDentureFocused from "components/Page/Implants/Denture";
import ReactMarkdown from "react-markdown";
import sharedStyles from "utils/styles/shared.module.scss";

const ImplantDenturePage = (props) => {
  const markdown = `# Implant Denture

A single tooth implant could be the perfect solution to address a missing tooth. When people experience tooth loss, it’s best to review all tooth replacement options, including dental implants, dentures, and bridges. 

At Affordable Smile, we want the best for our patients. Patients may face various problems if they don’t address the missing tooth on time, such as gum disease, severe deterioration of the gum tissues, tooth root degradation, and further tooth loss.

### Dental Implants vs Bridges for Replacing a Missing Tooth

Traditional bridges are prosthetics that rely on the remaining healthy teeth. The artificial tooth fills the gap between the teeth and restores patients’ smiles. It is an affordable and fast treatment. 

A single tooth implant is a small titanium piece that replaces the lost tooth’s root. After our dentists place the implant, your jaw will start bonding with the implant, and during that time, you will wear a temporary crown. Once the single implant and the jaw bone bond is strong, you will enjoy a permanent crown, which can last for decades.

 Some differences between a bridge and a single tooth implant include: 
- A bridge requires support from the abutment teeth, while an implant is self-supporting
- A dental bridge doesn’t support bone health, while implants protect the gums and stimulate the jawbone
- Dental bridges last for ten years, while dental implants up to three decades

### Who Should Get All-on-4 Fixed Dental Implants?

These fixed dental implants offer patients a chance to live a healthy and fulfiling lifestyle by replacing teeth with quality implants instead of dentures. 

The All-on-4 procedure is more affordable, faster, and doesn’t require high bone density to support the implants. 

If you are ready to improve your oral health and enhance your smile, contact us today at 1300-715-578 to schedule an appointment.`;

  return (
    <Layout>
      <div className={sharedStyles.article}>
        <div className={sharedStyles.hero}>
          <ImplantDentureFocused />
        </div>
        <div className={sharedStyles.markdown}>
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
      </div>
    </Layout>
  );
};

export default ImplantDenturePage;
