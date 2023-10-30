import {
    MagnifyingGlassIcon,
    ChevronUpDownIcon,
  } from "@heroicons/react/24/outline";
  import { PencilIcon, TrashIcon, UserPlusIcon, } from "@heroicons/react/24/solid";
  import {
    Card,
    CardHeader,
    Input,
    Typography,
    Button,
    CardBody,
    Chip,
    CardFooter,
    Tabs,
    TabsHeader,
    Tab,
    Avatar,
    IconButton,
    Tooltip,
    Select,
    Option
  } from "@material-tailwind/react";
import { Produto } from "app/api/Models/Produtos/Produtos";
import { useState } from "react";

interface TabelaProdutosProps {
  produtos: Array<Produto>;
  onEdit: (produto: Produto) => void;
  onDelete: (produto: Produto) => void;
  onAdd: () => void;
}

export default function TabelaProdutos({ produtos, onDelete, onEdit, onAdd }:TabelaProdutosProps) {
    const [ qtPag, setQtPage ] = useState(5)

    const ITEMS_PER_PAGE = qtPag;

    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(produtos.length / ITEMS_PER_PAGE);

    const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIdx = startIdx + ITEMS_PER_PAGE;
    const currentProdutos = produtos.slice(startIdx, endIdx);

    const handleQtPageChange = (newQtPag: any) => {
        setQtPage(parseInt(newQtPag));
        setCurrentPage(1); // Reset page to 1 when changing items per page
      };

      const TABLE_HEAD = ["Ação","Código", "SKU", "Nome", "Valor"];
      const TABLE_ROWS = produtos;

    return(
        <Card className="h-full w-full overflow-x-hidden">
          <CardHeader floated={false} shadow={false} className="rounded-none">
            <div className="mb-8 flex items-center justify-between gap-8">
              <div>
                <Typography variant="h5" color="blue-gray">
                  Lista de Produtos
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
                  Relação de produtos
                </Typography>
              </div>
              <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                <Button variant="outlined" size="sm" >
                  view all
                </Button>
                <Button className="flex items-center gap-3" size="sm" onClick={e => onAdd()}>
                  <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Novo
                </Button>
              </div>
            </div>
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <div className="w-full md:w-72">
                <Input
                  label="Search"
                  icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                />
              </div>
            </div>
          </CardHeader>
          <CardBody className="px-0">
            <table className="mt-4 w-full min-w-max table-auto text-left " >
              <thead>
                <tr>
                  {TABLE_HEAD.map((head, index) => (
                    <th
                      key={head}
                      className="cursor-pointer border-b border-blue-gray-100 bg-blue-gray-50/50 p-2 transition-colors hover:bg-blue-gray-50"
                    >
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                      >
                        {head}{" "}
                        {index !== TABLE_HEAD.length - 1 && (
                          <ChevronUpDownIcon strokeWidth={2} className="h-4 w-4" />
                        )}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {currentProdutos.map(
                  ({ id, sku, nome, preco }: any, index: any) => {
                    const isLast = index === TABLE_ROWS.length - 1;
                    const classes = isLast
                      ? "p-2"
                      : "p-1 border-b border-blue-gray-50";
     
                    return (
                      <tr key={id}>
                         <td className={classes}>
                          <Tooltip content="Edit Produto">
                            <IconButton variant="text" onClick={e => onEdit({ id, sku, nome, preco })}>
                              <PencilIcon className="h-4 w-4" />
                            </IconButton>
                          </Tooltip>
                          <Tooltip content="Delete produto">
                            <IconButton variant="text" onClick={e => onDelete({ id, sku, nome, preco })}>
                              <TrashIcon className="h-4 w-4" />
                            </IconButton>
                          </Tooltip>
                        </td>
                        <td className={classes}>
                          <div className="flex items-center gap-3">
                            <div className="flex flex-col">
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal"
                              >
                                {id}
                              </Typography>
                            </div>
                          </div>
                        </td>
                        <td className={classes}>
                          <div className="flex flex-col">
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {sku}
                            </Typography>
                          </div>
                        </td>
                        <td className={classes}>
                          <div className="flex flex-col">
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {nome}
                            </Typography>
                          </div>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {preco}
                          </Typography>
                        </td>
                      </tr>
                    );
                  },
                )}
              </tbody>
            </table>
          </CardBody>
          <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
            <Typography variant="small" color="blue-gray" className="font-normal">
            Page {currentPage} of {totalPages}
            </Typography>
            <div className="w-32">
                <Select size="md" label="Itens" value={qtPag.toString()} onChange={(e: any) => handleQtPageChange(e)}>
                    <Option value={'5'}>5</Option>
                    <Option value={"10"}>10</Option>
                    <Option value={'15'}>15</Option>
                    <Option value={'20'}>20</Option>
                </Select>
            </div>
            <div className="flex gap-2">
              <Button variant="outlined" size="sm" onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}>
                Previous
              </Button>
              <Button variant="outlined" size="sm" onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}>
                Next
              </Button>
            </div>
          </CardFooter>
        </Card>
      );
}

