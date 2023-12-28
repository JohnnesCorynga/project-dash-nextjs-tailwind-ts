'use client'
import React from 'react'
import { Input } from '@/components/forms/Input'
import { InputPass } from '@/components/forms/InputPass'
import { Button } from '@/components/layouts/Button'
import { SubTitle, Title } from '@/components/layouts/Title'
import Link from 'next/link'
import ImgLogo from '@/img/logo-big.png'
import Image from 'next/image'

const Login = () => {
  const handleSubmit = () => {
    // Lógica de manipulação no componente pai
    console.log('Formulário enviado!');

  };
  return (
    <section 
      className={`
        w-full h-screen flex flex-row relative
      `}
    >
      <div className='absolute w-full z-1 bg-emerald-600 h-screen lg:w-8/12 lg:relative lg:block '>
        <Image className='w-screen' alt='logo-eragon-tech' src={ImgLogo}/>
      </div>
      <div className='z-10 h-screen w-full 
      lg:w-4/12 flex justify-center items-center '>
        <div className='px-10 py-10 mx-5 bg-white rounded lg:m-0 shadow-lg shadow-slate-400'>

          <Title>Login</Title>
          <SubTitle>Aplicação Web</SubTitle>
          <Input name='email' label='Email' type='email' inputTypeBottom/>
          <InputPass name='password' label='Senha' type='password' inputTypeBottom/>
          <Link href="/dashboard">
            <Button onClick={handleSubmit}>Entrar</Button>
          </Link>
        </div>

      </div>
    </section>
  )
}

export default Login