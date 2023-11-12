
import Image from 'next/image'
import Link from 'next/link'
export default function Home() {
  return (
    <>
      <section className="secao1">
        <div className="container-secao1">
          <div className="titulo">
            <h1>Pedale mais tranquilo com a segurança Porto</h1>
          </div>
          <div className="subtitulo">
            <Image src="/img/cadeado.png" width={50} height={50} alt='cadeado'/>
            <p>
              Porto Seguro <span className="underscore">Bike</span>
            </p>
          </div>
          <Link href="/form-cliente">
          <div className="botao">
            <p>Cotar Gratuitamente</p>
          </div>
          </Link>
        </div>
      </section>

      <section className="secao2" >
        <div className='texts'>
          <h1>
          Aqui você pode escolher com suas necessidades as coberturas do seguro Bike: 
          </h1>
          <p>Você pode escolher:</p>
        </div>
        <div className="imagens">
        <div>
            <Image src="/img/danosbike.png" width={508} height={370} alt="Danos á Bike" />
          </div>

          <div>
            <Image src="/img/roubo.png" width={508} height={370} alt="Roubo" />
          </div>

          <div>
            <Image src="/img/acidentespessoais.png" width={508} height={370} alt="Acidentes pessoais" />
          </div>

          <div>
            <Image src="/img/danosaterceiros.png" width={508} height={370} alt="Danos a terceiros" />
          </div>

          <div>
            <Image src="/img/extensaointernacional.png" width={508} height={370} alt="Extensão da cobertura em solo internacional" />
          </div>

          <div>
            <Image src="/img/extravioemviagens.png" width={508} height={370} alt="Extravio em viagens aéreas e/ou rodovias " />
          </div>

          <div>
            <Image src="/img/danosnatentativaderoubo.png" width={508} height={370} alt="Danos Na tentativa de roubo" />
          </div>
          <div>
            <Image src="/img/danosporcurtos.png" width={508} height={370} alt="Danos Causados por curto circuito na bateria de bikes elétricas" />
          </div>
        </div>
        
      </section>
      
      {/* inciando o FAQ */}
      <section className='secao3'>

        <div className="h1">
          <h1>FAQ - Dúvidas Frequentes</h1>
        </div>

        <div className='duvidas'>

          <details>
            <summary>A cobertura de roubo garante furto simples?</summary>
            <p>A cobertura de roubo garante a subtração da bicicleta e dos acessórios, mediante o emprego de violência ou o rompimento de obstáculos do local, desde que existam vestígios materiais. Não é o caso de amparos para simples desaparecimentos ou extravios.</p>
          </details>

          <details>
            <summary>O seguro Bike cobre qualquer tipo de acessório?</summary>
            <p>O Porto Seguro Bike oferece cobertura para acessórios que são acoplados à bike, como ciclocomputadores, GPS e velocímetros.
            Já acessórios de uso pessoal, não acoplados à bicicleta, como capacetes, luvas, squeezes, mochilas, roupas e ferramentas não são contemplados.</p>
          </details>

          <details>
            <summary>Quem não tem nota fiscal pode contratar o seguro?</summary>
            <p>Pode. Mas é importante ressaltar que podemos solicitar o documento em caso de inspeção e/ou eventual sinistro, a nota fiscal e/ou outros documentos para comprovação da existência e posse do bem.</p>
          </details>

          <details>
            <summary>Tem aceitação para bicicletas montadas/personalizadas?</summary>
            <p>Sim, temos aceitação para bicicletas que tiverem seus componentes alterados ou personalizadas pelo próprio segurado, desde que em eventual sinistro, tenha comprovação da aquisição de todos os componentes. Sempre que houver uma nova alteração de peças que altere o valor total da bicicleta, um endosso deverá ser realizado no LMI (limite máximo de indenização) de contratação.</p>
          </details>

          <details>
            <summary>Posso contratar o seguro de bike para bicicleta usada?</summary>
            <p>Aceitamos bicicletas usadas com até 8 anos de uso, e para bicicletas elétricas, até 3 anos de uso. Neste caso, sugerimos que a contratação ocorra pelo valor de mercado da bike usada.</p>
          </details>
        
        </div>
      </section>
    </>
  )
}
