(setInterval(function() {
  const subnav = document.getElementsByClassName("subnav");
  const btn = document.createElement('a');
  const userLink = document.querySelector('#user-links > li:nth-child(3) > details > ul > li:nth-child(3) > a');
  if (userLink) {
    const userName = userLink.href.split('/').pop();
    const endpoint = `review-requested/${userName}`;
    let currentLocation = window.location.href;
    if (currentLocation.indexOf(endpoint) === -1) {
      currentLocation = currentLocation + '/' + endpoint;
    }
    btn.setAttribute('id', 'custombtn');
    btn.setAttribute('href', currentLocation);
    btn.innerHTML = "Needs your review";
    btn.classList.add('btn', 'btn-purple', 'float-right', 'mx-3');
    const ifAlreadyExixts = document.getElementById('custombtn');
    if (!ifAlreadyExixts && currentLocation.indexOf('pulls') > -1) { subnav[0].appendChild(btn); }
  }
}, 1000))();