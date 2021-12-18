import { Layout } from "components";
import FullDentureFocused from "components/Page/Dentures/Full";
import ReactMarkdown from "react-markdown";
import sharedStyles from "utils/styles/shared.module.scss";

const FullDenturePage = (props) => {
  const markdown = `# Full Denture

If you are missing all or most of your teeth, dentures can fill the gaps and restore your smile. With numerous advancements in the dental industry, we now have the opportunity to offer you full dentures that function better, are more convenient, and look natural. 

At Affordable Smile, we specialise in restoring patients’ smiles, improving their appearance, and rejuvenating their dental health using various types of denture solutions.

### Why Choose Full Denture?

We understand that every patient has a unique smile and our professionals have years of experience to help you choose dentures that feel pleasant and appear natural. Besides a youthful and healthier appearance, our patients will also enjoy:

- Tighter muscles
- Long-lasting dentures made of quality materials
- Improved speech impediments
- Teeth protection
- Stronger jaw 

When patients are in a hurry or don’t want to be without dentures, we can also suggest immediate dentures. We can place them the same day our dentists extract your teeth, and this way, you will have teeth while waiting for your conventional dentures. These dentures protect your gums as you heal from the extraction.

### Are Full Denture Right for Me?

The purpose of dentures is to replace broken or missing teeth. During your initial visit to our clinic, we can make a thorough examination and discuss your situation. We will provide you with more information regarding your oral health and advise you on which type of denture is right for you. 

At Affordable Smile, we keep up with the latest procedures and methods on the market to ensure 100% satisfaction. Our dentists use top-of-the-line equipment to inspect, diagnose, and treat various dental issues and get the best possible results so you can eat and smile with confidence. 

Contact us today at 1300-715-578, and we will be happy to schedule a consultation to discuss full dentures.`;

  return (
    <Layout>
      <div className={sharedStyles.article}>
        <div className={sharedStyles.hero}>
          <FullDentureFocused />
        </div>
        <div className={sharedStyles.markdown}>
					<ReactMarkdown>
						{markdown}
					</ReactMarkdown>
        </div>
      </div>
    </Layout>
  );
};

export default FullDenturePage;
