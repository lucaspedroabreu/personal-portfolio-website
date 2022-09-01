// @ts-nocheck
import React from 'react'
import cv from '../../../assets/curriculum-vitae-v2.pdf'

const CTA = () => {
  return (
    <div className="cta">
      <a href={cv} target="_blank" rel="noreferrer noopener" className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  )
}

export default CTA
