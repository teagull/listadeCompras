import { useRef, useState } from "react"
import { v4 } from 'uuid'
import { Addbutton, Container, Product, TrashButton } from "./styles"

// React Hooks
// useRef
// useState / estado é uma variael que toda vez que troca de valor a tela recarrega os valores

function Home() {
  const [produtos, setProdutos] = useState([])
  const inputRef = useRef()

  function cliqueiNoBotao() {
    setProdutos([{ id: v4(), nome: inputRef.current.value }, ...produtos])
    inputRef.current.value = ''
  }
  function deletarProduto (id) {
    setProdutos(produtos.filter(produto => produto.id != id))

  }

  return (
    <Container>
      <h1>Lista de Compras</h1>
      <input placeholder="produto..." ref={inputRef} />
      <Addbutton onClick={cliqueiNoBotao}>Adicionar</Addbutton>

      {produtos.map((produto) => (
        <Product key={produto.id}>
          <p>{produto.nome} </p>
          <TrashButton onClick={() => deletarProduto(produto.id)}>🗑️</TrashButton>
        </Product>
      ))}
    </Container>
  )
}

export default Home
