package fit.iuh.edu.vn.lab02week02.modal;

import fit.iuh.edu.vn.lab02week02.enums.EmployeeStatus;
import jakarta.persistence.*;

import java.sql.Timestamp;
import java.util.List;

@Entity
@Table(name = "employees")
@NamedQueries({
        @NamedQuery(name = "Employee-findAll",query = "select e from Employee e"),
        @NamedQuery(name = "Employee-findbyId",query = "select e from Employee e where e.id = :id"),
        @NamedQuery(name = "Employee-findAllbystatus", query = "select e from Employee e where e.status = :status1 or e.status = :status2")
})
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "emp_id", nullable = false)
    private int id;
    @Column(name = "full_name",length = 150)
    private String fullName;
    @Column(name = "dob",columnDefinition = "Timestamp")
    private Timestamp dob;
    @Column(name = "email",length = 200)
    private String email;
    @Column(name = "phone",length = 150)
    private String phone;
    @Column(name = "address")
    private String address;
    @Column(name = "status")
    private EmployeeStatus status;

    @OneToMany(mappedBy = "employee")
    private List<Order> order;

    public Employee(int id, String fullName, Timestamp dob, String email, String phone, String address, EmployeeStatus status, List<Order> order) {
        this.id = id;
        this.fullName = fullName;
        this.dob = dob;
        this.email = email;
        this.phone = phone;
        this.address = address;
        this.status = status;
        this.order = order;
    }

    public Employee() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public Timestamp getDob() {
        return dob;
    }

    public void setDob(Timestamp dob) {
        this.dob = dob;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public EmployeeStatus getStatus() {
        return status;
    }

    public void setStatus(EmployeeStatus status) {
        this.status = status;
    }

    public List<Order> getOrder() {
        return order;
    }

    public void setOrder(List<Order> order) {
        this.order = order;
    }

    @Override
    public String toString() {
        return "Employee{" +
                "id=" + id +
                ", fullName='" + fullName + '\'' +
                ", dob=" + dob +
                ", email='" + email + '\'' +
                ", phone='" + phone + '\'' +
                ", address='" + address + '\'' +
                ", status=" + status +
                ", order=" + order +
                '}';
    }
}
