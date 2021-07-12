package com.intprogram.sensorapi.models;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@Entity
@NoArgsConstructor
@Table(name = "sensoralert")
public class SensorAlert {

    @Id
    private int alertId;

    @Temporal(TemporalType.TIMESTAMP)
    @JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss")
    private Date date;

    private double value;

    @ManyToOne(optional = false)
    @JoinColumn(name = "sensor_id", nullable = false)
    private Sensor sensor;

    private String alertMessage;

    public SensorAlert(Date date, double value,String alertMessage, Sensor sensor) {
        this.date = date;
        this.value = value;
        this.sensor = sensor;
        this.alertMessage = alertMessage;
    }

    public SensorAlert(int alertId, Date date, double value, String alertMessage , Sensor sensor) {
        this.alertId = alertId;
        this.date = date;
        this.value = value;
        this.sensor = sensor;
        this.alertMessage = alertMessage;
    }

    public void setAlertId(int alertId) {
        this.alertId = alertId;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public void setValue(double value) {
        this.value = value;
    }

    public void setSensor(Sensor sensor) {
        this.sensor = sensor;
    }

    public void setAlertMessage(String alertMessage) {
        this.alertMessage = alertMessage;
    }

    public int getAlertId() {
        return alertId;
    }

    public Date getDate() {
        return date;
    }

    public double getValue() {
        return value;
    }

    public Sensor getSensor() {
        return sensor;
    }

    public String getAlertMessage() {
        return alertMessage;
    }
}

