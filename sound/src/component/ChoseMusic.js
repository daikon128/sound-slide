const React = require("react");

function ChoseMusic() {
  function handleClick(event) {
    event.preventDefault();
    alert("a button clicked")
  }

  return (
    <button type="submit" onClick={handleClick}>click me</button>
  )
}