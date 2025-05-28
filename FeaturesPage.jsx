import React from 'react'
import About from '../Components/About'
import Values from '../Components/Values'
import Facts from '../Components/Facts'
import Features from '../Components/Features'
import Testimonial from '../Components/Testimonial'
import Breadcrum from '../Components/Breadcrum'

export default function FeaturesPage() {
  return (
    <>
    <Breadcrum title="Features"/>
      <About/>
      <Values/>
      <Facts/>
      <Features/>
      <Testimonial/>
    </>
  )
}
