package com.example.demo.models;

import org.springframework.http.HttpStatus;

import jakarta.json.Json;
import jakarta.json.JsonObject;

public class Response {

    private int code;
    private String message = "";

    public int getCode() {
        return code;
    }
    public void setCode(int code) {
        this.code = code;
    }
    public String getMessage() {
        return message;
    }
    public void setMessage(String string) {
        this.message = string;
    }
    
    public JsonObject toJson() {
        return Json.createObjectBuilder()
            .add("message", message)
            .add("code", code)
            .build();
    }
}
