package fit.iuh.edu.vn.lab02week02.respositories;

import fit.iuh.edu.vn.lab02week02.modal.Customer;
import fit.iuh.edu.vn.lab02week02.modal.Employee;
import jakarta.persistence.EntityManager;
import jakarta.persistence.EntityTransaction;
import jakarta.persistence.Persistence;
import org.apache.log4j.Logger;
import org.apache.log4j.spi.LoggerFactory;

import java.util.List;
import java.util.Optional;

public class CustomerResponsitory {
    private EntityManager entityManager;
    private EntityTransaction transaction;

    private final Logger logger = Logger.getLogger(LoggerFactory.class.getClass().getName());

    public CustomerResponsitory() {
        entityManager = Persistence.createEntityManagerFactory("week02")
                .createEntityManager();
        transaction = entityManager.getTransaction();
    }

    public boolean insertCus(Customer customer){
        try {
            transaction.begin();
            entityManager.persist(customer);
            transaction.commit();
            return true;
        }catch (Exception ex){
            transaction.rollback();
            logger.error(ex.getMessage());
        }
        return false;
    }

    public Boolean updateCus(Customer customer){
        try {
            transaction.begin();
            entityManager.merge(customer);
            transaction.commit();
            return true;
        }catch (Exception ex){
            transaction.rollback();
            logger.error(ex.getMessage());
        }
        return false;
    }

    public Optional<Customer> findCusbyid(int id){
        Customer customer = entityManager.createNamedQuery("getAll-cus-by-id",Customer.class)
                .setParameter("id",id).getSingleResult();
        return customer == null ? Optional.empty() : Optional.of(customer);
    }

    public List<Customer> getAllCus(){
        return entityManager.createNamedQuery("getAll-cus",Customer.class).getResultList();
    }
}
