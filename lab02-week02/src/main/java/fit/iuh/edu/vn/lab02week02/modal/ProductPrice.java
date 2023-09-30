package fit.iuh.edu.vn.lab02week02.modal;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;

import java.sql.Timestamp;
import java.util.Objects;

@Entity
@Table(name = "productprices")
@Cacheable(value = false)
public class ProductPrice {
    @Id
    @Column(name = "price_date_time",nullable = false,columnDefinition = "Timestamp")
    private Timestamp priceDateTime;
    @Column(name = "price")
    private double price;
    private String node;
    @Id
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "product_id",referencedColumnName = "product_id",nullable = false)
    @JsonBackReference
    private Product productid;

    public ProductPrice() {
    }

    public ProductPrice(Timestamp priceDateTime, double price, String node, Product productid) {
        this.priceDateTime = priceDateTime;
        this.price = price;
        this.node = node;
        this.productid = productid;
    }

    public Timestamp getPriceDateTime() {
        return priceDateTime;
    }

    public void setPriceDateTime(Timestamp priceDateTime) {
        this.priceDateTime = priceDateTime;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getNode() {
        return node;
    }

    public void setNode(String node) {
        this.node = node;
    }

    public Product getProductid() {
        return productid;
    }

    public void setProductid(Product productid) {
        this.productid = productid;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof ProductPrice)) return false;
        ProductPrice that = (ProductPrice) o;
        return Objects.equals(getPriceDateTime(), that.getPriceDateTime()) && Objects.equals(getProductid(), that.getProductid());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getPriceDateTime(), getProductid());
    }

    @Override
    public String toString() {
        return "ProductPrice{" +
                "priceDateTime=" + priceDateTime +
                ", price=" + price +
                ", node='" + node + '\'' +
                '}';
    }
}
