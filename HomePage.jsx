import React from 'react'
import About from '../Components/About'
import Values from '../Components/Values'
import Facts from '../Components/Facts'
import Features from '../Components/Features'
import ProductsSlider from '../Components/ProductsSlider'
import Products from '../Components/Products'
import Testimonial from '../Components/Testimonial'
import CategorySlider from '../Components/CategorySlider'
import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <>
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <section id="hero" className="hero section">
              <div className="container">
                <div className="row gy-4">
                  <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
                    <h1 data-aos="fade-up">We offer modern and top brands products for male</h1>
                    <p data-aos="fade-up" data-aos-delay="100">We Deals in Top 50+ brands and provide upto 90% Descount on top and latest fashion brands</p>
                    <div className="d-flex flex-column flex-md-row" data-aos="fade-up" data-aos-delay="200">
                      <Link to="/shop?mc=Male" className="btn-get-started">Shop Now<i className="bi bi-arrow-right"></i></Link>
                    </div>
                  </div>
                  <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-out">
                    <img src="/assets/img/banner/benner9.jpeg" className="img-fluid animated" alt="" />
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="carousel-item">
            <section id="hero" className="hero section">
              <div className="container">
                <div className="row gy-4">
                  <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
                  <h1 data-aos="fade-up">We offer modern and top brands products for female</h1>
                    <p data-aos="fade-up" data-aos-delay="100">We Deals in Top 50+ brands and provide upto 90% Descount on top and latest fashion brands</p>
                    <div className="d-flex flex-column flex-md-row" data-aos="fade-up" data-aos-delay="200">
                      <Link to="/shop?mc=Female" className="btn-get-started">Shop Now<i className="bi bi-arrow-right"></i></Link>
                    </div>
                  </div>
                  <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-out">
                    <img src="/assets/img/banner/benner4.jpeg" className="img-fluid animated" alt="" />
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="carousel-item">
            <section id="hero" className="hero section">
              <div className="container">
                <div className="row gy-4">
                  <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
                  <h1 data-aos="fade-up">We offer modern and top brands products for kids</h1>
                    <p data-aos="fade-up" data-aos-delay="100">We Deals in Top 50+ brands and provide upto 90% Descount on top and latest fashion brands</p>
                    <div className="d-flex flex-column flex-md-row" data-aos="fade-up" data-aos-delay="200">
                      <Link to="/shop?mc=Kids" className="btn-get-started">Shop Now<i className="bi bi-arrow-right"></i></Link>
                    </div>
                  </div>
                  <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-out">
                    <img src="/assets/img/banner/benner6.jpeg" className="img-fluid animated" alt="" />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <About />
      <Values />
      <Facts />
      <Features />
      <ProductsSlider />
      <Products />
      <Testimonial />
      <CategorySlider />
    </>
  )
}