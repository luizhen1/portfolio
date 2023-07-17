import React from 'react'
import arrayDestruct from '../assets/portfolio/site.png'
import installNode from '../assets/portfolio/socket-io-chat.png'
import navbar from '../assets/portfolio/montyhall.png'
import reactParallax from '../assets/portfolio/home-page.png'
import reactSmooth from '../assets/portfolio/calculadora.png'
import reactWeather from '../assets/portfolio/api.png'



const Portfolio = () => {


  

    const portfolios = [
        {
            id:1,
            src: arrayDestruct,
            link: 'https://github.com/luizhen1/The-News'
           
            
        },

        {
            id:2,
            src: reactParallax,
            link: 'https://github.com/luizhen1/CodeMaster'
        },

        {
            id:3,
            src: navbar,
            link: 'https://github.com/luizhen1/Monty-Hall'
        },

        {
            id:4,
            src: reactSmooth,
            link: 'https://github.com/luizhen1/Calculadora'
        },

        {
            id:5,
            src: installNode,
            link: 'https://github.com/luizhen1/Socket-IO-Chat'
        },

        {
            id:6,
            src: reactWeather,
            link: 'https://github.com/luizhen1/Mini_e-commerce'
        }
    ]



    return (
      <div
        name="portfolio"
        className="bg-gradient-to-b from-gray-800 to-black w-full text-white md:h-screen"
      >
        <div className="max-w-screen-lg p-4 mx-auto  flex flex-col justify-center w-full h-full">
          <div className="pb-8 mt-80">
            <p className="text-4xl font-bold inline border-b-4 border-white">
              Portfolio
            </p>
            <p className="py-6">Confira um pouco do meu trabalho aqui</p>
          </div>
  
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
            {portfolios.map(({ id, src, link}) => (
              <div key={id} className="shadow-md shadow-gray-800 rounded-lg">
                <img
                  src={src}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105"
                />
                <div className="flex items-center justify-center">
                  
                  <a href={link} className="w-1/2 px-14 py-3 m-4 duration-200 hover:scale-105">
                    Code
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Portfolio;