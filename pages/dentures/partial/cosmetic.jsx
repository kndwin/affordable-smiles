import { Layout } from "components";
import CosmeticDentureFocused from "components/Page/Dentures/Cosmetic";
import ReactMarkdown from "react-markdown";
import sharedStyles from "utils/styles/shared.module.scss";

const CosmeticPage = (props) => {
  const markdown = `# Cosmetic Dentures

Dentures are custom-made in various shapes and sizes, depending on how many teeth you are missing and your overall oral health. 

At Affordable Smile, we examine your teeth and gums and based on your condition, we recommend the most suitable types of denture solutions, such as: 

- Full dentures
- Partial dentures
- Removable dentures
- Fixed dentures 

We have the skills, experience, and tools to help improve your smile, appearance, and confidence. Our dentists keep up with the latest methods and procedures from cosmetic dentistry, so rest assured that we can rise to the challenge.

### Full Dentures vs Partial Dentures

With cosmetic dentures, we aim to create a positive change in your smile. Whether you have missing teeth due to an accident, medical condition, or tooth decay, we can solve the problem and restore your beautiful and healthy smile.  
For patients who are missing a few teeth, we suggest partial dentures (usually upper or lower dentures), and for patients who are missing all of their teeth, we believe full dentures are a better option. 
Both full and partial dentures are comfortable to wear, look natural, and allow you to eat your favourite foods without any restrictions.

### How Long Do Cosmetic Dentures Last?

Dentures are an effective solution for missing teeth, but they won’t last forever. However, with regular cleaning and maintenance, you can make sure they last for years and serve your needs. 
Here is how to clean your dentures:

- Brush them with a non-abrasive toothpaste
- Rinse thoroughly after each meal
- Use a soft brush to avoid damaging the acrylic
- Store them at night in water 

At Affordable Smile, we can perform the complete denture process, from taking bite impressions to making adjustments and ensuring they are a perfect fit for your gums and mouth. Contact us today at 1300-715-578 to schedule an appointment and discuss which cosmetic dentures are most suitable for you.


`;

  return (
    <Layout>
      <div className={sharedStyles.article}>
        <div className={sharedStyles.hero}>
          <CosmeticDentureFocused />
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

export default CosmeticPage;
