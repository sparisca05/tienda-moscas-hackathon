package com.example.tiendamoscas.controller;

import com.example.tiendamoscas.entity.Inventory;
import com.example.tiendamoscas.service.InventoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("inventario")
public class InventoryController {

    @Autowired
    private InventoryService inventoryService;

    // Get full inventory
    @GetMapping
    public List<Inventory> getFullInventory() {
        return inventoryService.getAllInventory();
    }

    // Create new product
    @PostMapping
    public Inventory createProduct(@RequestBody Inventory inventory) {
        return inventoryService.createProduct(inventory);
    }

    // Get product inventory
    @GetMapping("{productId}")
    public ResponseEntity<Inventory> getProductInventory(@PathVariable Long productId) {
        return ResponseEntity.ok(inventoryService.getProductInventoryById(productId));
    }

    // Update product inventory
    @PutMapping("{productId}")
    public ResponseEntity<Inventory> updateProductInventory(@PathVariable Long productId, Integer cantidad) {
        return ResponseEntity.ok(inventoryService.updateInventoryById(productId, cantidad));
    }

}
