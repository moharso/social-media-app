import React from "react";

async function handleSubmit(e: any) {
  e.preventDefault();

  //  if (!cityName || !date) return;

  //  const newCity = {
  //    cityName,
  //    country,
  //    emoji,
  //    date,
  //    notes,
  //    position: {lat, lng},
}

//  await createCity(newCity);
//  navigate("/app/cities");

const AccountView = () => {
  return (
    <div>
      <h3>ADD ACCOUNT</h3>
      <form className="nav__search" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fullName">Username</label>
          <input id="fullName" type="text" required></input>
        </div>
        <fieldset>
          <legend>Choose your platform:</legend>
          <div>
            <input
              type="radio"
              id="facebook"
              name="platform"
              value="facebook"
            />
            <label htmlFor="facebook">facebook</label>
          </div>
          <div>
            <input
              type="radio"
              //  type="checkbox"
              id="instagram"
              name="platform"
              value="instagram"
            />
            <label htmlFor="instagram">instagram</label>
          </div>
          <div>
            <input
              type="radio"
              //  type="checkbox"
              id="twitter"
              name="platform"
              value="twitter"
            />
            <label htmlFor="twitter">twitter</label>
          </div>
          <div>
            <input
              type="radio"
              //  type="checkbox"
              id="pinterest"
              name="platform"
              value="pinterest"
            />
            <label htmlFor="pinterest">pinterest</label>
          </div>
          <div>
            <input
              type="radio"
              //  type="checkbox"
              id="linkedin"
              name="platform"
              value="linkedin"
            />
            <label htmlFor="linkedin">linkedin</label>
          </div>
        </fieldset>

        {/* <div>
          <label htmlFor="platform">Platform</label>
          <input type="radio" value="html" id="platform" name="topic" />
        </div> */}
        <div>
          <label htmlFor="photo">Account image</label>
          {/* "imgae/* menas we accept all forms of images" */}
          <input id="photo" type="file" accept="image/*" name="photo"></input>
        </div>
        <div>
          <button type="reset">Cancel</button>
          <button>Add account</button>
        </div>
      </form>
      <h3>DELETE ACCOUNT</h3>
      <button>BUTTON</button>
    </div>
  );
};

export default AccountView;
