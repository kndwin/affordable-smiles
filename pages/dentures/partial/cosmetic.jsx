import { Layout } from "components";
import CosmeticDentureFocused from "components/Page/Dentures/Cosmetic";
import ReactMarkdown from "react-markdown";
import sharedStyles from "utils/styles/shared.module.scss";

const CosmeticPage = (props) => {
  const markdown = `# Cosmetic Dentures

Dentures are custom-made in various shapes and sizes, depending on how many teeth you are missing and your overall oral health. 

At Affordable Smile, we examine your teeth and gums and based on your condition, we recommend the most suitable types of denture solutions, such as: 

A cosmetic denture is one that is typically made without the use of metal clasping or clips. The way that these dentures are held in place is by using flexible translusent wings that hold your teeth adjacent teeth nice and snugly. 


Whilst cosmetic dentures are virtually invisible to anyone looking at your lovely smile, they are best suited for those patients that only require tooth replacement of a gap spanning 3 or 4 teeth. Cosmetic denture material is flexible, thus its generally its not the best idea to use these across very long distances in the mouth. An example of a long span denture is one where there are spaces to fill on both the left and right sides with back teeth. 

### How Long Do Cosmetic Dentures Last?

Dentures are an effective solution for missing teeth, but they won’t last forever. However, with regular cleaning and maintenance, you can make sure they last for years and serve your needs. 
Here is how to clean your dentures:

- Brush them with a non-abrasive toothpaste
- Rinse thoroughly after each meal
- Use a soft brush to avoid damaging the acrylic
- Store them at night in water 

At Affordable Smile, we can perform the complete denture process, from taking bite impressions to making adjustments and ensuring they are a perfect fit for your gums and mouth. Contact us today at 1300-715-578 to schedule an appointment and discuss which cosmetic dentures are most suitable for you.`;

  return (
    <Layout>
      <div className={sharedStyles.article}>
        <div className={sharedStyles.hero}>
          <CosmeticDentureFocused />
        </div>
        <div className={sharedStyles.markdown}>
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
      </div>
    </Layout>
  );
};

export default CosmeticPage;
