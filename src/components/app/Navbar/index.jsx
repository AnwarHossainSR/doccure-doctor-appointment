import React from 'react';
import { BsChevronDown } from 'react-icons/bs';
import { GrContactInfo } from 'react-icons/gr';
import { NavLink } from 'react-router-dom';
import assets from '../../../assets';
import ButtonHeader from '../Button/ButtonHeader';

const index = () => {
  return (
    <div className='navbar'>
      <div className='navbar-left'>
        <div className='navbar-left__logo'>
          <img src={assets.images.Logo} alt='' />
        </div>
        <NavLink
          to='/'
          className={({ isActive }) =>
            isActive ? 'navbar-left__item active' : 'navbar-left__item'
          }
        >
          Home
        </NavLink>
        <NavLink
          to='doctors'
          className={({ isActive }) =>
            isActive ? 'navbar-left__item active' : 'navbar-left__item'
          }
        >
          Doctors{' '}
          <span>
            <BsChevronDown />
          </span>
          <div className='submenu'>Hello my name is mahedi</div>
        </NavLink>
        <NavLink
          to='patients'
          className={({ isActive }) =>
            isActive ? 'navbar-left__item active' : 'navbar-left__item'
          }
        >
          Patients{' '}
          <span>
            <BsChevronDown />
          </span>
        </NavLink>
      </div>
      <div className='navbar-right'>
        <div className='navbar-right__contact'>
          <div className='navbar-right__contact-left'>
            <GrContactInfo />
          </div>
          <div className='navbar-right__contact-right'>
            <p>contact</p>
            <p>+355573453</p>
          </div>
        </div>
        <div className='navbar-right__auth'>
          <ButtonHeader />
        </div>
      </div>
    </div>
  );
};

export default index;
