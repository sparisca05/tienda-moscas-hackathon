package com.example.tiendamoscas.repository;

import com.example.tiendamoscas.entity.OrderDetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface OrderDetailRepository extends JpaRepository<OrderDetail, Long> {

    @Query(value = "SELECT COUNT(t.producto_id) as cantidad FROM producto_orden t WHERE t.orden_id = :id_orden AND t.producto_id = :id_producto", nativeQuery = true)
    int cantProductoEnOrden(@Param("id_orden") Long idOrden, @Param("id_producto") Long idProducto);
}
