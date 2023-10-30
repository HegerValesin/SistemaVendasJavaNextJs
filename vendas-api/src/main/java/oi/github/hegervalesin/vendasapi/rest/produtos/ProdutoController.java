package oi.github.hegervalesin.vendasapi.rest.produtos;

import oi.github.hegervalesin.vendasapi.model.Produto;
import oi.github.hegervalesin.vendasapi.model.repository.ProdutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.yaml.snakeyaml.representer.Represent;

import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@SuppressWarnings("unused")
@RestController
@RequestMapping("/api/produtos")
//@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ProdutoController {

    @Autowired
    private ProdutoRepository repository;

    @PostMapping
    public ProdutoFromRequest salvar( @RequestBody ProdutoFromRequest produto) {
        Produto entidadeProduto = produto.ToModel();
        repository.save(entidadeProduto);
        return ProdutoFromRequest.fromModel(entidadeProduto);
    }

    @PutMapping("{id}")
    public ResponseEntity atualizar(@PathVariable Long id, @RequestBody ProdutoFromRequest produto ){
        Optional<Produto> produtoExistente = repository.findById(id);

        if (produtoExistente.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        Produto entidade = produto.ToModel();
        entidade.setId(id);
        repository.save(entidade);
        return ResponseEntity.ok().build();
    }
    @GetMapping
    public List<ProdutoFromRequest> getProdutos() {
        return repository.findAll().stream()
                .map(ProdutoFromRequest::fromModel)
                .collect(Collectors.toList());
    }

    @GetMapping("{id}")
    public ResponseEntity<ProdutoFromRequest> getById( @PathVariable Long id) {
        Optional<Produto> produtoExistente = repository.findById(id);
        if (produtoExistente.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        var produto = produtoExistente.map( ProdutoFromRequest::fromModel ).get();
        return ResponseEntity.ok(produto);
    }

    @GetMapping(params = "sku")
    public List<Produto> getProdutosSku( @RequestParam("sku") String sku) {
        return repository.findBySku(sku);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<Void> deletar(@PathVariable Long id){
        Optional<Produto> produtoExistente = repository.findById(id);
        if (produtoExistente.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        repository.delete(produtoExistente.get());
        return ResponseEntity.noContent().build();
    }
}
