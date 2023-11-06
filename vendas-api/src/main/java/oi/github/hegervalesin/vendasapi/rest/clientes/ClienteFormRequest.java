package oi.github.hegervalesin.vendasapi.rest.clientes;


import lombok.Data;
import oi.github.hegervalesin.vendasapi.model.Cliente;

import java.time.LocalDate;

@Data
public class ClienteFormRequest {

    private Long id;
    private LocalDate dataNascimento;
    private String cpf;
    private String nome;
    private String endereco;
    private String telefone;
    private String email;
    private LocalDate cadastro;

    public ClienteFormRequest(Long id, LocalDate dataNascimento, String cpf, String nome, String endereco, String telefone, String email, LocalDate cadastro) {
        super();
        this.id = id;
        this.dataNascimento = dataNascimento;
        this.cpf = cpf;
        this.nome = nome;
        this.endereco = endereco;
        this.telefone = telefone;
        this.email = email;
        this.cadastro = cadastro;
    }

    public ClienteFormRequest() {
        super();
    }

    public Cliente toModel() {
        return new Cliente(id, dataNascimento, cpf, nome, endereco, telefone, email, cadastro);
    }

    public static ClienteFormRequest formModel(Cliente cliente){
        return new ClienteFormRequest(
                cliente.getId(),
                cliente.getNascimento(),
                cliente.getCpf(),
                cliente.getNome(),
                cliente.getEndereco(),
                cliente.getTelefone(),
                cliente.getEmail(),
                cliente.getDataCadastro()
        );
    }

}
