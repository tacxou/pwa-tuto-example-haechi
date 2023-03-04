import React from 'react'
import WaveSeparator from '../../components/WaveSeparator'

export default function render() {
  return (
    <div>
      <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center my-16">
        <div className="flex flex-col w-full md:w-2/5 justify-center text-center md:text-left">
          {/* <img
            src="https://cdn.discordapp.com/attachments/817920175860219926/1081368935489876079/heart_1.png"
            className="w-1/5 md:w-1/5 -mb-4"
          /> */}
          <h1 className="my-4 text-3xl md:text-5xl text-white leading-tight font-chewy">
            Bienvenue dans l'antre de la plus belle des streameuse
          </h1>
        </div>
        <div className="w-full md:w-3/5 flex justify-center">
          <img
            src="https://media.discordapp.net/attachments/817920175860219926/1081367403440656384/neon_chau.png"
            className="w-full md:w-4/5"
          />
        </div>
      </div>
      <WaveSeparator/>
    </div>
  )
}
