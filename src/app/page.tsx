'use client'
import Link from 'next/link';
import { Modal } from '@/components/Modal';
import { useState } from 'react';
import { MdClose } from 'react-icons/md';

export default function Home() {
  const [ isOpen, setIsOpen ] = useState<boolean>(false)
  const handleOpenModal = () =>{
    setIsOpen(true)
  }
  const handleCloseModal = () =>{
    setIsOpen(false)
  }
  return (
    <main className="flex flex-wrap bg-white w-full h-screen items-center justify-center">
      <button onClick={handleOpenModal}> Modal Open </button>
      <Modal.Root isOpen={isOpen}>
        <Modal.Header>
          <Modal.Title>Modal Title</Modal.Title>
          <Modal.Action onClick={handleCloseModal} title='close'>
            <MdClose className="text-xl text-gray-700 rounded hover:text-white hover:bg-slate-700" />
          </Modal.Action>
        </Modal.Header>
        <Modal.Content>
          <h1 className='text-gray-800 text-2xl'>Deseja realmente sair da aplicação?</h1>
        </Modal.Content>
        <Modal.Actions>
          <Modal.Action color="error" onClick={handleCloseModal} >
            Close
          </Modal.Action>
          <Modal.Action color="success" onClick={handleCloseModal} >
            Confirm
          </Modal.Action>

        </Modal.Actions>

      </Modal.Root>
  
          <div className="max-w-2xl py-10 flex flex-col items-center justify-center text-center">
            
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Aplicação Web em Reactjs/Nextjs e Tailwind </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">Essa aplicação é apenas um projeto com todos meus recursos prontos e meu componentes que costumo usar.</p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link href="/dashboard" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Dashboard</Link>
                <Link href="/auth/login" className="text-sm font-semibold leading-6 text-gray-900">Login <span aria-hidden="true">→</span></Link>
              </div>
          
        </div>
    </main>
  )
}
