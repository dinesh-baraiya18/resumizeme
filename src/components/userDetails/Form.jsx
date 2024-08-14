const Form = () => {
  return (
    <form className="personal-info-form">
      <div class="form-group">
        <input
          id="first_name"
          class="form-control"
          type="text"
          placeholder="petter"
          required
        />
        <label for="first_name">First Name</label>
      </div>
      <div class="form-group">
        <input
          id="last_name"
          class="form-control"
          type="text"
          placeholder="Cetera"
          required
        />
        <label for="last_name">Last Name</label>
      </div>

      <div class="form-group">
        <input
          id="city"
          class="form-control"
          type="text"
          placeholder="London"
          required
        />
        <label for="city">city</label>
      </div>
      <div class="form-group">
        <input
          id="postal_code"
          class="form-control"
          type="text"
          placeholder="E2 4XF"
          required
        />
        <label for="postal_code">postal code</label>
      </div>
      <div class="form-group address">
        <input
          id="address"
          class="form-control"
          type="text"
          placeholder="123 Example"
          required
        />
        <label for="address">address</label>
      </div>
      <div class="form-group">
        <input
          id="email"
          class="form-control"
          type="text"
          placeholder="petter@gmail.com"
          required
        />
        <label for="email">email</label>
      </div>

      <div class="form-group">
        <input
          id="phone"
          class="form-control"
          type="text"
          placeholder="+442223334444"
          required
        />
        <label for="phone">phone</label>
      </div>

      <div class="form-group">
        <input
          id="password"
          class="form-control"
          type="password"
          placeholder="Password"
          required
        />
        <label for="password">password</label>
      </div>
      <div className="submit-wrapper">
        <p>
          Use this email to log in to your{" "}
          <a href="https://resumedone.io">resumedone.io</a> account and receive
          notifications.
        </p>
        <button type="submit" className="btn">
          Save
        </button>
      </div>
    </form>
  );
};

export default Form;
