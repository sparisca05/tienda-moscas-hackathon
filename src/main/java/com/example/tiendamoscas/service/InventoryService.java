package com.example.tiendamoscas.service;

import com.example.tiendamoscas.entity.Inventory;
import com.example.tiendamoscas.repository.InventoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
public class InventoryService {

    @Autowired
    private final InventoryRepository inventoryRepository;

    public Inventory saveInventory(Inventory inventory){
        return inventoryRepository.save(inventory);
    }

    public Inventory getInventoryById(Long inventoryId) {
        return inventoryRepository.findById(inventoryId)
                .orElseThrow(() -> new RuntimeException("Inventario no encontrado"));
    }

    public Inventory updateInventoryById(Inventory request, Long inventoryId) {
        Inventory inventory = inventoryRepository.findById(inventoryId).get();

        inventory.setProduct(request.getProduct());
        inventory.setCantidad(request.getCantidad());
        inventory.setUltimaActualizacion(LocalDateTime.now());
        saveInventory(inventory);

        return inventory;
    }

    public String deleteInventory(Long inventoryId) {
        try {
            inventoryRepository.deleteById(inventoryId);
            return "Inventario eliminado";
        } catch (Exception e) {
            return "Error al eliminar inventario";
        }
    }
}
