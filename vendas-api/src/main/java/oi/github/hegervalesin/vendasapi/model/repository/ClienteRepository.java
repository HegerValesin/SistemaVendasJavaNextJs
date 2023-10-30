package oi.github.hegervalesin.vendasapi.model.repository;

import oi.github.hegervalesin.vendasapi.model.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClienteRepository extends JpaRepository<Cliente, Long> {
}
