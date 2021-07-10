package com.intprogram.sensorapi.dao;

import com.intprogram.sensorapi.models.SensorReading;
import org.springframework.data.repository.CrudRepository;

public interface SensorReadingDao extends CrudRepository<SensorReading,Integer> {
}
