(() => {
    const form = document.querySelector('form');
  
    // form.onsubmit = e => {
    //   e.preventDefault();
    //   // Escape if the honeypot has been filled
    //   if (!!form.children.namedItem('honeypot').value) return;
  
      // Prepare data to send
      const data = {};
      const formElements = Array.from(form);
      formElements.map(input => (data[input.name] = input.value));
  
      // Construct an HTTP request
      var xhr = new XMLHttpRequest();
      xhr.open(form.method, form.action, true);
      xhr.setRequestHeader('Accept', 'application/json; charset=utf-8');
      xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
  
      // Send the collected data as JSON
      xhr.send(JSON.stringify(data));
  
      // Callback function
      xhr.onloadend = response => {
        if (response.target.status === 200) {
          // The form submission was successful
        } else {
          // The form submission failed
          // Static Site Mailer returns a JSON object with error messages on
          // JSON.parse(response.target.response).message
          // console.error(JSON.parse(response.target.response).message);
        }
      };
    };
  })();
  