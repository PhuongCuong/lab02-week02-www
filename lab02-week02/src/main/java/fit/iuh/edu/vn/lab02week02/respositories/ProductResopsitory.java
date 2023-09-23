package fit.iuh.edu.vn.lab02week02.respositories;

import fit.iuh.edu.vn.lab02week02.modal.Product;
import jakarta.persistence.EntityManager;
import jakarta.persistence.EntityTransaction;
import jakarta.persistence.Persistence;
import jakarta.persistence.TypedQuery;
import org.apache.log4j.Logger;
import org.apache.log4j.spi.LoggerFactory;

import java.util.List;

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
}
