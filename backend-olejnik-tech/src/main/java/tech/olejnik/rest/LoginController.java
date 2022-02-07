package tech.olejnik.rest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/test")
public class LoginController {

    @RequestMapping(method = RequestMethod.GET, path = "/test")
    public String getResponse(){
        return "Hello from the back-end";
    }

}
