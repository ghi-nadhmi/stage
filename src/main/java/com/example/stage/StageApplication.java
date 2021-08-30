package com.example.stage;

import org.apache.el.stream.Stream;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.client.RestTemplate;
import com.example.stage.domain.utilisateur;

import java.util.List;

@CrossOrigin(origins = "*")
@SpringBootApplication
public class StageApplication {
   /* @GetMapping("/")
     public String login()
  {return "authenticated successfully";}*/


   // }
  @Bean
  public RestTemplate getRestTemplate()
  {
  	return new RestTemplate();
  }
	public static void main(String[] args)   {

        SpringApplication.run(StageApplication.class, args);
         
    }


}
