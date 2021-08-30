package com.example.stage.Controller;

import org.apache.commons.codec.binary.Base64;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.nio.charset.Charset;
import java.nio.charset.StandardCharsets;
import java.util.Arrays;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/myapp")
public class projectController {
    public static final String USER_NAME = "ahmed.berred";
    public static final String PASSWORD = "Kira@1916";

  public static final String URl = "http://192.168.1.64/";
   //public static final String URl = "http://127.0.0.1:81/redmine/";
    public static final String KEY = "8910f5e4578274693d0b0a3286c3742b9a663355";
    public projectController(){}
    @Autowired
    private RestTemplate restTemplate;
    @GetMapping("/projects")

    public List<Object> getProjects(){
        String url1 = URl+"projects.json";
         HttpHeaders headers = getHeaders();
        restTemplate =new RestTemplate();

        HttpEntity<String> requestEntity = new HttpEntity<String>(headers);

        ResponseEntity<Object> responseEntity = restTemplate.exchange(url1,HttpMethod.GET,requestEntity,Object.class,1);
        //ResponseEntity<Object> responseEntity = restTemplate.getForEntity(url1,Object.class,1);

        Object objects = responseEntity.getBody();

      //  HttpEntity<String> requestEntity = new HttpEntity<String>(headers);
       // ResponseEntity<Object> responseEntity = restTemplate.getForEntity(url1,Object.class,1);

       // Object objects = responseEntity.getBody();



       return Arrays.asList(objects);
    }
    @GetMapping(path = "/projects/{id}")

    public Object getProjectbyID(@PathVariable Integer id){
        HttpHeaders headers = getHeaders();
        String url1 = URl+"projects/"+id.toString()+".json";
        restTemplate =new RestTemplate();
        HttpEntity<String> requestEntity = new HttpEntity<String>(headers);

        ResponseEntity<Object> responseEntity = restTemplate.exchange(url1,HttpMethod.GET,requestEntity,Object.class,1);
        //ResponseEntity<Object> responseEntity = restTemplate.getForEntity(url1,Object.class,1);

        Object objects = responseEntity.getBody();



        return Arrays.asList(objects);
    }
    @GetMapping(path = "/projects/{id}/memberships")

    public Object getMemberships(@PathVariable Integer id){


        String url1 = URl+"projects/"+id.toString()+"/memberships.json";
        HttpHeaders headers = getHeaders();
        restTemplate =new RestTemplate();
        HttpEntity<String> requestEntity = new HttpEntity<String>(headers);
        ResponseEntity<Object> responseEntity = restTemplate.exchange(url1,HttpMethod.GET,requestEntity,Object.class,1);
       // ResponseEntity<Object> responseEntity = restTemplate.getForEntity(url1,Object.class);

        Object objects = responseEntity.getBody();



        return Arrays.asList(objects);
    }
    @GetMapping(path = "/users/{id}")

    public Object getusers(@PathVariable Integer id){


        String url1 =URl+"users/"+id.toString()+".json";
       HttpHeaders headers = getHeaders();
        restTemplate =new RestTemplate();
        HttpEntity<String> requestEntity = new HttpEntity<String>(headers);
        //ResponseEntity<Object> responseEntity = restTemplate.getForEntity(url1,Object.class);
        ResponseEntity<Object> responseEntity = restTemplate.exchange(url1,HttpMethod.GET,requestEntity,Object.class,1);
        Object objects = responseEntity.getBody();



        return Arrays.asList(objects);
    }
    @GetMapping(path = "/users")

    public Object getusersbyID( ){


        String url1 =URl+"users.json";
        HttpHeaders headers = getHeaders();
        restTemplate =new RestTemplate();
        HttpEntity<String> requestEntity = new HttpEntity<String>(headers);
        //ResponseEntity<Object> responseEntity = restTemplate.getForEntity(url1,Object.class);
        ResponseEntity<Object> responseEntity = restTemplate.exchange(url1,HttpMethod.GET,requestEntity,Object.class,1);
        Object objects = responseEntity.getBody();



        return Arrays.asList(objects);
    }
    @GetMapping(path = "/issues")

    public Object getissues( ){


        String url1 =URl+"issues.json";
        HttpHeaders headers = getHeaders();
        restTemplate =new RestTemplate();
        HttpEntity<String> requestEntity = new HttpEntity<String>(headers);
        ResponseEntity<Object> responseEntity = restTemplate.exchange(url1,HttpMethod.GET,requestEntity,Object.class,1);
      // ResponseEntity<Object> responseEntity = restTemplate.getForEntity(url1,Object.class);
        Object objects = responseEntity.getBody();


        return Arrays.asList(objects);
    }
    @GetMapping(path = "/trackers")
    public Object gettrackers( ){


        String url1 =URl+"trackers.json";
        HttpHeaders headers = getHeaders();
        restTemplate =new RestTemplate();
        HttpEntity<String> requestEntity = new HttpEntity<String>(headers);
        ResponseEntity<Object> responseEntity = restTemplate.exchange(url1,HttpMethod.GET,requestEntity,Object.class,1);
        // ResponseEntity<Object> responseEntity = restTemplate.getForEntity(url1,Object.class);
        Object objects = responseEntity.getBody();


        return Arrays.asList(objects);
    }
    private HttpHeaders getHeaders(){

        HttpHeaders headers = new HttpHeaders();

        //
        // Authentication
        //
        String auth = USER_NAME + ":" + PASSWORD;
        byte[] encodedAuth = Base64.encodeBase64(auth.getBytes(Charset.forName("US-ASCII")));
        String authHeader = "Basic " + new String(encodedAuth);
        headers.set("Authorization", authHeader);
        //
        headers.setAccept(Arrays.asList(new MediaType[] { MediaType.APPLICATION_JSON }));
        // Request to return JSON format
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.set("my_other_key", "my_other_value");
        return headers;
    }
}
