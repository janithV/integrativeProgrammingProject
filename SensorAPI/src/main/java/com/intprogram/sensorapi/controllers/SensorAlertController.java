package com.intprogram.sensorapi.controllers;

import com.intprogram.sensorapi.dao.SensorAlertDao;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/sensoralert")
public class SensorAlertController {

    private SensorAlertDao dao;
}
