"use client";
import { useState } from "react";
import Image from "next/image";
import logo from '../../../public/img/logo.png';
import {BsArrowRightShort} from 'react-icons/bs'


export default function FormCliente() {
  const [formData, setFormData] = useState({
    peso: "",
    marca: "",
    tipo: "",
    material: "",
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
      //Api do Java executado em localhost:8080 
    const resposta = await fetch("http://localhost:8080/sprint4/cliente",{
        method: "POST",
        body: JSON.stringify(formData),
    });
    const resultado = await resposta.json();
        console.log(resultado)
        console.log(resposta.status)
        window.location.href = "/";

    }catch(error){
        console.log("erro ao enviar dados para o backend",error)
        window.location.href = "/";
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
                    {/* <label htmlFor="idPeso" className="w-20 inline-block">Peso</label> */}
                    <input
                    type="text"
                    name="peso"
                    required
                    placeholder="Peso da bicicleta"
                    id="idPeso"
                    value={formData.peso}
                    onChange={handleChange}/>
                </div>
                <div>
                    {/* <label htmlFor="idMarca" className="w-20 inline-block">Marca</label> */}
                    <input
                    type="text"
                    name="marca"
                    required
                    placeholder="marca da bicicleta"
                    id="idMarca"
                    value={formData.marca}
                    onChange={handleChange}/>
                </div>
                <div>
                    {/* <label htmlFor="idTipo" className="w-20 inline-block">Tipo</label> */}
                    <input
                    type="text"
                    name="tipo"
                    required
                    placeholder="Telefone do cliente"
                    id="idTipo"
                    value={formData.telefone}
                    onChange={handleChange}/>
                </div>
                <div>
                    {/* <label htmlFor="idMaterial" className="w-20 inline-block">Material</label> */}
                    <input
                    type="text"
                    name="material"
                    required
                    placeholder="Idade do cliente"
                    id="idMaterial"
                    value={formData.idade}
                    onChange={handleChange}/>
                </div>
            
              <button className="flex flex-row items-center text-start bg-white rounded px-8 py-[0.3rem]  " type="submit">Enviar<BsArrowRightShort/></button>
            </form>
            </div>
        </div>
    </div>
  );
}
