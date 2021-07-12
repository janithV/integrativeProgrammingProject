package com.intprogram.sensorapi.dao;

import com.intprogram.sensorapi.models.SensorReading;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface SensorReadingDao extends CrudRepository<SensorReading,Integer> {

    @Query(value = "SELECT * FROM sensorreading WHERE sensorreading.sensor_id=:id", nativeQuery = true)
    List<SensorReading> getReadingsById(@Param("id") int id);


    @Query(value ="SELECT sensorreading.value FROM sensorreading WHERE sensorreading.sensor_id=:id", nativeQuery = true )
    List<Double> getTemperaturesById(@Param("id") int id);

}
