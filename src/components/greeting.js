const greeting = () => {
   const el = document.createElement('div');
     el.className = 'greeting';
     el.textContent = 'Welcome! Lets see how many matches you manage to do...'
     return el;
}
export default greeting;