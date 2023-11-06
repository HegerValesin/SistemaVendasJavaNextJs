package oi.github.hegervalesin.vendasapi.rest.clientes;

import oi.github.hegervalesin.vendasapi.model.Cliente;
import oi.github.hegervalesin.vendasapi.model.repository.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Objects;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/clientes")
public class ClientesController {
    @Autowired
    private ClienteRepository repository;

    public ResponseEntity salvar(@RequestBody ClienteFormRequest resquest){
        Cliente cliente = resquest.toModel();
        repository.save(cliente);
        return ResponseEntity.ok(ClienteFormRequest.formModel(cliente));
    }

    @PutMapping("{id}")
    public ResponseEntity<Void> atualizar(@PathVariable Long id, @RequestBody ClienteFormRequest resquest){
        Optional<Cliente> clienteExistente = repository.findById(id);

        if(clienteExistente.isEmpty()){
            return ResponseEntity.notFound().build();
        }
        Cliente cliente = resquest.toModel();
        cliente.setId(id);
        repository.save(cliente);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("{id}")
    public ResponseEntity<ClienteFormRequest> getById(@PathVariable Long id) {
       return repository.findById(id)
               .map(ClienteFormRequest::formModel)
               .map(clienteFR -> ResponseEntity.ok(clienteFR))
               .orElseGet( () -> ResponseEntity.notFound().build());
    }

    @DeleteMapping("{id}")
    public ResponseEntity<Object> delete(@PathVariable Long id) {
        return repository.findById(id)
                .map(cliente -> {
                    repository.delete(cliente);
                    return ResponseEntity.noContent().build();
                })
                .orElseGet( () -> ResponseEntity.notFound().build());
    }

    @GetMapping
    public List<ClienteFormRequest> getLista(){
        return repository.findAll()
                .stream()
                .map( ClienteFormRequest::formModel )
                .collect(Collectors.toList());
    }
}
