import React from 'react';
import efficiency from "@/assets/icons/efficiency.png";
import inspiration from "@/assets/icons/inspiration.png";
import puzzle from "@/assets/icons/puzzle.png";
import email from "@/assets/icons/email-mail-svgrepo-com.png";
import solution from "@/assets/icons/solution.png";
import cup from "@/assets/icons/cup.svg";



const SecondSectionCard: React.FC = () => {
  return (
    <div className="cards-container flex flex-wrap justify-between">
      <div className="body card w-96 bg-base-100 shadow-xl mb-8">
        <figure className="px-10 pt-10">
          <img src={efficiency} alt="Shoes" className="rounded-xl card_img" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">A journey into accomplishments:</h2>
          <p className='card-desc'>our journey matters.VieHub elevates your profile with each contest entry, creating a powerful narrative of your skills and accomplishments.</p>
          
        </div>
      </div>
      {/* Repeat this card four more times */}
      <div className="body1 card w-96 bg-base-100 shadow-xl mb-8">
        <figure className="px-10 pt-10">
          <img src={puzzle} alt="Shoes" className="rounded-xl card_img" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Compete for Recognition:</h2>
          <p className='card-desc'>Compete in exciting contests for a chance to win prizes and gain recognition. Your talent deserves to be celebrated!</p>
         
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl mb-8">
        <figure className="px-10 pt-10">
          <img src={inspiration} alt="Shoes" className="rounded-xl card_img" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Build Your Dynamic Portfolio:</h2>
          <p className='card-desc'>Discover potential job opportunities as top performers are not just rewarded but also considered for exciting  recruitment possibilities.</p>
          
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl mb-8">
        <figure className="px-10 pt-10">
          <img src={email} alt="Shoes" className="rounded-xl card_img" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Join the Revolution</h2>
          <p className='card-desc'>Transform the way talent is discovered and engaged. Join VieHub today and be part of a community that celebrates creativity, innovation, and endless possibilities.</p>
          
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl mb-8">
        <figure className="px-10 pt-10">
          <img src={cup} alt="Shoes" className="rounded-xl card_img" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Join the Revolution</h2>
          <p className='card-desc'>Transform the way talent is discovered and engaged. Join  VieHub today and be part of a community that celebrates creativity, innovation, and endless possibilities.</p>
         
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl mb-8">
        <figure className="px-10 pt-10">
          <img src={solution} alt="Shoes" className="rounded-xl card_img" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Simplify Your Journey</h2>
          <p className='card-desc'>For companies, expressing needs is effortless, as VieHub generates custom templates. For participants, it's an intuitive platform to shine and be discovered.</p>
         
        </div>
      </div>
    </div>
  );
};

export default SecondSectionCard;