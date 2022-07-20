function signup() {
    return (
        <div className="signup">
          <form method="POST">

            <label for="username">Username:</label>
            <input type="text" name="username" />

            <label for="passsword">Password:</label>
            <input type="password" name="password"/>

            <label for="passwordConfirmation">Password Confirmation:</label>
            <input type="password" name="passwordConfirmation"/>

            <label for="email">email:</label>
            <input type="email" name="email"/>

            <input type="submit" value="Create Account"/>

            </form>
        </div>
    );
}

export default signup;