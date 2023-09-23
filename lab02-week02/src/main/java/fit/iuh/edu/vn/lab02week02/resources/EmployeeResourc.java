package fit.iuh.edu.vn.lab02week02.resources;

import fit.iuh.edu.vn.lab02week02.modal.Employee;
import fit.iuh.edu.vn.lab02week02.services.EmployeeService;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.Response;

import java.util.List;
import java.util.Optional;

@Path("/employee")
public class EmployeeResourc {
    private EmployeeService service;

    public EmployeeResourc() {
        service = new EmployeeService();
    }

    @GET
    @Produces("application/json")
    public Response getAll() {
        //paging if possible
        List<Employee> lst = service.getAllEmp();
        return Response.ok(lst).build();
    }

    @GET
    @Produces("application/json")
    @Path("/{id}")
    public Response getEmpbyId(@PathParam("id") int eid){
        Optional<Employee> op = service.findEmpbyId(eid);
        if(op.isPresent()){
            return Response.ok(op.get()).build();
        }
        return Response.status(Response.Status.BAD_REQUEST).build();
    }

    @DELETE
    @Path("/delete/{id}")
    public Response deleteEmpbyId(@PathParam("id") int id){
        if(service.deleteEmp(id)){
            return Response.ok().build();
        }
        return Response.status(Response.Status.BAD_REQUEST).build();
    }



}
