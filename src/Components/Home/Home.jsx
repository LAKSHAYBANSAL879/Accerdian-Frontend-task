import React, { useState } from 'react';
import bg from "../../Images/bg.png";
import bg2 from "../../Images/bg2.png";
import cash from "../../Images/cash.png";
import "./Home.css";
import ReferralModal from '../ReferralModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faClipboardCheck, faWallet } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <div className='mt-2'>
            <section id='refer' className='flex flex-col'>
                <div className='bg-blue-200 rounded-xl mx-auto md:w-1/2 flex flex-col md:flex-row justify-center items-center h-fit p-4'>
                    <div className='w-full md:w-1/2 flex flex-col text-left md:text-center md:items-center'>
                        <img src={cash} alt="Cash Icon" className='w-16 mb-4' />
                        <h1 className='text-5xl font-bold'>Let's Learn <br />& Earn</h1>
                        <h1 className='md:hidden'>Get a chance to win <br />upto <span className='text-2xl font-bold text-blue-500'>Rs. 15,000</span></h1>
                        <h1 className='hidden md:block'>Get a chance to win upto <span className='text-2xl font-bold text-blue-500'>Rs. 15,000</span></h1>
                        <button onClick={openModal} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">Refer now</button>
                    </div>
                    <div className='w-full md:w-1/2 h-80'>
                        <img src={bg} alt="Background" className='h-full w-auto' />
                    </div>
                </div>
                <div className='flex flex-col rounded-xl bg-blue-200 mt-10 w-full md:w-2/3 mx-auto p-8 h-fit mb-4'>
                    <h1 className='text-xl'>How do <span className='text-2xl font-bold text-blue-500'>I refer</span></h1>
                    <div className='relative -mt-28'>
                        <img src={bg2} alt="Background 2" className='w-full' />
                        <div className='absolute inset-0 flex flex-col md:flex-row justify-around items-center'>
                            <div className='w-40 h-40 rounded-full flex flex-col justify-center items-center text-center p-4 md:absolute md:top-52 md:left-32'>
                                <FontAwesomeIcon icon={faUserPlus} className="fa-3x text-blue-500" />
                                <h2 className='mt-2 font-bold text-xs'>Submit referrals easily via our website's referral section.</h2>
                            </div>
                            <div className='w-40 h-40 rounded-full flex flex-col justify-center items-center text-center p-4 md:absolute md:top-52 md:left-1/2 md:transform md:-translate-x-1/2'>
                                <FontAwesomeIcon icon={faClipboardCheck} className="fa-3x text-blue-500" />
                                <h2 className='mt-2 font-bold text-xs'>Earn rewards once your referral joins an Accerdian program.</h2>
                            </div>
                            <div className='w-40 h-40 rounded-full flex flex-col justify-center items-center text-center p-4 md:absolute md:top-52 md:right-32'>
                                <FontAwesomeIcon icon={faWallet} className="fa-3x text-blue-500" />
                                <h2 className='mt-2 font-bold text-xs'>Both parties receive a bonus 30 days after program enrollment.</h2>
                            </div>
                        </div>
                    </div>
                    <button onClick={openModal} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded w-fit mx-auto">Refer now</button>
                </div>
            </section>
            <ReferralModal isOpen={modalIsOpen} onRequestClose={closeModal} />
        </div>
    );
};

export default Home;
