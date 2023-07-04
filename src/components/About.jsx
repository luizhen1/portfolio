import React from 'react'

const About = () => {
  return (
    <div name="sobre"
    className="w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white"
    >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center
        w-full h-full">
            <div className=" max-w-screen-sm pb-8 mt-80 ">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                    Sobre Mim
                </p>
            </div>
            <p className="text-xl mt-20">
                Olá meu nome é Luiz Henrique Lima! Sou um desenvolvedor front-end apaixonado por criar
                experências digitais atraentes e interativa. Com um profundo conhecimento em HTML, CSS, JavaScript 
                e tecnologias como NodeJS, ReactJS, MySQL, MongoDB e WordPress, estou sempre em busca de aprender 
                e adotar as mais recentes técnologias e práticas do setor.
            </p>
            <br />
            <p className="text-xl">
            Minha paixão pela criação de designs elegantes e funcionais me impulsiona a transformar ideias em 
            realidade. Sou altamente habilidoso em traduzir os requisitos de design em interfaces de usuário ricas,
            responsivas e intuitivas. Além disso, tenho experiência em trabalhar com frameworks front-end
            populares, como React e Vue.js, e estou familiarizado com metodologias ágeis de desenvolvimento.
            </p>
            <br />
            <p className="text-xl">
            <p className="text-xl">
            Se você procura um desenvolvedor front-end comprometido, motivado e apaixonado, estou pronto para 
            colaborar em projetos empolgantes. Sinta-se à vontade para explorar meu portfólio e entrar em contato 
            comigo para discutir como podemos trabalhar juntos para alcançar seus objetivos.
            </p>
            </p>
        </div>
    </div>
  )
}

export default About