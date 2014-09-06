package com.jobsearch.ui;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;

import com.jobsearch.auth.AuthManager;
import com.vaadin.navigator.Navigator;
import com.vaadin.ui.Button;
import com.vaadin.ui.Notification;
import com.vaadin.ui.UI;
@Component
public class LoginFormListener implements 
  Button.ClickListener {
@Autowired
  private AuthManager authManager;
  @Override
  public void buttonClick(Button.ClickEvent event) {
    try {
      Button source = event.getButton();
      LoginForm parent = (LoginForm) source.getParent();
      String username = parent.getTxtLogin().getValue().toString();
      String password = parent.getTxtPassword().getValue().toString();
      UsernamePasswordAuthenticationToken request = new 
      UsernamePasswordAuthenticationToken(username, password);
      Authentication result = authManager.authenticate(request);
      SecurityContextHolder.getContext().
      setAuthentication(result);
      AppUI current = (AppUI) UI.getCurrent();
      Navigator navigator = current.getNavigator();
      navigator.navigateTo("user");
    } catch (AuthenticationException e) {
      Notification.show("Authentication failed: " +   e.getMessage());
    }
  }
}