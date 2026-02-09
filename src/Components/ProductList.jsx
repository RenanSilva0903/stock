import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button
} from "@chakra-ui/react";

const ProductList = ({ products, onEdit, onDelete }) => {
  return (
    <Table variant="simple" mt={6}>
      <Thead>
        <Tr>
          <Th>Produto</Th>
          <Th>Preço</Th>
          <Th>Quantidade</Th>
          <Th>Ações</Th>
        </Tr>
      </Thead>
      <Tbody>
        {products.map((p) => (
          <Tr key={p.id}>
            <Td>{p.name}</Td>
            <Td>R$ {p.price}</Td>
            <Td>{p.estoque}</Td>
            <Td>
              <Button size="sm" mr={2} onClick={() => onEdit(p)}>
                Editar
              </Button>
              <Button
                size="sm"
                colorScheme="red"
                onClick={() => onDelete(p.id)}
              >
                Excluir
              </Button>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default ProductList;
