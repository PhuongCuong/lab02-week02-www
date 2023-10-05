package fit.iuh.edu.vn.lab02week02.respositories;

import fit.iuh.edu.vn.lab02week02.modal.Order;
import fit.iuh.edu.vn.lab02week02.modal.OrderDetail;
import jakarta.persistence.EntityManager;
import jakarta.persistence.EntityTransaction;
import jakarta.persistence.Persistence;
import org.apache.log4j.Logger;
import org.apache.log4j.spi.LoggerFactory;

public class OrderResponsitory {

    private EntityManager entityManager;
    private EntityTransaction transaction;

    private final Logger logger = Logger.getLogger(LoggerFactory.class.getClass().getName());

    public OrderResponsitory() {
        entityManager = Persistence.createEntityManagerFactory("week02")
                .createEntityManager();
        transaction = entityManager.getTransaction();
    }

    public boolean insertOrder(Order order){
        try {
            transaction.begin();
            entityManager.persist(order);
            transaction.commit();
            return true;
        }catch (Exception ex){
            transaction.rollback();
            logger.error(ex.getMessage());
        }
        return false;
    }

    public boolean updateOrder(Order order){
        try {
            transaction.begin();
            entityManager.merge(order);
            transaction.commit();
            return true;
        }catch (Exception ex){
            transaction.rollback();
            logger.error(ex.getMessage());
        }
        return false;
    }


    public boolean insertOrderdetail(OrderDetail orderDetail){
        try {
            transaction.begin();
            entityManager.persist(orderDetail);
            transaction.commit();
            return true;
        }catch (Exception ex){
            transaction.rollback();
            logger.error(ex.getMessage());
        }
        return false;
    }

    public boolean updateOrderdetail(OrderDetail orderDetail){
        try {
            transaction.begin();
            entityManager.merge(orderDetail);
            transaction.commit();
            return true;
        }catch (Exception ex){
            transaction.rollback();
            logger.error(ex.getMessage());
        }
        return false;
    }
}
