package fit.iuh.edu.vn.lab02week02.converters;

import fit.iuh.edu.vn.lab02week02.enums.ProductStatus;
import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;

import java.util.stream.Stream;

@Converter(autoApply = true)
public class ProductStatusConverter implements AttributeConverter<ProductStatus,Integer> {
    @Override
    public Integer convertToDatabaseColumn(ProductStatus productStatus) {
        if(productStatus == null){
            return null;

        }
        return productStatus.getStatus();
    }

    @Override
    public ProductStatus convertToEntityAttribute(Integer integer) {
        if(integer == null){
            return null;

        }
        return Stream.of(ProductStatus.values())
                .filter(c-> c.getStatus() == integer)
                .findFirst()
                .orElseThrow(IllegalAccessError::new);
    }
}
