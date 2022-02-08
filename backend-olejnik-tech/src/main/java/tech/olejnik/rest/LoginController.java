package tech.olejnik.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tech.olejnik.entity.User;
import tech.olejnik.exception.AccountBadPasswordException;
import tech.olejnik.exception.AccountNotFoundException;
import tech.olejnik.service.UserService;

import java.util.logging.Logger;

@RestController
@RequestMapping(path = "/login")
@CrossOrigin(origins = {"http://localhost:4200","http://localhost:8080"})
public class LoginController {

    private final Logger logger = Logger.getLogger(this.getClass().getName());

    @Autowired UserService service;

    @GetMapping(path = "/findById/{id}")
    public User getUser(@PathVariable("id") Long id){
        User user = service.findById(id);
        logger.info("getUser: " + user.toString());
        return service.findById(id);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Boolean> login(@RequestBody User user) throws AccountNotFoundException {
        try{
            Boolean result = service.login(user);
            logger.info("200 - Login: Successfully logged with email: \""+ user.getEmail() + "\".");
            return new ResponseEntity<>(result, HttpStatus.OK);

        } catch (AccountNotFoundException e) {
            logger.info(e.getMessage());
            return new ResponseEntity(e.getMessage(), HttpStatus.NOT_FOUND);
        } catch (AccountBadPasswordException e) {
            logger.info(e.getMessage());
            return new ResponseEntity(e.getMessage(), HttpStatus.UNAUTHORIZED);
        }
    }
}
