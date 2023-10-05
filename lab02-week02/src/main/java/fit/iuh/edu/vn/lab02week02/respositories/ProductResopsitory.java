package fit.iuh.edu.vn.lab02week02.respositories;

import fit.iuh.edu.vn.lab02week02.enums.EmployeeStatus;
import fit.iuh.edu.vn.lab02week02.enums.ProductStatus;
import fit.iuh.edu.vn.lab02week02.modal.Employee;
import fit.iuh.edu.vn.lab02week02.modal.Product;
import fit.iuh.edu.vn.lab02week02.modal.ProductImage;
import fit.iuh.edu.vn.lab02week02.modal.ProductPrice;
import jakarta.persistence.*;
import org.apache.log4j.Logger;
import org.apache.log4j.spi.LoggerFactory;

import java.util.List;
import java.util.Optional;

public class ProductResopsitory {

    private EntityManager entityManager;
    private EntityTransaction transaction;

    private final Logger logger = Logger.getLogger(LoggerFactory.class.getClass().getName());

    public ProductResopsitory() {
        entityManager = Persistence.createEntityManagerFactory("week02")
                .createEntityManager();
        transaction = entityManager.getTransaction();
    }

    public List<Product> getAllProduct(){
        return  entityManager.createNamedQuery("Product.findAll",Product.class).getResultList();
    }

    public List<Product> getAllproductbystatus(){
        entityManager.clear();
        Query query = entityManager.createNamedQuery("product.findAllbystatus", Product.class);
        query.setParameter("status1", ProductStatus.ACCTIVE);
        query.setParameter("status2", ProductStatus.DEACCTIVE);
        List<Product> list = query.getResultList();
        return list;
    }

    public Optional<Product> findproductbyId(int id){
        Product product = entityManager.createNamedQuery("product.findbyId",Product.class)
                .setParameter("id",id).getSingleResult();
        return product == null ? Optional.empty() : Optional.of(product);
    }

    public void setStatus(Product product, ProductStatus status){
        product.setStatus(status);
    }

    public boolean insertProduct(Product product){
        try {
            transaction.begin();
            entityManager.persist(product);
            transaction.commit();
            return true;
        }catch (Exception ex){
            transaction.rollback();
            logger.error(ex.getMessage());
        }
        return false;
    }

    public boolean updateProduct(Product product){
        try {
            transaction.begin();
            entityManager.merge(product);
            transaction.commit();
            return true;
        }catch (Exception ex){
            transaction.rollback();
            logger.error(ex.getMessage());
        }
        return false;
    }

    public boolean insertProductPrice(ProductPrice price){
        try {
            transaction.begin();
            entityManager.persist(price);
            transaction.commit();
            return true;
        }catch (Exception ex){
            transaction.rollback();
            logger.error(ex.getMessage());
        }
        return false;
    }

    public boolean insertProductImg(ProductImage productImage){
        try {
            transaction.begin();
            entityManager.persist(productImage);
            transaction.commit();
            return true;
        }catch (Exception ex){
            transaction.rollback();
            logger.error(ex.getMessage());
        }
        return false;
    }

//    public boolean updateProductprice(Product product, ProductPrice ProductPrice){
//        try {
//            transaction.begin();
//            entityManager.merge(product);
//            entityManager.persist(ProductPrice);
//            transaction.commit();
//            return true;
//        }catch (Exception ex){
//            transaction.rollback();
//            logger.error(ex.getMessage());
//        }
//        return false;
//    }
}
