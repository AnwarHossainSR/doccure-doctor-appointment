//import locationImage from '../../assets/images/location.png';
import { BiSearch } from 'react-icons/bi';
import bgImage from '../../assets/images/search-bg.png';
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
                  <div className='speicality-item'>
                    <div className='speicality-img'>
                      <img
                        src={speciality.image}
                        className='img-fluid'
                        alt='Speciality'
                      />
                      <span>
                        <i className='fa fa-circle' aria-hidden='true' />
                      </span>
                    </div>
                    <p>{speciality.name}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* /Slider */}
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
