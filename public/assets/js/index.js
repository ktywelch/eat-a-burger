// Make sure we wait to attach our handlers until the DOM is fully loaded.
document.addEventListener('DOMContentLoaded', (event) => {
 if (event) {
      console.info('DOM loaded');
    }
  
    // Create listeners and address if button to eat is clicked update to eaten
    const eatBurgerBtn = document.querySelectorAll('.bugerBtn');
  
    // Set up the event listener for the create button
    if (eatBurgerBtn) {
      eatBurgerBtn.forEach((button) => {
        button.addEventListener('click', (e) => {
          // Grabs the id of the element that goes by the name, "id"
          const id = e.target.getAttribute('burger-id');
        
          const newlyEaten = {
            devoured: true
          };
  
          fetch(`/api/burger/${id}`, {
            method: 'PUT',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
  
            // make sure to serialize the JSON body
            body: JSON.stringify(newlyEaten),
          }).then((response) => {
            // Check that the response is all good
            // Reload the page so the user can see the new quote
            if (response.ok) {
              //console.log(`changed sleep to: ${newSleep}`);
              location.reload('/');
            } else {
              alert('something went wrong!');
            }
          });
        });
      });
    }
  
    // CREATE
    const addBurgerBtn = document.querySelector('#addBurgerBtn');
    

    if (addBurgerBtn) {

      addBurgerBtn.addEventListener('click', (e) => {
        const addBurger = document.querySelector('#addBurger');
        
        e.preventDefault();

        const newBurger = {
          burger_name: addBurger.value.trim()
        };
     
  
        // Send POST request to create a new quote
        fetch('/api/burgers', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          // make sure to serialize the JSON body
          body: JSON.stringify(newBurger),
        }).then(() => {
          // Empty the form
          document.querySelector('#addBurgerForm').value = '';
  
          // Reload the page so the user can see the new quote
          console.log('Created a new burger!');
          location.reload();
        });
      });
    }
  
    
  });
  