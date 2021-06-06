import React from "react";

function Footer() {
  var d = new Date();
  var currYear = d.getFullYear();
  return (
    <footer>
      <p>Copyright@{currYear}</p>
    </footer>
  );
}
export default Footer;
