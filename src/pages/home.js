import React, { Component } from "react";
import {
  Banner,
  OurService,
  WhyUs,
  Testimonial,
  JumboCard,
  Faq,
  Footer,
} from "../components";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Banner />
        <OurService />
        <WhyUs />
        <Testimonial />
        <JumboCard />
        <Faq />
        <Footer />
      </div>
    );
  }
}
