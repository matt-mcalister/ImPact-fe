import React from "react"
import Footer from "./Footer"

const renderText = (props) => {
  if (props.contact){
    return (
      <div className="landing-text" id="contact">
      <h2>Questions?</h2>
      <p>Contact us at: myimpact2018@gmail.com</p>
      </div>
    )
  } else {
    return (
      <div className="landing-text" id="about">
      <p>ImPACT is about making 2018 the year we take our country back-- on our terms. The 2018 elections is going to be one of the most important voting events in history. Our democracy and our rights are under siege.  We need democrats to win big this fall and the clock is ticking.  We all live very different and fast-paced lives  — we have jobs, families, school and student loans-- all of which take up time and money. This can make political activism daunting. ImPACT will help you set an activism goal and get organized. We want to build a community that makes getting involved fun, accessible and a part of your daily, weekly, or monthly routine. ImPACT allows you to log your own hours and set personalized goals so that you can guarantee you're doing your part to help create the change you want to see. If you have a busy week — or two, or three — we get it. So one hour of your wages can be put towards one hour of activism. For each hour of your wages you donate, an hour is added to your Activist Log. So you can be flaky, tired or just blah-- and still save the world. Our candidates need time and money. Do what works for you. We’ll help you do it.</p>
      <p>So, what’s the deal with the pact? You know those 30 day fitness apps?? Well this is like that, except no sweating. You get to set the terms of your pact--from 10 hours to infinity (show up your friends and make a 400,000 hour pact!)-- and then watch as activism becomes a stress-free part of your routine. Together, our time will add up. Let’s build a community of citizens where a little bit of time is always better than nothing, and a couple of dollars is always greater than zero. We can make an Impact- Together.</p>
      <p>2018 is going to be a historical year that could alter the course of American and world history for generations. In 20, 40, or 60 years, do you want to say you sat on the sidelines, or that you fought for what you knew was right?</p>
      </div>
    )
  }
}

const NewLanding = (props) => {
    return(
      <div id="landingPage" style={{margin:"0",backgroundColor:"#2b5b87", overflow:"scroll"}}>
      <div id="capitalImgContainer">
      <img id="capitalImg" src="/images/onboarding-extra-wide.png" alt="The US Capitol"/>
      </div>
      <div id="homePageContainer">

      <div id="titleVideoGetApp">
      <img className="mainTitle" src="/images/impact_official_white_large.png" alt="imPACT" />
      <iframe title="ImPACT Video" id="aboutVideo" src="https://player.vimeo.com/video/278060639" frameBorder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen="true"></iframe>
      <div id="downloadApp">
      <a href="https://itunes.apple.com/us/app/my-impact/id1397266194?mt=8"><img id="appStore" src="https://get.google.com/apptips/images/app-store.svg" alt="Download on the App Store"/></a>
      </div>
      </div>
      {renderText(props)}
      <Footer />
      </div>
      </div>
    )
}


export default NewLanding
