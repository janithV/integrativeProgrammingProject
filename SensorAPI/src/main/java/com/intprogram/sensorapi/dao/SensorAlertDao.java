package com.intprogram.sensorapi.dao;

import com.intprogram.sensorapi.models.SensorAlert;
import org.springframework.data.repository.CrudRepository;

public interface SensorAlertDao extends CrudRepository<SensorAlert,Integer> {
}
