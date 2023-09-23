package fit.iuh.edu.vn.lab02week02.converters;

import fit.iuh.edu.vn.lab02week02.enums.EmployeeStatus;
import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;

import java.util.stream.Stream;

@Converter(autoApply = true)
public class EmployeeStatusConverter implements AttributeConverter<EmployeeStatus,Integer> {
    @Override
    public Integer convertToDatabaseColumn(EmployeeStatus employeeStatus) {
        if(employeeStatus == null)
        {
            return null;

        }
        return employeeStatus.getStatus();
    }

    @Override
    public EmployeeStatus convertToEntityAttribute(Integer integer) {
        if(integer == null){
            return null;

        }
        return Stream.of(EmployeeStatus.values())
                .filter(c->c.getStatus() == integer)
                .findFirst()
                .orElseThrow(IllegalAccessError::new);
    }
}
