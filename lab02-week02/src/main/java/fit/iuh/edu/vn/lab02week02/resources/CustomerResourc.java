package fit.iuh.edu.vn.lab02week02.resources;

import fit.iuh.edu.vn.lab02week02.modal.Customer;
import fit.iuh.edu.vn.lab02week02.services.CustomerService;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

import java.util.List;
import java.util.Optional;

@Path("/customer")
public class CustomerResourc {
    private CustomerService service;

    public CustomerResourc() {
        service = new CustomerService();
    }


    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response getAllcus(){
        List<Customer> list = service.getAllCus();
        return Response.ok(list).build();
    }

    @GET
    @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getCusbyId(@PathParam("id") int id){
        Optional<Customer> op = service.findCusbyId(id);
        if(op.isPresent()){
            return Response.ok(op.get()).build();
        }
        return Response.status(Response.Status.BAD_REQUEST).build();
    }

    @PUT
    @Path("/update-cus/{id}")
    @Consumes(MediaType.APPLICATION_JSON)
    public Response updateCus(@PathParam("id") int id,Customer customer){
        Optional<Customer> op = service.findCusbyId(id);
        if(op.isPresent()){
            if(service.updateCus(customer) == true) return Response.ok("ok").build();
            else{
                return Response.ok("error").build();
            }
        }
        return Response.status(Response.Status.BAD_REQUEST).build();
    }

    @POST
    @Path("/create-cus")
    @Consumes(MediaType.APPLICATION_JSON)
//    @Produces(MediaType.APPLICATION_JSON)
    public Response createCus(Customer customer){
        if(service.insertCus(customer)==true){
            return Response.ok("ok").build();
        }
        return Response.status(Response.Status.BAD_REQUEST).build();
    }

}
