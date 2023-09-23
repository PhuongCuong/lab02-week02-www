package fit.iuh.edu.vn.lab02week02.modal;

import jakarta.persistence.*;

import java.util.Objects;

@Entity
@Table(name = "orderdetails")
public class OrderDetail {
    @Id
    @ManyToOne
    @JoinColumn(name = "order_id",referencedColumnName = "order_id",nullable = false)
    private Order orderId;

    @Id
    @ManyToOne
    @JoinColumn(name = "product_id",referencedColumnName = "product_id",nullable = false)

    private Product productId;


    private String node;
    private double price;
    private double quantity;

    public OrderDetail(Order orderId, Product productId, String node, double price, double quantity) {
        this.orderId = orderId;
        this.productId = productId;
        this.node = node;
        this.price = price;
        this.quantity = quantity;
    }

    public OrderDetail() {
    }

    public Order getOrderId() {
        return orderId;
    }

    public void setOrderId(Order orderId) {
        this.orderId = orderId;
    }

    public Product getProductId() {
        return productId;
    }

    public void setProductId(Product productId) {
        this.productId = productId;
    }

    public String getNode() {
        return node;
    }

    public void setNode(String node) {
        this.node = node;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public double getQuantity() {
        return quantity;
    }

    public void setQuantity(double quantity) {
        this.quantity = quantity;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof OrderDetail)) return false;
        OrderDetail that = (OrderDetail) o;
        return getOrderId() == that.getOrderId() && getProductId() == that.getProductId();
    }

    @Override
    public int hashCode() {
        return Objects.hash(getOrderId(), getProductId());
    }

    @Override
    public String toString() {
        return "OrderDetail{" +
                "orderId=" + orderId +
                ", productId=" + productId +
                ", node='" + node + '\'' +
                ", price=" + price +
                ", quantity=" + quantity +
                '}';
    }
}
