import {
  AiFillCheckCircle,
  AiFillDollarCircle,
  AiFillInfoCircle,
  AiFillStar,
  AiOutlineStar,
} from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { MdOutlineAccessTimeFilled } from 'react-icons/md';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import bgImage from '../../assets/images/search-bg.png';
import Speciality from '../../components/app/Specialities';
import { doctores } from '../../constants';
import { Specialities } from '../../constants/Specialities';

const index = () => {
  return (
    <>
      <section
        className='section-search'
        style={{
          background: `#f9f9f9 url(${bgImage}) no-repeat bottom center `,
        }}
      >
        <div className='container-fluid'>
          <div className='banner-wrapper'>
            <div className='banner-header'>
              <h1>Search Doctor, Make an Appointment</h1>
              <p>
                Discover the best doctors, clinic & hospital the city nearest to
                you.
              </p>
            </div>
            <div className='search-box'>
              <form>
                <div className='form-group search-location'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Search Location'
                  />
                  <span className='form-text'>Based on your Location</span>
                </div>
                <div className='form-group search-info'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Search Doctors, Clinics, Hospitals, Diseases Etc'
                  />
                  <span className='form-text'>
                    Ex : Dental or Sugar Check up etc
                  </span>
                </div>
                <button type='submit' className='btn btn-primary search-btn'>
                  <BiSearch style={{ fontSize: '1.5rem' }} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className='section section-specialities'>
        <div className='container-fluid'>
          <div className='section-header'>
            <h2>Clinic and Specialities</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className='row'>
            {/* Slider */}
            <div className='specialities-slider'>
              {Specialities.map((speciality, index) => (
                <div className='slick-slide' key={index}>
                  <Speciality speciality={speciality} />
                </div>
              ))}
            </div>
            {/* /Slider */}
          </div>
        </div>
      </section>
      <section className='section section-doctor'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-lg-4'>
              <div className='section-header '>
                <h2>Book Our Doctor</h2>
                <p>Lorem Ipsum is simply dummy text </p>
              </div>
              <div className='about-content'>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum.
                </p>
                <p>
                  web page editors now use Lorem Ipsum as their default model
                  text, and a search for 'lorem ipsum' will uncover many web
                  sites still in their infancy. Various versions have evolved
                  over the years, sometimes
                </p>
                <a>Read More..</a>
              </div>
            </div>
            <div className='col-lg-8'>
              <div className='doctor-slider'>
                <div className='slick-list'>
                  <Swiper navigation={true} modules={[Navigation]}>
                    {doctores.map((doctor, index) => (
                      <SwiperSlide key={index}>
                        <div className='slick-slide'>
                          <div className='profile-widget'>
                            <div className='doc-img'>
                              <a>
                                <img
                                  className='img-fluid'
                                  alt='User Image'
                                  src={doctor.image}
                                />
                              </a>
                              <abbr className='fav-btn'>
                                <i className='far fa-bookmark' />
                              </abbr>
                            </div>
                            <div className='pro-content'>
                              <h3 className='title'>
                                <a>{doctor.name}</a>
                                <AiFillCheckCircle
                                  style={{
                                    color: 'green',
                                    marginLeft: 6,
                                    fontSize: 20,
                                  }}
                                />
                              </h3>
                              <p className='speciality'>{doctor.speciality}</p>
                              <div className='rating'>
                                <AiFillStar style={{ color: '#f4c150' }} />
                                <AiFillStar style={{ color: '#f4c150' }} />
                                <AiFillStar style={{ color: '#f4c150' }} />
                                <AiFillStar style={{ color: '#f4c150' }} />
                                <AiOutlineStar />
                                <i className='fas fa-star' />
                                <span className='d-inline-block average-rating'>
                                  ({doctor.review})
                                </span>
                              </div>
                              <ul className='available-info'>
                                <li>
                                  <FaMapMarkerAlt /> {doctor.address}
                                </li>
                                <li>
                                  <MdOutlineAccessTimeFilled />
                                  {doctor.availableTime}
                                </li>
                                <li>
                                  <AiFillDollarCircle /> {doctor.fees}
                                  <AiFillInfoCircle title='Lorem Ipsum' />
                                </li>
                              </ul>
                              <div className='row'>
                                <div className='col-6'>
                                  <a className='view-btn'>View Profile</a>
                                </div>
                                <div className='col-6'>
                                  <a className='book-btn'>Book Now</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class='section section-features'>
        <div className='container-fluid'>
          <div className='row'>
            <div
              className='col-md-5 features-img aos aos-init aos-animate'
              data-aos='fade-up'
            >
              <img
                src='assets/img/features/feature.png'
                className='img-fluid'
                alt='Feature'
              />
            </div>
            <div className='col-md-7'>
              <div
                className='section-header aos aos-init aos-animate'
                data-aos='fade-up'
              >
                <h2 className='mt-2'>Availabe Features in Our Clinic</h2>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.{' '}
                </p>
              </div>
              <div
                className='features-slider slider aos slick-initialized slick-slider slick-dotted aos-init aos-animate'
                data-aos='fade-up'
              >
                <div
                  className='slick-list draggable'
                  style={{ padding: '0px 50px' }}
                >
                  <div
                    className='slick-track'
                    style={{
                      opacity: 1,
                      width: 30000,
                      transform: 'translate3d(-461px, 0px, 0px)',
                    }}
                  >
                    <div
                      className='slick-slide slick-cloned'
                      data-slick-index={-4}
                      id
                      aria-hidden='true'
                      tabIndex={-1}
                    >
                      <div>
                        <div
                          className='feature-item text-center'
                          style={{ width: '100%', display: 'inline-block' }}
                        >
                          <img
                            src='assets/img/features/feature-03.jpg'
                            className='img-fluid'
                            alt='Feature'
                          />
                          <p>ICU</p>
                        </div>
                      </div>
                    </div>
                    <div
                      className='slick-slide slick-cloned'
                      data-slick-index={-3}
                      id
                      aria-hidden='true'
                      tabIndex={-1}
                    >
                      <div>
                        <div
                          className='feature-item text-center'
                          style={{ width: '100%', display: 'inline-block' }}
                        >
                          <img
                            src='assets/img/features/feature-04.jpg'
                            className='img-fluid'
                            alt='Feature'
                          />
                          <p>Laboratory</p>
                        </div>
                      </div>
                    </div>
                    <div
                      className='slick-slide slick-cloned'
                      data-slick-index={-2}
                      id
                      aria-hidden='true'
                      tabIndex={-1}
                    >
                      <div>
                        <div
                          className='feature-item text-center'
                          style={{ width: '100%', display: 'inline-block' }}
                        >
                          <img
                            src='assets/img/features/feature-05.jpg'
                            className='img-fluid'
                            alt='Feature'
                          />
                          <p>Operation</p>
                        </div>
                      </div>
                    </div>
                    <div
                      className='slick-slide slick-cloned slick-active'
                      data-slick-index={-1}
                      id
                      aria-hidden='false'
                      tabIndex={-1}
                    >
                      <div>
                        <div
                          className='feature-item text-center'
                          style={{ width: '100%', display: 'inline-block' }}
                        >
                          <img
                            src='assets/img/features/feature-06.jpg'
                            className='img-fluid'
                            alt='Feature'
                          />
                          <p>Medical</p>
                        </div>
                      </div>
                    </div>
                    <div
                      className='slick-slide slick-current slick-active slick-center'
                      data-slick-index={0}
                      aria-hidden='false'
                      role='tabpanel'
                      id='slick-slide20'
                    >
                      <div>
                        <div
                          className='feature-item text-center'
                          style={{ width: '100%', display: 'inline-block' }}
                        >
                          <img
                            src='assets/img/features/feature-01.jpg'
                            className='img-fluid'
                            alt='Feature'
                          />
                          <p>Patient Ward</p>
                        </div>
                      </div>
                    </div>
                    <div
                      className='slick-slide slick-active'
                      data-slick-index={1}
                      aria-hidden='false'
                      role='tabpanel'
                      id='slick-slide21'
                    >
                      <div>
                        <div
                          className='feature-item text-center'
                          style={{ width: '100%', display: 'inline-block' }}
                        >
                          <img
                            src='assets/img/features/feature-02.jpg'
                            className='img-fluid'
                            alt='Feature'
                          />
                          <p>Test Room</p>
                        </div>
                      </div>
                    </div>
                    <div
                      className='slick-slide'
                      data-slick-index={2}
                      aria-hidden='true'
                      role='tabpanel'
                      id='slick-slide22'
                    >
                      <div>
                        <div
                          className='feature-item text-center'
                          style={{ width: '100%', display: 'inline-block' }}
                        >
                          <img
                            src='assets/img/features/feature-03.jpg'
                            className='img-fluid'
                            alt='Feature'
                          />
                          <p>ICU</p>
                        </div>
                      </div>
                    </div>
                    <div
                      className='slick-slide'
                      data-slick-index={3}
                      aria-hidden='true'
                      tabIndex={-1}
                      role='tabpanel'
                      id='slick-slide23'
                    >
                      <div>
                        <div
                          className='feature-item text-center'
                          style={{ width: '100%', display: 'inline-block' }}
                        >
                          <img
                            src='assets/img/features/feature-04.jpg'
                            className='img-fluid'
                            alt='Feature'
                          />
                          <p>Laboratory</p>
                        </div>
                      </div>
                    </div>
                    <div
                      className='slick-slide'
                      data-slick-index={4}
                      aria-hidden='true'
                      tabIndex={-1}
                      role='tabpanel'
                      id='slick-slide24'
                    >
                      <div>
                        <div
                          className='feature-item text-center'
                          style={{ width: '100%', display: 'inline-block' }}
                        >
                          <img
                            src='assets/img/features/feature-05.jpg'
                            className='img-fluid'
                            alt='Feature'
                          />
                          <p>Operation</p>
                        </div>
                      </div>
                    </div>
                    <div
                      className='slick-slide'
                      data-slick-index={5}
                      aria-hidden='true'
                      tabIndex={-1}
                      role='tabpanel'
                      id='slick-slide25'
                    >
                      <div>
                        <div
                          className='feature-item text-center'
                          style={{ width: '100%', display: 'inline-block' }}
                        >
                          <img
                            src='assets/img/features/feature-06.jpg'
                            className='img-fluid'
                            alt='Feature'
                          />
                          <p>Medical</p>
                        </div>
                      </div>
                    </div>
                    <div
                      className='slick-slide slick-cloned'
                      data-slick-index={6}
                      id
                      aria-hidden='true'
                      tabIndex={-1}
                    >
                      <div>
                        <div
                          className='feature-item text-center'
                          style={{ width: '100%', display: 'inline-block' }}
                        >
                          <img
                            src='assets/img/features/feature-01.jpg'
                            className='img-fluid'
                            alt='Feature'
                          />
                          <p>Patient Ward</p>
                        </div>
                      </div>
                    </div>
                    <div
                      className='slick-slide slick-cloned'
                      data-slick-index={7}
                      id
                      aria-hidden='true'
                      tabIndex={-1}
                    >
                      <div>
                        <div
                          className='feature-item text-center'
                          style={{ width: '100%', display: 'inline-block' }}
                        >
                          <img
                            src='assets/img/features/feature-02.jpg'
                            className='img-fluid'
                            alt='Feature'
                          />
                          <p>Test Room</p>
                        </div>
                      </div>
                    </div>
                    <div
                      className='slick-slide slick-cloned slick-center'
                      data-slick-index={8}
                      id
                      aria-hidden='true'
                      tabIndex={-1}
                    >
                      <div>
                        <div
                          className='feature-item text-center'
                          style={{ width: '100%', display: 'inline-block' }}
                        >
                          <img
                            src='assets/img/features/feature-03.jpg'
                            className='img-fluid'
                            alt='Feature'
                          />
                          <p>ICU</p>
                        </div>
                      </div>
                    </div>
                    <div
                      className='slick-slide slick-cloned'
                      data-slick-index={9}
                      id
                      aria-hidden='true'
                      tabIndex={-1}
                    >
                      <div>
                        <div
                          className='feature-item text-center'
                          style={{ width: '100%', display: 'inline-block' }}
                        >
                          <img
                            src='assets/img/features/feature-04.jpg'
                            className='img-fluid'
                            alt='Feature'
                          />
                          <p>Laboratory</p>
                        </div>
                      </div>
                    </div>
                    <div
                      className='slick-slide slick-cloned'
                      data-slick-index={10}
                      id
                      aria-hidden='true'
                      tabIndex={-1}
                    >
                      <div>
                        <div
                          className='feature-item text-center'
                          style={{ width: '100%', display: 'inline-block' }}
                        >
                          <img
                            src='assets/img/features/feature-05.jpg'
                            className='img-fluid'
                            alt='Feature'
                          />
                          <p>Operation</p>
                        </div>
                      </div>
                    </div>
                    <div
                      className='slick-slide slick-cloned'
                      data-slick-index={11}
                      id
                      aria-hidden='true'
                      tabIndex={-1}
                    >
                      <div>
                        <div
                          className='feature-item text-center'
                          style={{ width: '100%', display: 'inline-block' }}
                        >
                          <img
                            src='assets/img/features/feature-06.jpg'
                            className='img-fluid'
                            alt='Feature'
                          />
                          <p>Medical</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <ul className='slick-dots' style={{}} role='tablist'>
                  <li className='slick-active' role='presentation'>
                    <button
                      type='button'
                      role='tab'
                      id='slick-slide-control20'
                      aria-controls='slick-slide20'
                      aria-label='1 of 2'
                      tabIndex={0}
                      aria-selected='true'
                    >
                      1
                    </button>
                  </li>
                  <li role='presentation'>
                    <button
                      type='button'
                      role='tab'
                      id='slick-slide-control21'
                      aria-controls='slick-slide21'
                      aria-label='2 of 2'
                      tabIndex={-1}
                    >
                      2
                    </button>
                  </li>
                  <li role='presentation'>
                    <button
                      type='button'
                      role='tab'
                      id='slick-slide-control22'
                      aria-controls='slick-slide22'
                      aria-label='3 of 2'
                      tabIndex={-1}
                    >
                      3
                    </button>
                  </li>
                  <li role='presentation'>
                    <button
                      type='button'
                      role='tab'
                      id='slick-slide-control23'
                      aria-controls='slick-slide23'
                      aria-label='4 of 2'
                      tabIndex={-1}
                    >
                      4
                    </button>
                  </li>
                  <li role='presentation'>
                    <button
                      type='button'
                      role='tab'
                      id='slick-slide-control24'
                      aria-controls='slick-slide24'
                      aria-label='5 of 2'
                      tabIndex={-1}
                    >
                      5
                    </button>
                  </li>
                  <li role='presentation'>
                    <button
                      type='button'
                      role='tab'
                      id='slick-slide-control25'
                      aria-controls='slick-slide25'
                      aria-label='6 of 2'
                      tabIndex={-1}
                    >
                      6
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
