import Relogio from './DateTime'
import Stock from './Stock'
import "./Styles/Crud.css"
import { useState } from 'react'

const Crud = () => {

    const [mostrarForm, setMostrarForm] = useState(false)

    return (
        <>
            <main className='Crud-main'>
                <header className='menu'>
                    {/* <div className='user'>
                    <i class="bi bi-person-circle"></i> <p>Olá, Renan Santos</p>
                </div> */}
                    <ul>
                        <li onClick={() => setMostrarForm(!mostrarForm)}><i class="bi bi-database-add">  </i>Adicionar Produtos</li>
                        <li><i class="bi bi-person-plus">  </i>Adicionar Clientes</li>
                        <li><i class="bi bi-cash">  </i> Fazer Venda</li>
                        <li><i class="bi bi-envelope-at">  </i> Enviar Promoção</li>
                        <li><i class="bi bi-tag">  </i> Consultar Preço</li>
                    </ul>
                </header>
                {mostrarForm && <Stock />}
                <div className='area-Crud'>
                    <p>Nome</p>
                    <p>SKU</p>
                    <p>Cód de Barra</p>
                    <p>Categoria</p>
                    <p>Marca</p>
                    <p>Fornecedor</p>
                    <p>Preço de Custo</p>
                    <p>Estoque</p>
                    <p>Peso</p>
                    <p>Dimensoes</p>
                    <p>Lote</p>
                    <p>Status</p>
                    <p>Observações</p>
                    <p></p>
                </div>
            </main>
        </>
    )
}

export default Crud