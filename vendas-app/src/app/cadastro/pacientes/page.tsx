'use client'
import { Button, Card, CardBody, CardFooter, CardHeader, Input } from '@material-tailwind/react';
import { useState } from 'react';
 
export default function Cadastro() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        documentType: '',
        documentNumber: '',
        address: '',
     });

     const fetchData = async () => {
        //usar na busca da api
        const response = {
            name: 'Maria Alves',
            email: 'Mariaafp@gmail.com ',
            documentType: 'RG',
            documentNumber: '12345566',
            address: 'Rua Maria de todos',
         }
         
        //converter o JSon
        const data = {
            name: response.name,
            email: response.email,
            documentType: response.documentType,
            documentNumber: response.documentNumber,
            address: response.address,
        };  //response.json();

        setFormData(response);
     };
    
     const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log('handleChange', e.target.value)
        const inputElement = e.target as HTMLInputElement;
        console.log(inputElement.name)
        setFormData({ ...formData, [inputElement.name]: inputElement.value });
        
     };
    
     const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        console.log('Form submitted:', formData);
        // Submit form data to the server here
     };
    return(
        <Card className='w-auto m-3 mt-10 '>
            <CardHeader className='h-30 opacity-100 bg-gradient-to-bl from-blue-400 to-blue-700 text-blue-900 rounded-md shadow-lg' floated={true}>
                <div className='p-8'><h1 className='font-semibold text-2xl text-white'>Cadastro de Paciente</h1></div>
            </CardHeader>
            <CardBody className='flex flex-col justify-center gap-4'>
            <button type="button" onClick={fetchData}>Completar</button>
            <form onSubmit={handleSubmit} className="mt-8 mb-2 w-auto">
                <div className='mb-4 w-auto'>
                    <Input label='Nome' name='name' size='lg' onChange={handleChange}/>
                </div>
                <div className='mb-4'>
                    <Input label='E-mail' name='email' size='lg' className='mb-2' onChange={handleChange}/>
                </div>
                <div className='mb-4'>
                    <Input label='Tipo de Documento' name='documentType' size='lg' onChange={handleChange}/>
                </div>
                <div className='mb-4'>
                    <Input label='Número do Documento' name='documentNumber' size='lg' onChange={handleChange}/>
                </div>
                <div className='mb-4'>
                    <Input label='Endereço' size='lg' name='address' onChange={handleChange}/>
                </div>
                <div className='block m-2 justify-center md:flex'>
                <Button type="submit" color='green' variant="gradient" fullWidth className='my-2 mx-6 w-15 px-10 rounded-full'>Submit</Button>
                <Button  color='red' variant="gradient" fullWidth className='my-2 mx-6 w-15 px-10 rounded-full'>Cancelar</Button>
                </div>
            </form>
            </CardBody>
            <CardFooter>
                <div></div>
            </CardFooter>
        </Card>
           
   );
  };
  