import { Layout } from "components";
import PartialDentureFocused from "components/Page/Dentures/Partial";
import ReactMarkdown from "react-markdown";
import sharedStyles from "utils/styles/shared.module.scss";

const PartialDenturePage = (props) => {
  const markdown = `# Partial Dentures

If you are missing one or several teeth, partial dentures are a perfect solution to bring your confidence back and restore your smile.  
Partial dentures can replace patients’ missing teeth due to age, tooth extraction, or medical conditions. We attach the replacement teeth to a coloured base that matches your gums so that they can look more natural. 

At Affordable Smile, our goal is to deliver compassionate care and exceptional services to all of our patients. We understand the impact that the loss of teeth has on you, so rest assured that you’ll get a custom treatment solution.

### The Benefits of Partial Dentures

During your initial visit to our dental clinic, we will thoroughly examine your oral health, discuss your concerns, and advise you on the right option for your situation. 
If you are a suitable candidate for partial dentures, you will get to enjoy the following benefits:

- **Less-invasive procedure** – Compared to complete denture solutions, having partial dentures custom-designed for you is a seamless procedure and much more affordable
- **Natural-looking** – With partial dentures, you will quickly achieve a beautiful, natural-looking smile that can boost your confidence
- **Comfortable** – For patients with broken, misaligned, and missing teeth, partial dentures can restore comfort when speaking, eating, and chewing
- **Protection** – When you fill the gaps in your mouth with partial dentures, you will avoid common issues such as food particle build-up, bacteria, and gum disease 

When patients are in a hurry, our dentists suggest immediate dentures. After the extraction, we can provide you with immediate dentures to wear while waiting for your conventional dentures.

### The Importance of Regular Maintenance

It is essential to clean your dentures regularly to preserve their quality and functionality. You should avoid wearing them at bedtime, always keep them in a cleaning solution, and rinse them every morning before placing them in your mouth. 

For more helpful information about our partial dentures, contact us at 1300-715-578 to schedule a consultation.`;

  return (
    <Layout>
      <div className={sharedStyles.article}>
        <div className={sharedStyles.hero}>
					<PartialDentureFocused />
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

export default PartialDenturePage;
