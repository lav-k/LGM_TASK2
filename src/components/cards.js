import React from "react";

export default function Cards(people) {
  return (
    <div>
      {
        people.isUser.map((person) => {
          return (
            <div className="card">
              <img src={person.avatar} alt=""></img>
              <div className="details">
                <h3>{`${person.first_name} ${person.last_name}`}</h3>
                <p>{`${person.email}`}</p>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}
