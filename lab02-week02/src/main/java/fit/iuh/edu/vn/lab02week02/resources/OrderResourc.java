package fit.iuh.edu.vn.lab02week02.resources;

import fit.iuh.edu.vn.lab02week02.modal.Order;
import fit.iuh.edu.vn.lab02week02.modal.OrderDetail;
import fit.iuh.edu.vn.lab02week02.services.OrderService;
import jakarta.ws.rs.Consumes;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

//@Path("/order")
public class OrderResourc {
    private OrderService orderService;


    public OrderResourc() {
        orderService = new OrderService();
    }

//    @POST
//    @Path("/insert-order-and-orderdetail")
//    @Consumes(MediaType.APPLICATION_JSON)
//    public Response insertOrderAndOrderDetail(Order order, OrderDetail orderDetail){
//        if(orderService.insertOrderandorderdetail(order,orderDetail) == true){
//            return Response.ok("ok").build();
//        }
//        return Response.status(Response.Status.BAD_REQUEST).build();
//    }
}
