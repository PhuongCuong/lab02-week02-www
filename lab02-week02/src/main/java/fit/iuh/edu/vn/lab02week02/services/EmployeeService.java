package fit.iuh.edu.vn.lab02week02.services;

import fit.iuh.edu.vn.lab02week02.enums.EmployeeStatus;
import fit.iuh.edu.vn.lab02week02.modal.Employee;
import fit.iuh.edu.vn.lab02week02.respositories.EmployeeRespository;

import java.util.List;
import java.util.Optional;

public class EmployeeService {
    private EmployeeRespository respository;

    public EmployeeService() {
        respository = new EmployeeRespository();
    }

    public boolean insertEmp(Employee employee){
        return respository.insertEmp(employee);
    }

    public boolean updateEmp(Employee employee){
        return respository.updateEmp(employee);
    }

    public Optional<Employee> findEmpbyId(int id){
        return respository.findEmpbyId(id);
    }

    public boolean deleteEmp(int id){
        Optional<Employee> op = findEmpbyId(id);
        if(op.isPresent()){
            Employee employee = op.get();
            employee.setStatus(EmployeeStatus.TERMINATED);
            updateEmp(employee);
            return true;
        }
        return false;
    }

    public boolean ActiveEmp(int id){
        Optional<Employee> op = findEmpbyId(id);
        if(op.isPresent()){
            Employee employee = op.get();
            employee.setStatus(EmployeeStatus.ACCTIVE);
            return true;
        }
        return false;
    }

    public boolean DeactiveEmp(int id){
        Optional<Employee> op = findEmpbyId(id);
        if(op.isPresent()){
            Employee employee = op.get();
            employee.setStatus(EmployeeStatus.DEACCTIVE);
            return true;
        }
        return false;
    }

    public List<Employee> getAllEmp(){
        return respository.getAllEmp();
    }

    public List<Employee> getAllemplbystatus(){
        return respository.getAllemplbystatus();
    }
}
