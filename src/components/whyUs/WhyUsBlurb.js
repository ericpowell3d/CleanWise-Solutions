////////// DEPENDENCIES //////////
import React from 'react';
import { Title } from '../_ui';
import img_check from '../../images/vectors/check.svg';

import { Global } from '../../utils/Global';
import TxtEdit from '../_ui/TxtEdit';

////////// COMPONENT //////////
export default function WhyUsBlurb(props) {
  const ctx = React.useContext(Global);

  const title = `Why CleanWise Solutions?`;
  const paragraph1 = `CleanWise Solutions is a locally owned and operated (Alexandria, VA) full-service commercial cleaning company. We are committed to your satisfaction of our cleaning services and guarantee a hassle-free, no-nonsense experience from start to finish. We pride ourselves in serving as your partner, helping progress the needs of your organization, one expert cleaning at a time. Additionally, our team is prepared to help you plan and execute your COVID-19 mitigation protocol aligned with local, state, and CDC guidelines.`;
  const paragraph2 = `Your satisfaction is our top priority. We offer peace of mind through professional and affordable cleaning solutions that keep your business running and money in your pocket. Our commitment to quality and customer service is what sets us apart from other companies. We understand that communication is the key to satisfaction and with CleanWise Solutions you’ll never worry that the job won’t meet your expectations. Whatever your business, we have\xa0a\xa0solution.`;
  const paragraph3 = `CleanWise Solutions serves a variety of corporate, commercial, and non-residential communities. Our flexible cleaning and disinfecting solutions are specifically tailored to meet the needs of your organization, regardless of facility size or type. Reach out to us today to start a conversation on how we can make your life cleaner and easier.`;
  const bulletTitle = `So, why us?`;
  const bullets = [
    `First-Class Customer Service`,
    `Commitment to Quality`,
    `Reliable and Dependable Communication`,
    `Timely Services`,
    `Affordable`,
    `Guaranteed Satisfaction`,
  ]

  const [txtParagraph1, setTxtParagraph1] = React.useState(paragraph1);
  const [txtParagraph2, setTxtParagraph2] = React.useState(paragraph2);
  const [txtParagraph3, setTxtParagraph3] = React.useState(paragraph3);

  return (<>
    <div id="why-us-blurb">
      <div id="why-us-blurb-drop" className="media-box">
        <Title lineStyle={{ background: `#505860a0`, marginBottom: `24px` }}>{title}</Title>
        <br />
        {ctx.editMode ? <TxtEdit value={txtParagraph1} onChange={setTxtParagraph1} /> : <p className="why-us-blurb-body">{txtParagraph1}</p>}
        <br />
        <p className="why-us-blurb-body">{bulletTitle}</p>
        <br />
        <div id="why-us-blurb-grid">
          {bullets.map((item, i) =>
            <div key={`why-us-${i}`} className="why-us-blurb-item">
              <img className="why-us-blurb-item-vector" src={img_check} alt="Check" />
              <h6 className="why-us-blurb-item-txt">{item}</h6>
            </div>
          )}
        </div>
        <br />
        {ctx.editMode ? <TxtEdit value={txtParagraph2} onChange={setTxtParagraph2} /> : <p className="why-us-blurb-body">{txtParagraph2}</p>}
        <br />
        {ctx.editMode ? <TxtEdit value={txtParagraph3} onChange={setTxtParagraph3} /> : <p className="why-us-blurb-body">{txtParagraph3}</p>}
      </div>
    </div>
  </>)
}