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
    </>
  );
};

export default index;
