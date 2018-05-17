export class URIS{
    public LOGIN:string;
    public REGISTER:string;
    public API_FUELSTATION:string;
    
    constructor(private host:string){
        this.LOGIN = host+"/users/login";
        this.REGISTER = host+"/users/register";
        this.API_FUELSTATION = host+"/api/fuelstation"
    }
}