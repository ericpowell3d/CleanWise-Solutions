////////// DEPENDENCIES //////////
import React from 'react';

////////// COMPONENT //////////
export default function HomeHow(props) {
  const steps = [
    {
      head: `1: APPOINTMENT`,
      body: `Fill out our contact form, give us a call, or send us an email to schedule an\xa0appointment.`,
    },
    {
      head: `2: DISINFECTION`,
      body: `On the day of your appointment, we do what we do best to ensure no inch of your business is\xa0unclean.`,
    },
    {
      head: `3: PEACE OF MIND`,
      body: `We leave your business fresh & shining so you can sit back and cast your worries\xa0away.`,
    },
  ]

  return (<>
    <div id="home-how" className="section-box">
      <div className="media-box">
        <div id="home-how-grid">
          <div className="home-how-item" style={{ borderRight: `2px solid #fff`, marginRight: `24px` }}>
            <h2 className="title-lg" style={{ marginTop: `20px` }}>HOW IT<br />WORKS</h2>
          </div>
          {steps.map((item, i) =>
            <div key={`homw-how-${i}`} className="home-how-item">
              <h4 className="home-how-item-head">{item.head}</h4>
              <h6 className="home-how-item-body">{item.body}</h6>
            </div>
          )}
        </div>
      </div>
    </div>
  </>)
}