package oi.github.hegervalesin.vendasapi.rest.produtos;

import java.math.BigDecimal;
import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;
import oi.github.hegervalesin.vendasapi.model.Produto;

@Data
public class ProdutoFromRequest {

	private Long id;
	private String descricao;
	private String nome;
	private BigDecimal preco;
	private String sku;
	@JsonFormat(pattern = "dd/MM/yyyy")
	private LocalDate cadastro;

	public ProdutoFromRequest(Long id, String descricao, String nome, BigDecimal preco, String sku, LocalDate cadastro) {
		super();
		this.id = id;
		this.descricao = descricao;
		this.nome = nome;
		this.preco = preco;
		this.sku = sku;
		this.cadastro = cadastro;
	}

	public Produto ToModel() {
		return new Produto(id, nome, descricao, preco, sku);
	}

	public static ProdutoFromRequest fromModel(Produto produto){
		return new ProdutoFromRequest(
				produto.getId(),
				produto.getDescricao(),
				produto.getNome(),
				produto.getPreco(),
				produto.getSku(),
				produto.getDataCadastro()
		);
	}
}

