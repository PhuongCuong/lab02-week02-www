# lab02-week02-www

<p>
  Back-end
Một công ty cần lập một API cho trang web bán hàng của họ. Thông tin cần lưu trữ bao gồm:
- employee (emp_id, full_name, dob, email, phone, address, status)
- product (product_id, name, description, unit, manufacturer_name, status)
- customer (cust_id, cust_name, email, phone, address)
- product_image (product_id, image_id, path, alternative)
- orders (order_id, order_date, emp_id, cust_id)
- order_detail (order_id, product_id, quantity, price, note)
- product_price (product_id, price_date_time, price, note)
Diễn giải:
- Một product có nhiều image, một image thuộc về một product. Status chỉ trạng thái kinh
doanh của sản phẩm: 1- đang kinh doanh, 0 - tạm ngưng, -1 - không kinh doanh nữa.
- Employee có status: 1- đang làm việc, 0 - tạm nghỉ, -1 – nghỉ việc.
- Một order có nhiều order_detail, một order_detail thuộc về một order.
- Một order thuộc về một employee, một employeecó nhiều order.
- Một customer có nhiều order, một order chỉ thuộc một customer.
- Một product_detail có một giá (price) được lưu trong product_price. Một giá được xác định
bằng product_id và price_date_time. Tại thời điểm lập order, giá được lấy với
price_date_time gần nhất.
Lập REST API cho các thao tác cần thiết của yêu cầu này (dùng JakartaEE):
- Các thao tác CRUD cho các đối tượng, lập order. (dùng JPA).
- Thống kê order theo ngày, theo khoảng thời gian.
- Thống kê order theo nhân viên bán hàng trong 1 khoảng thời gian.
- …
Font-end
- Tạo các trang web cho việc hiển thị sản phẩm, chọn vào giỏ hàng và thanh toán (giả lập
việc thanh toán qua thẻ nếu có thể)
- Vẽ biểu đồ giá theo thời gian
- *** và các chức năng khác tự nghĩ ra.
</p>


<h3>Sơ đồ quan hệ</h3>

![image](https://github.com/PhuongCuong/lab02-week02-www/assets/124875164/c6881952-06bf-438d-a80c-d45018685203)

<h3>Login</h3>

![image](https://github.com/PhuongCuong/lab02-week02-www/assets/124875164/f6cd7bbb-6541-4775-b11f-c407b49b86eb)

<h3>Page Home</h3>

![image](https://github.com/PhuongCuong/lab02-week02-www/assets/124875164/dd90c297-a3f6-40f9-b6a4-04aa305cf62c)

<h3>Add sản phẩm vào giỏ</h3>

![image](https://github.com/PhuongCuong/lab02-week02-www/assets/124875164/d9ec291d-60b9-4796-9400-1a8fa84e1c25)

<h3>Giỏ hàng</h3>

![image](https://github.com/PhuongCuong/lab02-week02-www/assets/124875164/d3363442-f459-4d73-9a05-215ebc301d24)

<h3>Employee Manager</h3>

![image](https://github.com/PhuongCuong/lab02-week02-www/assets/124875164/6d8ce1dc-08cc-4696-9ef0-30e43864230f)

<h3>Update Employee</h3>

![image](https://github.com/PhuongCuong/lab02-week02-www/assets/124875164/f88e876d-d7de-4e1c-a434-a16d48be4e4b)

<h3>Create Employee</h3>

![image](https://github.com/PhuongCuong/lab02-week02-www/assets/124875164/2b594b26-1bdb-4728-920c-2953f83f0b4e)

<h3>Customer Manager</h3>

![image](https://github.com/PhuongCuong/lab02-week02-www/assets/124875164/c0b48186-98be-4fee-abdb-bd008898293b)

<h3>Add customer</h3>

![image](https://github.com/PhuongCuong/lab02-week02-www/assets/124875164/378d0198-fbea-4dcf-bcdc-412b35ea1a54)

![image](https://github.com/PhuongCuong/lab02-week02-www/assets/124875164/a0a2ee05-0f73-4d8b-a1ee-7bd238f4062d)

<h3>Update customer</h3>

![image](https://github.com/PhuongCuong/lab02-week02-www/assets/124875164/d7339dce-c212-4556-9610-f2eeacaa3a61)

<h3>Manager Product</h3>

![image](https://github.com/PhuongCuong/lab02-week02-www/assets/124875164/7fa76b98-f6da-4901-8046-3da6f0e2ce77)

![image](https://github.com/PhuongCuong/lab02-week02-www/assets/124875164/0965927e-a394-4fd9-b81a-ae00f2ab8687)

<h3>Update Product</h3>

![image](https://github.com/PhuongCuong/lab02-week02-www/assets/124875164/e469ae4e-b95b-46d8-aa98-e65a8490aee2)

![image](https://github.com/PhuongCuong/lab02-week02-www/assets/124875164/f0755aac-b31e-4651-9588-108562557ab6)

<h3>Delete Product</h3>

![image](https://github.com/PhuongCuong/lab02-week02-www/assets/124875164/bbd27e82-f895-48e5-a456-295c72cf6f2b)

<h3>Add Product</h3>

![image](https://github.com/PhuongCuong/lab02-week02-www/assets/124875164/2b334356-41a1-4be9-8e03-26d194ab66f3)

<h3>Manager Price Product</h3>

![image](https://github.com/PhuongCuong/lab02-week02-www/assets/124875164/1ad90e89-10c5-4c42-9dec-2245e3632aaf)

<h3>Update Price Product</h3>

![image](https://github.com/PhuongCuong/lab02-week02-www/assets/124875164/aadf841d-5f19-4c32-a15e-023ca7bead4e)

![image](https://github.com/PhuongCuong/lab02-week02-www/assets/124875164/56725faf-40b9-46a7-94c7-50b8df45972c)

![image](https://github.com/PhuongCuong/lab02-week02-www/assets/124875164/7ccdda09-8a09-4f86-a613-60739c53b093)

![image](https://github.com/PhuongCuong/lab02-week02-www/assets/124875164/388cd374-8da1-4944-86bc-ee535b7a1ce3)





















