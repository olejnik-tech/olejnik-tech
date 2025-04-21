package tech.olejnik.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import tech.olejnik.entity.User;
import tech.olejnik.exception.AccountBadPasswordException;
import tech.olejnik.exception.AccountNotFoundException;
import tech.olejnik.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService {

    @Autowired UserRepository repo;

    @Override public User findById(Long id) { return repo.findById(id); }

    @Override public boolean login(User user) throws AccountNotFoundException, AccountBadPasswordException {
        try {
            User userRepo = repo.findByEmail(user.getEmail());
            BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
            boolean verified = encoder.matches(user.getPassword(), userRepo.getPassword_hash());

            if (verified){
                return true;
            } else {
                throw new AccountBadPasswordException(user.getEmail());
            }
        } catch (NullPointerException e) {
            throw new AccountNotFoundException(user.getEmail());
        }

    }
}
