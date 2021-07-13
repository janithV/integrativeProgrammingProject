package com.intprogram.sensorapi.models;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@NoArgsConstructor
@Table(name = "sensorreading")
public class SensorReading {

    @Id
    private int readingId;

    @Temporal(TemporalType.TIMESTAMP)
    @JsonFormat(pattern="yyyy-MM-dd'T'HH:mm:ss")
    private Date date;
    private double value;

    @ManyToOne(optional = false)
    @JoinColumn(name = "sensor_id",nullable = false)
    private Sensor sensor;

    public SensorReading(int readingId, Date date, double value,Sensor sensor) {
        this.readingId = readingId;
        this.date = date;
        this.value = value;
        this.sensor=sensor;
    }

    public SensorReading(Date date, double value, Sensor sensor) {
        this.date = date;
        this.value = value;
        this.sensor = sensor;
    }

    public Sensor getSensor() {
        return sensor;
    }

    public void setReadingId(int readingId) {
        this.readingId = readingId;
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

    public int getReadingId() {
        return readingId;
    }

    public Date getDate() {
        return date;
    }

    public double getValue() {
        return value;
    }

    @Override
    public String toString() {
        return "SensorReading{" +
                "readingId=" + readingId +
                ", date=" + date +
                ", value=" + value +
                '}';
    }
}
