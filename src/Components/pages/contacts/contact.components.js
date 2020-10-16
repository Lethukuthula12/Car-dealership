import React from "react";
import "./contacts.styles.scss";



const Contacts = () => (
  <div className="contact">
    <h1>hugeX Super Cars| Get In touch</h1>

    <div className="content">
      <div className="colomn1">
        <img
          src="https://images.unsplash.com/photo-1573497491765-dccce02b29df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          alt="ceo"
        />
      </div>
      <div className="colomn2">
        <h2>Elihle Zikhali(CEO)</h2>
        <p>
          Elihle Nkosazana Zikhali is the co-founder and CEO of superCars, a
          search an online super car dealership. Prior to superCars, Elihle was
          CEO of Grand Central Communications, an internet service for
          business-to-business integration. Before joining Grand Central, Elihle
          was a senior vice president at Excite@Home where he oversaw the Excite
          Search and Community business units and managed Network Programming.
          Elihle holds an MBA from Stanford Graduate School of Business and a BS
          in Electrical Engineering from Virginia Tech.
        </p>
      </div>
    </div>
    <div className="content2">
      <div className="col-1">
        <a href="https://www.facebook.com/Lethuk2?_rdc=1&_rdr">Facebook</a>
      </div>
      <div className="col-2">
        <a className="colr" href="https://twitter.com/lethufl">
          twitter
        </a>
      </div>
      <div className="col-3">call: +27711829544</div>
    </div>
  </div>
);

export default Contacts;