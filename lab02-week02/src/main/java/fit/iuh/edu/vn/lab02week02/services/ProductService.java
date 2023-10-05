package fit.iuh.edu.vn.lab02week02.services;

import fit.iuh.edu.vn.lab02week02.enums.EmployeeStatus;
import fit.iuh.edu.vn.lab02week02.enums.ProductStatus;
import fit.iuh.edu.vn.lab02week02.modal.Employee;
import fit.iuh.edu.vn.lab02week02.modal.Product;
import fit.iuh.edu.vn.lab02week02.modal.ProductImage;
import fit.iuh.edu.vn.lab02week02.modal.ProductPrice;
import fit.iuh.edu.vn.lab02week02.respositories.ProductResopsitory;

import java.sql.Timestamp;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;

public class ProductService {
    private ProductResopsitory productResopsitory;

    public ProductService() {
        productResopsitory = new ProductResopsitory();
    }

    public List<Product> getAllProduct(){
        return productResopsitory.getAllProduct();
    }

    public void updateProductbyprice(Product product) {

        productResopsitory.updateProduct(product);

    }


    public List<Product> getAllproductbystatus() {

        List<Product> dsproduct = productResopsitory.getAllproductbystatus();
        for (Product product : dsproduct) {
            List<ProductPrice> prices = product.getPrice();
            if (!prices.isEmpty()) {
                Timestamp maxPriceDateTime = prices.stream()
                        .max(Comparator.comparing(ProductPrice::getPriceDateTime))
                        .map(ProductPrice::getPriceDateTime)
                        .orElse(null);

                prices.removeIf(productPrice -> !productPrice.getPriceDateTime().equals(maxPriceDateTime));
            }
        }
        return dsproduct;
    }

    public Optional<Product> findproductbyId(int id){
        return productResopsitory.findproductbyId(id);
    }

    public boolean deleteProduct(int id){
        Optional<Product> op = findproductbyId(id);
        if(op.isPresent()){
            Product product = op.get();
            product.setStatus(ProductStatus.TERMINATED);
            productResopsitory.updateProduct(product);
            return true;
        }
        return false;
    }

    public boolean updateProduct(Product product){
        return productResopsitory.updateProduct(product);
    }

    public boolean insertProductPrice(ProductPrice price){
       return productResopsitory.insertProductPrice(price);
    }

    public boolean updateProductprice(Product product,ProductPrice price){
        Optional<Product> op = findproductbyId(product.getId());
        if(op.isPresent()){
            productResopsitory.updateProduct(product);
            productResopsitory.insertProductPrice(price);
            return true;
        }
        return false;
    }


    public boolean insertProduct(Product product){
        return productResopsitory.insertProduct(product);
    }

    public boolean insertProductPrice(Product product, ProductPrice price, ProductImage productImage){
        if(productResopsitory.insertProduct(product) && productResopsitory.insertProductPrice(price) && productResopsitory.insertProductImg(productImage)){
            return true;
        }
        return false;
    }

    public boolean insertProductImg(ProductImage productImage){
        return productResopsitory.insertProductImg(productImage);
    }
}
