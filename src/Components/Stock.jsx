import "./Styles/Stock.css"
import Relogio from './DateTime'
import { useState } from "react"



const Stock = () => {

    const [precoCusto, setPrecoCusto] = useState("")

    const total = ((50 / 100) * Number(precoCusto)) + Number(precoCusto)

    return (
        <>
            <main className="main-stock">
                <form className="FormStock">
                    <div className="headerStyle">
                        <h2>Cadastro de Produtos</h2>
                        <div id="icon">
                            <div id="expand"><i class="bi bi-arrows-angle-contract"></i></div>
                            <div id="expand"><i class="bi bi-dash-lg"></i></div>
                            <div id="expand"><i class="bi bi-x-lg"></i></div>
                        </div>
                    </div>
                    <div className="campoform">
                        <div>
                            <input type="text" placeholder="Nome" />
                            <input type="text" placeholder="SKU" />
                            <input type="text" placeholder="Cód. de Barra" />
                        </div>
                        <input type="text" placeholder="Categoria" />
                        <input type="text" placeholder="Marca" />
                        <input type="text" placeholder="Fornecedor" />
                        <div className="preco">
                            <input type="Number" placeholder="Preço de Custo" value={precoCusto} onChange={(e) => setPrecoCusto(e.target.value)} />  <p>Preço de venda: R$ {total.toLocaleString("pt-BR")}</p>
                        </div>
                        <div>
                            <input type="Number" placeholder="Estoque" />
                            <input type="text" placeholder="Peso" />
                            <input type="text" placeholder="Dimensões" />
                            <input type="text" placeholder="Lote" />
                            <input type="file" placeholder="Inserir Imagem" />
                            <input type="text" placeholder="Status" />
                        </div>
                        <div>
                            <textarea name="" id="" placeholder="Observações"></textarea>
                        </div>

                        <button type="submit">Cadastrar</button>
                        <button type="reset">Cancelar</button>
                    </div>
                </form>
            </main>
        </>
    )
}

export default Stock;