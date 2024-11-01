package com.example.tiendamoscas.service;

import com.example.tiendamoscas.entity.Inventory;
import com.example.tiendamoscas.repository.InventoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class InventoryService {

    @Autowired
    private final InventoryRepository inventoryRepository;
    private final ProductService productService;

    public void saveInventory(Inventory inventory){
        inventoryRepository.save(inventory);
    }

    public Inventory createProduct(Inventory inventory){
        productService.saveProduct(inventory.getProduct());
        return inventoryRepository.save(inventory);
    }

    public List<Inventory> getAllInventory(){
        return inventoryRepository.findAll();
    }

    public Inventory getProductInventoryById(Long productId) {
        return inventoryRepository.findByProductId(productId)
                .orElseThrow(() -> new RuntimeException("Producto no encontrado"));
    }

    public Inventory updateInventoryById(Long productId, Integer cantidad) {
        Inventory inventory = getProductInventoryById(productId);

        inventory.setCantidad(inventory.getCantidad() + cantidad);
        inventory.setUltimaActualizacion(LocalDateTime.now());
        saveInventory(inventory);

        return inventory;
    }

    public String deleteInventory(Long productId) {
        try {
            inventoryRepository.deleteById(getProductInventoryById(productId).getId());
            productService.deleteProduct(productId);
            return "Inventario eliminado";
        } catch (Exception e) {
            return "Error al eliminar inventario";
        }
    }
}
