package com.example.tiendamoscas.repository;

import com.example.tiendamoscas.entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order, Long> {
}
