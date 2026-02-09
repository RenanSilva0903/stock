import { Box, Button, Heading, useDisclosure } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import Login from "./components/Login";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";

function App() {
  const [logged, setLogged] = useState(false);
  const [products, setProducts] = useState([]);
  const [editing, setEditing] = useState(null);
  const [loaded, setLoaded] = useState(false); // 🔹 controle de carregamento

  const { isOpen, onOpen, onClose } = useDisclosure();

  // 🔹 carregar login do localStorage
  useEffect(() => {
    const storedLogin = localStorage.getItem("logged");
    if (storedLogin === "true") {
      setLogged(true);
    }
  }, []);

  // 🔹 carregar produtos do localStorage (APENAS UMA VEZ)
  useEffect(() => {
    const storedProducts = localStorage.getItem("products");
    if (storedProducts) {
      try {
        setProducts(JSON.parse(storedProducts));
      } catch {
        setProducts([]);
      }
    }
    setLoaded(true);
  }, []);

  // 🔹 salvar produtos no localStorage
  useEffect(() => {
    if (loaded) {
      localStorage.setItem("products", JSON.stringify(products));
    }
  }, [products, loaded]);

  // 🔹 salvar login
  useEffect(() => {
    localStorage.setItem("logged", logged);
  }, [logged]);

  const saveProduct = (product) => {
    setProducts((prev) => {
      const exists = prev.find((p) => p.id === product.id);

      if (exists) {
        return prev.map((p) =>
          p.id === product.id ? product : p
        );
      }

      return [...prev, product];
    });
  };

  const deleteProduct = (id) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  const logout = () => {
    setLogged(false);
    localStorage.removeItem("logged");
  };

  if (!logged) {
    return <Login onLogin={() => setLogged(true)} />;
  }

  return (
    <Box p={6}>
      <Heading>Cadastro de Produtos</Heading>

      <Button
        mt={4}
        colorScheme="green"
        onClick={() => {
          setEditing(null);
          onOpen();
        }}
      >
        Novo Produto
      </Button>

      <Button mt={4} ml={3} colorScheme="red" onClick={logout}>
        Sair
      </Button>

      <ProductList
        products={products}
        onEdit={(p) => {
          setEditing(p);
          onOpen();
        }}
        onDelete={deleteProduct}
      />

      <ProductForm
        isOpen={isOpen}
        onClose={onClose}
        onSave={saveProduct}
        product={editing}
      />
    </Box>
  );
}

export default App;