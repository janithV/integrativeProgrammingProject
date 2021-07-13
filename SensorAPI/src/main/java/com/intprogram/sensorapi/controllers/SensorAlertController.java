package com.intprogram.sensorapi.controllers;

import com.intprogram.sensorapi.dao.SensorAlertDao;
import com.intprogram.sensorapi.models.SensorAlert;
import com.intprogram.sensorapi.services.SensorAlertService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/sensoralert")
public class SensorAlertController {

    @Autowired
    private SensorAlertService service;

    @GetMapping("/getallalerts")
    private List<SensorAlert> getAllAlerts(){
        return service.getAllAlerts();
    }

    @GetMapping("/getallalerts/{id}")
    private List<SensorAlert> getAllAlertsById(@PathVariable int id){
        return service.getAllAlertsById(id);
    }


}
