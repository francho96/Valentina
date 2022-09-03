/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Disclosure, Menu, Transition, Popover } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";


import index  from './pages/img/index2.png'
import trabajos from './pages/trabajos'

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}

const navigation = [
  { name: 'Inicio', href: '/', exp: 'inicio',current: true },
  { name: 'Trabajos', href: '/trabajos', exp: 'trabajos',  current: false },
  { name: 'Contacto', href: '/comtacto', exp: 'contacto', current: false },

]

const items = [
  { id: 1 },
  // More items...
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
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
                          <img
                            className="h-8 w-8"
                            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                            alt="Your Company"
                          />
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



                                  <Router><div><Link to={item.href}></Link>  <Routes path={item.href} component={item.exp}/></div> </Router>
                                  


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
                    <div className="relative z-10 bg-white/50 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32 mt-">
                      
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
                            <span className="block xl:inline"><br></br>Fotografías profesionales a tu</span>{' '}
                            <span className="block text-pink-800 xl:inline">alcance</span>
                          </h1>
                          <p className="mt-3 text-base text-black font-serif sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                          El trabajo creado aquí es único, ideal y acorde a lo que estás buscando, ya que cada fotografía es tomada con profesionalismo y estudios, para otorgar el mejor producto posible.
                          </p>
                          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                            <div className="rounded-md shadow">
                              <a
                                href=""
                                className="flex w-full items-center justify-center rounded-md border border-transparent bg-black px-8 py-3 text-base font-medium text-white hover:bg-gray-700 md:py-4 md:px-10 md:text-lg"
                              >
                                Ver Trabajos
                              </a>  
                            </div>
                            <div className="mt-3 sm:mt-0 sm:ml-3">
                              <a
                                href="#"
                                className="flex w-full items-center justify-center rounded-md border border-transparent bg-gray-300 px-8 py-3 text-base font-medium text-black hover:bg-gray-200 md:py-4 md:px-10 md:text-lg"
                              >
                                Contactar
                              </a>
                            </div>
                          </div>
                        </div>
                      </main>
                    </div>
                  </div>
                  <div className="lg:absolute lg:inset-y-0 lg:right-0">
                    <img
                      className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
                      src= {index}
                      alt=""
                    />
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
