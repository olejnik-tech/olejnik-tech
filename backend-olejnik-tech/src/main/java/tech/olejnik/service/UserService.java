package tech.olejnik.service;

import tech.olejnik.entity.User;
import tech.olejnik.exception.AccountBadPasswordException;
import tech.olejnik.exception.AccountNotFoundException;

public interface UserService {

    public User findById(Long id);
    public boolean login(User user) throws AccountNotFoundException, AccountBadPasswordException;

}
