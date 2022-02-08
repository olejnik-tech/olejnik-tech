package tech.olejnik.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import tech.olejnik.service.UserService;

import java.util.logging.Logger;

@RestController
@RequestMapping(path = "/server")
@CrossOrigin(origins = "*")
public class ServerController {

    private final Logger logger = Logger.getLogger(this.getClass().getName());

    @RequestMapping(method = RequestMethod.GET, path = "/status")
    public Boolean getResponse(){
        logger.info("Status: Sent server status as online.");
        return true;
    }
}
