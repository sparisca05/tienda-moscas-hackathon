package com.example.tiendamoscas.service;

import com.example.tiendamoscas.entity.Order;
import com.example.tiendamoscas.repository.OrderRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class OrderService {

    @Autowired
    private final OrderRepository orderRepository;

    public Order saveOrder(Order order){
        return orderRepository.save(order);
    }

    public Order getOrderById(Long orderId){
        return orderRepository.findById(orderId)
                .orElseThrow(() -> new RuntimeException("Orden no encontrada"));
    }

    public String deleteOrder(Long orderId) {
        try {
            orderRepository.deleteById(orderId);
            return "Orden eliminada";
        } catch (Exception e) {
            return "Error al eliminar orden";
        }
    }

}
