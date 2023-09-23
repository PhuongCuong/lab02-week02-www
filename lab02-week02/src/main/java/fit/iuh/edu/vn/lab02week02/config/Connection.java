package fit.iuh.edu.vn.lab02week02.config;

import jakarta.persistence.EntityManager;
import jakarta.persistence.EntityTransaction;
import jakarta.persistence.Persistence;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;

@Path("/")
public class Connection {

    @GET
    @Produces("text/plain")
    public String getConnection(){
        String returns = "";
        try {
            EntityManager entityManager = Persistence.
                    createEntityManagerFactory("week02").createEntityManager();
            EntityTransaction entityTransaction = entityManager.getTransaction();
            entityTransaction.begin();
            entityTransaction.commit();
            returns = "OK";
        }catch (Exception ex){
            returns = "not ok";
        }
        return returns;
    }
}
