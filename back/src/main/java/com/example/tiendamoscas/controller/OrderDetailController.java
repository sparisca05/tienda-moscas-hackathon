package com.example.tiendamoscas.controller;

import com.example.tiendamoscas.entity.OrderDetail;
import com.example.tiendamoscas.service.OrderDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("orden")
public class OrderDetailController {

    @Autowired
    private OrderDetailService orderDetailService;

    // Get order info
    @GetMapping("{orderId}")
    public OrderDetail getOrderInfo(@PathVariable Long orderId) {
        return orderDetailService.getOrderDetailById(orderId);
    }

    // Create order
    @PostMapping
    public OrderDetail createOrder(@RequestBody OrderDetail order) {
        return orderDetailService.saveOrderDetail(order);
    }

}
