package fit.iuh.edu.vn.lab02week02.resources;

import fit.iuh.edu.vn.lab02week02.modal.Employee;
import fit.iuh.edu.vn.lab02week02.modal.Product;
import fit.iuh.edu.vn.lab02week02.modal.ProductPrice;
import fit.iuh.edu.vn.lab02week02.services.ProductService;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

import java.util.List;
import java.util.Optional;

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

    @GET
    @Path("/by-status")
    @Produces(MediaType.APPLICATION_JSON)
    public Response dsproductbystatus(){
        List<Product> dspProducts = productService.getAllproductbystatus();
        System.out.println("check tyepyof"+dspProducts);
        return Response.ok(dspProducts).build();
    }

    @PUT
    @Path("/delete/{id}")
    public Response deleteproductbyId(@PathParam("id") int id){
        if(productService.deleteProduct(id)){
            return Response.ok("ok").build();
        }
        return Response.status(Response.Status.BAD_REQUEST).build();
    }

    @POST
    @Path("/create-productprice")
    @Consumes(MediaType.APPLICATION_JSON)
//    @Produces(MediaType.APPLICATION_JSON)
    public Response createProductPrice(ProductPrice price){
        if(productService.insertProductPrice(price)==true){
            List<Product> dspProducts = productService.getAllproductbystatus();
            return Response.ok("ok").build();
        }
        return Response.status(Response.Status.BAD_REQUEST).build();
    }

    @PUT
    @Path("/update-product/{id}")
    @Consumes(MediaType.APPLICATION_JSON)
    public Response updateProduct(@PathParam("id") int id,Product product){
        Optional<Product> op = productService.findproductbyId(id);
        if(op.isPresent()){
            if(productService.updateProduct(product) == true) return Response.ok("ok").build();
            else{
                return Response.ok("error").build();
            }
        }
        return Response.status(Response.Status.BAD_REQUEST).build();
    }

//    @POST
//    @Path("/update-product-price")
//    public Response updateProductprice(Product product, ProductPrice price){
//        Optional<Product> op = productService.findproductbyId(product.getId());
//        if(op.isPresent()){
//            if(productService.updateProductprice(product,price) == true) return Response.ok("ok").build();
//            else{
//                return Response.ok("error").build();
//            }
//        }
//        return Response.status(Response.Status.BAD_REQUEST).build();
//    }

}
