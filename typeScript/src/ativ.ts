class airplane{
    private n: string;
    private model: number;
    public flitSeries: number;
    public Component: string;

    
   
   
    
    constructor (n: string, model: number,
        flitSeries: number, Component: string){  
        this.n = n;        
        this.model = model;  
        this.flitSeries = flitSeries;
        this.Component = Component;
                   
    }
    logDetails(): void{
        
        console.log(`The Airplane model is: ${this.n} - ${this.model} \n
        Number Jet is: ${this.flitSeries} \n
        Motors: F700 - ${this.Component}`);
    }
    

}

const i = new airplane ('Boeng', 737, 77402304088, 'General Motors' )
 
