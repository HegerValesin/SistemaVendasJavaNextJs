package oi.github.hegervalesin.vendasapi.model;

import lombok.*;

import javax.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDate;

@Entity
@AllArgsConstructor
@Data
@Table(name = "produto")
public class Produto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "nome", length = 130 )
    private String nome;

    @Column(name = "descricao", length = 255 )
    private String descricao;

    @Column(name = "preco", precision = 16, scale = 2)
    private BigDecimal preco;

    @Column
    private String sku;

    @Column(name = "data_cadastro")
    private LocalDate dataCadastro;

    public Produto() {
    }

    public Produto(String nome, String descricao, BigDecimal preco, String sku) {
        this.nome = nome;
        this.descricao = descricao;
        this.preco = preco;
        this.sku = sku;
    }

    public Produto(Long id, String nome, String descricao, BigDecimal preco, String sku) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
        this.preco = preco;
        this.sku = sku;
    }
    @PrePersist
    public void prePersist() {
        setDataCadastro(LocalDate.now());
    }
}
