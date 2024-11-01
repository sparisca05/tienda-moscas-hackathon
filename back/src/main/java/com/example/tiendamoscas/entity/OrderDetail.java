package com.example.tiendamoscas.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "detalle_orden")
public class OrderDetail {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToMany()
    @JoinTable(
            name = "producto_orden",
            joinColumns = @JoinColumn(name = "orden_id"),
            inverseJoinColumns = @JoinColumn(name = "producto_id")
    )
    private List<Product> productos = new ArrayList<>();

    public double getTotal() {
        if (productos == null) {
            return 0;
        }
        return productos.stream()
                .mapToDouble(Product::getPrecio)
                .sum();
    }

    @Column(nullable = false)
    private double total = getTotal();

    @Column(nullable = false)
    private LocalDateTime fecha = LocalDateTime.now();
}
