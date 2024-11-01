package com.example.tiendamoscas.service;
import com.example.tiendamoscas.entity.OrderDetail;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import weka.classifiers.functions.LinearRegression;
import weka.core.Attribute;
import weka.core.DenseInstance;
import weka.core.Instances;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class PrediccionService {/*

    private final OrderDetailService orderDataService;

    public Map<Integer, List<Map<String, Double>>> predecirRangoDeStockPorProducto() {
        // Llamar al método getAllOrderDetail para obtener todos los detalles de las órdenes
        List<OrderDetail> orderDetails = orderDataService.getAllOrderDetails();

        // Agrupar las ventas por id_producto y fecha
        Map<Integer, Map<LocalDate, Double>> salesData = new HashMap<>();

        for (OrderDetail orderDetail : orderDetails) {
            LocalDateTime fecha = orderDetail.getFecha();  // Fecha de la orden

            // Contar la cantidad de cada producto en el vector de productos
            Map<Integer, Integer> productCount = new HashMap<>();
            for (Integer productoId : orderDetail.getProductos()) {
                productCount.put(productoId, productCount.getOrDefault(productoId, 0) + 1);
            }

            // Agregar las cantidades al mapa salesData
            for (Map.Entry<Integer, Integer> entry : productCount.entrySet()) {
                int productoId = entry.getKey();
                double cantidad = entry.getValue();

                // Inicializar el mapa de fechas para el producto si no existe
                salesData.computeIfAbsent(productoId, k -> new HashMap<>())
                        .merge(fecha, cantidad, Double::sum);
            }
        }

        // Realizar la predicción y calcular los intervalos de stock usando Weka
        return calcularRangoDeStockPorProducto(salesData);
    }

    // Método para realizar la predicción y calcular el rango de stock para cada producto
    private Map<Integer, List<Map<String, Double>>> calcularRangoDeStockPorProducto(Map<Integer, Map<LocalDate, Double>> salesData) {
        Map<Integer, List<Map<String, Double>>> predicciones = new HashMap<>();
        LocalDate fechaInicial = LocalDate.now().plusDays(1);

        for (Map.Entry<Integer, Map<LocalDate, Double>> entry : salesData.entrySet()) {
            int productoId = entry.getKey();
            Map<LocalDate, Double> ventasPorFecha = entry.getValue();

            // Preparar datos para Weka
            ArrayList<Attribute> atributos = new ArrayList<>();
            atributos.add(new Attribute("day"));
            atributos.add(new Attribute("cantidad"));

            Instances dataset = new Instances("VentasProducto", atributos, ventasPorFecha.size());
            dataset.setClassIndex(1);

            int dayIndex = 1;
            for (Map.Entry<LocalDate, Double> venta : ventasPorFecha.entrySet()) {
                DenseInstance instancia = new DenseInstance(2);
                instancia.setValue(atributos.get(0), dayIndex++);
                instancia.setValue(atributos.get(1), venta.getValue());
                dataset.add(instancia);
            }

            // Entrenar el modelo de regresión lineal
            LinearRegression modelo = new LinearRegression();
            try {
                modelo.buildClassifier(dataset);
            } catch (Exception e) {
                e.printStackTrace();
                continue;
            }

            // Calcular la media y desviación estándar de las ventas históricas
            double media = ventasPorFecha.values().stream().mapToDouble(Double::doubleValue).average().orElse(0.0);
            double desviacionEstandar = calcularDesviacionEstandar(ventasPorFecha.values(), media);

            // Generar predicciones para los próximos 7 días con intervalos de stock
            List<Map<String, Double>> prediccionesProducto = new ArrayList<>();
            for (int i = 0; i < 7; i++) {
                DenseInstance diaFuturo = new DenseInstance(2);
                diaFuturo.setValue(atributos.get(0), ventasPorFecha.size() + i + 1);
                diaFuturo.setDataset(dataset);

                double prediccion = 0;
                try {
                    prediccion = modelo.classifyInstance(diaFuturo);
                } catch (Exception e) {
                    e.printStackTrace();
                }

                // Calcular el intervalo de stock
                double stockMinimo = Math.max(0, prediccion - desviacionEstandar); // Mínimo recomendado
                double stockMaximo = prediccion + desviacionEstandar; // Máximo recomendado

                Map<String, Double> rangoStock = new HashMap<>();
                rangoStock.put("minimo", stockMinimo);
                rangoStock.put("maximo", stockMaximo);
                prediccionesProducto.add(rangoStock);
            }

            predicciones.put(productoId, prediccionesProducto);
        }

        return predicciones;
    }

    // Método auxiliar para calcular la desviación estándar
    private double calcularDesviacionEstandar(Iterable<Double> valores, double media) {
        double sumaCuadrados = 0;
        int count = 0;
        for (double valor : valores) {
            sumaCuadrados += Math.pow(valor - media, 2);
            count++;
        }
        return count > 1 ? Math.sqrt(sumaCuadrados / (count - 1)) : 0;
    }

*/}
