package fit.iuh.edu.vn.lab02week02.modal;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import fit.iuh.edu.vn.lab02week02.enums.ProductStatus;
import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "products")
@NamedQueries({
        @NamedQuery(name = "product.findAlls",query = "select p from Product p"),
        @NamedQuery(name = "Product.findAll",query = "SELECT DISTINCT p FROM Product p JOIN FETCH p.price"),
        @NamedQuery(
                name = "product.findAllbystatus",
                query = "select p from Product p where p.status = :status1 or p.status = :status2"
        ),
        @NamedQuery(name = "product.findbyId",query = "select p from Product p where p.id = :id")
})
@Cacheable(value = false)
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "product_id",nullable = false)
    private int id;
    private String name;
    private String description;
    private String unit;
    @Column(name = "manufacturer_name")
    private String manufacturerName;
    private ProductStatus status;

    @OneToMany(mappedBy = "productid",fetch = FetchType.LAZY)
    @JsonManagedReference
    private List<ProductPrice> price;

    @OneToMany(mappedBy = "product",fetch = FetchType.LAZY)
    @JsonManagedReference
    private List<ProductImage> image;

    @OneToMany(mappedBy = "productId",fetch = FetchType.LAZY)
    @JsonManagedReference
    private List<OrderDetail> orderDetail;

    public Product(int id, String name, String description, String unit, String manufacturerName, ProductStatus status, List<ProductPrice> price, List<ProductImage> image, List<OrderDetail> orderDetail) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.unit = unit;
        this.manufacturerName = manufacturerName;
        this.status = status;
        this.price = price;
        this.image = image;
        this.orderDetail = orderDetail;
    }

    public Product(String name, String description, String unit, String manufacturerName, ProductStatus status) {
        this.name = name;
        this.description = description;
        this.unit = unit;
        this.manufacturerName = manufacturerName;
        this.status = status;
    }

    public Product() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getUnit() {
        return unit;
    }

    public void setUnit(String unit) {
        this.unit = unit;
    }

    public String getManufacturerName() {
        return manufacturerName;
    }

    public void setManufacturerName(String manufacturerName) {
        this.manufacturerName = manufacturerName;
    }

    public ProductStatus getStatus() {
        return status;
    }

    public void setStatus(ProductStatus status) {
        this.status = status;
    }

    public List<ProductPrice> getPrice() {
        return price;
    }

    public void setPrice(List<ProductPrice> price) {
        this.price = price;
    }

    public List<ProductImage> getImage() {
        return image;
    }

    public void setImage(List<ProductImage> image) {
        this.image = image;
    }

    public List<OrderDetail> getOrderDetail() {
        return orderDetail;
    }

    public void setOrderDetail(List<OrderDetail> orderDetail) {
        this.orderDetail = orderDetail;
    }

    @Override
    public String toString() {
        return "Product{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", description='" + description + '\'' +
                ", unit='" + unit + '\'' +
                ", manufacturerName='" + manufacturerName + '\'' +
                ", status=" + status +
                ", price=" + price +
                ", image=" + image +
                ", orderDetail=" + orderDetail +
                '}';
    }
}
