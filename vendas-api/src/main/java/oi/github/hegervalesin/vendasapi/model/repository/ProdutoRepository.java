package oi.github.hegervalesin.vendasapi.model.repository;

import oi.github.hegervalesin.vendasapi.model.Produto;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProdutoRepository extends JpaRepository<Produto, Long> {
    List<Produto> findBySku(String sku);
}
