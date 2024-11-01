package com.example.tiendamoscas.controller;

import com.example.tiendamoscas.entity.Product;
import com.example.tiendamoscas.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("producto")
public class ProductController {

    @Autowired
    private ProductService productService;

    // Get product info by id
    @GetMapping("{productId}")
    public Product getProductInfo(@PathVariable Long productId) {
        return productService.getProductById(productId);
    }

    // Get product info by name
    @GetMapping("nombre/{productName}")
    public Product getProductInfoByName(@PathVariable String productName) {
        return productService.getProductByName(productName);
    }

    // Create product is not needed in this case, it's used in the InventoryController

    // Update product info
    @PutMapping("{productId}")
    public Product updateProduct(@RequestBody Product product, @PathVariable Long productId) {
        return productService.updateProductById(product, productId);
    }

    // Delete product is not needed in this case, it's used in the InventoryController
}
