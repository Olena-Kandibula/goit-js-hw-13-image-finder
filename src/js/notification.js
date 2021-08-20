import '@pnotify/core/dist/PNotify.css';
import '@pnotify/desktop/dist/PNotifyDesktop';
import '@pnotify/core/dist/BrightTheme.css';
import { error } from '@pnotify/core'; 

    
export default

function onAlertErrorInput() {  
 
    error({       
        text: 'Wrong name try again!',   
        delay: 1000,
        });
}

