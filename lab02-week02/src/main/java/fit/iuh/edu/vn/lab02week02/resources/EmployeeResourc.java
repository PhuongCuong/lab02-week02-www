package fit.iuh.edu.vn.lab02week02.resources;

import fit.iuh.edu.vn.lab02week02.modal.Employee;
import fit.iuh.edu.vn.lab02week02.services.EmployeeService;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
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

    @PUT
    @Path("/delete/{id}")
    public Response deleteEmpbyId(@PathParam("id") int id){
        if(service.deleteEmp(id)){
            return Response.ok("ok").build();
        }
        return Response.status(Response.Status.BAD_REQUEST).build();
    }

    @GET
    @Produces("application/json")
    @Path("/getall-empl-by-status")
    public Response getAllemplbystatus(){
        List<Employee> list = service.getAllemplbystatus();
        return Response.ok(list).build();
    }

    @PUT
    @Path("/update-empl/{id}")
    @Consumes(MediaType.APPLICATION_JSON)
    public Response updateEmpl(@PathParam("id") int id,Employee employee){
        Optional<Employee> op = service.findEmpbyId(id);
        if(op.isPresent()){
            if(service.updateEmp(employee) == true) return Response.ok("ok").build();
            else{
                return Response.ok("error").build();
            }
        }
        return Response.status(Response.Status.BAD_REQUEST).build();
    }

    @POST
    @Path("/create-empl")
    @Consumes(MediaType.APPLICATION_JSON)
//    @Produces(MediaType.APPLICATION_JSON)
    public Response cretaeEmpl(Employee employee){
        if(service.insertEmp(employee)==true){
            return Response.ok("ok").build();
        }
        return Response.status(Response.Status.BAD_REQUEST).build();
    }



}
