package fit.iuh.edu.vn.lab02week02.modal;

import jakarta.persistence.*;

import java.sql.Timestamp;
import java.util.List;

@Entity
@Table(name = "orders")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "order_id" , nullable = false)
    private int id;
    @Column(name = "order_date")
    private Timestamp orderDate;
    @ManyToOne
    @JoinColumn(name ="emp_id",referencedColumnName = "emp_id",nullable = false)
    private Employee employee;

    @ManyToOne
    @JoinColumn(name = "cust_id",referencedColumnName = "cust_id",nullable = false)
    private Customer customer;

    @OneToMany(mappedBy = "orderId")
    private List<OrderDetail> orderDetail;

    public Order(int id, Timestamp orderDate, Employee employee, Customer customer) {
        this.id = id;
        this.orderDate = orderDate;
        this.employee = employee;
        this.customer = customer;
    }

    public Order() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Timestamp getOrderDate() {
        return orderDate;
    }

    public void setOrderDate(Timestamp orderDate) {
        this.orderDate = orderDate;
    }

    public Employee getEmployee() {
        return employee;
    }

    public void setEmployee(Employee employee) {
        this.employee = employee;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    @Override
    public String toString() {
        return "Order{" +
                "id=" + id +
                ", orderDate=" + orderDate +
                ", employee=" + employee +
                ", customer=" + customer +
                '}';
    }
}
