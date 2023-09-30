package fit.iuh.edu.vn.lab02week02.respositories;

import fit.iuh.edu.vn.lab02week02.enums.EmployeeStatus;
import fit.iuh.edu.vn.lab02week02.modal.Employee;
import jakarta.persistence.*;
import org.apache.log4j.Logger;
import org.apache.log4j.spi.LoggerFactory;

import java.util.List;
import java.util.Optional;

public class EmployeeRespository {
    private EntityManager entityManager;
    private EntityTransaction transaction;

    private final Logger logger = Logger.getLogger(LoggerFactory.class.getClass().getName());

    public EmployeeRespository() {
        entityManager = Persistence.createEntityManagerFactory("week02")
                .createEntityManager();
        transaction = entityManager.getTransaction();
    }

    public boolean insertEmp(Employee employee){
        try {
            transaction.begin();
            entityManager.persist(employee);
            transaction.commit();
            return true;
        }catch (Exception ex){
            transaction.rollback();
            logger.error(ex.getMessage());
        }
        return false;
    }

    public Boolean updateEmp(Employee employee){
        try {
            transaction.begin();
            entityManager.merge(employee);
            transaction.commit();
            return true;
        }catch (Exception ex){
            transaction.rollback();
            logger.error(ex.getMessage());
        }
        return false;
    }

    public void setStatus(Employee employee, EmployeeStatus status){
        employee.setStatus(status);
    }

    public Optional<Employee> findEmpbyId(int id){
        Employee employee = entityManager.createNamedQuery("Employee-findbyId",Employee.class)
                .setParameter("id",id).getSingleResult();
        return employee == null ? Optional.empty() : Optional.of(employee);
    }

    public Optional<Employee> findbyId(long id) {
        TypedQuery<Employee> query = entityManager.createQuery("select e from Employee e where e.id=:id", Employee.class);
        query.setParameter("id", id);
        Employee emp = query.getSingleResult();
        return emp == null ? Optional.empty() : Optional.of(emp);
    }


    public List<Employee> getAllEmp(){
        return entityManager.createNamedQuery("Employee-findAll",Employee.class).getResultList();
    }

    public List<Employee> getAllemplbystatus() {
        Query query = entityManager.createNamedQuery("Employee-findAllbystatus", Employee.class);
        query.setParameter("status1", EmployeeStatus.ACCTIVE);
        query.setParameter("status2", EmployeeStatus.DEACCTIVE);
        List<Employee> list = query.getResultList();
        return list;
    }


}
