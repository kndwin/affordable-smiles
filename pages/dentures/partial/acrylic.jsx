import { Layout } from "components";
import AcrylicDentureFocused from "components/Page/Dentures/Acrylic";
import ReactMarkdown from "react-markdown";
import sharedStyles from "utils/styles/shared.module.scss";

const AcrylicPage = (props) => {
  const markdown = `# Acrylic Dentures

If you have lost most or all of your lower or upper teeth due to decay, periodontal disease, or an accident, wearing dentures is the fastest solution to restore your smile. Dentures replace natural teeth, provide support for your lips, and improve overall oral health and appearance. 

At Affordable Smile, we offer partial and full acrylic dentures.

### Acrylic Dentures

Our dentures consist of 100% acrylic and contain no metal substructure. Acrylic dentures are suitable as permanent and temporary solutions, and we often recommend them as immediate dentures when patients need to remove multiple teeth and need new ones quickly. Some of the benefits these dentures offer include:

- Same-day replacement
- Cost-effective
- Comfortable to wear
 
It is essential to brush your dentures properly to ensure they last longer. If, after some time, your dentures slip or become uncomfortable, we suggest you consider a dental reline.  
When our dentists meet with you, they will perform a complete exam of your teeth and gums. After we learn more about your oral health, we can discuss treatment options and advise you on the right option for your condition. Contact us today at 1300-715-578 to schedule your appointment. `;

  return (
    <Layout>
      <div className={sharedStyles.article}>
        <div className={sharedStyles.hero}>
          <AcrylicDentureFocused />
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

export default AcrylicPage;
