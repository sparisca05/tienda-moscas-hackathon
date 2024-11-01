package com.example.tiendamoscas.service;

import com.example.tiendamoscas.entity.OrderDetail;
import com.example.tiendamoscas.repository.OrderDetailRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class OrderDetailService {

    @Autowired
    private final OrderDetailRepository orderDetailRepository;

    public OrderDetail saveOrderDetail(OrderDetail request){
        OrderDetail orderDetail = new OrderDetail();
        orderDetail.setId(request.getId());
        orderDetail.setProductos(request.getProductos());
        orderDetail.setTotal(request.getTotal());
        orderDetailRepository.save(orderDetail);
        return orderDetail;
    }

    public OrderDetail getOrderDetailById(Long orderDetailId){
        return orderDetailRepository.findById(orderDetailId)
                .orElseThrow(() -> new RuntimeException("Detalle de orden no encontrado"));
    }

}
