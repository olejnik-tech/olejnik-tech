package tech.olejnik.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tech.olejnik.entity.User;
import tech.olejnik.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService {

    @Autowired UserRepository repo;

    @Override
    public User findById(Long id) { return repo.findById(id); }
}
