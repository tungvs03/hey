export interface Auth {
  userName: String;
  password: String;
  repassword?: String;
}

export interface Account {
  userName: String;
  password: String;
  roles: String[];
  userId?: String;
}
