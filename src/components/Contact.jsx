import React from "react";

const Contact = () => {
  return (
    <div
      name="contato"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-purple-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contato
          </p>
          <p className="py-6">Envie o formulário abaixo para entrar em contato comigo</p>
        </div>

        <div className=" flex justify-center items-center">
          <form
            action="https://getform.io/f/afe03334-65a7-49cb-a9a4-3af61aced7a8"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Digite seu nome"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Digite seu email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Digite sua mensagem"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button className="text-white bg-gradient-to-b from-cyan-500 to-purple-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Vamos conversar!
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
