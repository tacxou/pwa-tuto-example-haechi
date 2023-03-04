import React from 'react'

export default function render() {
  return (
    <section className="border-b py-8">
      <div className="container mx-auto m-8">
        <h1 className="w-full text-center font-bold text-5xl text-white mb-8">
          Prépare toi à vivre une expérience unique !
        </h1>
        <div className="flex flex-wrap">
          <div className="w-5/6 sm:w-1/2 p-6">
            <div className="h-full flex items-center">
              <h3 className="text-3xl text-white font-bold mb-3 w-full text-center">
                Et passe nous faire un ptit coucou ❤️ !
              </h3>
            </div>
          </div>
          <div className="w-full sm:w-1/2 p-6 flex justify-center">
            <img
              src="https://cdn.discordapp.com/attachments/817920175860219926/1081368935213043852/hi.png"
              className="w-4/5 md:w-3/5"
            />
          </div>
        </div>
        <div className="flex flex-wrap md:flex-row flex-col-reverse">
          <div className="w-full sm:w-1/2 p-6 flex justify-center">
            <img
              src="https://cdn.discordapp.com/attachments/817920175860219926/1081368935888326698/fiole_obelix.png"
              className="w-4/5 md:w-3/5"
            />
          </div>
          <div className="w-5/6 sm:w-1/2 p-6">
            <div className="h-full flex items-center">
              <h3 className="text-3xl text-white font-bold mb-3 w-full text-center">
                Prend ta meilleure boisson, entre dans le cercle et laisse toi porter par la magie !
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
