import Image from 'next/image';
import Link from 'next/link'



export default function Footer() {
  return (
    <>
      <footer>
        <div className="footer">
          <div className="logo">
            <Image src="/img/logo.png" width={200} height={80}/>
          </div>
          <hr />
          <p>&copy; 2023 - Todos os direitos reservados</p>
          <nav>
            <Link href={"https://www.portoseguro.com.br/privacidade"}>
              <div>
                <p>Política de Privacidade</p>
              </div>
            </Link>
            
            <Link href={"/https://www.portoseguro.com.br/fale-conosco/ouvidoria"}>
            <div>
              <p>Ouvidoria</p>
            </div>
            </Link>
          </nav>
        </div>
      </footer>
    </>
  )
}
