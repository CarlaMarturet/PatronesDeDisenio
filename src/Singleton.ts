export class Singleton {
    //propiedad privada en donde se alamcena la unica instancia
      private static instancia: Singleton;
      //constructor privado para que por fuera de el no se pueda crear multiples instancias
      private constructor() {
         
      }
      
  
      //metodo que devuelve siempre la misma instancia si ya existe
      //o crea una si no existe 
      public static getInstancia(): Singleton {
          if (!Singleton.instancia) {
          Singleton.instancia = new Singleton();
          }
          return Singleton.instancia;
      }
  
      public static resetInstance(): void {
          Singleton.instancia = null as any;
        }
  

      //metodo de ejemplo para demostrar que se incumple con el principio de R.Unica
      
      public sumar(a: number, b: number): number {
        return a + b;
      }




  
     
  }