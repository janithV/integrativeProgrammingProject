package com.intprogram.sensorapi.dao;

import com.intprogram.sensorapi.models.SensorAlert;
import com.intprogram.sensorapi.models.SensorReading;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface SensorAlertDao extends CrudRepository<SensorAlert,Integer> {

    @Query(value = "SELECT * FROM sensoralert WHERE sensoralert.sensor_id=:id", nativeQuery = true)
    List<SensorAlert> getAlertsById(@Param("id") int id);

}
