package fit.iuh.edu.vn.lab02week02.enums;

public enum ProductStatus {
    ACCTIVE(1),
    DEACCTIVE(0),
    TERMINATED(-1);
    private int status;

    ProductStatus(int status) {
        this.status = status;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }
}
