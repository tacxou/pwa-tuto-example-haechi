import React from 'react'

export default function render() {
  const socialNetworks = [
    { name: 'Twitch', url: 'https://twitch.tv' },
    { name: 'Twitter', url: 'https://twitter.com' },
    { name: 'Instagram', url: 'https://instagram.com' },
  ]

  return (
    <footer className="bg-white">
      <div className="container mx-auto px-8">
        <div className="w-full flex flex-col md:flex-row py-6">
          <div className="flex-1">
            <p className="text-gray-800 uppercase">Réseaux sociaux</p>
            <ul className="list-reset">
              {socialNetworks.map((socialNetwork) => (
                <li className="inline-block mr-2 md:mr-0 md:block">
                  <a href={socialNetwork.url} className="text-gray-800 no-underline hover:underline">{socialNetwork.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1">
            <p className="text-gray-800 uppercase">Mes créations</p>
          </div>
          <div className="flex-1">
            <p className="text-gray-800 uppercase">En savoir plus</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
