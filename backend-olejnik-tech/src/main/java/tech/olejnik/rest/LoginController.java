package tech.olejnik.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import tech.olejnik.entity.User;
import tech.olejnik.service.UserService;

import java.util.logging.Logger;

@RestController
@RequestMapping(path = "/login")
@CrossOrigin(origins = "*")
public class LoginController {

    private final Logger logger = Logger.getLogger(this.getClass().getName());

    @Autowired UserService service;

    @RequestMapping(method = RequestMethod.GET, path = "/test")
    public String getResponse(){
        logger.info("getResponse: test of rest service (frontend - backend connection)");
        return "Hello from the back-end";
    }

    @RequestMapping(method = RequestMethod.GET, path = "/findById/{id}")
    public User getUser(@PathVariable("id") Long id){
        logger.info("getUser: byId");
        User user = service.findById(id);
        logger.info(user.toString());
        return service.findById(id);
    }
}
