package com.example.tiendamoscas.service;

import com.example.tiendamoscas.entity.Product;
import com.example.tiendamoscas.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProductService {

    @Autowired
    private final ProductRepository productRepository;

    public void saveProduct(Product product){
        productRepository.save(product);
    }

    public Product getProductById(Long productId){
        return productRepository.findById(productId)
                .orElseThrow(() -> new RuntimeException("Producto no encontrado"));
    }

    public Product getProductByName(String productName){
        return productRepository.findByNombre(productName);
    }

    public Product updateProductById(Product request, Long productId){
        Product product = productRepository.findById(productId).get();

        product.setNombre(request.getNombre());
        product.setPrecio(request.getPrecio());
        saveProduct(product);

        return product;
    }

    public String deleteProduct(Long productId) {
        try {
            productRepository.deleteById(productId);
            return "Producto eliminado";
        } catch (Exception e) {
            return "Error al eliminar producto";
        }
    }

}
