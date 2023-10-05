package fit.iuh.edu.vn.lab02week02.services;

import fit.iuh.edu.vn.lab02week02.modal.Order;
import fit.iuh.edu.vn.lab02week02.modal.OrderDetail;
import fit.iuh.edu.vn.lab02week02.respositories.OrderResponsitory;

public class OrderService {
    private OrderResponsitory orderResponsitory;

    public OrderService() {
        orderResponsitory = new OrderResponsitory();
    }

    public boolean insertOrderandorderdetail(Order order, OrderDetail orderDetail){
        if(orderResponsitory.insertOrder(order) == true){
            if(orderResponsitory.insertOrderdetail(orderDetail) == true){
                return true;
            }
        }
        return false;
    }
}
