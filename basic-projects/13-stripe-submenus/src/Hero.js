import React from 'react';
import phoneImg from './images/phone.svg';
import { useGlobalContext } from './context';

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();

  return (
    <section className='hero'>
      <div className='hero-center'>
        <article className='hero-info'>
          <h1>Infraestrutura de pagamentos para a internet</h1>
          <p>
            Milhões de empresas de todos os tamanhos usam a Stripe online e
            presencialmente para receber pagamentos, enviar repasses,
            automatizar processos financeiros e ampliar suas receitas. Comece
            agora Fale com nossa equipe
          </p>
          <button className='btn'>Comece agora</button>
        </article>
        <article className='hero-images'>
          <img src={phoneImg} alt='phone' className='phone-img' />
        </article>
      </div>
    </section>
  );
};

export default Hero;
