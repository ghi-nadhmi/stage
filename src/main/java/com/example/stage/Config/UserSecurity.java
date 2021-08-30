package com.example.stage.Config;

import org.springframework.context.annotation.Configuration;

import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "*")
//@Configuration
public class UserSecurity  //extends WebSecurityConfigurerAdapter
{
/*@Override
      protected void configure(HttpSecurity http)throws Exception{
    final CorsConfigurer<HttpSecurity> cors;
    cors = http.cors();
    http.csrf().disable().authorizeRequests().antMatchers("/**").fullyAuthenticated().and().httpBasic();
}
@Override
     protected void configure(AuthenticationManagerBuilder auth)throws Exception{
     auth.inMemoryAuthentication().withUser("nadhmi").password("{noop}bacnadhmi2017").roles("USER");

}
*/


}
