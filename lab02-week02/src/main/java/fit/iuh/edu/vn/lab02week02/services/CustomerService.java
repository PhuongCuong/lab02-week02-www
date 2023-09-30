package fit.iuh.edu.vn.lab02week02.services;

import fit.iuh.edu.vn.lab02week02.modal.Customer;
import fit.iuh.edu.vn.lab02week02.modal.Employee;
import fit.iuh.edu.vn.lab02week02.respositories.CustomerResponsitory;

import java.util.List;
import java.util.Optional;

public class CustomerService {
    private CustomerResponsitory responsitory;

    public CustomerService() {
        responsitory = new CustomerResponsitory();
    }

    public boolean insertCus(Customer customer){
        return responsitory.insertCus(customer);
    }

    public boolean updateCus(Customer customer){
        return responsitory.updateCus(customer);
    }

    public Optional<Customer> findCusbyId(int id){
        return responsitory.findCusbyid(id);
    }

    public List<Customer> getAllCus(){
        return responsitory.getAllCus();
    }
}
