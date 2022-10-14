/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Disclosure, Menu, Transition, Popover } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from "react-router-dom";
import logo from './img/logo.png'
// IMG TO IMPORT

import i1 from './img/i1.jpg'
import i2 from './img/i2.jpg'
import i3 from './img/i3.jpg'
import i4 from './img/i4.jpg'
import i5 from './img/i5.jpg'
import i6 from './img/i6.jpg'

const items = [
  { id: 1 },
  // More items...
]

const navigation = [
  { name: 'Inicio', href: '/', exp: "inicio" ,current: false },
  { name: 'Trabajos', href: '/trabajos', current: true },
  { name: 'Contacto', href: '/contacto', current: false },

]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const files = [
  { title: 'Como duele la espina', size: '06/Sept/2022', href: "https://scontent-scl2-1.cdninstagram.com/v/t51.2885-15/305569442_869060327427981_4369998265454828620_n.jpg?stp=dst-jpg_e35_p640x640_sh0.08&_nc_ht=scontent-scl2-1.cdninstagram.com&_nc_cat=109&_nc_ohc=gw8V2DPGPDAAX-uDHvJ&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MjkyMTU1NTI5NDQ4MTUxOTU5OQ%3D%3D.2-ccb7-5&oh=00_AT9lekuGoan8Gn_qLgI3Z2gGMe-QYPgGN_LAv50gd5IdrQ&oe=63500D33&_nc_sid=30a2ef", source: i1 },
  { title: 'Franco', size: '02/Sept/2022', href: "https://scontent-scl2-1.cdninstagram.com/v/t51.2885-15/303897749_3240379239550436_1110665257752925339_n.jpg?stp=dst-jpg_e35_p640x640_sh0.08&_nc_ht=scontent-scl2-1.cdninstagram.com&_nc_cat=108&_nc_ohc=np-UIZY5yAAAX9f8Vh1&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MjkxODcxMzkyMjY2OTkzNTgyMw%3D%3D.2-ccb7-5&oh=00_AT9F5twdUuMwDj6XIVWDFpz9djLhMd1tQGjjhOMwQFAC3w&oe=63502AC2&_nc_sid=30a2ef", source: i2 },
  { title: 'Mi fav', size: '29/Agost/2022', href:"https://scontent-scl2-1.cdninstagram.com/v/t51.2885-15/301722869_128821773223784_3672834238085664351_n.jpg?stp=dst-jpg_e35&_nc_ht=scontent-scl2-1.cdninstagram.com&_nc_cat=108&_nc_ohc=0y6lGdpUnhwAX-YEHR-&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MjkxNTc4NTQ4ODgyNjEzNTU1Ng%3D%3D.2-ccb7-5&oh=00_AT8MuX0iP6If7caPIQ7rOBcom8XS3YwJNheBTKwc-dr1ZA&oe=6350E7E6&_nc_sid=30a2ef", source: i3 },
  { title: 'Sempiterno I', size: '16/Agost/2022', href: "https://scontent-scl2-1.cdninstagram.com/v/t51.2885-15/299747074_601560721551389_5364029036753834792_n.jpg?stp=dst-jpg_e35_s640x640_sh0.08&_nc_ht=scontent-scl2-1.cdninstagram.com&_nc_cat=105&_nc_ohc=1LPo4qq96ssAX8Izn9w&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MjkwNjI1NTQ0MjQyMzg4NzQ3Mw%3D%3D.2-ccb7-5&oh=00_AT8k5R3CPY8qaMtr7ha5iPPysbpGSTL9x_bQ_VhwXq0A4g&oe=63504A95&_nc_sid=30a2ef", source: i4 },
  { title: 'Laguna arcoiris', size: '23/Abril/2020', href: "https://instagram.fscl17-1.fna.fbcdn.net/v/t51.2885-15/94253029_522035518701051_8391679627586760333_n.jpg?stp=dst-jpg_e15_fr_s1080x1080&_nc_ht=instagram.fscl17-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=QMGImMQapZYAX-lwJM3&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MjI5Mzk2NjQyMjUyMjk1NDQ1NA%3D%3D.2-ccb7-5&oh=00_AT8UVzrgxmVIcElhMMZFA3kH2dvfDuvHCfNCGo4UPOxf9g&oe=633C17A8&_nc_sid=30a2ef",  source: i5 },
  { title: 'Cenicienta', size: '25/Agost/2022', href: "https://instagram.fscl17-1.fna.fbcdn.net/v/t51.2885-15/300962152_1261718974658440_3851166549380674912_n.jpg?stp=dst-jpg_e35_p750x750_sh0.08&_nc_ht=instagram.fscl17-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=sxT8O7VY0iIAX9IQ6JZ&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MjkxMjg3OTM1MDIxNjYzNTQxMA%3D%3D.2-ccb7-5&oh=00_AT92n6J9XRFOwXKFpf4NCSub2U6Lou1A88613L5dw35q7A&oe=633C4FF6&_nc_sid=30a2ef", source: i6 },
  // More files...
]

