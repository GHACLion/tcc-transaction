package org.mengyun.tcctransaction.dashboard.security;

import org.mengyun.tcctransaction.dashboard.constants.DashboardConstant;
import org.mengyun.tcctransaction.dashboard.enums.ResponseCodeEnum;
import org.mengyun.tcctransaction.dashboard.exception.TransactionException;
import org.mengyun.tcctransaction.dashboard.model.SystemUser;
import org.mengyun.tcctransaction.dashboard.utils.JwtUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.util.HashMap;
import java.util.Map;

/**
 * @Author huabao.fang
 * @Date 2022/6/6 13:15
 **/
@Service
public class UserService implements UserDetailsService {

    private Logger logger = LoggerFactory.getLogger(UserService.class);

    @Value("${tcc.dashboard.login.userName:admin}")
    private String loginUserName;

    @Value("${tcc.dashboard.login.password:123456}")
    private String loginPassword;

    private Map<String, SystemUser> sysUserContainer = new HashMap<>();

    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private AuthenticationManager authenticationManager;

    @PostConstruct
    public void init() {
        //初始化用户列表
        sysUserContainer.put(loginUserName, new SystemUser(loginUserName, passwordEncoder.encode(loginPassword)));
    }

    public String login(String username, String password) {
        UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = new UsernamePasswordAuthenticationToken(username, password);
        Authentication authentication = authenticationManager.authenticate(usernamePasswordAuthenticationToken);
        SecurityContextHolder.getContext().setAuthentication(authentication);

        String token = JwtUtil.generateToken(username);
        return DashboardConstant.SECURITY_JWT_PREFIX + token;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        SystemUser systemUser = sysUserContainer.get(username);
        if (systemUser == null) {
            throw new TransactionException(ResponseCodeEnum.LOGIN_USER_NOT_EXST);
        }
        return systemUser;
    }
}
