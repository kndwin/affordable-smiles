import { Layout } from "components";
import ChromeDentureFocused from "components/Page/Dentures/Chrome";
import ReactMarkdown from "react-markdown";
import sharedStyles from "utils/styles/shared.module.scss";

const ChromePage = (props) => {
  const markdown = `# Chrome Dentures
	
Chrome dentures are a premium-quality solution and have much greater resistance than acrylic dentures. At Affordable Smile, we fabricate these dentures from acrylic resin and chrome cobalt to deliver exceptional comfort and superior strength. They have a natural feel, provide excellent support to the jaw, and are more hygienic. Based on your needs, we can suggest full or partial cobalt chrome dentures.

### Partial Dentures

If some of your natural teeth are still intact and healthy, we suggest a chrome partial denture as a better option. We attach false teeth to a plate that fills the gap and instantly restores your smile. These partial metal dentures:

- Maintain the structural integrity of the jaw
- Are easy and comfortable to wear
- Have natural appearance 

During your first visit to our dentures clinic, we will examine your teeth and gums and suggest a suitable treatment option to improve your overall oral health. We have the skills, tools, and experience to provide a thorough examination of your jaw to determine the best type of dentures for each patient. 

[Contact us today](/contact) to discuss chrome dentures, their pros and cons, and how we can help you continue living life without hindrance to your daily activities and hobbies.`;

  return (
    <Layout>
      <div className={sharedStyles.article}>
        <div className={sharedStyles.hero}>
          <ChromeDentureFocused />
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

export default ChromePage;
