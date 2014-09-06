package com.jobsearch.ui;

import com.vaadin.ui.*;
import org.springframework.context.ApplicationContext;
public class LoginForm extends VerticalLayout {
  private TextField txtLogin = new TextField("Login: ");
  private PasswordField txtPassword = new 
  PasswordField("Password: ");
  private Button btnLogin = new Button("Login");
public LoginForm() {
    addComponent(txtLogin);
    addComponent(txtPassword);
    addComponent(btnLogin);
    LoginFormListener loginFormListener = 
    getLoginFormListener();
    btnLogin.addListener(loginFormListener);
  }
  public LoginFormListener getLoginFormListener() {
    AppUI ui = (AppUI) UI.getCurrent();
    ApplicationContext context = 
    ui.getApplicationContext();
    return context.getBean(LoginFormListener.class);
  }
  public TextField getTxtLogin() {
    return txtLogin;
  }
  public PasswordField getTxtPassword() {
    return txtPassword;
  }
}