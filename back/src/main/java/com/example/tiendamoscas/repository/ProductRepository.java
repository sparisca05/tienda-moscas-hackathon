package com.example.tiendamoscas.repository;

import com.example.tiendamoscas.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {
    public Product findByNombre(String name);
}
