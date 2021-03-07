export class ApplicationSettings{
    
    private dateFormat: string = "dd/MM/yyyy";
    
    private static instance : ApplicationSettings;

    private constructor(){
        console.log(`hit en el constructor`);
    }

    public static getInstance():ApplicationSettings {
        if(!ApplicationSettings.instance){
            ApplicationSettings.instance = new ApplicationSettings();
        }
        return ApplicationSettings.instance;
    }
}
