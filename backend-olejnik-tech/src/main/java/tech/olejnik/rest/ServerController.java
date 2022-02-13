package tech.olejnik.rest;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.logging.Logger;

@RestController
@RequestMapping(path = "/server")
@CrossOrigin(origins = "*")
public class ServerController {

    private final Logger logger = Logger.getLogger(this.getClass().getName());

    @RequestMapping(method = RequestMethod.GET, path = "/status")
    public Boolean getResponse(){
        logger.info("200 - Server: Sent server status as online.");
        return true;
    }
}