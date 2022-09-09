package com.example.demo.configurations;

import java.util.logging.Logger;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;


@Configuration
public class AppConfig {

    Logger logger = Logger.getLogger(AppConfig.class.getName());

    @Value("${cors.pathMapping}")
    String pathMapping;

    @Value("${cors.origins}")
    String origins;
    
    @Bean
    public WebMvcConfigurer WebMvcConfigurer() {
logger.info("CORS: pathMapping=%s,origins=%s".formatted(pathMapping, origins));
        
        return new CORSConfiguration(pathMapping, origins);
    }
}
