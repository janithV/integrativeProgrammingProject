package com.intprogram.sensorapi.services;

import com.intprogram.sensorapi.dao.SensorAlertDao;
import com.intprogram.sensorapi.models.SensorAlert;
import com.intprogram.sensorapi.models.SensorReading;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class SensorAlertService {

    @Autowired
    private SensorAlertDao dao;

    public void addReading(SensorAlert alert){

        dao.save(alert);
    }

    public List<SensorAlert> getAllAlerts(){
        List<SensorAlert> alerts = new ArrayList<SensorAlert>();
        dao.findAll().forEach(alert -> alerts.add(alert));
        return alerts;
    }

    public List<SensorAlert> getAllAlertsById(int id){

        return dao.getAlertsById(id);
    }
}
