(() => {

    
    function getMovieWhitaId( Id: string ) {
        console.log({ Id });
    }

    
    function getMovieCastById( id: string ) {
        console.log({ id });
    }

 
    function getXctorBioByiD( id: string ) {
        console.log({ id });
    }
    
  
interface Movie {
    cast: string[];
    description: string;
    rating: number;
    title: string;
  
    }

    function createMovie ({ tittle, description, rating, cast }: Movie) {
    console.log({ tittle, description, rating, cast });
         
        }
         
         function createActor ( fullName: string, birthdate: Date ): Boolean {
            if( fullName ==='Clara')return false;
         
         
         
         
         
         
         ('Crear actor');



         if ( fullName === 'fernando' ) return false;

         console.log('Crear actor');
         return true;        
 


};





