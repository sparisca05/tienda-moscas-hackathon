package com.example.tiendamoscas.entity;

import lombok.*;
import jakarta.persistence.*;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "ordenes")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idOrden;

    @Column(name = "fecha_orden", nullable = false)
    private LocalDateTime fechaOrden = LocalDateTime.now();

    @Column(nullable = false)
    private BigDecimal total;

    @OneToMany(mappedBy = "orden", cascade = CascadeType.ALL)
    private List<OrderDetail> detalles;

    public enum EstadoOrden {
        PENDIENTE,
        COMPLETADA,
        CANCELADA
    }
}
