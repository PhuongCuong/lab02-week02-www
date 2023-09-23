package fit.iuh.edu.vn.lab02week02.modal;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;

@Entity
@Table(name = "productimgaes")
public class ProductImage {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "image_id",nullable = false)
    private int id;
    private String alternative;
    private String path;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "product_id",referencedColumnName = "product_id",nullable = false)
    @JsonBackReference
    private Product product;

    public ProductImage(int id, String alternative, String path, Product product) {
        this.id = id;
        this.alternative = alternative;
        this.path = path;
        this.product = product;
    }

    public ProductImage() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getAlternative() {
        return alternative;
    }

    public void setAlternative(String alternative) {
        this.alternative = alternative;
    }

    public String getPath() {
        return path;
    }

    public void setPath(String path) {
        this.path = path;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    @Override
    public String toString() {
        return "ProductImage{" +
                "id=" + id +
                ", alternative='" + alternative + '\'' +
                ", path='" + path + '\'' +
                '}';
    }
}
