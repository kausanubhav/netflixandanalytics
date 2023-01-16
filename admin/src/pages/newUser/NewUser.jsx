import './newUser.css';
export default function NewUser() {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label> Username</label>
          <input type="text" placeholder="John" />
        </div>
        <div className="newUserItem">
          <label> Full Name</label>
          <input type="text" placeholder="John Snow" />
        </div>
        <div className="newUserItem">
          <label> Email</label>
          <input type="email" placeholder="snowflake@john.com" />
        </div>
        <div className="newUserItem">
          <label> Password</label>
          <input type="password" placeholder="must not contain spaces" />
        </div>
        <div className="newUserItem">
          <label> Phone</label>
          <input type="number" placeholder="+91 98..." />
        </div>
        <div className="newUserItem">
          <label> Address</label>
          <input type="text" placeholder="Snowflake street" />
        </div>
        <div className="newUserItem">
          <label> Gender</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">Female</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label for="Ooher">Other</label>
          </div>
        </div>

        <div className="newUserItem">
            <label >Active</label>
            <select  className="newUserSelect" name="active" id="active">
                <option value="yes">Yes</option>
                <option value="no">No</option>
            </select>
        </div>
        <button className="newUserButton">Create</button>
      </form>
    </div>
  );
}