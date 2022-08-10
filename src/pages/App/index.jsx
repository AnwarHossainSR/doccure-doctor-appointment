//import locationImage from '../../assets/images/location.png';
import { BiSearch } from 'react-icons/bi';
import bgImage from '../../assets/images/search-bg.png';

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
    </>
  );
};

export default index;
