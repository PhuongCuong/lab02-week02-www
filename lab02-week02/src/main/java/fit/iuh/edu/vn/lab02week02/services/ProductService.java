package fit.iuh.edu.vn.lab02week02.services;

import fit.iuh.edu.vn.lab02week02.modal.Product;
import fit.iuh.edu.vn.lab02week02.respositories.ProductResopsitory;

import java.util.List;

public class ProductService {
    private ProductResopsitory productResopsitory;

    public ProductService() {
        productResopsitory = new ProductResopsitory();
    }

    public List<Product> getAllProduct(){
        return productResopsitory.getAllProduct();
    }
}
