"use client";
import { useState } from "react";
import Image from "next/image";
import logo from '../../../public/img/logo.png';
import {BsArrowRightShort} from 'react-icons/bs'


export default function FormCliente() {
  const [formData, setFormData] = useState({
    peso: "",
    preco: "",
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
    const resposta = await fetch("http://localhost:8080/sprint4/bicicleta",{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    });
    const resultado = await resposta.json();
        console.log(resultado)
        console.log(resposta.status)
        window.location.href = "/"
        
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
                    <input
                    type="text"
                    name="preco"
                    required
                    placeholder="Preco da bicicleta"
                    id="idPreco"
                    value={formData.preco}
                    onChange={handleChange}/>
                </div>
                <div>
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
                    <input
                    type="text"
                    name="tipo"
                    required
                    placeholder="Tipo da Bicicleta"
                    id="idTipo"
                    value={formData.telefone}
                    onChange={handleChange}/>
                </div>
                <div>
                    <input
                    type="text"
                    name="material"
                    required
                    placeholder="Material da bicicleta"
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