export default function trabajos() {
  return (
       
    <>

      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}
      <div className="min-h-full">
        <div className="bg-black pb-32">
          <Disclosure as="nav" className="bg-black">
            {({ open }) => (
              <>
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                  <div className="border-b border-gray-700">
                    <div className="flex h-16 items-center justify-between px-4 sm:px-0">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <a href= '/'>
                            <img
                            className="h-8 w-8"
                            src={logo}
                            alt="Valentina Terán"
                            href= '/'
                            />                          
                          </a>
                        </div>
                          <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                              
                              {navigation.map((item) => (
                                <a
                                  key={item.name}
                                  href={item.href}
                                  className={classNames(
                                    item.current
                                      ? 'bg-gray-800 text-white'
                                      : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                    'px-3 py-2 rounded-md text-sm font-medium font-serif text-base'
                                  )}
                                  aria-current={item.current ? 'page' : undefined}
                                  
                                >

                                    <nav> <Link to={item.href}></Link> </nav>



                                  {item.name}
                                </a>
                              ))}
                            </div>
                          </div>
                      </div>
                      
                      <div className="-mr-2 flex md:hidden">
                        {/* Mobile menu button */}
                        <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                          <span className="sr-only">Abrir menú</span>
                          {open ? (
                            <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                          ) : (
                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                          )}
                        </Disclosure.Button>
                      </div>
                    </div>
                  </div>
                </div>

                <Disclosure.Panel className="border-b border-gray-700 md:hidden">
                  <div className="space-y-1 px-2 py-3 sm:px-3">
                    {navigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'block px-3 py-2 rounded-md text-base font-medium font-serif text-center'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                  
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <header className="py-10">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-serif text-center font-bold tracking-tight text-white">Valentina Terán Luengo Fotografías </h1>
            </div>
          </header>
        </div>

        <main className="-mt-32 ">
          <div className="bg-scroll bg-[url('./pages/img/fondo.png')] ">

            <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
            <div className = "text-white text-3xl font-serif flex-wrap content-center mt-100"> <br></br></div>
              {/* Replace witha your content */}
              <div className="rounded-lg bg-white/0 px-5 py-6 shadow sm:px-6 ">

                <div className="h-auto rounded-lg "> 
                <div className="relative overflow-hidden bg-white/50">
                  <div className="mx-auto max-w-7xl">
                    <div className="relative z-10 bg-white/50 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-5xl lg:pb-28 xl:pb-32 mt-">
                      
                      <Popover>
                        

                        <Transition
                          as={Fragment}
                          enter="duration-150 ease-out"
                          enterFrom="opacity-0 scale-95"
                          enterTo="opacity-100 scale-100"
                          leave="duration-100 ease-in"
                          leaveFrom="opacity-100 scale-100"
                          leaveTo="opacity-0 scale-95"
                        >
                          <Popover.Panel
                            focus
                            className="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden"
                          >
                            <div className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
                              <div className="flex items-center justify-between px-5 pt-4">
                                <div>
                                  <img
                                    className="h-8 w-auto"
                                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                    alt=""
                                  />
                                </div>
                                <div className="-mr-2">
                                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                    <span className="sr-only">Cerrar menú</span>
                                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                  </Popover.Button>
                                </div>
                              </div>
                              <div className="space-y-1 px-2 pt-2 pb-3">
                                {navigation.map((item) => (
                                  <a
                                    key={item.name}
                                    href={item.href}
                                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                                  >
                                    {item.name}
                                  </a>
                                ))}
                              </div>
                              <a
                                href="#"
                                className="block w-full bg-gray-50 px-5 py-3 text-center font-medium text-indigo-600 hover:bg-gray-100"
                              >
                                Log in
                              </a>
                            </div>
                          </Popover.Panel>
                        </Transition>
                      </Popover>

                      <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                        <div className="sm:text-center lg:text-left">
                          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl font-serif">
                            <span className="block xl:inline"><br></br>Trabajos previos</span>{' '}

                          </h1>
                            <p className="mt-3 text-base text-black font-serif sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                            En este sector, se aprecian trabajos ya realizados con anterioridad, todos realizados con profesionalismo y la seriedad ameritada para cada trabajo.
                             </p>
                          
                        </div>
                          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl font-serif mb-3">
                            <span className="block xl:inline"><br></br>Kasháf</span>{' '}

                            </h2>
                          <div class="aspect-w-16 aspect-h-9">
                            <iframe src="https://online.fliphtml5.com/sjqrl/jszt/" seamless="seamless" scrolling="no" frameborder="0" allowtransparency="true" allowfullscreen="true" ></iframe>
                          </div>
                        <div className="sm:text-center lg:text-left">
                          <p className="mt-3 text-base text-center text-black font-serif sm:mx-auto sm:mt-5  sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas est libero, dapibus et magna a, imperdiet dictum sapien. Vestibulum blandit nisi at quam lobortis egestas. Quisque eu elit nibh. Nunc sit amet metus volutpat, posuere arcu eget, aliquet quam. Duis nec elementum purus. Etiam libero lorem, hendrerit tristique sodales in, dignissim aliquet sem. Ut euismod tellus ut ultrices posuere.


                          </p>
                          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl font-serif mb-3">
                            <span className="block xl:inline"><br></br>Otras fotografías</span>{' '}
                            </h2>
                          <div>
                            <ul role="list" className="grid grid-cols-2 gap-x-4 font-serif gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
                              {files.map((file) => (
                                <li key={file.source} className="relative" >
                                  <a href={file.href} target="_blank">
                                  <div className="group aspect-w-10 font-serif aspect-h-7 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-gray-600 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                                    <img src={file.source} alt="" className="pointer-events-none object-cover group-hover:opacity-75" />
                                    <button type="button" className="absolute inset-0 focus:outline-none">
                                      <span className="sr-only">Ver detalles de{file.title}</span>
                                    </button>
                                  </div>
                                  <p className="pointer-events-none mt-2 block truncate text-base text-gray-900">{file.title}</p>
                                  <p className="pointer-events-none block text-sm font-medium text-gray-500">{file.size}</p>
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </main>
                    </div>
                  </div>

                </div>
                </div>
                
              </div>
              {/* /End replace */}
            </div>
          </div>
        </main>
        <footer>
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="border-t border-gray-200 py-8 text-center text-sm text-gray-500 sm:text-left">
              <span className="block sm:inline">&copy; 2022 Valentina Terán Luengo.</span>{' '}
              <span className="block sm:inline">Todos los derechos reservados.</span>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

