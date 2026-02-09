import {
  Button,
  Input,
  Stack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "@chakra-ui/react";
import { useState, useEffect } from "react";

const ProductForm = ({ isOpen, onClose, onSave, product }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [estoque, setEstoque] = useState("")

  useEffect(() => {
    if (product) {
      setName(product.name);
      setPrice(product.price);
      setEstoque(product.estoque)
    } else {
      setName("");
      setPrice("");
      setEstoque("")
    }
  }, [product]);

  const handleSubmit = () => {
    onSave({
      id: product?.id || Date.now(),
      name,
      price,
      estoque
    });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Produto</ModalHeader>
        <ModalBody>
          <Stack spacing={3}>
            <Input
              placeholder="Nome do produto"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              placeholder="Preço"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
             <Input
              placeholder="Quantidade"
              value={estoque}
              onChange={(e) => setEstoque(e.target.value)}
            />
          </Stack>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" onClick={handleSubmit}>
            Salvar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ProductForm;
