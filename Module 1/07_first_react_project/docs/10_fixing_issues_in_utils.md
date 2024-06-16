1. 1 word problem even if we add spaces and also text reading time problem

- we use filter to fix this
  li>Minutes to Read: {0.008 \* text.split(" ").filter((element) => { return element !== 0 }).length}</li>

  also,
  the problem of enter the word is counted as one
  we need to split using space and \n also
  use regular expression
  

2. props support was removed so fixed that by directly passing the object in the brackets
   function Navbar({
   title = 'Default Title',
   about = 'Default About',
   colorTheme = 'light',
   mode = 'light',
   setWarmColor,
   setCoolColor,
   setHotColor,
   toggleMode
   }) {
   const textColor = mode === 'light' ? 'dark' : 'light';
   const backgroundColor = colorTheme === 'light' ? 'light' : 'dark';

   code

   }

destructuring is done directly

3.  changed the colors for proper modes
    const toggleMode = () => {
    let buttons = document.querySelectorAll('.btn');
    let textAreaCont = document.querySelector('.form-control');

    if (mode === 'light') {
    setMode('dark');

        // Changing body background color
        document.body.style.backgroundColor = 'black';
        showAlertOn('Dark Mode Enabled', 'success');
        document.title = 'TextUtils - Dark Mode';

        // Changing buttons colors
        buttons.forEach(button => {
          button.style.backgroundColor = '#301934';
          button.style.color = 'white';
        });

        // Changing text area colors
        if (textAreaCont) {
          textAreaCont.style.backgroundColor = '#36454F';
          textAreaCont.style.color = 'white';
        }

    } else {
    setMode('light');

        // Changing body background color
        document.body.style.backgroundColor = 'white';
        showAlertOn('Light Mode Enabled', 'success');
        document.title = 'TextUtils - Light Mode';

        // Changing buttons colors
        buttons.forEach(button => {
          button.style.backgroundColor = '';
          button.style.color = '';
        });

        // Changing text area colors
        if (textAreaCont) {
          textAreaCont.style.backgroundColor = 'white';
          textAreaCont.style.color = 'black';
        }

    }
    setColorTheme(mode === 'light' ? 'dark' : 'light');
    };

4.  the cls - cumulative layout shift should not happen on alert
    so we fix its height inside a div

     <div style={{ height: '50px' }}>

            {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert" >
                <strong>{capitalize(props.alert.type)}</strong> {props.alert.msg}
            </div >}
        </div>

5.  disabling all the buttons if there is nothing in the textbox
