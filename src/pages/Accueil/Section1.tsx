import React from 'react'
import WaveSeparator from '../../components/WaveSeparator'

export default function render() {
  return (
    <section className="bg-white py-8">
      <div className="container mx-auto m-8">
        <h1 className="w-full text-center font-bold text-5xl text-gray-800 mb-8">
          Tu es ici dans l'antre des chaudronistres anonymes
        </h1>
        <div className="flex flex-wrap">
          <div className="w-5/6 sm:w-1/2 p-6">
            <div className="h-full flex items-center">
              <h3 className="text-3xl text-gray-800 font-bold mb-3 w-full text-center">
                De l'amour... de la magie... de la bonne humeur !
              </h3>
            </div>
          </div>
          <div className="w-full sm:w-1/2 p-6 flex justify-center">
            <img
              src="https://cdn.discordapp.com/attachments/817920175860219926/1081368936492306472/fiole_damour.png"
              className="w-4/5 md:w-3/5"
            />
          </div>
        </div>
        <div className="flex flex-wrap md:flex-row flex-col-reverse">
          <div className="w-full sm:w-1/2 p-6 flex justify-center">
            <img
              src="https://cdn.discordapp.com/attachments/817920175860219926/1081368936223879249/tete_de_mort.png"
              className="w-4/5 md:w-3/5"
            />
          </div>
          <div className="w-5/6 sm:w-1/2 p-6">
            <div className="h-full flex items-center">
              <h3 className="text-3xl text-gray-800 font-bold mb-3 w-full text-center">
                Mortellement mignon, non ?
              </h3>
            </div>
          </div>
        </div>
      </div>
      <WaveSeparator className="relative -mb-9 revert-gradiant rotate-180"/>
    </section>
  )
}
