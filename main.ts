import {ApplicationSettings} from './application-settings.ts'

const main = ()=>{
    const settingsA = ApplicationSettings.getInstance();
    const settingsB = ApplicationSettings.getInstance();

    if(settingsA==settingsB){
        console.log('mi singleton funciona');
    }else{
        console.log('ups algo fallo');
    }
}

main();
