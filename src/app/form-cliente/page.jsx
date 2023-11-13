"use client";
import { useState } from "react";
import Image from "next/image";
import logo from '../../../public/img/logo.png';
import {BsArrowRightShort} from 'react-icons/bs'


export default function FormCliente() {
  const [formData, setFormData] = useState({
    nome: "",
    cpf: "",
    telefone: "",
    idade: "",
    endereco: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(formData)
    // Faça algo com os dados, por exemplo, envie para um servidor
    try{
    const resposta = await fetch("http://localhost:8080/sprint4/cliente",{
        method: "POST",
        body: JSON.stringify(formData),
    });
    const resultado = await resposta.json();
        console.log(resultado)
        console.log(resposta.status)
        
    }catch(error){
        console.log("erro ao enviar dados para o backend",error)
    }
  };

  return (
    <div className="container-form">
      <div className="left">
        <div className="left-container">
          <Image src={logo} width={150} height={100} alt="Imagem" />
          <div className="w-2/3">
              <h1 className="text-xl font-bold">Seja bem-vindo</h1>
              <p>Crie o seu cadastro para fazer a cotação gratuita do seu seguro bike.</p>
          </div>
          <p>A cotação é rápida e prática</p>
        </div>
      </div>

      <div className="right">
        <div>
            <div className="flex flex-col text-center text-white">
                <h1 className="font-bold text-2xl">Crie o seu cadastro</h1>
                <p className="text-base">Preencha o formulário com as suas informações</p>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-y-5 items-center form">
                <div>
                    {/* <label htmlFor="idCliente" className="w-20 inline-block">Cliente</label> */}
                    <input
                    type="text"
                    name="nome"
                    required
                    placeholder="Nome do cliente"
                    id="idCliente"
                    value={formData.nome}
                    onChange={handleChange}/>
                </div>
                <div>
                    {/* <label htmlFor="idCPF" className="w-20 inline-block">CPF</label> */}
                    <input
                    type="text"
                    name="cpf"
                    required
                    placeholder="CPF do cliente"
                    id="idCPF"
                    value={formData.cpf}
                    onChange={handleChange}/>
                </div>
                <div>
                    {/* <label htmlFor="idTelefone" className="w-20 inline-block">Telefone</label> */}
                    <input
                    type="tel"
                    name="telefone"
                    required
                    placeholder="Telefone do cliente"
                    id="idTelefone"
                    value={formData.telefone}
                    onChange={handleChange}/>
                </div>
                <div>
                    {/* <label htmlFor="idIdade" className="w-20 inline-block">Idade</label> */}
                    <input
                    type="number"
                    name="idade"
                    required
                    placeholder="Idade do cliente"
                    id="idIdade"
                    value={formData.idade}
                    onChange={handleChange}/>
                </div>
            
                <div>
                    {/* <label htmlFor="idEndereco" className="w-20 inline-block">Endereço</label> */}
                    <input
                    type="text"
                    name="endereco"
                    required
                    placeholder="Endereço do cliente"
                    id="idEndereco"
                    value={formData.endereco}
                    onChange={handleChange}/>
                </div>
                <div>
                    {/* <label htmlFor="idEmail" className="w-20 inline-block">Email</label> */}
                    <input
                    type="email"
                    name="email"
                    required
                    placeholder="Email do cliente"
                    id="idEmail"
                    value={formData.email}
                    onChange={handleChange}/>
                </div>
              <button className="flex flex-row items-center text-start bg-white rounded px-8 py-[0.3rem]  " type="submit">Enviar<BsArrowRightShort/></button>
            </form>
            </div>
        </div>
    </div>
  );
}
