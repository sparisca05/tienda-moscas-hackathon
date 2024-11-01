package com.example.tiendamoscas.repository;

import com.example.tiendamoscas.entity.Inventory;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InventoryRepository extends JpaRepository<Inventory, Long> {
}
