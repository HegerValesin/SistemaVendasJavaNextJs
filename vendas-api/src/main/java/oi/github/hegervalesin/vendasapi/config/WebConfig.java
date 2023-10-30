package oi.github.hegervalesin.vendasapi.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.web.cors.CorsConfiguration;

import java.util.List;

@Configuration
public class WebConfig extends WebSecurityConfigurerAdapter {
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.csrf().disable();
        http.cors().configurationSource(request -> {
                    CorsConfiguration configuration = new CorsConfiguration();
                    configuration.setAllowCredentials(false);
                    configuration.setAllowedOrigins(List.of("http://hegervfp.local:3000"));
                    configuration.setAllowedMethods(List.of("POST", "GET", "PUT", "OPTIONS", "DELETE"));
                    configuration.setAllowedHeaders(List.of("origin", "content-type", "accept", "authorization", "cookie"));
                    return configuration;
                });
    }
}
