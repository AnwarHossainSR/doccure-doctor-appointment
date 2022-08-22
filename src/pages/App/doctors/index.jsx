import React from 'react';

const index = () => {
  return (
    <div className='section all-doctors'>
      <div className='container-fluid'>
        <div className='doctors-header'>
          <h3>All Doctors</h3>
          <div className='doctors-sort'>
            <select>
              <option>All</option>
              <option>Rating</option>
              <option>Popular</option>
              <option>Latest</option>
              <option>Free</option>
            </select>
          </div>
        </div>
        <div className='doctors-body'>Doctors Card</div>
      </div>
    </div>
  );
};

export default index;
