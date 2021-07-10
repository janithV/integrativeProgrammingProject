package com.intprogram.sensorapi.models;

import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Table;
import java.util.Date;

@Entity
@NoArgsConstructor
@Table(name = "sensoralert")
public class SensorAlert extends SensorReading{

    private String alertMessage;

    public SensorAlert(int readingId, Date date, double value, String alertMessage,Sensor sensor) {
        super(readingId, date, value,sensor);
        this.alertMessage = alertMessage;
    }

    public String getAlertMessage() {
        return alertMessage;
    }
}
