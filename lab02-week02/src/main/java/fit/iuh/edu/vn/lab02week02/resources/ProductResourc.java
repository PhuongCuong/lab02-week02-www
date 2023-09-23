package fit.iuh.edu.vn.lab02week02.resources;

import fit.iuh.edu.vn.lab02week02.modal.Product;
import fit.iuh.edu.vn.lab02week02.services.ProductService;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.Response;

import java.util.List;

@Path("/products")
public class ProductResourc {
    private ProductService productService;

    public ProductResourc() {
        productService = new ProductService();
    }

    @GET
    @Produces("application/json")
    public Response getAllProduct(){
        List<Product> dsproduct = productService.getAllProduct();
        return Response.ok(dsproduct).build();
    }

}
